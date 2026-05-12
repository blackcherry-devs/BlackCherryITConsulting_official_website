'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AnimatedButton from '@/components/ui/AnimatedButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const pathname = usePathname();
  const isProjectDetail =
    pathname.startsWith('/portafolio/') && pathname !== '/portafolio';
  const isContact = pathname === '/contacto';
  const navRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      // Intermittent flicker every 10 seconds
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 10 });
      tl.to('.flicker-btn', {
        opacity: 0.3,
        duration: 0.08,
        yoyo: true,
        repeat: 5,
      }).to('.flicker-btn', { opacity: 1, duration: 0.08 });
    },
    { scope: navRef },
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isIA = pathname === '/ia' || pathname.startsWith('/ia/');

  if (isProjectDetail || isContact || isIA) return null;

  return (
    <>
      {/* Brand Icon - Left Fixed */}
      <div className="fixed top-0 left-0 w-[7rem] h-20 flex items-center justify-center z-[60] bg-surface">
        <Link href="/">
          <img
            src="/cherry-icon.png"
            alt="BlackCherry Icon"
            className="w-10 h-10 object-contain"
          />
        </Link>
      </div>

      {/* Navbar Wrapper */}
      <div className="fixed top-0 left-[7rem] right-[7rem] h-20 z-50 flex pointer-events-none">
        {/* Left Navbar */}
        <nav
          className={cn(
            'relative w-1/2 flex items-center px-12 h-full pointer-events-auto transition-all duration-500 bg-white',
            scrolled ? 'shadow-[0_40px_80px_rgba(26,28,28,0.06)]' : '',
          )}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[1.3px] bg-gray-500/20 mix-blend-difference pointer-events-none"></div>
          <div className="flex gap-12 items-center w-full justify-start relative z-10">
            <Link
              className={`font-headline tracking-tighter uppercase text-[10px] md:text-xs transition-colors ${pathname === '/' ? 'font-black text-primary-container border-b-2 border-primary-container pb-1' : 'font-bold text-stone-500 hover:text-stone-900'}`}
              href="/"
            >
              INICIO
            </Link>
            <Link
              className={`font-headline tracking-tighter uppercase text-[10px] md:text-xs transition-colors ${pathname.startsWith('/servicios') ? 'font-black text-primary-container border-b-2 border-primary-container pb-1' : 'font-bold text-stone-500 hover:text-stone-900'}`}
              href="/servicios"
            >
              SERVICIOS
            </Link>
            <Link
              className={`font-headline tracking-tighter uppercase text-[10px] md:text-xs transition-colors ${pathname.startsWith('/portafolio') ? 'font-black text-primary-container border-b-2 border-primary-container pb-1' : 'font-bold text-stone-500 hover:text-stone-900'}`}
              href="/portafolio"
            >
              PORTAFOLIO
            </Link>
            <Link
              className={`font-headline tracking-tighter uppercase text-[10px] md:text-xs transition-colors ${pathname.startsWith('/ia') ? 'font-black text-primary-container border-b-2 border-primary-container pb-1' : 'font-bold text-stone-500 hover:text-stone-900'}`}
              href="/ia"
            >
              IA
            </Link>
            <Link
              className={`font-headline tracking-tighter uppercase text-[10px] md:text-xs transition-colors ${pathname.startsWith('/contacto') ? 'font-black text-primary-container border-b-2 border-primary-container pb-1' : 'font-bold text-stone-500 hover:text-stone-900'}`}
              href="/contacto"
            >
              CONTACTO
            </Link>
          </div>
        </nav>

        {/* Floating Right CTA */}
        <div
          ref={navRef}
          className="w-1/2 flex items-center justify-end px-12 h-full pointer-events-auto"
        >
          <div className="flicker-btn">
            <AnimatedButton href="/contacto" theme="primary">
              TRABAJA CON NOSOTROS
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  );
}
