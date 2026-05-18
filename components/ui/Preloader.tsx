'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Preloader() {
  const [show, setShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const logoRef = useRef<HTMLImageElement>(null);

  // Define SVG paths
  // Start: flat bottom at y=100
  const startPath = "M 0 100 L 0 0 L 100 0 L 100 100 Q 50 100 0 100";
  // Curve: curved bottom peaking at y=0 (middle pulled up)
  const curvePath = "M 0 100 L 0 0 L 100 0 L 100 100 Q 50 0 0 100";
  // End: completely off screen at top
  const endPath = "M 0 0 L 0 0 L 100 0 L 100 0 Q 50 0 0 0";

  const textToAnimate = "CARGANDO...";
  const letters = textToAnimate.split("");

  useEffect(() => {
    // Check if we already showed it this session
    const hasSeen = sessionStorage.getItem('preloaderShown');
    if (hasSeen) {
      setShow(false);
    } else {
      // Prevent scrolling while loading
      document.body.style.overflow = 'hidden';
      // Mark as seen for next time
      sessionStorage.setItem('preloaderShown', 'true');
    }
  }, []);

  useGSAP(() => {
    if (!show) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // Restore scrolling
        document.body.style.overflow = '';
        setShow(false);
      }
    });

    // 1. Logo fades in and slides up
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
    // 2. Text slides up character by character
    .to('.char-element', {
      y: '0%',
      duration: 0.5,
      stagger: 0.04,
      ease: 'back.out(1.5)',
    }, "-=0.4")
    // 3. Pause so user reads it
    .to({}, { duration: 0.6 })
    // 4. Logo and text slide out (upwards)
    .to([logoRef.current, '.char-element'], {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      stagger: 0.01
    })
    // 5. SVG Curtain pulls up (curved)
    .to(pathRef.current, {
      attr: { d: curvePath },
      duration: 0.8,
      ease: 'power2.in',
    }, "-=0.2") // Start slightly before text is fully out
    // 6. SVG Curtain straightens out at the very top
    .to(pathRef.current, {
      attr: { d: endPath },
      duration: 0.4,
      ease: 'power2.out'
    });

  }, { scope: containerRef, dependencies: [show] });

  // Do not render anything if already shown
  if (!show) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none">
      {/* SVG Background Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-auto" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path ref={pathRef} fill="#FFFFFF" d={startPath} />
      </svg>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <img 
          ref={logoRef} 
          src="/logo-blackcherry-footer.png" 
          alt="BlackCherry Logo" 
          className="w-48 md:w-64 opacity-0 translate-y-4"
        />
        
        <div className="overflow-hidden flex">
          {letters.map((char, index) => (
            <span 
              key={index} 
              className="char-element inline-block font-headline font-black text-black text-2xl sm:text-3xl md:text-5xl tracking-widest translate-y-[100%]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
