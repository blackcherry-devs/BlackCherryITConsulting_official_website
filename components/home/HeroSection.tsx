"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridLines from "@/components/ui/GridLines";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftCarouselRef = useRef<HTMLDivElement>(null);
  const rightCarouselRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb"
  ];

  // Using a stable video to ensure it plays without blocking (CORS/hotlink).
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4"
  ];

  // Specific order so moving right feels like advancing through the array
  const carouselImages = [images[0], images[2], images[1], images[0], images[2], images[1]];
  const carouselVideos = [...videos, ...videos];

  useGSAP(() => {
    // Left Carousel: Moves Right in Steps.
    gsap.set(leftCarouselRef.current, { x: "-50%" });
    const tlLeft = gsap.timeline({ repeat: -1 });
    tlLeft.to(leftCarouselRef.current, { x: "-33.333%", duration: 1, ease: "power2.inOut", delay: 5 })
          .to(leftCarouselRef.current, { x: "-16.666%", duration: 1, ease: "power2.inOut", delay: 5 })
          .to(leftCarouselRef.current, { x: "0%", duration: 1, ease: "power2.inOut", delay: 5 });

    // Right Carousel: Moves Up in Steps.
    gsap.set(rightCarouselRef.current, { y: "0%" });
    const tlRight = gsap.timeline({ repeat: -1 });
    tlRight.to(rightCarouselRef.current, { y: "-16.666%", duration: 1, ease: "power2.inOut", delay: 5 })
           .to(rightCarouselRef.current, { y: "-33.333%", duration: 1, ease: "power2.inOut", delay: 5 })
           .to(rightCarouselRef.current, { y: "-50%", duration: 1, ease: "power2.inOut", delay: 5 });

  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="relative w-full flex items-stretch overflow-hidden">
      <GridLines />
      {/* Left: Image Container (Must respect pl-[7rem]) */}
      <div className="w-1/2 relative z-10 pl-[7rem] pt-20">
        <div className="relative w-full h-[700px] overflow-hidden">
          {/* Track moving Right */}
          <div ref={leftCarouselRef} className="flex h-full w-max absolute top-0 left-0">
            {carouselImages.map((src, idx) => (
              <div key={`img-${idx}`} className="w-[calc(50vw-7rem)] h-full flex-shrink-0 relative">
                <Image src={src} alt={`Hero ${idx}`} fill priority className="object-cover grayscale brightness-50" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 px-12 h-full flex flex-col justify-center pointer-events-none">
            <h1 className="font-headline font-black text-[7vw] leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl">
              THE <br /> MONO <br /> LITH
            </h1>
            <p className="mt-8 font-body text-white/90 max-w-sm text-sm uppercase tracking-widest leading-relaxed drop-shadow-md">
              Architectural IT solutions engineered with surgical precision for the next industrial era.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Video Container (Must respect pr-[7rem] and restore bottom div) */}
      <div className="w-1/2 relative flex flex-col pr-[7rem]">
        <div className="relative w-full bg-black overflow-hidden h-[620px]">
          {/* Track moving Up */}
          <div ref={rightCarouselRef} className="flex flex-col w-full h-max absolute top-0 left-0">
            {carouselVideos.map((src, idx) => (
              <div key={`vid-${idx}`} className="w-full h-[620px] flex-shrink-0 relative bg-black">
                <video src={src} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 grayscale brightness-75" />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
          
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <div className="w-12 h-1 bg-primary-container"></div>
            <div className="w-12 h-1 bg-white/20"></div>
            <div className="w-12 h-1 bg-white/20"></div>
          </div>
        </div>

        {/* Transition div restored */}
        <div className="bg-[#1F1F1F] w-full border-left border-l-[1.3px] border-white h-[160px] flex flex-col justify-center relative overflow-hidden pr-12 z-20">
          <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 pl-4">
            <p className="font-headline font-light text-xl md:text-2xl text-white leading-tight mb-8 tracking-tight text-left">
              Elevando marcas mediante experiencias digitales de alto rendimiento.
            </p>
            <Link className="bg-white hover:bg-stone-100 text-black font-headline font-bold text-sm tracking-tight transition-all rounded-round-four flex items-center gap-4 group shadow-xl px-6 py-2 uppercase" href="/portafolio">
              VER NUESTRO TRABAJO
              <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#8B090A]">
                <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform font-bold text-white">arrow_forward</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
