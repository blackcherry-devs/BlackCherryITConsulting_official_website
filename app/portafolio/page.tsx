import Link from "next/link";
import Image from "next/image";
import HeroImageCarousel from "@/components/portafolio/HeroImageCarousel";

import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";

export const metadata = {
  title: "BLACKCHERRY IT | PORTAFOLIO",
  description: "Máquinas digitales que impulsan el crecimiento.",
};

export default function PortafolioPage() {
  return (
    <>
      {/* Global Architectural Grid Lines overlaying the entire page */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <GridLines />
      </div>

      {/* Hero Section */}
      <header className="relative w-full flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Image Carousel */}
        <div className="w-full lg:w-1/2 relative z-20 px-0 min-[601px]:px-[var(--gutter-width)] lg:px-0 lg:pl-[var(--gutter-width)] pt-0 lg:pt-20">
          <HeroImageCarousel />
          
          {/* Mobile Text Overlay (Only visible on <lg) */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center lg:hidden pr-[var(--gutter-width)] pl-[calc(var(--gutter-width)+1.5rem)] md:pl-[calc(var(--gutter-width)+2.5rem)] pointer-events-none mt-8">
            <h1 className="font-headline font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-white mb-8 drop-shadow-xl">
              PORTAFOLIO
            </h1>
            <div className="max-w-xl">
              <p className="font-headline font-light text-xl md:text-3xl text-white uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6 drop-shadow-xl">
                TRANSFORMANDO IDEAS EN <br/> INFRAESTRUCTURA <br/> DE ÉXITO
              </p>
              <p className="font-body text-white/90 text-[9px] md:text-xs uppercase tracking-[0.3em] font-medium drop-shadow-xl">
                Estrategia Digital • Innovación Tecnológica • Rendimiento Garantizado
              </p>
            </div>
          </div>
        </div>
        
        {/* Right: Title Container */}
        <div className="w-full lg:w-1/2 relative flex flex-col px-0 lg:pr-[var(--gutter-width)] pt-0 z-20">
          <div className="hidden lg:flex relative w-full bg-[#1F1F1F] overflow-hidden h-[350px] md:h-[500px] lg:h-[620px] flex-col justify-center px-6 md:px-12">
            <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid-red"></div>
            <h1 className="font-headline font-black text-5xl md:text-[5vw] leading-[0.9] tracking-tighter uppercase text-white mb-8 relative z-10">
              PORTAFOLIO
            </h1>
            <div className="max-w-xl relative z-10">
              <p className="font-headline font-light text-xl md:text-3xl text-white/90 uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6">
                TRANSFORMANDO IDEAS EN <br/> INFRAESTRUCTURA <br/> DE ÉXITO
              </p>
              <p className="font-body text-white/40 text-[9px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Estrategia Digital • Innovación Tecnológica • Rendimiento Garantizado
              </p>
            </div>
          </div>
          {/* Transition div */}
          <div className="bg-[#8B090A] w-full lg:border-left lg:border-l-[1.3px] border-white h-auto py-12 md:h-[160px] flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
            <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 md:pl-4">
              <p className="font-headline font-light text-lg md:text-2xl text-white leading-tight mb-0 tracking-tight text-left">
                Materializando visiones complejas en estructuras digitales robustas y escalables.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* High-Impact Projects Grid Section */}
      <section className="relative w-full bg-white overflow-hidden py-0">
        <div className="relative w-full">
          {/* Internal Grid Lines */}
          <div className="hidden lg:block service-grid-line w-[1.3px] top-0 bottom-0 left-1/3"></div>
          <div className="hidden lg:block service-grid-line w-[1.3px] top-0 bottom-0 left-2/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-1/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-2/3"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 bottom-0"></div>
          <div className="hidden lg:block service-grid-line h-[1.3px] left-0 right-0 top-0"></div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-20">
            
            {/* Project 01: GPAMEX */}
            <Link href="/portafolio/gpamex" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="GPAMEX" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/gpamex/gpamex_5.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              {/* Interaction Layer at Bottom */}
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              {/* Absolute Vertical Titles and Labels */}
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    CONSTRUCCIÓN
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GPAMEX
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GPAMEX
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GPAMEX
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  CONSTRUCCIÓN
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  GPAMEX
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">01</div>
              {/* Video Hover Placeholder */}
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/gpamex/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 02: GRUPO COSIAM */}
            <Link href="/portafolio/grupo-cosiam" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="GRUPO COSIAM" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/grupo-cosiam/cosiam5.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INFRAESTRUCTURA
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GRUPO COSIAM
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GRUPO COSIAM
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GRUPO COSIAM
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  INFRAESTRUCTURA
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  GRUPO COSIAM
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">02</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/grupo-cosiam/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 03: ADELAI */}
            <Link href="/portafolio/adelai" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="ADELAI" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/adelai/adelai1.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    TECNOLOGÍA
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          ADELAI
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            ADELAI
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            ADELAI
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  TECNOLOGÍA
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  ADELAI
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">03</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/adelai/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 04: CERATO ARTE FLORAL */}
            <Link href="/portafolio/cerato" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="CERATO ARTE FLORAL" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/cerato/cerato2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    E-COMMERCE
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          CERATO
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            CERATO
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            CERATO
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  E-COMMERCE
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  CERATO
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">04</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/cerato/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 05: DANI SUACHÁ */}
            <Link href="/portafolio/dani-suacha" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="DANI SUACHÁ" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/dani-suacha/danisuacha2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    DISEÑO
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          DANI SUACHÁ
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            DANI SUACHÁ
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            DANI SUACHÁ
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  DISEÑO
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  DANI SUACHÁ
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">05</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/dani-suacha/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 06: GUERMAR */}
            <Link href="/portafolio/guermar" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="GUERMAR" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/guermar/guermar3.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INDUSTRIAL
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GUERMAR
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GUERMAR
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GUERMAR
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  INDUSTRIAL
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  GUERMAR
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">06</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/guermar/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 07: LARS DYNAMICS */}
            <Link href="/portafolio/lars-dynamics" className="relative block h-[60vh] md:h-[80vh] lg:h-[95vh] group overflow-hidden border-b border-white/10 lg:border-none cursor-pointer">
              <img 
                alt="LARS DYNAMICS" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="/projects/lars-dynamics/lars_3.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:translate-y-4 lg:group-hover:translate-y-0"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INDUSTRIAL
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          LARS DYNAMICS
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col lg:group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            LARS DYNAMICS
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-4xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            LARS DYNAMICS
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  INDUSTRIAL
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  LARS DYNAMICS
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>
<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">07</div>
              <div className="hidden lg:flex absolute inset-0 items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover object-left" loop muted playsInline autoPlay>
                    <source src="/projects/lars-dynamics/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Minimal Connection Section */}
      <section className="w-full py-20 md:py-24 px-6 md:px-[var(--gutter-width)] relative overflow-hidden flex flex-col items-center bg-white">
        <div className="hidden lg:block gutter-line gutter-left opacity-10 pointer-events-none"></div>
        <div className="hidden lg:block gutter-line gutter-right opacity-10 pointer-events-none"></div>
        <div className="hidden lg:block center-line-full opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <p className="font-headline text-[10px] tracking-[0.6em] uppercase mb-6 text-primary-container">ESTABLECER PROTOCOLO</p>
          <Link href="/contacto" className="font-headline font-black text-2xl md:text-4xl hover:text-primary-container transition-all tracking-tighter uppercase flex items-center gap-6 group text-[#1F1F1F]">
            INICIAR CONEXIÓN
            <span className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </>
  );
}
