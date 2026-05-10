"use client";

import React, { useEffect, useRef, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import GridLines from "@/components/ui/GridLines";
import { portfolioData } from "@/lib/data/portfolio";
import AnimatedButton from "@/components/ui/AnimatedButton";

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
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  if (!project) {
    return notFound();
  }

  return (
    <div className="relative w-full h-screen bg-white font-body text-on-surface selection:bg-primary-container selection:text-white overflow-hidden">
      {/* Global Architectural Grid Lines overlaying the entire page */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <GridLines />
      </div>

      {/* Brand Icon (Outside Margin) */}
      <div className="fixed top-0 left-0 w-[7rem] h-20 flex items-center justify-center z-[100]">
        <div className="relative flex flex-col items-center">
          <Link href="/">
            <img src="/cherry-icon.png" alt="BlackCherry Icon" className="w-10 h-10 object-contain" />
          </Link>
        </div>
      </div>

      {/* Back to Portfolio Button (Fixed in Gutter) */}
      <div className="fixed bottom-12 left-0 w-[7rem] hidden md:flex flex-col items-center justify-center z-[100]">
        <Link href="/portafolio" className="group flex flex-col items-center gap-6">
          <span className="font-headline font-black text-[11px] tracking-[0.5em] uppercase vertical-text-up text-primary-container transition-all duration-500 group-hover:scale-110">
            VOLVER AL PORTAFOLIO
          </span>
          <div className="w-[1.5px] h-16 bg-primary-container transition-all duration-500 group-hover:h-28"></div>
        </Link>
      </div>

      {/* Navbar Wrapper */}
      <div className="fixed top-0 left-[7rem] right-[7rem] h-20 z-[60] flex pointer-events-none">
        <nav className="w-1/2 bg-black/10 backdrop-blur-md flex items-center px-12 h-full pointer-events-auto border-b border-white/10">
          <div className="flex gap-12 items-center w-full justify-start">
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/"
            >
              INICIO
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/servicios"
            >
              SERVICIOS
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-black text-[10px] md:text-xs text-white border-b-2 border-white pb-1"
              href="/portafolio"
            >
              PORTAFOLIO
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/ia"
            >
              IA
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/contacto"
            >
              CONTACTO
            </Link>
          </div>
        </nav>
        <div className="w-1/2 flex items-center justify-end px-12 h-full pointer-events-auto border-b border-white/10">
          <AnimatedButton 
            href="/contacto" 
            theme="primary"
          >
            TRABAJA CON NOSOTROS
          </AnimatedButton>
        </div>
      </div>

      {/* Horizontal Scroll Container without snap jumping */}
      <div 
        className="flex w-full h-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
        ref={scrollRef}
      >
        {/* SECTION 1: HERO */}
        <section className="flex-none w-screen h-screen relative flex">
          {/* Left: Red Narrative */}
          <div className="w-1/2 h-full relative flex flex-col items-center justify-center" style={{ backgroundColor: project.heroBgOverride || project.color || "#8B090A" }}>
            <div className="absolute inset-0 technical-grid-red opacity-10"></div>
            <div 
              className={`relative z-20 flex items-center justify-center ${project.logoContainerClass || "w-40 h-40 md:w-64 md:h-64"} ${project.logoBg === "white" ? `bg-white ${project.logoPadding || "p-6"} rounded-2xl shadow-xl` : ""}`}
            >
              <img
                alt={`${project.title} Logo`}
                className="max-w-full max-h-full object-contain"
                src={project.logo}
              />
            </div>
          </div>
          {/* Right: Industrial Image */}
          <div className="w-1/2 h-full relative overflow-hidden">
            <img
              alt={`${project.title} Hero Image`}
              className="w-full h-full object-cover grayscale"
              src={project.heroImage}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </section>

        {/* SECTION 2: PROJECT NARRATIVE */}
        <section className="flex-none w-screen h-screen relative flex">
          {/* Left: Narrative Text */}
          <div className="w-1/2 h-full bg-white px-12 md:px-28 flex flex-col justify-start pt-28 pb-12">
            <div className="max-w-xl">
              <p 
                className="font-headline text-xs tracking-[0.5em] uppercase mb-4"
                style={{ color: project.color || "var(--primary-container)" }}
              >
                02 / PROTOCOLO DE DISEÑO
              </p>
              <h2 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-[#1F1F1F] tracking-tighter uppercase mb-3 md:mb-4 leading-[1.1]">
                {project.narrativeTitle}
              </h2>
              <p className="font-body text-stone-500 text-sm md:text-base leading-relaxed mb-4">
                {project.narrativeText}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                <div>
                  <span className="block font-headline font-bold text-[10px] text-stone-400 uppercase tracking-widest mb-2">
                    {project.stats.techLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-sm text-[#1F1F1F] uppercase">
                    {project.stats.techValue}
                  </span>
                </div>
                <div>
                  <span className="block font-headline font-bold text-[10px] text-stone-400 uppercase tracking-widest mb-2">
                    {project.stats.perfLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-sm text-[#1F1F1F] uppercase">
                    {project.stats.perfValue}
                  </span>
                </div>
              </div>

              {project.url && (
                <div className="mt-4">
                  <AnimatedButton
                    href={project.url}
                    theme="primary"
                    style={{ backgroundColor: project.color || "#8B090A" }}
                  >
                    VISITAR SITIO
                  </AnimatedButton>
                </div>
              )}
            </div>
          </div>
          {/* Right: Technical Render */}
          <div className="w-1/2 h-full relative">
            <img
              alt={`${project.title} Technical Render`}
              className="w-full h-full object-cover grayscale"
              src={project.technicalImage}
            />
            <div className="absolute inset-0 opacity-10" style={{ backgroundColor: project.color || "#8B090A" }}></div>
            <div className="absolute inset-0 technical-grid-red opacity-20 pointer-events-none"></div>
          </div>
        </section>

        {/* SECTION 3: GALLERY GRID (Images only, different container sizes) */}
        <section className="flex-none w-screen h-screen relative bg-white px-6 md:px-[7rem] py-24 flex flex-col justify-center">
          <div className="grid grid-cols-12 grid-rows-6 gap-2 w-full h-[80vh]">
            <div className="col-span-8 row-span-6 overflow-hidden relative group">
              <img
                alt="Detail 1"
                className="w-full h-full object-cover transition-all duration-700"
                src={project.galleryImages[0]}
              />
            </div>
            <div className="col-span-4 row-span-3 overflow-hidden relative group">
              <img
                alt="Detail 2"
                className="w-full h-full object-cover transition-all duration-700"
                src={project.galleryImages[1]}
              />
            </div>
            <div className="col-span-4 row-span-3 overflow-hidden relative group">
              <img
                alt="Detail 3"
                className="w-full h-full object-cover transition-all duration-700"
                src={project.galleryImages[2]}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
