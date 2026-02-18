"use client"

import React from "react"
import Link from "next/link"
import { StorySection } from "@/components/StorySection"

const storyEvents = [
  {
    place: "The Proposal",
    byline: "Aki",
    memories:
      "Same company, no clue. One trip with his friends and suddenly my inbox had his name.",
    year: "",
    month: "",
    img: "/proposal/proposal 1.jpg",
  },
  {
    place: "The Proposal",
    byline: "Jayvee",
    memories:
      "It was our 5th anniversary. I acted neutral. The plan was just to exchange simple gifts, but I already got her ring. I told her to record a video, pretending it was just a gift exchange. I then asked her the big question: Will you marry me? She was so happy and trembling. Her reaction made the day truly special and the plan was worth it. SHE SAID YES.",
    year: "",
    month: "",
    img: "/proposal/proposal 2.jpg",
  },
]

export function LoveStory() {
  return (
    <div id="love-story" className="relative min-h-screen bg-[#EFCA93] overflow-x-hidden">
      {/* Decorative border top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-[#9AAB89]/50 w-full pointer-events-none" />

      {/* Header - Countdown-style */}
      {/* <div className="relative z-10 pt-16 pb-8 text-center px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-crimson)] font-bold text-[#9AAB89] mb-4 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.12em] elegant-text-shadow">
          The Proposal
        </h1>
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#9F8650] to-transparent" />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-[family-name:var(--font-crimson)] text-[#800A06]/80 font-light max-w-xl mx-auto leading-relaxed tracking-wide px-2">
          Timeline &amp; Memories
        </p>
      </div> */}

      {storyEvents.map((event, index) => (
        <StorySection
          key={index}
          theme={index % 2 === 0 ? "dark" : "light"}
          layout={index % 2 === 0 ? "image-left" : "image-right"}
          isFirst={index === 0}
          isLast={index === storyEvents.length - 1}
          imageSrc={event.img}
          title={event.place}
          byline={event.byline}
          text={
            <>
              <p>{event.memories}</p>
            </>
          }
          year={event.year}
          month={event.month}
        />
      ))}

      {/* Footer - Countdown-style CTA */}
      {/* <div className="bg-[#EFCA93] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center relative z-0 px-4">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent via-[#9F8650] to-[#9F8650]" />
          <div className="w-1.5 h-1.5 bg-[#9F8650] rounded-full" />
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent via-[#9F8650] to-[#9F8650]" />
        </div>
        <Link
          href="#guest-list"
          className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-[family-name:var(--font-crimson)] font-semibold text-[#EFCA93] bg-[#9AAB89] hover:bg-[#889977] rounded-lg border border-[#9AAB89] transition-all duration-300 hover:scale-[1.02] active:scale-100 premium-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9AAB89]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EFCA93]"
        >
          Join us
        </Link>
      </div> */}
    </div>
  )
}
