"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const syncIsPlaying = useCallback(() => {
    const audioEl = audioRef.current
    if (!audioEl) return
    // If audio is paused, it's not playing; otherwise it is (even if buffering).
    setIsPlaying(!audioEl.paused)
  }, [])

  const play = useCallback(async () => {
    const audioEl = audioRef.current
    if (!audioEl) return
    try {
      await audioEl.play()
      setIsPlaying(true)
    } catch (error) {
      // Autoplay can be blocked until a user gesture. We'll keep the button visible.
      console.log("Playback blocked:", error)
      setIsPlaying(false)
    }
  }, [])

  const pause = useCallback(() => {
    const audioEl = audioRef.current
    if (!audioEl) return
    audioEl.pause()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback(async () => {
    setHasInteracted(true)
    const audioEl = audioRef.current
    if (!audioEl) return
    if (audioEl.paused) await play()
    else pause()
  }, [pause, play])

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasInteracted(true)
      const audioEl = audioRef.current
      if (!audioEl) return
      play().then(() => {
        // Once we've successfully started playback, stop listening for generic "unlock" gestures.
        document.removeEventListener("click", handleUserInteraction)
        document.removeEventListener("touchstart", handleUserInteraction)
      })
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [play])

  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audioEl.addEventListener("play", onPlay)
    audioEl.addEventListener("pause", onPause)
    audioEl.addEventListener("ended", onPause)
    audioEl.addEventListener("loadeddata", syncIsPlaying)
    audioEl.addEventListener("canplay", syncIsPlaying)

    // initial sync (in case it plays immediately after hydration)
    syncIsPlaying()

    return () => {
      audioEl.removeEventListener("play", onPlay)
      audioEl.removeEventListener("pause", onPause)
      audioEl.removeEventListener("ended", onPause)
      audioEl.removeEventListener("loadeddata", syncIsPlaying)
      audioEl.removeEventListener("canplay", syncIsPlaying)
    }
  }, [syncIsPlaying])

  return (
    <>
      <audio
        ref={audioRef}
        src="/background_music/Boyzone - Picture Of You (Lyrics).mp3"
        loop
        preload="auto"
        playsInline
        style={{ display: "none" }}
      />

      {/* Fixed corner music control (bottom-left) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
        className={[
          "fixed bottom-4 left-4 z-[60]",
          "h-12 w-12 rounded-full",
          "grid place-items-center",
          "bg-[#800A06] text-[#F9F8F4]",
          "shadow-lg shadow-black/15",
          "border border-[#F9F8F4]/20",
          "transition-transform duration-200 ease-out",
          "hover:scale-[1.03] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6A1F08]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          // keep above iOS bottom bar / notches
          "mb-[max(0px,env(safe-area-inset-bottom))]",
        ].join(" ")}
        title={isPlaying ? "Pause music" : hasInteracted ? "Play music" : "Tap to enable music"}
      >
        {isPlaying ? (
          // Pause icon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6 5c0-1.105.895-2 2-2h1c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V5zm9 0c0-1.105.895-2 2-2h1c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2h-1c-1.105 0-2-.895-2-2V5z" />
          </svg>
        ) : (
          // Play icon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13c0 1.538 1.667 2.5 3 1.732l10-6.5a2 2 0 0 0 0-3.464l-10-6.5C9.667 3 8 3.962 8 5.5z" />
          </svg>
        )}
      </button>
    </>
  )
}

export default BackgroundMusic


