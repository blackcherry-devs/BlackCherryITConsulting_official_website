"use client";

import React, { useEffect, useRef, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import GridLines from "@/components/ui/GridLines";
import { portfolioData } from "@/lib/data/portfolio";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SwipeCards } from "@/components/ui/SwipeCards";
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Unwrap params for Next.js 15+
  const resolvedParams = use(params);
  
  // Find project data
  const project = portfolioData.find(p => p.id === resolvedParams.id);

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

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  if (!project) {
    return notFound();
  }

  return (
    <div className="relative w-full h-auto md:h-screen bg-white font-body text-on-surface selection:bg-primary-container selection:text-white md:overflow-hidden overflow-y-auto overflow-x-hidden">
      {/* Global Architectural Grid Lines overlaying the entire page */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <GridLines />
      </div>

      {/* Back to Portfolio Button (Fixed in Gutter) */}
      <div className="fixed bottom-12 left-0 w-[var(--gutter-width)] hidden md:flex flex-col items-center justify-center z-[100]">
        <Link href="/portafolio" className="group flex flex-col items-center gap-6">
          <span className="font-headline font-black text-[11px] tracking-[0.5em] uppercase vertical-text-up text-primary-container transition-all duration-500 group-hover:scale-110">
            VOLVER AL PORTAFOLIO
          </span>
          <div className="w-[1.5px] h-16 bg-primary-container transition-all duration-500 group-hover:h-28"></div>
        </Link>
      </div>


      {/* Horizontal Scroll Container without snap jumping */}
      <div 
        className="flex flex-col md:flex-row w-full h-auto md:h-full md:overflow-x-auto md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]" 
        ref={scrollRef}
      >
        {/* SECTION 1: HERO */}
        <section className="flex-none w-full md:w-screen h-[70vh] md:h-screen relative flex flex-col md:flex-row">
          
          {/* Mobile Overlay Background Image (Hidden on Desktop) */}
          <div className="absolute inset-0 w-full h-full md:hidden z-0">
            <Image
              alt={`${project.title} Hero Image`}
              className="object-cover md:grayscale"
              src={project.heroImage}
              fill
              priority
            />
            {/* Dark overlay to make logo pop on mobile */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Left: Logo Container */}
          <div className="w-full md:w-1/2 h-full relative flex flex-col items-center justify-center z-10">
            {/* Mobile Center Line behind Logo (Removed per request) */}
            
            {/* Desktop Solid Background */}
            <div className="hidden md:block absolute inset-0 z-0" style={{ backgroundColor: project.heroBgOverride || project.color || "#8B090A" }}></div>
            <div className="hidden md:block absolute inset-0 technical-grid-red opacity-10 z-0"></div>
            
            <div 
              className={`relative z-20 flex items-center justify-center ${project.logoContainerClass || "w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"} ${project.logoBg === "white" ? `bg-white ${project.logoPadding || "p-4 md:p-6"} rounded-2xl shadow-xl` : ""}`}
            >
              <Image
                alt={`${project.title} Logo`}
                className="object-contain drop-shadow-2xl md:drop-shadow-none p-4"
                src={project.logo}
                fill
                priority
              />
            </div>
          </div>
          
          {/* Right: Industrial Image (Hidden on mobile) */}
          <div className="hidden md:block w-1/2 h-full relative overflow-hidden z-10">
            <Image
              alt={`${project.title} Hero Image`}
              className="object-cover grayscale"
              src={project.heroImage}
              fill
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </section>

        {/* SECTION 2: PROJECT NARRATIVE */}
        <section className="flex-none w-full md:w-screen h-auto md:h-screen relative flex flex-col md:flex-row">
          {/* Left: Narrative Text */}
          <div className="w-full md:w-1/2 h-auto md:h-full bg-white px-8 py-16 md:px-10 lg:px-14 flex flex-col items-center md:items-start text-center md:text-left justify-center md:pt-16 lg:pt-20 md:pb-8 lg:pb-10 md:overflow-y-auto [&::-webkit-scrollbar]:hidden relative">
            {/* Mobile Center Line behind Text (Removed per request) */}
            
            <div className="max-w-xl md:max-w-md lg:max-w-lg w-full flex flex-col items-center md:items-start relative z-10 bg-white/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none p-4 md:p-0 rounded-2xl">
              <p 
                className="font-headline text-[10px] md:text-[9px] lg:text-[10px] tracking-[0.5em] uppercase mb-4 md:mb-2 lg:mb-3"
                style={{ color: project.color || "var(--primary-container)" }}
              >
                02 / PROTOCOLO DE DISEÑO
              </p>
              <h2 className="font-headline font-black text-3xl md:text-2xl lg:text-3xl text-[#1F1F1F] tracking-tighter uppercase mb-3 md:mb-2 lg:mb-3 leading-[1.1]">
                {project.narrativeTitle}
              </h2>
              <p className="font-body text-stone-500 text-sm md:text-xs lg:text-sm leading-relaxed mb-4 md:mb-3 lg:mb-4">
                {project.narrativeText}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 lg:gap-3 pt-6 md:pt-4 lg:pt-5 border-t border-stone-200 w-full">
                <div className="flex flex-col items-center md:items-start">
                  <span className="block font-headline font-bold text-[10px] md:text-[9px] lg:text-[9px] text-stone-400 uppercase tracking-widest mb-2 md:mb-1 lg:mb-1.5">
                    {project.stats.techLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-[10px] lg:text-xs text-[#1F1F1F] uppercase">
                    {project.stats.techValue}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="block font-headline font-bold text-[10px] md:text-[9px] lg:text-[9px] text-stone-400 uppercase tracking-widest mb-2 md:mb-1 lg:mb-1.5">
                    {project.stats.perfLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-[10px] lg:text-xs text-[#1F1F1F] uppercase">
                    {project.stats.perfValue}
                  </span>
                </div>
              </div>

              {project.url && (
                <div className="mt-8 md:mt-5 lg:mt-6 w-full flex justify-center md:justify-start">
                  <AnimatedButton
                    href={project.url}
                    theme="primary"
                    className="w-full md:w-auto justify-center md:text-xs lg:text-xs md:px-6 md:py-3 lg:px-7 lg:py-3"
                    style={{ backgroundColor: project.color || "#8B090A" }}
                  >
                    VISITAR SITIO
                  </AnimatedButton>
                </div>
              )}
            </div>
          </div>
          {/* Right: Technical Render (Hidden on mobile, moved to creative gallery) */}
          <div className="hidden md:block w-1/2 h-full relative z-10">
            <Image
              alt={`${project.title} Technical Render`}
              className="object-cover grayscale"
              src={project.technicalImage}
              fill
            />
            <div className="absolute inset-0 opacity-10" style={{ backgroundColor: project.color || "#8B090A" }}></div>
            <div className="absolute inset-0 technical-grid-red opacity-20 pointer-events-none"></div>
          </div>
        </section>

        {/* SECTION 3: GALLERY GRID (Images only, different container sizes) */}
        <section className="flex-none w-full md:w-screen h-auto md:h-screen relative bg-[#1F1F1F] md:bg-white md:px-[7rem] md:py-24 flex flex-col justify-center">
          
          {/* MOBILE CREATIVE GALLERY: Swipe Cards */}
          <div className="flex flex-col w-full md:hidden relative pb-16 pt-12 overflow-hidden">
            {/* Center line for consistency */}
            <div className="absolute top-0 bottom-0 w-[1.3px] bg-white/10 left-1/2 -translate-x-1/2 z-0 pointer-events-none"></div>
            
            <div className="text-center w-full z-10 mb-8 px-6">
               <p className="font-headline text-[10px] tracking-[0.5em] uppercase text-white mb-2">03 / ARCHIVO VISUAL</p>
               <h2 className="font-headline font-black text-2xl text-white tracking-tighter uppercase">DISEÑO DETALLADO</h2>
            </div>

            <div className="w-full flex items-center justify-center z-10">
                <SwipeCards images={[project.technicalImage, ...project.galleryImages]} />
            </div>
            
            <div className="text-center w-full z-10 mt-6 px-6">
               <p className="font-headline text-[9px] tracking-widest uppercase text-white/50 mb-12">Desliza las tarjetas para explorar</p>
               
               <AnimatedButton
                 href="/portafolio"
                 theme="primary"
                 className="w-full justify-center text-xs px-6 py-4"
                 style={{ backgroundColor: project.color || "#8B090A" }}
               >
                 VOLVER AL PORTAFOLIO
               </AnimatedButton>
            </div>
          </div>

          {/* DESKTOP GALLERY GRID */}
          <div className="hidden md:grid grid-cols-12 grid-rows-6 gap-2 w-full h-[80vh]">
            <div className="col-span-8 row-span-6 overflow-hidden relative group">
              <Image
                alt={`${project.title} Detail 1`}
                className="object-cover transition-all duration-700"
                src={project.galleryImages[0]}
                fill
              />
            </div>
            <div className="col-span-4 row-span-3 overflow-hidden relative group">
              <Image
                alt={`${project.title} Detail 2`}
                className="object-cover transition-all duration-700"
                src={project.galleryImages[1]}
                fill
              />
            </div>
            <div className="col-span-4 row-span-3 overflow-hidden relative group">
              <Image
                alt={`${project.title} Detail 3`}
                className="object-cover transition-all duration-700"
                src={project.galleryImages[2]}
                fill
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
                