import fs from "fs/promises"
import path from "path"
import MasonryGallery from "@/components/masonry-gallery"

// Generate on each request so newly added images in public/ appear without a rebuild
export const dynamic = "force-dynamic"

async function getImagesFrom(dir: string) {
  const abs = path.join(process.cwd(), "public", dir)
  try {
    const entries = await fs.readdir(abs, { withFileTypes: true })
    return entries
      .filter((e) => e.isFile())
      .map((e) => `/${dir}/${e.name}`)
      .filter((p) => p.match(/\.(jpe?g|png|webp|gif)$/i))
      .sort((a, b) => a.localeCompare(b))
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const [desktop, mobile] = await Promise.all([
    getImagesFrom("desktop-view"),
    getImagesFrom("mobile-view"),
  ])
  const images = [
    ...desktop.map((src) => ({ src, category: "desktop" as const })),
    ...mobile.map((src) => ({ src, category: "mobile" as const })),
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Warm site background to match main sections */}
      <div className="absolute inset-0 bg-[#EFCA93]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-white/10" />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-crimson)] font-normal text-[#800A06] mb-4 uppercase tracking-[0.12em] sm:tracking-[0.15em] elegant-text-shadow">
            Gallery
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-[#800A06]/80 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4">
            A collection from our favorite moments
          </p>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-[#800A06]/80 font-[family-name:var(--font-crimson)]">
            <p>
              No images found. Add files to{" "}
              <code className="px-2 py-1 bg-white/40 rounded border border-[#9F8650]/30 text-[#800A06]/90">
                public/desktop-view
              </code>{" "}
              or{" "}
              <code className="px-2 py-1 bg-white/40 rounded border border-[#9F8650]/30 text-[#800A06]/90">
                public/mobile-view
              </code>
              .
            </p>
          </div>
        ) : (
          <MasonryGallery images={images} />
        )}
      </section>
    </main>
  )
}


