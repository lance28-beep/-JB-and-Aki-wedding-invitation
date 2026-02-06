"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Simple top bar with only Back link */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#EFCA93]/85 border-b border-[#9F8650]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#800A06] font-semibold px-4 py-2 rounded-full border border-[#9F8650]/40 bg-white/40 hover:bg-white/60 hover:border-[#9F8650]/60 transition-all duration-200"
          >
            ← Back to main page
          </Link>
          <div className="text-xs text-[#800A06]/70 font-[family-name:var(--font-crimson)] tracking-[0.12em] uppercase">
            Gallery
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}






