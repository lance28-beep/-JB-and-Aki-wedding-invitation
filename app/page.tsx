"use client"

import { useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { AudioProvider } from "@/contexts/audio-context"
import { Hero as MainHero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Countdown } from "@/components/sections/countdown"
import { WeddingTimeline } from "@/components/sections/wedding-timeline"
import { Narrative } from "@/components/sections/narrative"
import { Gallery } from "@/components/sections/gallery"
import { Messages } from "@/components/sections/messages"
import { Details } from "@/components/sections/details"
import { Entourage } from "@/components/sections/entourage"
import { PrincipalSponsors } from "@/components/sections/principal-sponsors"
import { BookOfGuests } from "@/components/sections/book-of-guests"
import { Registry } from "@/components/sections/registry"
import { FAQ } from "@/components/sections/faq"
import { SnapShare } from "@/components/sections/snap-share"
import { Footer } from "@/components/sections/footer"
import { Hero as InvitationHero } from "@/components/loader/Hero"
import { LoadingScreen } from "@/components/loader/LoadingScreen"
import { Navbar } from "@/components/navbar"
import { AppState } from "@/components/types"
import BackgroundMusic from "@/components/background-music"

const GuestList = dynamic(() => import("@/components/sections/guest-list").then(mod => ({ default: mod.GuestList })), { ssr: false })

export default function Home() {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING)
  const enableDecor = process.env.NEXT_PUBLIC_ENABLE_DECOR !== 'false'

  const handleLoadingComplete = useCallback(() => {
    setAppState(AppState.LANDING)
  }, [])

  const handleOpenInvitation = useCallback(() => {
    setAppState(AppState.DETAILS)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-cloud text-charcoal selection:bg-birch selection:text-nut overflow-hidden font-sans">
        {appState === AppState.LOADING && <LoadingScreen onComplete={handleLoadingComplete} />}

        <main className="relative w-full h-full">
          <InvitationHero onOpen={handleOpenInvitation} visible={appState === AppState.LANDING} />

          <div className={`transition-opacity duration-700 ${appState === AppState.DETAILS ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {enableDecor && <BackgroundMusic />}
            {enableDecor && (
              <div className="fixed inset-0 z-0 pointer-events-none">
                <video
                  src="/video/hero-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 w-full h-full bg-[#EFD2AA]/40"
                  aria-hidden
                />
              </div>
            )}

            <div className="relative z-10">
              {appState === AppState.DETAILS && <Navbar />}
              <MainHero />
              <Welcome />
              {/* <CoupleVideo /> */}
              <Countdown />
              <Narrative />
              <Gallery />
              <Messages />
              <Details />
              <WeddingTimeline />
              <Entourage />
              <PrincipalSponsors />
              <GuestList />
              {/* <BookOfGuests /> */}
              <FAQ />
              <Registry />
   
              <SnapShare />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </AudioProvider>
  )
}
