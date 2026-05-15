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
      className="!bg-[#1a1a1a] !py-6 md:!py-16 lg:!py-24"
    >
      {/* Glyph Rain Background */}
      <GlyphRain opacity={0.15} count={8} />

      {/* HUD Background Patterns */}
      <BlueprintPattern type="circuit" opacity={0.08} />
      <BlueprintPattern type="diagonal" opacity={0.04} />
      
      <div className="w-full min-h-[400px] lg:min-h-[450px] relative z-10 flex flex-col lg:flex-row items-stretch">
        {/* Left Side: Content Overlapping on Desktop */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left pl-0 sm:pl-16 lg:pl-12 lg:mb-0 pointer-events-none w-full lg:w-[60%]">
          <span className="font-headline font-black text-white text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6">04 / STACK</span>
          <h2 className="font-headline font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[0.85] uppercase w-full">
            TECNOLOGÍAS
          </h2>
          <p className="mt-4 sm:mt-6 font-body text-white/50 w-full lg:max-w-md text-sm uppercase tracking-widest leading-relaxed">
            Utilizamos las herramientas más avanzadas y robustas del mercado para garantizar un rendimiento excepcional y una escalabilidad sin límites en cada proyecto.
          </p>
        </div>

        {/* Right Side: Staggered Carousels (Background layer) */}
        <div 
          className="w-full lg:w-[70%] lg:ml-auto relative z-10 flex gap-4 lg:gap-8 items-start h-full lg:h-[500px] overflow-hidden px-[var(--gutter-width)] lg:px-0 lg:pr-4 py-10 lg:py-12 justify-center min-[600px]:justify-start lg:justify-end"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}
        >
          {/* Carousel 1 (Scrolls UP) */}
          <div className="flex-1 lg:flex-[1.4] relative h-full lg:h-[400px] overflow-hidden bg-transparent flex flex-col items-center min-[600px]:items-start">
            <div className="flex flex-col gap-0 py-0 animate-scroll-up w-full items-center min-[600px]:items-start">
              {/* Render twice for seamless loop */}
              {[...stackTop, ...stackTop].map((tech, i) => (
                <div key={i} className="h-[80px] lg:h-[110px] flex items-center justify-center min-[600px]:justify-start w-full">
                  <span className="font-headline font-black text-5xl lg:text-7xl tracking-tighter uppercase opacity-20 hover:opacity-100 hover:text-primary-container transition-all cursor-default whitespace-nowrap">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel 2 (Scrolls DOWN) - Hidden on mobile < 600px */}
          <div className="flex-1 relative h-full lg:h-[400px] overflow-hidden bg-transparent hidden min-[600px]:block">
            <div className="flex flex-col gap-0 py-0 animate-scroll-down">
              {/* Render twice for seamless loop */}
              {[...stackBottom, ...stackBottom].map((tech, i) => (
                <div key={i} className="h-[80px] lg:h-[110px] flex items-center justify-start">
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
