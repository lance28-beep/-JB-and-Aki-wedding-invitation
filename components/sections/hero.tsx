"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { Heart } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center min-h-screen py-16 sm:py-20">
        {/* Elegant Card Container */}
        <div className={`w-full max-w-4xl elegant-card rounded-lg p-8 sm:p-12 md:p-16 lg:p-20 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-1000 ease-out premium-shadow ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Monogram - Center */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/monogram/image.png"
                alt="Jay-R & Jen Monogram"
                fill
                className="object-contain"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(8%) sepia(94%) saturate(1352%) hue-rotate(120deg) brightness(95%) contrast(85%)'
                }}
                priority
              />
            </div>
          </div>

          {/* Decorative line with earth tones */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>

          {/* Opening Text */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] font-normal text-[#0A3629] tracking-wide px-4">
            Together with our families, we,
          </p>

          {/* Groom Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-crimson)] font-normal text-[#0A3629] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow">
            JAY-R VALENZUELA
          </h1>

          {/* And - Script Style with warm gold accent */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-ephesis)] text-[#9F8650] my-4 sm:my-6 md:my-8">
            and
          </p>

          {/* Bride Name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-crimson)] font-normal text-[#0A3629] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-tight px-2 elegant-text-shadow">
            JENNIFER BARTOLOME
          </h1>

          {/* Decorative line with earth tones */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>

          {/* Request Text */}
          <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-normal text-[#0A3629] tracking-wide max-w-xl mx-auto px-6 sm:px-8 leading-relaxed">
            request the honor of your presence as we are unified in marriage before our Lord God.
          </p>

          {/* Date Display with elegant earth tone accents */}
          <div className="space-y-3 pt-4 sm:pt-6 px-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-[#9F8650] to-[#9F8650]" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-[family-name:var(--font-crimson)] font-semibold text-[#9F8650] tracking-wider">
                January
              </p>
              <div className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-[#9F8650] to-[#9F8650]" />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[#0A3629]">
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] uppercase tracking-wider text-[#9F8650]">SATURDAY</span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-[family-name:var(--font-crimson)] font-light my-2 sm:my-0 elegant-text-shadow">24</span>
              <span className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] uppercase tracking-wider text-[#9F8650]">9:30 AM</span>
            </div>
            
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-light text-[#0A3629]">
              2026
            </p>
          </div>

          {/* Ceremony with warm gold accent */}
          <div className="pt-4 sm:pt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-ephesis)] text-[#9F8650] px-4">
              Ceremony
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-2 pb-4 sm:pb-6 px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[family-name:var(--font-crimson)] font-semibold text-[#9F8650] uppercase tracking-wider">
              DIOCESAN SHRINE & PARISH
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[family-name:var(--font-crimson)] font-normal text-[#0A3629] leading-relaxed">
              Of Our Lady of the Abandoned
            </p>
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-crimson)] font-normal text-[#0A3629]/80">
              Mountainview Village, San Roque, Marikina City
            </p>
          </div>

          {/* Elegant CTA Button with earth tone gradient */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#guest-list"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 lg:py-4.5 font-[family-name:var(--font-crimson)] font-semibold text-sm sm:text-base md:text-lg text-white bg-gradient-to-r from-[#0A3629] to-[#126555] hover:from-[#126555] hover:to-[#0A3629] transition-all duration-300 tracking-wider uppercase border-2 border-[#126555] hover:border-[#0A3629] hover:scale-105 hover:shadow-[0_10px_30px_rgba(10,54,41,0.4)] hover:brightness-110 active:scale-100 premium-shadow rounded-sm relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
              <Heart size={16} className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">RSVP</span>
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="h-[1px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
