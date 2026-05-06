import Link from "next/link";
import Image from "next/image";
import HeroImageCarousel from "@/components/portafolio/HeroImageCarousel";

import GridLines from "@/components/ui/GridLines";

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
      <header className="relative w-full flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Image Carousel */}
        <div className="w-full md:w-1/2 relative z-20 md:pl-[7rem] pt-20">
          <HeroImageCarousel />
        </div>
        
        {/* Right: Title Container */}
        <div className="w-full md:w-1/2 relative flex flex-col md:pr-[7rem] pt-0 z-20">
          <div className="relative w-full bg-[#1F1F1F] overflow-hidden h-[400px] md:h-[620px] flex flex-col justify-center px-6 md:px-12">
            <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid-red"></div>
            <h1 className="font-headline font-black text-[12vw] md:text-[6.5vw] leading-[0.8] tracking-tighter uppercase text-white mb-10 relative z-10">
              PORTAFOLIO
            </h1>
            <div className="max-w-xl relative z-10">
              <p className="font-headline font-light text-2xl md:text-3xl text-white/90 uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6">
                MÁQUINAS DIGITALES <br/> QUE IMPULSAN EL <br/> CRECIMIENTO
              </p>
              <p className="font-body text-white/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Sistemas Críticos • Arquitectura Robusta • Rendimiento Óptimo
              </p>
            </div>
          </div>
          {/* Transition div */}
          <div className="bg-[#8B090A] w-full border-left border-l-[1.3px] border-white h-[160px] flex flex-col justify-center relative overflow-hidden pr-6 md:pr-12">
            <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 pl-6 md:pl-4">
              <p className="font-headline font-light text-xl md:text-2xl text-white leading-tight mb-0 tracking-tight text-left">
                Elevando marcas mediante experiencias digitales de alto rendimiento.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* High-Impact Projects Grid Section */}
      <section className="relative w-full bg-white overflow-hidden py-0">
        <div className="relative w-full">
          {/* Internal Grid Lines */}
          <div className="hidden md:block service-grid-line w-[1.3px] top-0 bottom-0 left-1/3"></div>
          <div className="hidden md:block service-grid-line w-[1.3px] top-0 bottom-0 left-2/3"></div>
          <div className="hidden md:block service-grid-line h-[1.3px] left-0 right-0 top-1/3"></div>
          <div className="hidden md:block service-grid-line h-[1.3px] left-0 right-0 top-2/3"></div>
          <div className="hidden md:block service-grid-line h-[1.3px] left-0 right-0 bottom-0"></div>
          <div className="hidden md:block service-grid-line h-[1.3px] left-0 right-0 top-0"></div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative z-20">
            
            {/* Project 01: GPAMEX */}
            <Link href="/portafolio/gpamex" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 md:border-r border-transparent cursor-pointer">
              <img 
                alt="GPAMEX" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              {/* Interaction Layer at Bottom */}
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              {/* Absolute Vertical Titles and Labels */}
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    CONSTRUCCIÓN
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GPAMEX
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GPAMEX
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GPAMEX
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">01</div>
              {/* Video Hover Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 02: GRUPO COSIAM */}
            <Link href="/portafolio/grupo-cosiam" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 md:border-r border-transparent cursor-pointer">
              <img 
                alt="GRUPO COSIAM" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyVGD6sPck3VMfPz7uyQrkY7JbFjNmFGquR8kOWJXMQ9QzJoP6aRi-YBoKxn34liISGDGNptdvVxpjASSZTn_FrPRZa2UAuUjrsCT-mHC9rdmhVu3nROT0mQuq6lnjcRJ2GBt36C8AhQJ4ru-xinb-YW40LfnwFh_We0nAw4U8zqNvw2nEAUzfFW4jsuBSBVC0BUxvWx56YHx7pFzKAGHx2AcOLjO1U-F7lxDOUlrjUUUDvQ7JEwg1A051OerN1O-6VfFZwX1OKk4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INFRAESTRUCTURA
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GRUPO COSIAM
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GRUPO COSIAM
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GRUPO COSIAM
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">02</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 03: ADELAI */}
            <Link href="/portafolio/adelai" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 cursor-pointer">
              <img 
                alt="ADELAI" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    TECNOLOGÍA
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          ADELAI
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            ADELAI
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            ADELAI
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">03</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 04: CERATO ARTE FLORAL */}
            <Link href="/portafolio/cerato" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 md:border-r border-transparent cursor-pointer">
              <img 
                alt="CERATO ARTE FLORAL" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    E-COMMERCE
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          CERATO
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            CERATO
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            CERATO
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">04</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 05: DANI SUACHÁ */}
            <Link href="/portafolio/dani-suacha" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 md:border-r border-transparent cursor-pointer">
              <img 
                alt="DANI SUACHÁ" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    DISEÑO
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          DANI SUACHÁ
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            DANI SUACHÁ
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            DANI SUACHÁ
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">05</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 06: GUERMAR */}
            <Link href="/portafolio/guermar" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden cursor-pointer">
              <img 
                alt="GUERMAR" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INDUSTRIAL
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          GUERMAR
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            GUERMAR
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            GUERMAR
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">06</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

            {/* Project 07: LARS DYNAMICS */}
            <Link href="/portafolio/lars-dynamics" className="relative block h-[70vh] md:h-[95vh] group overflow-hidden border-b md:border-b-0 md:border-r border-transparent cursor-pointer">
              <img 
                alt="LARS DYNAMICS" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-25 group-hover:scale-110 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/90 via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">
                <div className="bg-primary-container text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] px-8 py-3 uppercase rounded-round-four opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  VER PROYECTO
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">
                <div className="flex items-center h-full">
                  <div className="text-white font-headline font-medium text-[9px] md:text-[11px] tracking-[0.6em] uppercase vertical-text-label mr-2 md:mr-4 mb-12 opacity-70 group-hover:opacity-100 transition-opacity self-end pb-8">
                    INDUSTRIAL
                  </div>
                  <div className="h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity relative flex items-end">
                    <div className="relative">
                      <div className="pb-12 opacity-0 pointer-events-none">
                        <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                          LARS DYNAMICS
                        </h3>
                      </div>
                      <div className="absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up">
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            LARS DYNAMICS
                          </h3>
                        </div>
                        <div className="pb-12">
                          <h3 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap" aria-hidden="true">
                            LARS DYNAMICS
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">07</div>
              <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                <div className="w-[80%] h-[50%] rounded-custom overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out bg-black shadow-2xl">
                  <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Minimal Connection Section */}
      <section className="w-full py-24 px-6 md:px-[7rem] relative overflow-hidden flex flex-col items-center bg-white">
        <div className="hidden md:block gutter-line gutter-left opacity-10 pointer-events-none"></div>
        <div className="hidden md:block gutter-line gutter-right opacity-10 pointer-events-none"></div>
        <div className="hidden md:block center-line-full opacity-10 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <p className="font-headline text-[10px] tracking-[0.6em] uppercase mb-6 text-primary-container">ESTABLECER PROTOCOLO</p>
          <Link href="/contacto" className="font-headline font-black text-3xl md:text-4xl hover:text-primary-container transition-all tracking-tighter uppercase flex items-center gap-6 group text-[#1F1F1F]">
            INICIALIZAR CONEXIÓN
            <span className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </>
  );
}
