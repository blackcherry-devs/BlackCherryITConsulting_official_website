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

  // Using a stable video to ensure it plays without blocking (CORS/hotlink).
  const videos = [
    "/video-home1.mp4",
    "/video-home2.mp4",
    "/video-home3.mp4"
  ];

  // Specific order so moving right feels like advancing through the array
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
    <header ref={containerRef} className="relative w-full flex items-stretch overflow-hidden">
      <GridLines />
      {/* Left: Image Container (Must respect pl-[7rem]) */}
      <div className="w-1/2 relative z-10 pl-[7rem] pt-20">
        <div className="relative w-full h-[700px] overflow-hidden">
          {/* Track moving Right */}
          <div ref={leftCarouselRef} className="flex h-full w-max absolute top-0 left-0 will-change-transform">
            {carouselImages.map((src, idx) => (
              <div key={`img-${idx}`} className="w-[calc(50vw-7rem)] h-full flex-shrink-0 relative">
                <Image src={src} alt={`Hero ${idx}`} fill priority className="object-cover brightness-50" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 px-12 h-full flex flex-col justify-center -translate-y-12 pointer-events-none">
            <h1 className="font-headline font-black text-[7vw] leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
              ARQUI <br /> TECTURA <br /> DIGITAL
            </h1>
            <p className="mt-8 font-body text-white/90 max-w-sm text-sm uppercase tracking-widest leading-relaxed drop-shadow-md">
              Soluciones IT de grado industrial diseñadas con precisión quirúrgica para la escala global.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Video Container (Must respect pr-[7rem] and restore bottom div) */}
      <div className="w-1/2 relative flex flex-col pr-[7rem]">
        <div className="relative w-full bg-black overflow-hidden h-[620px]">
          {/* Track moving Up */}
          <div ref={rightCarouselRef} className="flex flex-col w-full h-max absolute top-0 left-0 will-change-transform">
            {carouselVideos.map((src, idx) => (
              <div key={`vid-${idx}`} className="w-full h-[620px] flex-shrink-0 relative bg-black">
                <video 
                  src={src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="auto"
                  onCanPlay={(e) => e.currentTarget.play()}
                  onLoadedMetadata={(e) => e.currentTarget.play()}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-75" 
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
        </div>

        {/* Transition div restored */}
        <div className="bg-[#1F1F1F] w-full border-left border-l-[1.3px] border-white h-[160px] flex flex-col justify-center relative overflow-hidden pr-12 z-20">
          <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 pl-4">
            <p className="font-headline font-light text-xl md:text-2xl text-white leading-tight mb-8 tracking-tight text-left">
              Elevando marcas mediante experiencias digitales de alto rendimiento.
            </p>
            <AnimatedButton href="/portafolio" theme="dark">
              VER NUESTRO TRABAJO
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
}
