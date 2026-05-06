import React from "react";
import Link from "next/link";
import GridLines from "@/components/ui/GridLines";

export const metadata = {
  title: "BLACKCHERRY IT | CONTACTO",
  description: "Hablemos del futuro de tu infraestructura.",
};

export default function ContactoPage() {
  return (
    <div className="w-full bg-white relative">
      {/* Brand Icon (Outside Margin) - Transparent for Contact Page */}
      <div className="fixed top-0 left-0 w-[7rem] h-20 flex items-center justify-center z-[100]">
        <div className="relative flex flex-col items-center">
          <Link href="/">
            <img src="/cherry-icon.png" alt="BlackCherry Icon" className="w-10 h-10 object-contain" />
          </Link>
        </div>
      </div>

      {/* Navbar Wrapper - Glass Effect */}
      <div className="fixed top-0 left-[7rem] right-[7rem] h-20 z-[60] flex pointer-events-none">
        <nav className="w-1/2 bg-white/10 backdrop-blur-md flex items-center px-12 h-full pointer-events-auto border-r border-white/5">
          <div className="flex gap-12 items-center w-full justify-start">
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/"
            >
              INICIO
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/servicios"
            >
              SERVICIOS
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/portafolio"
            >
              PORTAFOLIO
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-white/70 hover:text-white transition-colors"
              href="/ia"
            >
              IA
            </Link>
            <Link
              className="font-headline tracking-tighter uppercase font-black text-[10px] md:text-xs text-white border-b-2 border-white pb-1"
              href="/contacto"
            >
              CONTACTO
            </Link>
          </div>
        </nav>
        <div className="w-1/2 flex items-center justify-end px-12 h-full pointer-events-auto">
          <Link
            className="bg-primary-container hover:bg-primary text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all rounded-round-four"
            href="/contacto"
          >
            TRABAJA CON NOSOTROS
          </Link>
        </div>
      </div>

      {/* 
        The global layout already provides the Footer and SmoothScroll.
        We render the main 50/50 contact section as a full 100vh screen.
        The footer will be visible only upon scrolling down.
      */}
      <section className="flex flex-col md:flex-row w-full relative h-screen">
        
        {/* Left Side: Industrial Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh] md:h-full">
          <img 
            alt="Industrial Architecture" 
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right Side: Solid Deep Cherry Red */}
        <div className="w-full md:w-1/2 bg-[#8B090A] flex flex-col items-center justify-center relative p-6 md:p-12 h-[50vh] md:h-full">
          <div className="absolute inset-0 technical-grid-red opacity-10 pointer-events-none"></div>
        </div>

        {/* Global Architectural Grid Lines overlaying the solid backgrounds */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <GridLines />
        </div>

        {/* CENTRAL OVERLAPPING CONTAINER */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 pt-20">
          <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 pointer-events-auto w-full max-w-5xl px-6">
            
            {/* The resized central card, straddling the center */}
            <div className="flex flex-col md:flex-row shadow-2xl w-full max-w-4xl relative min-h-[250px] xl:ml-32">
              {/* Dual-colored border effect (Hidden on mobile for better UX) */}
              <div className="hidden md:block absolute inset-0 pointer-events-none z-30">
                <div className="absolute top-0 left-0 bottom-0 w-1/2 border-l-2 border-t-2 border-b-2 border-white"></div>
                <div className="absolute top-0 right-0 bottom-0 w-1/2 border-r-2 border-t-2 border-b-2 border-black"></div>
              </div>
              
              {/* Left half of container (Over Image) */}
              <div className="w-full md:w-1/2 bg-black/40 md:bg-white/5 backdrop-blur-xl flex items-center p-6 md:p-8 border-2 md:border-none border-white">
                <h2 className="font-headline font-black text-white tracking-tighter uppercase leading-[1.1] text-lg md:text-xl lg:text-2xl">
                  HABLEMOS DEL FUTURO DE TU INFRAESTRUCTURA
                </h2>
              </div>
              
              {/* Right half of container (Over Red) */}
              <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 md:p-8 py-4 border-2 md:border-none border-black md:border-l-0 border-t-0 md:border-t-2">
                <p className="font-headline text-primary font-black text-[10px] tracking-[0.4em] uppercase mb-4">NUEVA CONSULTA</p>
                <form className="space-y-6">
                  <div className="relative">
                    <input 
                      className="w-full bg-transparent border-b border-stone-300 py-2 font-headline font-bold text-[10px] tracking-widest uppercase focus:outline-none focus:border-primary transition-colors placeholder:text-stone-400 text-black" 
                      placeholder="NOMBRE COMPLETO" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input 
                      className="w-full bg-transparent border-b border-stone-300 py-2 font-headline font-bold text-[10px] tracking-widest uppercase focus:outline-none focus:border-primary transition-colors placeholder:text-stone-400 text-black" 
                      placeholder="EMAIL CORPORATIVO" 
                      type="email"
                      required
                    />
                  </div>
                  <div className="relative">
                    <textarea 
                      className="w-full bg-transparent border-b border-stone-300 py-2 font-headline font-bold text-[10px] tracking-widest uppercase focus:outline-none focus:border-primary transition-colors placeholder:text-stone-400 resize-none text-black" 
                      placeholder="MENSAJE" 
                      rows={2}
                      required
                    ></textarea>
                  </div>
                  <button 
                    className="bg-primary-container text-white px-4 py-4 font-headline font-black text-[10px] tracking-[0.3em] uppercase hover:bg-black transition-all mt-6 w-full" 
                    type="submit"
                  >
                    ENVIAR
                  </button>
                </form>
              </div>
            </div>

            {/* Repositioned Contact Info */}
            <div className="flex flex-col gap-2 items-start bg-black/40 md:bg-transparent p-6 md:p-0 backdrop-blur-md md:backdrop-blur-none mt-8 xl:mt-0">
              <h3 className="font-headline font-black text-2xl text-white tracking-tighter uppercase mb-2">Pongámonos en contacto</h3>
              <a className="font-headline font-medium text-sm text-white/80 hover:text-white transition-colors tracking-widest uppercase" href="mailto:blackcherrydevs@gmail.com">
                blackcherrydevs@gmail.com
              </a>
              <div className="flex gap-6 mt-6 text-white/60">
                <a className="hover:text-white transition-colors" href="https://www.facebook.com/people/Blackcherry-Devs/61587561059170/" target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a className="hover:text-white transition-colors" href="https://www.instagram.com/blackcherrydevs?igsh=MWQ3ZWQwenRtZnI1Nw==" target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a className="hover:text-white transition-colors" href="https://www.tiktok.com/@blackcherry_devs" target="_blank" rel="noreferrer">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.96.44.53 1.11.85 1.79.88h.27c.68-.04 1.36-.37 1.81-.9.6-.65.86-1.51.86-2.39V.02z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
