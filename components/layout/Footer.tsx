"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith('/portafolio/') && pathname !== '/portafolio';

  if (isProjectDetail) return null;

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden border-t border-white/5 pt-20">
      {/* Persistent Architectural Grid Lines (from global layout context, assuming they bleed through or we can add them here) */}
      <div className="gutter-line gutter-left opacity-10 z-[110]"></div>
      <div className="gutter-line gutter-right opacity-10 z-[110]"></div>
      <div className="center-line-full opacity-10 z-[110]"></div>

      {/* Background Marquee - Single line as requested */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex flex-col justify-center select-none overflow-hidden">
        <div className="whitespace-nowrap font-headline font-black text-[12vw] leading-none uppercase animate-marquee">
          BLACKCHERRY IT CONSULTING &nbsp; BLACKCHERRY IT CONSULTING &nbsp; BLACKCHERRY IT CONSULTING &nbsp;
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-[7rem] pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Brand Block */}
          <div className="space-y-8 max-w-xs">
            <div className="flex items-center mb-2">
              <img src="/logo-blackcherry-footer.png" alt="BlackCherry IT Consulting Logo" className="w-56 h-auto brightness-0 invert" />
            </div>
            <p className="font-body text-white/40 text-xs uppercase tracking-widest leading-loose ml-6">
              Precisión quirúrgica en ingeniería digital. Esculpiendo los monolitos de la infraestructura industrial del mañana.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:mr-12">
            <div className="space-y-6">
              <span className="font-headline font-black text-[10px] text-primary-container tracking-[0.4em] uppercase">SISTEMA</span>
              <nav className="flex flex-col gap-4">
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/">Inicio</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/servicios">Servicios</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/portafolio">Portafolio</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/ia">IA</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/contacto">Contacto</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <span className="font-headline font-black text-[10px] text-primary-container tracking-[0.4em] uppercase">CONECTAR</span>
              <nav className="flex flex-col gap-4">
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Blackcherry-Devs/61587561059170/">Facebook</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/blackcherrydevs?igsh=MWQ3ZWQwenRtZnI1Nw==">Instagram</Link>
                <Link className="font-headline font-bold text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@blackcherry_devs">TikTok</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-headline text-[10px] text-white/20 uppercase tracking-[0.5em]">© 2024 BLACKCHERRY IT. TODOS LOS DERECHOS RESERVADOS.</span>
          <div className="flex gap-8">
            <Link className="font-headline text-[10px] text-white/20 hover:text-white/40 uppercase tracking-[0.2em]" href="#">Política de Privacidad</Link>
            <Link className="font-headline text-[10px] text-white/20 hover:text-white/40 uppercase tracking-[0.2em]" href="#">Términos del Protocolo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
