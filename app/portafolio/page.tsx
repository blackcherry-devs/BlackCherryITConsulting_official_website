"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "@/components/ui/AnimatedLink";
import Image from "next/image";
import HeroImageCarousel from "@/components/portafolio/HeroImageCarousel";
import { portfolioData } from "@/lib/data/portfolio";

import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function PortafolioPage() {
  const [activeProjectIds, setActiveProjectIds] = useState<string[]>([]);
  const projectRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    // Only enable scroll-reveal logic for tablet viewports where hover is unavailable
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setActiveProjectIds([]);
      }
    };
    
    window.addEventListener('resize', handleResize);

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Focus on a narrow 10% strip in the vertical center
      threshold: 0
    };

    const visibleProjects = new Set<string>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-project-id");
        if (!id) return;
        
        if (entry.isIntersecting) {
          visibleProjects.add(id);
        } else {
          visibleProjects.delete(id);
        }
      });

      // Update state based on current intersection set
      if (window.innerWidth < 1024) {
        setActiveProjectIds(Array.from(visibleProjects));
      } else {
        setActiveProjectIds([]);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Global Architectural Grid Lines overlaying the entire page */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <GridLines />
      </div>

      {/* Hero Section */}
      <header className="relative w-full flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Image Carousel */}
        <div className="w-full lg:w-1/2 relative z-20 px-0 min-[601px]:px-[var(--gutter-width)] lg:px-0 lg:pl-[var(--gutter-width)] pt-0 lg:pt-20">
          <HeroImageCarousel />
          
          {/* Mobile Text Overlay (Only visible on <lg) */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center lg:hidden pr-[var(--gutter-width)] pl-[calc(var(--gutter-width)+1.5rem)] md:pl-[calc(var(--gutter-width)+2.5rem)] pointer-events-none mt-8">
            <h1 className="font-headline font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-8 drop-shadow-xl" aria-hidden="true">
              PORTAFOLIO
            </h1>
            <div className="max-w-xl">
              <p className="font-headline font-light text-xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6 drop-shadow-xl">
                TRANSFORMANDO IDEAS EN <br/> INFRAESTRUCTURA <br/> DE ÉXITO
              </p>
              <p className="font-body text-white/90 text-[9px] md:text-xs uppercase tracking-[0.3em] font-medium drop-shadow-xl">
                Estrategia Digital • Innovación Tecnológica • Rendimiento Garantizado
              </p>
            </div>
          </div>
        </div>
        
        {/* Right: Title Container */}
        <div className="w-full lg:w-1/2 relative flex flex-col px-0 lg:pr-[var(--gutter-width)] pt-0 z-20">
          <div className="hidden lg:flex relative w-full bg-[#1F1F1F] overflow-hidden h-[350px] md:h-[500px] lg:h-[620px] flex-col justify-center px-6 md:px-12">
            <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid-red"></div>
            <h1 className="font-headline font-black text-5xl md:text-[5vw] leading-[0.9] tracking-tighter uppercase text-white mb-8 relative z-10">
              PORTAFOLIO
            </h1>
            <div className="max-w-xl relative z-10">
              <p className="font-headline font-light text-xl md:text-3xl text-white/90 uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6">
                TRANSFORMANDO IDEAS EN <br/> INFRAESTRUCTURA <br/> DE ÉXITO
              </p>
              <p className="font-body text-white/40 text-[9px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Estrategia Digital • Innovación Tecnológica • Rendimiento Garantizado
              </p>
            </div>
          </div>
          {/* Transition div */}
          <div className="bg-[#8B090A] w-full lg:border-left lg:border-l-[1.3px] border-white h-auto py-12 md:h-[160px] flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
            <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 md:pl-4">
              <p className="font-headline font-light text-lg md:text-2xl text-white leading-tight mb-0 tracking-tight text-left">
                Materializando visiones complejas en estructuras digitales robustas y escalables.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* High-Impact Projects Grid Section */}
      <section className="relative w-full bg-white overflow-hidden py-0">
        <div className="relative w-full">
          {/* Internal Grid Lines */}
          <div className="hidden lg:block service-grid-line w-[1.3px] top-0 bottom-0 left-1/3"></div>
          <div className="hidden lg:block service-grid-line w-[1.3px] top-0 bottom-0 left-2/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-1/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-2/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 bottom-0"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-0"></div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-20">
            {portfolioData.map((project, index) => {
              const isActive = activeProjectIds.includes(project.id);
              
              return (
                <Link 
                  key={project.id}
                  ref={el => { projectRefs.current[project.id] = el; }}
                  data-project-id={project.id}
                  href={`/portafolio/${project.id}`} 
                  className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer z-30"
                >
                  <Image 
                    alt={project.title}
                    className={`object-cover transition-all duration-700
                      grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110
                      ${isActive ? 'grayscale-0 brightness-25 scale-110' : ''}
                    `}
                    src={project.heroImage}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
                  
                  {/* Interaction Layer at Bottom */}
                  <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                    <AnimatedButton 
                      asDiv 
                      theme="primary" 
                      className={`transition-all duration-500 opacity-0 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0
                        ${isActive ? 'opacity-100 translate-y-0' : ''}
                      `}
                    >
                      VER PROYECTO
                    </AnimatedButton>
                  </div>

                  {/* Absolute Vertical Titles and Labels */}
                  <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                    <div className="flex items-center h-full">
                      <div className={`text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8
                        ${isActive ? 'opacity-100' : ''}
                      `}>
                        {project.category}
                      </div>
                      <div className={`h-full overflow-hidden transition-opacity relative flex items-end
                        opacity-70 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''}
                      `}>
                        <div className="relative">
                          <div className="pb-12 opacity-0 pointer-events-none">
                            <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                              {project.title}
                            </h3>
                          </div>
                          <div className={`absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up ${isActive ? 'animate-scroll-up' : ''}`}>
                            <div className="pb-12">
                              <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                                {project.title}
                              </h3>
                            </div>
                            <div className="pb-12">
                              <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
                  <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                    <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                      {project.category}
                    </span>
                    <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <AnimatedButton 
                      asDiv 
                      theme="primary" 
                      className="opacity-100 scale-90"
                    >
                      VER PROYECTO
                    </AnimatedButton>
                  </div>

                  <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Video Hover Placeholder */}
                  {project.video && (
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                      <div className={`w-[80%] h-[50%] rounded-custom overflow-hidden transition-all duration-700 ease-out bg-black shadow-2xl
                        opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100
                      `}>
                        <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                          <source src={project.video} type="video/mp4"/>
                        </video>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minimal Connection Section */}
      <section className="w-full py-20 md:py-24 px-6 md:px-[var(--gutter-width)] relative overflow-hidden flex flex-col items-center bg-white">
        <div className="absolute top-0 bottom-0 w-[1.3px] bg-black/5 pointer-events-none z-0 left-6 md:left-[var(--gutter-width)]"></div>
        <div className="absolute top-0 bottom-0 w-[1.3px] bg-black/5 pointer-events-none z-0 right-6 md:right-[var(--gutter-width)]"></div>
        <div className="absolute top-0 bottom-0 w-[1.3px] bg-black/5 pointer-events-none z-0 left-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 text-center">
          <p className="font-headline text-[10px] tracking-[0.6em] uppercase mb-6 text-primary-container">ESTABLECER PROTOCOLO</p>
          <Link href="/contacto" className="font-headline font-black text-2xl md:text-4xl hover:text-primary-container transition-all tracking-tighter uppercase flex items-center gap-6 group text-[#1F1F1F]">
            INICIAR CONEXIÓN
            <span className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform" aria-hidden="true">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </>
  );
}