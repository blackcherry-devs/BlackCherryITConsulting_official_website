"use client";

import Section from "@/components/layout/Section";
import GlyphRain from "@/components/ui/GlyphRain";
import BlueprintPattern from "@/components/ui/BlueprintPattern";

export default function TechStack() {
  const stackTop = ["NEXT.JS", "REACT.JS", "NODE.JS", "TYPESCRIPT"];
  const stackBottom = ["TAILWIND", "GSAP", "POSTGRES", "FIGMA"];

  return (
    <Section 
      id="tecnologias" 
      theme="dark" 
      className="!bg-[#1a1a1a]"
    >
      {/* Glyph Rain Background */}
      <GlyphRain opacity={0.15} count={8} />

      {/* HUD Background Patterns */}
      <BlueprintPattern type="circuit" opacity={0.08} />
      <BlueprintPattern type="diagonal" opacity={0.04} />
      
      <div className="w-full min-h-[500px] lg:min-h-[600px] relative z-10 flex flex-col lg:flex-row items-stretch">
        {/* Left Side: Content Centered on axis */}
        <div className="absolute inset-0 lg:relative lg:inset-auto z-20 lg:z-10 lg:w-[35%] flex flex-col justify-center items-start text-left pl-0 sm:pl-16 lg:pl-4 lg:mb-0 pointer-events-none w-full">
          <span className="font-headline font-black text-white text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6">04 / STACK</span>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[0.85] uppercase w-full break-words">
            TECNOLOGÍAS
          </h2>
          <p className="mt-6 sm:mt-10 font-body text-white/50 w-full lg:max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            Utilizamos las herramientas más avanzadas y robustas del mercado para garantizar un rendimiento excepcional y una escalabilidad sin límites en cada proyecto.
          </p>
        </div>

        {/* Right Side: Staggered Carousels */}
        <div className="lg:w-[65%] absolute lg:relative inset-0 lg:inset-auto z-0 lg:z-10 flex gap-4 lg:gap-8 items-start h-full lg:h-[700px] overflow-hidden px-[var(--gutter-width)] lg:px-0 lg:pr-4 py-10 lg:py-20 w-full">
          {/* Carousel 1 (Scrolls UP) */}
          <div className="flex-1 lg:flex-[1.4] relative h-full lg:h-[600px] overflow-hidden bg-transparent lg:-mt-20">
            <div className="flex flex-col gap-0 py-0 animate-scroll-up">
              {/* Render twice for seamless loop */}
              {[...stackTop, ...stackTop].map((tech, i) => (
                <div key={i} className="h-[100px] lg:h-[150px] flex items-center justify-start">
                  <span className="font-headline font-black text-5xl lg:text-7xl tracking-tighter uppercase opacity-20 hover:opacity-100 hover:text-primary-container transition-all cursor-default whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel 2 (Scrolls DOWN) */}
          <div className="flex-1 relative h-full lg:h-[600px] overflow-hidden bg-transparent lg:mt-20">
            <div className="flex flex-col gap-0 py-0 animate-scroll-down">
              {/* Render twice for seamless loop */}
              {[...stackBottom, ...stackBottom].map((tech, i) => (
                <div key={i} className="h-[100px] lg:h-[150px] flex items-center justify-start">
                  <span className="font-headline font-black text-5xl lg:text-7xl tracking-tighter uppercase opacity-20 hover:opacity-100 hover:text-primary-container transition-all cursor-default whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
