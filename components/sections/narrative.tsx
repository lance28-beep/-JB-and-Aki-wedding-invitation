"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Stack from "@/components/stack"
import { motion } from "motion/react"

export function Narrative() {
  const paragraphs = siteConfig.narrative.split("\n\n").filter(Boolean)

  return (
    <Section id="narrative" className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background aligned with Details and other sections */}
      <div className="absolute inset-0 bg-[#EFCA93] backdrop-blur-sm pointer-events-none" />

      {/* Header - same style as Event Details */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-[#800A06] mb-6 sm:mb-8 uppercase tracking-[0.12em] sm:tracking-[0.15em] elegant-text-shadow">
          Love Story
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo stack - centered */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 280, height: 320 }}
              cardsData={[
                { id: 1, img: "/desktop-view/couple (18).webp" },
                { id: 2, img: "/desktop-view/couple (25).webp" },
                { id: 3, img: "/desktop-view/couple (36).webp" },
                { id: 4, img: "/desktop-view/couple (19).webp" },
              ]}
              animationConfig={{ stiffness: 260, damping: 20 }}
            />
            <p className="text-center text-sm md:text-base text-[#800A06]/70 mt-6 font-[family-name:var(--font-crimson)] font-light tracking-wide">
              Drag to explore our moments
            </p>
          </div>
        </motion.div>

        {/* Story text - same font and color as rest of site */}
        <motion.div
          className="max-w-3xl mx-auto space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {index === 0 ? (
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-[#800A06] font-light leading-relaxed text-pretty">
                  <span className="float-left text-4xl md:text-5xl font-[family-name:var(--font-crimson)] font-semibold text-[#800A06] leading-none mr-2 mt-1">
                    {paragraph.charAt(0)}
                  </span>
                  {paragraph.slice(1)}
                </p>
              ) : (
                <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-[#800A06]/90 font-light leading-relaxed text-pretty">
                  {paragraph}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Divider and CTA - aligned with site buttons */}
        <motion.div
          className="mt-14 md:mt-20 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#9F8650]/60 to-transparent" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#9F8650]/60 to-transparent" />
          </div>
          <motion.a
            href="#guest-list"
            className="px-8 sm:px-12 py-4 bg-[#800A06] text-white font-[family-name:var(--font-crimson)] font-semibold text-lg rounded-full border border-[#9F8650]/40 shadow-md hover:bg-[#6A1F08] hover:border-[#9F8650]/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Celebration
          </motion.a>
        </motion.div>
      </div>
    </Section>
  )
}
