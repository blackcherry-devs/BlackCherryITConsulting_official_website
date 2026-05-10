"use client";

import { useRef } from "react";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridLines from "@/components/ui/GridLines";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Parallax on the slanting marquee
    gsap.to(".marquee-container", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal text
    gsap.from(textRef.current?.children || [], {
      opacity: 0.1,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
    });

  }, { scope: containerRef });

  return (
    <section id="servicios" ref={containerRef} className="w-full pt-32 pb-48 px-4 md:px-[7rem] relative overflow-hidden bg-[#1F1F1F]">
      <GridLines />
      <div className="flex flex-col md:flex-row gap-16 relative z-10 min-h-[400px]">
        <div className="md:w-1/3 pl-0 md:pl-4 flex flex-col justify-between">
          <div>
            <span className="font-headline font-black text-white text-xs tracking-[0.3em] uppercase">01 / SERVICIOS</span>
            <h2 className="mt-8 font-headline font-bold text-5xl md:text-6xl tracking-tighter leading-none uppercase text-white">
              LO QUE <br /> HACEMOS
            </h2>
          </div>
          <div className="pt-16">
            <AnimatedButton href="/servicios" theme="dark">
              VER NUESTROS SERVICIOS
            </AnimatedButton>
          </div>
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-start">
          <p ref={textRef} className="font-headline font-light leading-snug relative z-[110] pr-4 text-xl md:text-2xl">
            <span className="text-white block mb-6">Creamos experiencias digitales que captan la atención del público y hacen que las marcas destaquen. Forjamos infraestructuras de alto impacto mediante un proceso de consultoría técnica riguroso y personalizado.</span>
            <span className="text-white/60 block">Transformamos visiones audaces y creativas en resultados concretos.</span>
          </p>
        </div>
      </div>

      {/* Slanted Marquee Banner */}
      <div className="marquee-container absolute bottom-16 left-[-10%] right-[-10%] z-20 pointer-events-none">
        <div className="bg-primary-container overflow-hidden py-3 rotate-[-1.5deg] border-y border-white/10">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Repeated twice for smooth infinite scrolling */}
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">Desarrollo de Sitios Web</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">Desarrollo Front-end y Back-end</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">Diseño Web</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">Desarrollo de eCommerce</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">Optimización SEO</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">INTEGRACIÓN DE IA</span>
                <span className="material-symbols-outlined text-white/40 text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>circle</span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">INTELIGENCIA CONVERSACIONAL</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
