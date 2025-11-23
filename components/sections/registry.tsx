"use client";

import { Section } from "@/components/section";
import { Heart } from "lucide-react";
import Image from "next/image";

export function Registry() {
  return (
    <Section
      id="registry"
      className="relative bg-transparent py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-crimson)] font-normal text-white mb-6 sm:mb-8 uppercase tracking-[0.12em] sm:tracking-[0.15em]"
          style={{
            textShadow:
              "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Gift Registry
        </h2>

        <p
          className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] text-white font-light max-w-xl mx-auto leading-relaxed tracking-wide px-4"
          style={{
            textShadow:
              "0 0 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Your presence is the greatest gift we could ask for
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Main card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#1A1A1A]/20 to-[#1A1A1A]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative bg-white backdrop-blur-sm border-2 border-[#1A1A1A]/40 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#1A1A1A]/60 overflow-hidden">
            <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12">
              {/* Heart icon */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0A3629]/10 rounded-full blur-xl scale-150 animate-pulse"></div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#F9F8F4] rounded-full flex items-center justify-center shadow-lg border-2 border-[#0A3629]/20">
                  <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-[#0A3629]" />
                </div>
              </div>

              {/* Main message */}
              <div className="text-center space-y-6 sm:space-y-8 max-w-2xl">
                {/* First message */}
                <div className="relative">
                  {/* Decorative top line */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-[#0A3629]/50" />
                    <div className="w-1.5 h-1.5 bg-[#0A3629]/60 rounded-full" />
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-[#0A3629]/50" />
                  </div>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-crimson)] font-light text-[#1A1A1A] leading-relaxed tracking-wide">
                    Your presence at our wedding is the most precious gift.
                  </p>
                </div>

                {/* Second message */}
                <div className="relative">
                  <p className="text-base sm:text-lg md:text-xl font-[family-name:var(--font-crimson)] font-light text-[#1A1A1A]/80 leading-relaxed tracking-wide">
                    We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected.
                  </p>

                  {/* Decorative bottom line */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-[#0A3629]/50" />
                    <div className="w-1.5 h-1.5 bg-[#0A3629]/60 rounded-full" />
                    <div className="h-px w-12 sm:w-16 md:w-20 bg-[#0A3629]/50" />
                  </div>
                </div>

                {/* GCash QR Code */}
                <div className="relative mt-8 sm:mt-10 md:mt-12">
                  <div className="flex flex-col items-center space-y-4 sm:space-y-5">
                    <div className="text-center">
                      <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] font-semibold text-[#0A3629] mb-2 sm:mb-3 uppercase tracking-wider">
                        GCash
                      </p>
                      <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-[family-name:var(--font-crimson)]">
                        Scan to send monetary gift
                      </p>
                    </div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#0A3629]/20">
                      <Image
                        src="/QR/Gcash.png"
                        alt="GCash QR Code"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
