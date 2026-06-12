'use client';

import { useRef } from 'react';
import Link from '@/components/ui/AnimatedLink';
import AnimatedButton from '@/components/ui/AnimatedButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import GridLines from '@/components/ui/GridLines';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      // Parallax on the slanting marquee
      gsap.to('.marquee-container', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Cursor blinking animation
      gsap.to('.cursor', {
        opacity: 1,
        ease: 'steps(1)',
        repeat: -1,
        duration: 0.4,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.writing-machine',
          start: 'top 80%',
        },
      });

      tl.set('.cursor-1', { display: 'inline' })
        .set('.cursor-2', { display: 'none' })
        .to('.type-text-1', {
          duration: 3,
          text: 'Creamos experiencias digitales que captan la atención del público y hacen que las marcas destaquen. Forjamos infraestructuras de alto impacto mediante un proceso de consultoría técnica riguroso y personalizado.',
          ease: 'none',
        })
        .set('.cursor-1', { display: 'none' })
        .set('.cursor-2', { display: 'inline' })
        .to('.type-text-2', {
          duration: 1.5,
          text: 'Transformamos visiones audaces y creativas en resultados concretos.',
          ease: 'none',
        });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="w-full pt-20 min-[600px]:pt-32 pb-56 min-[600px]:pb-48 px-6 min-[600px]:px-[var(--gutter-width)] relative overflow-hidden bg-[#1F1F1F]"
    >
      <GridLines />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10 min-h-[400px]">
        <div className="w-full lg:w-1/3 pl-0 lg:pl-4 flex-col sm:flex-row lg:flex-col justify-between">
          <div>
            <span className="font-headline font-black text-white text-[10px] min-[600px]:text-xs tracking-[0.3em] uppercase">
              01 / SERVICIOS
            </span>
            <h2 className="mt-6 min-[600px]:mt-8 font-headline font-bold text-3xl min-[600px]:text-5xl lg:text-6xl tracking-tighter leading-none uppercase text-white">
              LO QUE <br className="hidden min-[600px]:block" /> HACEMOS
            </h2>
          </div>
          <div className="pt-12 lg:pt-16">
            <AnimatedButton href="/servicios" theme="dark">
              VER NUESTROS SERVICIOS
            </AnimatedButton>
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col justify-start writing-machine relative">
          <div className="bg-[#0f0f0f] rounded-xl border border-white/10 shadow-2xl overflow-hidden w-full backdrop-blur-md">
            {/* Mac Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-2 w-20">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-90 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-90 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-90 shadow-sm"></div>
              </div>
              <div className="flex-1 text-center font-mono text-[13px] text-white/40 select-none tracking-wide">
                bash -- administrador
              </div>
              <div className="w-20"></div> {/* Spacer */}
            </div>

            {/* Terminal Body Container */}
            <div className="p-6 md:p-8 relative">
              {/* Sizer for layout to prevent jumping */}
              <p
                className="font-mono font-light leading-relaxed pr-4 text-base md:text-lg opacity-0 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span className="block mb-6">
                  <span className="font-bold mr-2">➜</span>
                  <span className="font-bold mr-2">~</span>
                  Creamos experiencias digitales que captan la atención del
                  público y hacen que las marcas destaquen. Forjamos
                  infraestructuras de alto impacto mediante un proceso de
                  consultoría técnica riguroso y personalizado.
                  <span className="font-bold ml-1">_</span>
                </span>
                <span className="block">
                  <span className="font-bold mr-2">➜</span>
                  <span className="font-bold mr-2">~</span>
                  Transformamos visiones audaces y creativas en resultados
                  concretos.
                  <span className="font-bold ml-1">_</span>
                </span>
              </p>

              <p
                ref={textRef}
                className="font-mono font-light leading-relaxed absolute top-6 left-6 md:top-8 md:left-8 right-6 md:right-8 z-10 pr-4 text-base md:text-lg"
              >
                <span className="text-[#E6E6E6] block mb-6">
                  <span className="text-[#33C331] font-bold mr-2">➜</span>
                  <span className="text-[#42AAC7] font-bold mr-2">~</span>
                  <span className="type-text-1"></span>
                  <span className="cursor cursor-1 font-bold text-[#E6E6E6] opacity-0 ml-1">
                    _
                  </span>
                </span>
                <span className="text-[#E6E6E6]/60 block">
                  <span className="text-[#33C331] font-bold mr-2">➜</span>
                  <span className="text-[#42AAC7] font-bold mr-2">~</span>
                  <span className="type-text-2"></span>
                  <span className="cursor cursor-2 font-bold text-[#E6E6E6]/60 opacity-0 ml-1">
                    _
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slanted Marquee Banner */}
      <div
        className="marquee-container absolute bottom-16 left-[-10%] right-[-10%] z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="bg-primary-container overflow-hidden py-3 rotate-[-1.5deg] border-y border-white/10">
          <div className="flex w-max whitespace-nowrap animate-marquee">
            {/* Repeated twice for smooth infinite scrolling */}
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  Desarrollo de Sitios Web
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  Desarrollo Front-end y Back-end
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  Diseño Web
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  Desarrollo de eCommerce
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  Optimización SEO
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  INTEGRACIÓN DE IA
                </span>
                <span
                  className="material-symbols-outlined text-white/40 text-xs"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                  aria-hidden="true"
                >
                  circle
                </span>
                <span className="font-headline font-black text-white text-sm uppercase tracking-wider">
                  INTELIGENCIA CONVERSACIONAL
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
