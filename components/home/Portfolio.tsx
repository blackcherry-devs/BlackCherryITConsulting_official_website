'use client';

import Link from 'next/link';
import Image from 'next/image';
import GridLines from '@/components/ui/GridLines';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.project-item') as HTMLElement[];

      items.forEach((item) => {
        gsap.from(item, {
          x: '-100vw',
          opacity: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
            end: 'top 60%',
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef },
  );

  const projects = [
    {
      id: 'cerato',
      name: 'Cerato',
      tags: 'DISEÑO / E-COMMERCE / 2026',
      image: '/projects/cerato/cerato1.jpg',
      bgClass: 'hover:bg-[#8B090A]',
      hoverText: 'group-hover:text-white',
      video: '/projects/cerato/video.mp4',
    },
    {
      id: 'adelai',
      name: 'Adelai',
      tags: 'DISEÑO / E-COMMERCE / 2026',
      image: '/projects/adelai/adelai1.jpeg',
      bgClass: 'hover:bg-on-surface',
      hoverText: 'group-hover:text-white',
      video: '/projects/adelai/video.mp4',
    },
    {
      id: 'gpamex',
      name: 'gpamex',
      tags: 'SITIO WEB / 2025',
      image: '/projects/gpamex/gpamex_1.jpg',
      bgClass: 'hover:bg-[#8B090A]',
      hoverText: 'group-hover:text-white',
      video: '/projects/gpamex/video.mp4',
    },
    {
      id: 'grupo-cosiam',
      name: 'GRUPO COSIAM',
      tags: 'DISEÑO / SITIO WEB / IA / 2026',
      image: '/projects/grupo-cosiam/cosiam1.jpg',
      bgClass: 'hover:bg-on-surface',
      hoverText: 'group-hover:text-white',
      video: '/projects/grupo-cosiam/video.mp4',
    },
  ];

  return (
    <section
      id="portafolio"
      className="w-full py-24 min-[600px]:py-40 px-6 min-[600px]:px-[var(--gutter-width)] bg-white relative overflow-hidden"
    >
      <GridLines />
      <div className="lg:px-12 mb-16 min-[600px]:mb-24 relative z-10">
        <span className="font-headline font-black text-primary-container text-[10px] min-[600px]:text-xs tracking-[0.3em] uppercase">
          03 / PORTAFOLIO
        </span>
        <h2 className="mt-6 min-[600px]:mt-8 font-headline font-bold text-3xl min-[600px]:text-5xl lg:text-8xl tracking-tighter uppercase text-on-surface">
          Nuestros clientes
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-outline-variant/10 relative z-10">
        {projects.map((project, idx) => {
          const isRed = project.id === 'cerato' || project.id === 'gpamex';
          const bgClasses = isRed
            ? 'bg-[#8B090A] lg:bg-transparent lg:hover:bg-[#8B090A]'
            : 'bg-[#1a1c1c] lg:bg-transparent lg:hover:bg-[#1a1c1c]';

          return (
            <Link
              href={`/portafolio/${project.id}`}
              key={project.id}
              className={`group relative py-10 min-[600px]:py-12 lg:px-12 cursor-pointer transition-all duration-500 block ${bgClasses}`}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative z-10 gap-2 min-[600px]:gap-4 lg:gap-0">
                <h3
                  className={`font-headline font-black text-3xl min-[600px]:text-6xl uppercase tracking-tighter text-white lg:text-secondary lg:group-hover:text-white transition-colors`}
                >
                  {project.name}
                </h3>
                <span
                  className={`font-body text-[9px] min-[600px]:text-xs uppercase tracking-widest text-white/60 lg:text-secondary lg:group-hover:text-white/60 transition-colors pl-[2px]`}
                >
                  {project.tags}
                </span>
              </div>

              {/* Video reveal - all screens */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] min-[600px]:w-[450px] h-[160px] min-[600px]:h-[280px] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 pointer-events-none overflow-hidden z-40 shadow-2xl rounded-xl bg-black">
                <video
                  src={
                    project.video ||
                    'https://www.w3schools.com/html/mov_bbb.mp4'
                  }
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-left transition-all duration-700"
                />
              </div>

              {/* Mobile small thumbnail (optional, keeping it simple for now) */}
            </Link>
          );
        })}

        <div className="pt-12 min-[600px]:pt-16 flex justify-start lg:justify-end lg:px-12">
          <AnimatedButton href="/portafolio" theme="primary">
            VER MÁS PROYECTOS
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
