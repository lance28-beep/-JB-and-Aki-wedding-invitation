import React, { useEffect, useMemo, useState } from 'react';
import { Monogram } from '@/components/Monogram';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

const desktopImages: string[] = [
  '/mobile-view/couple (1).webp',
  '/mobile-view/couple (2).webp',
  '/mobile-view/couple (3).webp',
  '/mobile-view/couple (4).webp',
  '/mobile-view/couple (5).webp',
];

const mobileImages: string[] = [
  '/desktop-view/couple (1).webp',
  '/desktop-view/couple (2).webp',
  '/desktop-view/couple (3).webp',
  '/desktop-view/couple (4).webp',
  '/desktop-view/couple (5).webp',
];

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, [mounted]);

  const images = useMemo(() => (isMobile ? mobileImages : desktopImages), [isMobile]);

  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt="Couple"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[#EFD2AA]/55" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <div className="mb-auto mt-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
            {/* Monogram Image */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
              <Monogram className="w-full h-full" label="Denmark & Rizchelle Monogram" />
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <h2 className="text-6xl md:text-8xl transform -rotate-6 font-[family-name:var(--font-serif)] font-normal text-[#800A06] drop-shadow-sm">
            You are
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cinzel)] font-bold tracking-wider uppercase text-[#800A06] drop-shadow-sm">
            Invited!
          </h1>

          <button
            onClick={onOpen}
            className="px-10 py-4 font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] uppercase rounded-sm border transition-all duration-300 bg-[#800A06] border-[#800A06] text-[#EFCA93] hover:bg-[#800A06]/90 hover:border-[#800A06]/80 hover:scale-[1.02] premium-shadow"
          >
            Open Invitation
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};