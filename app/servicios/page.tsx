import Link from "next/link";
import Image from "next/image";
import GridLines from "@/components/ui/GridLines";
import ServicesSection from "@/components/servicios/ServicesSection";
import HeroVideoCarousel from "@/components/servicios/HeroVideoCarousel";

export const metadata = {
  title: "BLACKCHERRY IT | SERVICIOS",
  description: "Servicios arquitectónicos para la próxima era.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        <GridLines />
        {/* Left: Static Container */}
        <div className="w-full md:w-1/2 relative z-20 md:pl-[7rem] pt-20">
          <div className="relative w-full h-[500px] md:h-[700px] bg-[#1F1F1F] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none technical-grid-red"></div>
            <h1 className="font-headline font-black text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase text-white mb-10 relative z-10">
              SERVICIOS&nbsp;
            </h1>
            <div className="max-w-xl relative z-10">
              <p className="font-headline font-light text-2xl md:text-3xl text-white/90 uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6">
                SERVICIOS <br /> ARQUITECTÓNICOS <br /> PARA LA PRÓXIMA ERA
              </p>
              <p className="font-body text-white/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Ingeniería Quirúrgica • Transformación de Legado • Infraestructura Estratégica
              </p>
            </div>
          </div>
        </div>
        
        {/* Right: Video Container */}
        <div className="w-full md:w-1/2 relative flex flex-col md:pr-[7rem] pt-0">
          <div className="relative z-20 w-full">
            <HeroVideoCarousel />
          </div>
          {/* Transition div */}
          <div className="bg-[#1F1F1F] w-full border-left border-l-[1.3px] border-white h-[160px] flex flex-col justify-center relative overflow-hidden pr-6 md:pr-12 z-20">
            <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 pl-6 md:pl-4">
              <p className="font-headline font-light text-xl md:text-2xl text-white leading-tight mb-0 tracking-tight text-left">
                Diseñando el núcleo tecnológico que impulsa la eficiencia de las empresas modernas.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Industrial Services Section */}
      <ServicesSection />

      {/* Minimal Connection Section */}
      <section className="w-full py-24 px-6 md:px-[7rem] relative overflow-hidden flex flex-col items-center bg-white">
        <GridLines />
        
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
