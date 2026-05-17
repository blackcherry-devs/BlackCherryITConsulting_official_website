'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Section from '@/components/layout/Section';
import DotPattern from '@/components/ui/DotPattern';
import { ScrollTrigger } from 'gsap/all';

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <Section
      theme="dark"
      className="!bg-on-surface py-24 min-[600px]:py-32 px-0 min-[600px]:px-[var(--gutter-width)]"
      noPadding
    >
      <div ref={containerRef}>
        <div className="mb-16 min-[600px]:mb-20 relative z-10 flex flex-col items-start px-6 min-[600px]:px-4">
          <span className="font-headline font-black text-white text-[10px] min-[600px]:text-xs tracking-[0.3em] uppercase mb-4">
            02 / Áreas de Impacto
          </span>
          <h2 className="font-headline font-black text-3xl min-[600px]:text-5xl uppercase tracking-tighter">
            Sectores IA
          </h2>
          <div className="w-24 h-[1.3px] bg-primary-container mt-6"></div>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-12 gap-0 min-[600px]:gap-4 lg:gap-6 relative z-10">
          {/* Sector Industrial */}
          <div className="bento-card-anim lg:col-span-8 bento-card bg-white/[0.03] backdrop-blur-sm p-6 min-[600px]:p-8 lg:p-12 xl:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[300px] min-[600px]:min-h-[280px] lg:min-h-[400px] rounded-none min-[600px]:rounded-xl">
            <DotPattern opacity={0.2} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-1000">
              <Image
                src="/sectors/industrial.png"
                alt="Sector industrial — IA y automatización para manufactura"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-primary-container text-3xl min-[600px]:text-4xl mb-4 min-[600px]:mb-6 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                aria-hidden="true"
              >
                precision_manufacturing
              </span>
              <h3 className="font-headline font-black text-3xl min-[600px]:text-4xl lg:text-5xl xl:text-6xl tracking-tighter uppercase leading-none">
                Industria
              </h3>
            </div>
            <p className="relative z-10 font-body text-white/40 max-w-md text-[10px] min-[600px]:text-xs lg:text-sm xl:text-base uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-6">
              Asistencia por voz y chatbots de soporte técnico integrados para
              maximizar la eficiencia operativa.
            </p>
          </div>

          {/* Retail */}
          <div className="bento-card-anim lg:col-span-4 bento-card bg-primary-container/20 p-6 min-[600px]:p-8 lg:p-12 xl:p-16 flex flex-col justify-between group border-primary-container/30 rounded-none min-[600px]:rounded-xl min-h-[250px] min-[600px]:min-h-[280px] lg:min-h-auto">
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-primary-container text-3xl min-[600px]:text-4xl mb-4 min-[600px]:mb-6 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                aria-hidden="true"
              >
                shopping_bag
              </span>
              <h3 className="font-headline font-black text-3xl min-[600px]:text-4xl lg:text-5xl xl:text-6xl tracking-tighter uppercase leading-none">
                Retail
              </h3>
            </div>
            <p className="font-body text-white/40 text-[10px] min-[600px]:text-xs lg:text-sm xl:text-base uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-6">
              Ventas automatizadas y atención al cliente 24/7 mediante agentes
              conversacionales inteligentes.
            </p>
          </div>

          {/* EdTech */}
          <div className="bento-card-anim lg:col-span-4 bento-card bg-white/[0.03] backdrop-blur-sm p-6 min-[600px]:p-8 lg:p-12 xl:p-16 flex flex-col justify-between group min-h-[250px] min-[600px]:min-h-[280px] lg:min-h-[400px] rounded-none min-[600px]:rounded-xl">
            <div>
              <span
                className="material-symbols-outlined text-primary-container text-3xl min-[600px]:text-4xl mb-4 min-[600px]:mb-6 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                aria-hidden="true"
              >
                school
              </span>
              <h3 className="font-headline font-black text-3xl min-[600px]:text-4xl lg:text-5xl xl:text-6xl tracking-tighter uppercase leading-none">
                EdTech
              </h3>
            </div>
            <p className="font-body text-white/40 text-[10px] min-[600px]:text-xs lg:text-sm xl:text-base uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors mt-6">
              Experiencias de aprendizaje con audio de alta fidelidad y
              asistencia automatizada para estudiantes.
            </p>
          </div>

          {/* Real Estate */}
          <div className="bento-card-anim lg:col-span-8 bento-card bg-white p-6 min-[600px]:p-8 lg:p-12 xl:p-16 flex flex-col justify-between relative overflow-hidden group border-none rounded-none min-[600px]:rounded-xl min-h-[300px] min-[600px]:min-h-[280px] lg:min-h-[400px]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-1000 z-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb"
                alt="Sector inmobiliario — automatización con IA para bienes raíces"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 p-8 min-[600px]:p-12 opacity-5 group-hover:opacity-20 group-hover:translate-x-[-10px] transition-all duration-1000 pointer-events-none z-0">
              <span
                className="material-symbols-outlined text-[6rem] min-[600px]:text-[10rem] lg:text-[12rem] xl:text-[15rem] text-primary-container leading-none"
                aria-hidden="true"
              >
                domain
              </span>
            </div>
            <div className="relative z-10 text-black">
              <span
                className="material-symbols-outlined text-primary-container text-3xl min-[600px]:text-4xl mb-4 min-[600px]:mb-6 block transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                aria-hidden="true"
              >
                real_estate_agent
              </span>
              <h3 className="font-headline font-black text-3xl min-[600px]:text-4xl lg:text-5xl xl:text-6xl tracking-tighter uppercase leading-none">
                Inmuebles
              </h3>
            </div>
            <div className="relative z-10 flex gap-4 items-center mt-6 text-black">
              <span className="w-8 min-[600px]:w-12 h-[1.3px] bg-black/40 group-hover:bg-primary-container group-hover:w-24 transition-all duration-500"></span>
              <p className="font-body text-black/60 uppercase tracking-widest text-[8px] min-[600px]:text-[10px] lg:text-[11px] xl:text-[12px] font-black max-w-[200px] min-[600px]:max-w-md">
                CAPTACIÓN DE LEADS Y NARRACIÓN DE PROPIEDADES CON VOCES HUMANAS
              </p>
            </div>
          </div>

          {/* Legal */}
          <div className="bento-card-anim min-[600px]:col-span-2 lg:col-span-12 bento-card bg-white/[0.03] backdrop-blur-sm relative z-20 p-6 min-[600px]:p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center group rounded-none min-[600px]:rounded-xl min-h-[200px] min-[600px]:min-h-[150px] lg:min-h-auto gap-8">
            <div className="flex items-center gap-4 min-[600px]:gap-10">
              <span
                className="material-symbols-outlined text-primary-container text-3xl min-[600px]:text-4xl group-hover:rotate-45 transition-transform duration-700"
                aria-hidden="true"
              >
                gavel
              </span>
              <h3 className="font-headline font-black text-2xl min-[600px]:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tighter">
                Legal & Consultoría
              </h3>
            </div>
            <p className="font-body text-white/30 max-w-md text-left lg:text-right uppercase tracking-widest text-[8px] min-[600px]:text-[10px] lg:text-xs xl:text-sm font-bold group-hover:text-white/60 transition-colors">
              Sistemas de agendamiento y triage de clientes automatizado para
              despachos y consultorías.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
