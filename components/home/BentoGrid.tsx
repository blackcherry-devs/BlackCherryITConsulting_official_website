'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GridLines from '@/components/ui/GridLines';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BentoGrid() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.bento-card') as HTMLElement[];

      // Hide them initially so they don't pop-in before the animation starts
      gsap.set(cards, { opacity: 0, scale: 0 });

      ScrollTrigger.batch(cards, {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          // 1. Fluid opacity fade independently so it doesn't "flicker/bounce"
          gsap.fromTo(
            batch,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
              stagger: 0.15,
              overwrite: 'auto',
            },
          );

          // 2. Bouncing spring applied ONLY to the scale
          gsap.fromTo(
            batch,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.6,
              ease: 'back.out(2.5)',
              stagger: 0.15,
              overwrite: 'auto',
            },
          );
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-32 px-4 md:px-[7rem] bg-on-surface text-white relative overflow-hidden"
    >
      <GridLines />
      <div className="mb-20 relative z-10 flex flex-col items-start pl-4">
        <span className="font-headline font-black text-white text-xs tracking-[0.3em] uppercase mb-4">
          02 / Áreas de Impacto
        </span>
        <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter">
          Sectores IA
        </h2>
        <div className="w-24 h-[1.3px] bg-primary-container mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Sector Industrial */}
        <div className="bento-card-anim md:col-span-8 bento-card bg-white/[0.03] backdrop-blur-sm p-8 md:p-16 flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-[300px] md:min-h-[420px] rounded-xl">
          <div className="absolute inset-0 wireframe-overlay opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-1000">
            <Image
              src="/sectors/industrial.png"
              alt="industrial complex"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
              precision_manufacturing
            </span>
            <h3 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
              Industria
            </h3>
          </div>
          <p className="relative z-10 font-body text-white/40 max-w-sm text-xs md:text-sm uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-8">
            Asistencia por voz y chatbots de soporte técnico integrados para
            maximizar la eficiencia operativa.
          </p>
        </div>

        {/* E-Commerce */}
        <div className="bento-card-anim md:col-span-4 bento-card bg-primary-container/20 p-8 md:p-16 flex flex-col justify-between group cursor-pointer border-primary-container/30 rounded-xl">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
              shopping_bag
            </span>
            <h3 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
              Retail
            </h3>
          </div>
          <p className="font-body text-white/40 text-xs md:text-sm uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-8">
            Ventas automatizadas y atención al cliente 24/7 mediante agentes
            conversacionales inteligentes.
          </p>
        </div>

        {/* E-learning */}
        <div className="bento-card-anim md:col-span-4 bento-card bg-white/[0.03] backdrop-blur-sm p-8 md:p-16 flex flex-col justify-between group cursor-pointer min-h-[300px] md:min-h-[420px] rounded-xl">
          <div>
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
              school
            </span>
            <h3 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
              EdTech
            </h3>
          </div>
          <p className="font-body text-white/40 text-xs md:text-sm uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-8">
            Experiencias de aprendizaje con audio de alta fidelidad y asistencia
            automatizada para estudiantes.
          </p>
        </div>

        {/* Real Estate */}
        <div className="bento-card-anim md:col-span-8 bento-card bg-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden group cursor-pointer border-none rounded-xl">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-1000 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb"
              alt="real estate"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 group-hover:translate-x-[-10px] transition-all duration-1000 pointer-events-none z-0">
            <span className="material-symbols-outlined text-[10rem] md:text-[15rem] text-primary-container leading-none">
              domain
            </span>
          </div>
          <div className="relative z-10 mix-blend-difference text-white">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110">
              real_estate_agent
            </span>
            <h3 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
              Inmuebles
            </h3>
          </div>
          <div className="relative z-10 flex gap-4 items-center mt-8 mix-blend-difference text-white">
            <span className="w-12 h-[1.3px] bg-white/40 group-hover:bg-primary-container group-hover:w-24 transition-all duration-500"></span>
            <p className="font-body text-white/60 uppercase tracking-widest text-[10px] font-black">
              CAPTACIÓN DE LEADS Y NARRACIÓN DE PROPIEDADES CON VOCES HUMANAS
            </p>
          </div>
        </div>

        {/* Legal */}
        <div className="bento-card-anim md:col-span-12 bento-card bg-white/[0.03] backdrop-blur-sm relative z-20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer rounded-xl">
          <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-0">
            <span className="material-symbols-outlined text-primary-container text-4xl group-hover:rotate-45 transition-transform duration-700">
              gavel
            </span>
            <h3 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter">
              Legal & Consultoría
            </h3>
          </div>
          <p className="font-body text-white/30 max-w-xs text-left md:text-right uppercase tracking-widest text-[10px] font-bold group-hover:text-white/60 transition-colors">
            Sistemas de agendamiento y triage de clientes automatizado para
            despachos y consultorías.
          </p>
        </div>
      </div>
    </section>
  );
}
