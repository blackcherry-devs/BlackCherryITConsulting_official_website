'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

export default function ContactoTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Cursor blinking animation
    gsap.to('.cursor', {
      opacity: 1,
      ease: 'steps(1)',
      repeat: -1,
      duration: 0.4,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    tl.set('.cursor-1', { display: 'inline' })
      .to('.type-text-1', {
        duration: 3.5,
        text: 'HABLEMOS DEL FUTURO DE TU INFRAESTRUCTURA',
        ease: 'none',
      });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex flex-col bg-[#0f0f0f]/90 lg:bg-[#0f0f0f]/80 backdrop-blur-md border-none lg:border-none shadow-2xl relative"
    >
      {/* Mac Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-2 w-20">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-90 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-90 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-90 shadow-sm"></div>
        </div>
        <div className="flex-1 text-center font-mono text-[11px] sm:text-[13px] text-white/40 select-none tracking-wide">
          bash -- terminal
        </div>
        <div className="w-20"></div> {/* Spacer */}
      </div>

      {/* Terminal Body Container */}
      <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative flex-1 flex items-center">
        {/* Sizer for layout to prevent jumping */}
        <div
          className="font-mono font-light leading-relaxed pr-4 text-base sm:text-xl lg:text-2xl opacity-0 pointer-events-none select-none w-full"
          aria-hidden="true"
        >
          <span className="block font-headline font-black uppercase tracking-tighter leading-[1.1]">
            <span className="font-bold mr-2">➜</span>
            <span className="font-bold mr-2">~</span>
            HABLEMOS DEL FUTURO DE TU INFRAESTRUCTURA
            <span className="font-bold ml-1">_</span>
          </span>
        </div>

        {/* Animated Text */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-8 md:left-10 lg:left-12 right-6 md:right-8 z-10 pr-4 flex items-center">
          <div className="text-[#E6E6E6] block w-full font-headline font-black uppercase tracking-tighter leading-[1.1] text-xl sm:text-xl md:text-2xl lg:text-2xl">
            <span className="text-[#33C331] font-bold mr-2 text-base sm:text-xl">➜</span>
            <span className="text-[#42AAC7] font-bold mr-2 text-base sm:text-xl">~</span>
            <span className="type-text-1"></span>
            <span className="cursor cursor-1 font-bold text-[#E6E6E6] opacity-0 ml-1">
              _
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
