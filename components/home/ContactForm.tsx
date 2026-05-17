'use client';

import Section from '@/components/layout/Section';
import GlyphRain from '@/components/ui/GlyphRain';
import ContactForm from '@/components/forms/ContactForm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeContactForm() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Hide the right side at the bottom initially for all screens
      gsap.set('.form-right-side', { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
        },
      });

      tl.to('.form-right-side', {
        yPercent: 0,
        ease: 'none',
      });
    },
    { scope: containerRef },
  );

  return (
    <Section
      id="contacto"
      theme="dark"
      noPadding
      className="flex flex-col md:flex-row !bg-[#1F1F1F]"
      ref={containerRef}
    >
      {/* Split Background: Solid White on Right */}
      <div className=" form-right-side absolute inset-y-0 right-0 w-full md:w-1/2 bg-white z-0 hidden md:block"></div>

      {/* Glyph Rain Background */}
      <GlyphRain opacity={0.1} />

      <div className="relative z-10 flex flex-col md:flex-row items-stretch w-full px-4 min-[600px]:px-[4rem] lg:px-[7rem] py-20 md:py-32 lg:py-48">
        {/* Left Side: Massive Typography & Info */}
        <div className="form-left-side w-full md:w-1/2 lg:w-[52%] flex flex-col justify-center pl-0 lg:pr-12 py-12">
          <span className="font-headline font-black text-white text-xs tracking-[0.4em] uppercase mb-12 block">
            05 / CONTACTO
          </span>
          <h2 className="font-headline font-black text-[10vw] md:text-[6vw] leading-[0.9] tracking-tighter uppercase mb-12">
            HABLEMOS <br /> DEL <br />{' '}
            <span className="text-[#8B090A]">FUTURO.</span>
          </h2>
          <div className="max-w-md">
            <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-16">
              Su próximo sitio web comienza aquí. Déjenos los detalles técnicos
              a nosotros.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">
                  Transmission
                </span>
                <a
                  className="font-headline font-bold text-xl hover:text-primary-container transition-colors tracking-tight"
                  href="mailto:blackcherrydevs@gmail.com"
                >
                  blackcherrydevs@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">
                  Coordinates
                </span>
                <p className="font-headline font-bold text-xl tracking-tight">
                  Remote / León, Guanajuato, Mexico.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sophisticated Glassmorphism Form over White BG */}
        <div className="form-right-side w-full md:w-1/2 lg:w-[48%] flex items-center justify-center md:justify-end pr-0 lg:pr-12 py-12 absolute md:relative inset-0 md:inset-auto z-20">
          {/* Mobile background fix - Simplified */}
          <div className="absolute inset-0 bg-white z-0 md:hidden"></div>

          <div className="w-full max-w-full px-6 min-[600px]:px-12 md:px-2 lg:px-0 relative overflow-hidden rounded-xl bg-white md:bg-transparent border-none shadow-none">
            {/* Subtle Form Background Polish */}
            <div className="absolute inset-0 wireframe-overlay opacity-5 pointer-events-none hidden min-[600px]:block"></div>

            <div className="relative z-10">
              <ContactForm theme="industrial" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
