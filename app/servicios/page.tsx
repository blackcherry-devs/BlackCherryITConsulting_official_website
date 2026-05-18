import Link from "@/components/ui/AnimatedLink";
import Image from "next/image";
import GridLines from "@/components/ui/GridLines";
import ServicesSection from "@/components/servicios/ServicesSection";
import HeroVideoCarousel from "@/components/servicios/HeroVideoCarousel";

export const metadata = {
  title: "Servicios de Desarrollo Web, IA y Automatización | BlackCherry IT",
  description:
    "Ofrecemos desarrollo web profesional, diseño de sitios web, creación de páginas web, implementación de inteligencia artificial, chatbots y automatización de WhatsApp para empresas en México.",
  keywords: [
    "servicios desarrollo web México",
    "diseño web profesional León Guanajuato",
    "creación sitios web empresas",
    "automatización WhatsApp para negocios",
    "chatbots para empresas México",
    "agencia IA México",
    "Manychat México",
    "consultoría tecnológica México",
  ],
  alternates: { canonical: "https://blackcherryitconsulting.com/servicios" },
  openGraph: {
    title: "Servicios de Desarrollo Web, IA y Automatización | BlackCherry IT",
    description: "Desarrollo web, diseño web, chatbots y automatización de WhatsApp para empresas en México.",
    url: "https://blackcherryitconsulting.com/servicios",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
        <GridLines />
        {/* Left: Static Container */}
        <div className="w-full lg:w-1/2 relative z-20 px-0 min-[600px]:px-[var(--gutter-width)] lg:px-0 lg:pl-[var(--gutter-width)] pt-0 lg:pt-20 pointer-events-none">
          <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[700px] bg-black/50 lg:bg-[#1F1F1F] flex flex-col justify-center px-6 md:px-12 overflow-hidden pointer-events-auto">
            <div className="absolute inset-0 opacity-10 pointer-events-none technical-grid-red"></div>
            <h1 className="font-headline font-black text-6xl md:text-[8vw] lg:text-[6vw] leading-[0.8] tracking-tighter uppercase text-white mb-10 relative z-10">
              SERVICIOS&nbsp;
            </h1>
            <div className="max-w-xl relative z-10">
              <p className="font-headline font-light text-xl md:text-3xl text-white/90 uppercase tracking-tight leading-none mb-4 border-l-4 border-primary-container pl-6">
                SERVICIOS <br /> ARQUITECTÓNICOS <br /> PARA LA PRÓXIMA ERA
              </p>
              <p className="font-body text-white/40 text-[9px] md:text-xs uppercase tracking-[0.3em] font-medium">
                Ingeniería Quirúrgica • Transformación de Legado • Infraestructura Estratégica
              </p>
            </div>
          </div>
        </div>
        
        {/* Right: Video Container */}
        <div className="absolute inset-y-0 left-0 right-0 min-[600px]:left-[var(--gutter-width)] min-[600px]:right-[var(--gutter-width)] lg:static lg:inset-auto lg:w-1/2 lg:flex lg:flex-col lg:px-0 lg:pr-[var(--gutter-width)] pt-0 z-0 lg:z-10">
          <div className="relative z-20 w-full h-full lg:h-auto">
            <HeroVideoCarousel />
          </div>
          {/* Transition div */}
          <div className="hidden lg:flex bg-[#1F1F1F] w-full lg:border-left lg:border-l-[1.3px] border-white h-auto py-12 md:h-[160px] flex-col justify-center relative overflow-hidden px-6 md:px-12 z-20">
            <div className="flex flex-col items-start justify-center max-w-4xl h-full relative z-20 pt-4 md:pl-4">
              <p className="font-headline font-light text-lg md:text-2xl text-white leading-tight mb-0 tracking-tight text-left">
                Diseñando el núcleo tecnológico que impulsa la eficiencia de las empresas modernas.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Industrial Services Section */}
      <ServicesSection />

      {/* Minimal Connection Section */}
      <section className="w-full py-20 md:py-24 px-6 md:px-[var(--gutter-width)] relative overflow-hidden flex flex-col items-center bg-white">
        <GridLines />
        
        <div className="relative z-10 text-center">
          <p className="font-headline text-[10px] tracking-[0.6em] uppercase mb-6 text-primary-container">ESTABLECER PROTOCOLO</p>
          <Link href="/contacto" className="font-headline font-black text-2xl md:text-4xl hover:text-primary-container transition-all tracking-tighter uppercase flex items-center gap-6 group text-[#1F1F1F]">
            INICIALIZAR CONEXIÓN
            <span className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform" aria-hidden="true">arrow_right_alt</span>
          </Link>
        </div>
      </section>
    </>
  );
}
