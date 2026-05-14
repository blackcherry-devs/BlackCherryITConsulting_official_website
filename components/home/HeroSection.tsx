"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridLines from "@/components/ui/GridLines";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftCarouselRef = useRef<HTMLDivElement>(null);
  const rightCarouselRef = useRef<HTMLDivElement>(null);

  const images = [
    "/services/web_dev.png",
    "/services/backend.png",
    "/services/ai.png"
  ];

  const videos = [
    "/video-home1.mp4",
    "/video-home2.mp4",
    "/video-home3.mp4"
  ];

  const carouselImages = [images[0], images[2], images[1], images[0], images[2], images[1]];
  const carouselVideos = [...videos, ...videos];

  useGSAP(() => {
    // Left Carousel: Moves Right in Steps.
    gsap.set(leftCarouselRef.current, { x: "-50%" });
    const tlLeft = gsap.timeline({ repeat: -1 });
    tlLeft.to(leftCarouselRef.current, { x: "-33.333%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 })
          .to(leftCarouselRef.current, { x: "-16.666%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 })
          .to(leftCarouselRef.current, { x: "0%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 });

    // Right Carousel: Moves Up in Steps.
    gsap.set(rightCarouselRef.current, { y: "0%" });
    const tlRight = gsap.timeline({ repeat: -1 });
    tlRight.to(rightCarouselRef.current, { y: "-16.666%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 })
           .to(rightCarouselRef.current, { y: "-33.333%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 })
           .to(rightCarouselRef.current, { y: "-50%", duration: 1.5, ease: "expo.inOut", delay: 4.5, force3D: true, z: 0.01 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full flex flex-col bg-white relative overflow-hidden px-0 md:px-[var(--gutter-width)]">
      <GridLines />
      
      <div className="flex flex-col min-[600px]:flex-row w-full items-stretch bg-[#1F1F1F]">
        {/* Left: Image Container - Hidden on Mobile */}
        <div className="hidden min-[600px]:block w-full min-[600px]:w-1/2 relative z-10 pl-0">
          <div className="relative w-full h-[350px] min-[600px]:h-[450px] lg:h-[700px] overflow-hidden">
            {/* Track moving Right */}
            <div ref={leftCarouselRef} className="flex h-full w-max absolute top-0 left-0 will-change-transform">
              {carouselImages.map((src, idx) => (
                <div key={`img-${idx}`} className="w-[50vw] md:w-[calc(50vw-var(--gutter-width))] h-full flex-shrink-0 relative">
                  <Image src={src} alt={`Hero ${idx}`} fill priority className="object-cover brightness-50" />
                </div>
              ))}
            </div>

            {/* Desktop Overlay */}
            <div className="absolute inset-0 z-10 px-4 min-[600px]:px-12 h-full flex flex-col justify-center lg:-translate-y-12 pointer-events-none">
              <h1 className="font-headline font-black text-5xl min-[600px]:text-7xl md:text-[8vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
                ARQUI <br /> TECTURA <br /> DIGITAL
              </h1>
              <p className="mt-4 min-[600px]:mt-8 font-body text-white/90 max-w-xs min-[600px]:max-w-sm text-xs min-[600px]:text-sm md:text-base lg:text-base tracking-wide leading-snug drop-shadow-md">
                Soluciones IT de grado industrial diseñadas con precisión quirúrgica para la escala global.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Video Container - Full width on Mobile */}
        <div className="w-full min-[600px]:w-1/2 relative flex flex-col pr-0">
          <div className="relative w-full bg-black overflow-hidden h-[500px] min-[600px]:h-[450px] lg:h-[700px]">
            {/* Track moving Up */}
            <div ref={rightCarouselRef} className="flex flex-col w-full h-max absolute top-0 left-0 will-change-transform">
              {carouselVideos.map((src, idx) => (
                <div key={`vid-${idx}`} className="w-full h-[500px] min-[600px]:h-[450px] lg:h-[700px] flex-shrink-0 relative bg-black">
                  <video 
                    src={src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[0.4] min-[600px]:brightness-75" 
                  />
                </div>
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>

            {/* Mobile Overlay (Visible only on < 600px) */}
            <div className="min-[600px]:hidden absolute inset-0 z-20 px-8 h-full flex flex-col justify-center pointer-events-none">
              <h1 className="font-headline font-black text-[11vw] leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl mb-6">
                ARQUI <br /> TECTURA <br /> DIGITAL
              </h1>
              <p className="font-body text-white/90 max-w-xs text-[4.5vw] min-[400px]:text-sm tracking-wide leading-snug drop-shadow-md">
                Soluciones IT de grado industrial diseñadas con precisión quirúrgica para la escala global.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transition div */}
      <div className="bg-white md:bg-[#1F1F1F] w-full lg:w-1/2 border-none lg:border-l-[1.3px] lg:border-white h-auto lg:h-[160px] flex flex-col justify-center relative overflow-hidden px-10 py-12 min-[600px]:px-16 lg:px-12 z-20 lg:py-0 lg:absolute lg:bottom-0 lg:right-0">
        <div className="flex flex-col items-center min-[600px]:items-start justify-center max-w-2xl h-full relative z-20">
          <p className="font-headline font-light text-base min-[600px]:text-xl lg:text-xl text-black md:text-white leading-tight mb-8 min-[600px]:mb-4 lg:mb-8 tracking-tight text-center min-[600px]:text-left">
            Elevando marcas mediante experiencias digitales de alto rendimiento.
          </p>
          <div className="origin-center min-[600px]:origin-left">
            {/* Show light theme button on mobile (white bg) and dark theme on desktop (dark bg) */}
            <div className="md:hidden">
              <AnimatedButton href="/portafolio" theme="light">
                VER NUESTRO TRABAJO
              </AnimatedButton>
            </div>
            <div className="hidden md:block">
              <AnimatedButton href="/portafolio" theme="dark">
                VER NUESTRO TRABAJO
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
