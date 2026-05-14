"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const images = [
  "/hero-portfolio/slide-1.png",
  "/hero-portfolio/slide-2.png",
  "/hero-portfolio/slide-3.png"
];

// Double the images for infinite loop logic similar to home hero
const carouselImages = [...images, ...images];

export default function HeroImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Portfolio Carousel: Moves left in steps, similar to the Home hero logic
    // We start at 0% and move in increments of 100% of a slide
    const slideCount = images.length;
    const tl = gsap.timeline({ repeat: -1 });

    // For each slide, we move the track by one slide width
    // 100 / (slideCount * 2) is the % width of one slide in the doubled track
    const stepSize = 100 / (slideCount * 2);

    tl.to(trackRef.current, { 
      x: `-${stepSize * 1}%`, 
      duration: 1.5, 
      ease: "expo.inOut", 
      delay: 4.5,
      force3D: true
    })
    .to(trackRef.current, { 
      x: `-${stepSize * 2}%`, 
      duration: 1.5, 
      ease: "expo.inOut", 
      delay: 4.5,
      force3D: true
    })
    .to(trackRef.current, { 
      x: `-${stepSize * 3}%`, 
      duration: 1.5, 
      ease: "expo.inOut", 
      delay: 4.5,
      force3D: true
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[75vh] md:h-[100vh] lg:h-[700px] overflow-hidden bg-black">
      {/* Track Container */}
      <div 
        ref={trackRef} 
        className="flex h-full w-max absolute top-0 left-0 will-change-transform"
      >
        {carouselImages.map((src, idx) => (
          <div 
            key={`img-${idx}`} 
            className="w-[100vw] min-[601px]:w-[calc(100vw-var(--gutter-width)*2)] lg:w-[calc(50vw-var(--gutter-width))] h-full flex-shrink-0 relative"
          >
            <Image 
              src={src} 
              alt={`Proyecto BlackCherry IT - Portfolio ${idx + 1}`} 
              fill 
              priority 
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) calc(100vw - var(--gutter-width) * 2), calc(50vw - var(--gutter-width))"
              className="object-cover brightness-75" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>
      
      {/* Visual Overlay Grid */}
      <div className="absolute inset-0 pointer-events-none technical-grid-red opacity-10 z-10"></div>
    </div>
  );
}
