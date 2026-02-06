import fs from "fs";
import path from "path";
import sharp from "sharp";

/** Directories under public/ to convert (JPG/PNG → WebP). */
const IMAGE_DIRS = ["desktop-view", "mobile-view"];

/** Max concurrent conversions. */
const CONCURRENCY = 8;

const VALID_INPUT_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function convertImageToWebp(inputPath: string, quality: number = 80): Promise<boolean> {
  const ext = path.extname(inputPath);
  const baseName = path.basename(inputPath, ext);
  const outputPath = path.join(path.dirname(inputPath), `${baseName}.webp`);

  if (fs.existsSync(outputPath)) {
    return false; // skip if already converted
  }

  const image = sharp(inputPath, { failOn: "none" });
  await image.webp({ quality }).toFile(outputPath);
  return true;
}

async function runInBatches<T, R>(items: T[], concurrency: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = [];
  let index = 0;
  async function worker(): Promise<void> {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

async function main(): Promise<void> {
  const publicDir = path.resolve(process.cwd(), "public");
  let totalConverted = 0;
  let totalTargets = 0;

  for (const dirName of IMAGE_DIRS) {
    const imagesDir = path.join(publicDir, dirName);
    if (!fs.existsSync(imagesDir)) {
      console.warn(`Directory not found: ${imagesDir}, skipping.`);
      continue;
    }

    const entries = fs.readdirSync(imagesDir);
    const targets = entries
      .filter((name) => VALID_INPUT_EXTENSIONS.has(path.extname(name)))
      .map((name) => path.join(imagesDir, name));

    if (targets.length === 0) {
      console.log(`No JPG/PNG images in ${dirName}.`);
      continue;
    }

    console.log(`Converting ${targets.length} images in ${dirName} to WebP...`);
    const outcomes = await runInBatches(targets, CONCURRENCY, async (file) => {
      try {
        const converted = await convertImageToWebp(file, 82);
        return { converted, error: null };
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
        return { converted: false, error: err };
      }
    });
    totalConverted += outcomes.filter((o) => o.converted).length;
    totalTargets += targets.length;
  }

  console.log(`Done. Converted ${totalConverted}/${totalTargets} images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


