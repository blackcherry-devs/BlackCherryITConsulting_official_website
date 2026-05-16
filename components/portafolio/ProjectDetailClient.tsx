"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import GridLines from "@/components/ui/GridLines";
import { ProjectData } from "@/lib/data/portfolio";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SwipeCards } from "@/components/ui/SwipeCards";
import Image from "next/image";

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If scrolling vertically, convert to horizontal scroll exactly 1:1
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (window.innerWidth >= 768) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const contrastColor = project.color === "#FFFFFF" || project.color === "white" ? "#1a1a1a" : "white";

  return (
    <div className="relative min-h-screen bg-white">
      {/* Dynamic Grid Lines based on project context */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
        <GridLines />
      </div>

      <div 
        ref={scrollRef}
        className="flex flex-row h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        
        {/* SECTION 1: HERO & LOGO (Full Screen) */}
        <section 
          className="flex-shrink-0 w-screen h-screen relative snap-start overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: project.heroBgOverride || project.color }}
        >
          {/* Hero Image / Video Background */}
          {project.video ? (
             <video 
              src={project.video}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
          ) : (
            <Image 
              src={project.heroImage} 
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
          )}

          {/* Logo Container */}
          <div className="relative z-20 flex items-center justify-center">
            <div className={`
              ${project.logoContainerClass || 'w-64 h-64 md:w-96 md:h-96'} 
              ${project.logoBg === 'white' ? 'bg-white shadow-2xl' : ''} 
              ${project.logoPadding || ''}
              rounded-full overflow-hidden transition-all duration-1000 scale-90 hover:scale-100
            `}>
              <Image 
                src={project.logo} 
                alt={`${project.title} logo`}
                fill
                sizes="(max-width: 768px) 256px, 384px"
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Section Indicator */}
          <div className="absolute bottom-12 left-12 md:left-16 flex items-center gap-4 text-white/50">
            <span className="font-headline font-black text-4xl">01</span>
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="font-headline text-xs tracking-widest uppercase">Identidad Visual</span>
          </div>
        </section>

        {/* SECTION 2: NARRATIVE (Full Screen) */}
        <section className="flex-shrink-0 w-screen h-screen relative snap-start flex flex-row items-stretch bg-white overflow-hidden">
          <div className="w-1/2 relative bg-black overflow-hidden">
            <Image 
              src={project.technicalImage} 
              alt="Technical View" 
              fill
              sizes="50vw"
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 technical-grid-red opacity-10"></div>
          </div>
          <div className="w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <span className="font-headline font-black text-[10rem] lg:text-[12rem] text-[#1a1a1a] leading-none">02</span>
             </div>
             <div className="relative z-10">
                <span className="font-headline font-bold text-[10px] md:text-xs text-primary-container tracking-[0.4em] uppercase mb-4 block">LA ESTRATEGIA</span>
                <h2 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#1a1a1a] leading-[0.9] tracking-tighter uppercase mb-8">
                  {project.narrativeTitle}
                </h2>
                <div className="w-16 md:w-24 h-1 bg-primary-container mb-8"></div>
                <p className="font-body text-stone-500 text-xs md:text-sm lg:text-base leading-relaxed max-w-xl">
                  {project.narrativeText}
                </p>
             </div>
          </div>
        </section>

        {/* SECTION 3: TECH STATS (Full Screen) */}
        <section className="flex-shrink-0 w-screen h-screen relative snap-start flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
          <div className="absolute inset-0 technical-grid-white opacity-5"></div>
          <div className="grid grid-cols-2 gap-px bg-white/10 w-full max-w-5xl mx-auto border border-white/10 relative z-10">
             <div className="p-10 md:p-16 lg:p-20 bg-[#1a1a1a] flex flex-col items-center justify-center text-center group">
                <span className="font-headline font-black text-[10px] md:text-xs text-primary-container tracking-[0.5em] uppercase mb-4">{project.stats.techLabel}</span>
                <div className="font-headline font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-none transition-transform duration-500 group-hover:scale-110">
                  {project.stats.techValue}
                </div>
             </div>
             <div className="p-10 md:p-16 lg:p-20 bg-[#1a1a1a] flex flex-col items-center justify-center text-center group">
                <span className="font-headline font-black text-[10px] md:text-xs text-primary-container tracking-[0.5em] uppercase mb-4">{project.stats.perfLabel}</span>
                <div className="font-headline font-black text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-none transition-transform duration-500 group-hover:scale-110">
                  {project.stats.perfValue}
                </div>
             </div>
          </div>
          
          <div className="absolute bottom-12 right-12 md:right-16 flex items-center gap-4 text-white/50">
            <span className="font-headline font-black text-4xl">03</span>
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="font-headline text-xs tracking-widest uppercase">Métricas de Éxito</span>
          </div>
        </section>

        {/* SECTION 4: GALLERY (Full Screen) */}
        <section className="flex-shrink-0 w-screen h-screen relative snap-start bg-white overflow-hidden">
           <div className="absolute top-12 left-12 z-20">
              <span className="font-headline font-black text-xs text-primary-container tracking-[0.5em] uppercase">GALERÍA TÉCNICA / 04</span>
           </div>
           
           <div className="w-full h-full flex flex-row p-12 gap-4">
              <div className="w-2/3 h-full relative rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src={project.galleryImages[0]} 
                  alt="Gallery 1" 
                  fill
                  sizes="66vw"
                  className="object-cover"
                />
              </div>
              <div className="w-1/3 h-full flex flex-col gap-4">
                <div className="h-1/2 relative rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={project.galleryImages[1]} 
                    alt="Gallery 2" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="h-1/2 relative rounded-xl overflow-hidden shadow-xl">
                   <Image 
                    src={project.galleryImages[2]} 
                    alt="Gallery 3" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
           </div>
        </section>

        {/* SECTION 5: CTA / NEXT (Full Screen) */}
        <section className="flex-shrink-0 w-screen h-screen relative snap-start flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0 technical-grid-dark opacity-[0.03]"></div>
          
          <div className="text-center relative z-10 px-6">
            <p className="font-headline font-bold text-[10px] md:text-xs text-primary-container tracking-[0.5em] uppercase mb-6 md:mb-8">FIN DEL RECORRIDO / 05</p>
            <h2 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12">
              PRÓXIMA <br /> MISIÓN
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
              <AnimatedButton href="/portafolio" theme="primary">
                VOLVER AL PORTAFOLIO
              </AnimatedButton>
              <AnimatedButton href="/contacto" theme="dark">
                INICIAR TU PROYECTO
              </AnimatedButton>
            </div>
          </div>
          
          {/* Mini Cards of other projects */}
          <div className="absolute bottom-8 md:bottom-12 w-full px-6">
            <SwipeCards />
          </div>
        </section>

      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-12 right-12 z-[100] hidden lg:flex flex-col gap-4">
        <Link 
          href={project.url || '#'} 
          target="_blank"
          className="w-16 h-16 bg-[#1a1a1a] text-white flex items-center justify-center rounded-full shadow-2xl hover:bg-primary-container transition-all hover:-translate-y-2 group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">language</span>
        </Link>
      </div>

    </div>
  );
}
