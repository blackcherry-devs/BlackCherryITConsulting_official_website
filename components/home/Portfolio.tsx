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
      ref={containerRef}
      id="portafolio"
      className="w-full py-32 md:py-40 px-4 md:px-[7rem] bg-white relative overflow-hidden"
    >
      <GridLines />
      <div className="px-4 md:px-12 mb-16 md:mb-24 relative z-10">
        <span className="font-headline font-black text-primary-container text-xs tracking-[0.3em] uppercase">
          03 / PORTAFOLIO
        </span>
        <h2 className="mt-8 font-headline font-bold text-5xl md:text-8xl tracking-tighter uppercase text-on-surface">
          Portafolio
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-outline-variant/10 relative z-10">
        {projects.map((project, idx) => (
          <Link
            href={`/portafolio/${project.id}`}
            key={project.id}
            className={`project-item group relative py-8 md:py-12 px-4 md:px-12 cursor-pointer block ${project.bgClass}`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4 md:gap-0">
              <h3
                className={`font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter text-secondary ${project.hoverText} transition-colors`}
              >
                {project.name}
              </h3>
              <span
                className={`font-body text-[10px] md:text-xs uppercase tracking-widest text-secondary group-hover:text-white/60 transition-colors`}
              >
                {project.tags}
              </span>
            </div>
            {/* Desktop only video reveal */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none overflow-hidden z-20 shadow-2xl rounded-xl bg-black">
              <video
                src={
                  project.video || 'https://www.w3schools.com/html/mov_bbb.mp4'
                }
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-left grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
            </div>
          </Link>
        ))}

        <div className="pt-16 flex justify-start md:justify-end px-4 md:px-12">
          <AnimatedButton href="/portafolio" theme="primary">
            VER MÁS PROYECTOS
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
