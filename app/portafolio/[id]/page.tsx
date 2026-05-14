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
        <section className="flex-none w-full md:w-screen h-auto md:h-screen relative flex flex-col md:flex-row">
          {/* Left: Red Narrative */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex flex-col items-center justify-center" style={{ backgroundColor: project.heroBgOverride || project.color || "#8B090A" }}>
            <div className="absolute inset-0 technical-grid-red opacity-10"></div>
            <div 
              className={`relative z-20 flex items-center justify-center ${project.logoContainerClass || "w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"} ${project.logoBg === "white" ? `bg-white ${project.logoPadding || "p-4 md:p-6"} rounded-2xl shadow-xl` : ""}`}
            >
              <img
                alt={`${project.title} Logo`}
                className="max-w-full max-h-full object-contain"
                src={project.logo}
              />
            </div>
          </div>
          {/* Right: Industrial Image */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
            <img
              alt={`${project.title} Hero Image`}
              className="w-full h-full object-cover grayscale"
              src={project.heroImage}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </section>

        {/* SECTION 2: PROJECT NARRATIVE */}
        <section className="flex-none w-full md:w-screen h-auto md:h-screen relative flex flex-col md:flex-row">
          {/* Left: Narrative Text */}
          <div className="w-full md:w-1/2 h-auto md:h-full bg-white px-8 py-16 md:px-10 lg:px-20 flex flex-col justify-center md:pt-16 lg:pt-24 md:pb-8 lg:pb-12 md:overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <div className="max-w-xl md:max-w-md lg:max-w-xl w-full">
              <p 
                className="font-headline text-[10px] md:text-[9px] lg:text-xs tracking-[0.5em] uppercase mb-4 md:mb-2 lg:mb-4"
                style={{ color: project.color || "var(--primary-container)" }}
              >
                02 / PROTOCOLO DE DISEÑO
              </p>
              <h2 className="font-headline font-black text-3xl md:text-2xl lg:text-4xl text-[#1F1F1F] tracking-tighter uppercase mb-3 md:mb-2 lg:mb-4 leading-[1.1]">
                {project.narrativeTitle}
              </h2>
              <p className="font-body text-stone-500 text-sm md:text-xs lg:text-base leading-relaxed mb-4 md:mb-3 lg:mb-5">
                {project.narrativeText}
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-2 lg:gap-4 pt-6 md:pt-4 lg:pt-6 border-t border-stone-200">
                <div>
                  <span className="block font-headline font-bold text-[10px] md:text-[9px] lg:text-[10px] text-stone-400 uppercase tracking-widest mb-2 md:mb-1 lg:mb-2">
                    {project.stats.techLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-[10px] lg:text-sm text-[#1F1F1F] uppercase">
                    {project.stats.techValue}
                  </span>
                </div>
                <div>
                  <span className="block font-headline font-bold text-[10px] md:text-[9px] lg:text-[10px] text-stone-400 uppercase tracking-widest mb-2 md:mb-1 lg:mb-2">
                    {project.stats.perfLabel}
                  </span>
                  <span className="font-headline font-black text-xs md:text-[10px] lg:text-sm text-[#1F1F1F] uppercase">
                    {project.stats.perfValue}
                  </span>
                </div>
              </div>

              {project.url && (
                <div className="mt-8 md:mt-5 lg:mt-8 w-full">
                  <AnimatedButton
                    href={project.url}
                    theme="primary"
                    className="w-full md:w-auto justify-center md:text-xs lg:text-sm md:px-6 md:py-3 lg:px-8 lg:py-4"
                    style={{ backgroundColor: project.color || "#8B090A" }}
                  >
                    VISITAR SITIO
                  </AnimatedButton>
                </div>
              )}
            </div>
          </div>
          {/* Right: Technical Render */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
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
        <section className="flex-none w-full md:w-screen h-auto md:h-screen relative bg-white px-6 md:px-[7rem] py-16 md:py-24 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-2 md:gap-2 w-full h-auto md:h-[80vh]">
            <div className="col-span-1 md:col-span-8 md:row-span-6 h-[40vh] md:h-auto overflow-hidden relative group">
              <img
                alt="Detail 1"
                className="w-full h-full object-cover transition-all duration-700"
                src={project.galleryImages[0]}
              />
            </div>
            <div className="col-span-1 md:col-span-4 md:row-span-3 h-[30vh] md:h-auto overflow-hidden relative group">
              <img
                alt="Detail 2"
                className="w-full h-full object-cover transition-all duration-700"
                src={project.galleryImages[1]}
              />
            </div>
            <div className="col-span-1 md:col-span-4 md:row-span-3 h-[30vh] md:h-auto overflow-hidden relative group">
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
                