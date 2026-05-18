import React from "react";
import Link from "@/components/ui/AnimatedLink";
import GridLines from "@/components/ui/GridLines";
import ContactForm from "@/components/forms/ContactForm";
import ContactoTerminal from "@/components/contacto/ContactoTerminal";

export const metadata = {
  title: "Contacto | Contratar Agencia Web en México | BlackCherry IT",
  description:
    "Contáctanos para contratar nuestros servicios de desarrollo web, diseño de sitios web, chatbots e inteligencia artificial en México. Solicita tu cotización gratis hoy.",
  keywords: [
    "contratar agencia web México",
    "cotización desarrollo web México",
    "contacto BlackCherry IT",
    "contratar diseño web León Guanajuato",
    "solicitar página web profesional México",
    "agencia web contacto",
  ],
  alternates: { canonical: "https://blackcherryitconsulting.com/contacto" },
  openGraph: {
    title: "Contacto | Contratar Agencia Web en México | BlackCherry IT",
    description: "Solicita tu cotización gratis para desarrollo web, chatbots o automatización de WhatsApp en México.",
    url: "https://blackcherryitconsulting.com/contacto",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactoPage() {
  return (
    <div className="w-full bg-white relative">

      {/* 
        The global layout already provides the Footer and SmoothScroll.
        We render the main 50/50 contact section as a full 100vh screen.
        The footer will be visible only upon scrolling down.
      */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-4 lg:px-0">
        
        {/* Split Background Layers */}
        <div className="absolute inset-0 flex flex-col lg:flex-row z-0 pointer-events-none">
          {/* Top/Left Side: Industrial Image */}
          <div className="w-full lg:w-1/2 relative h-1/2 lg:h-full overflow-hidden">
            <img 
              alt="Industrial Architecture" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          {/* Bottom/Right Side: Solid Deep Cherry Red */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-[#8B090A] relative">
            <div className="absolute inset-0 technical-grid-red opacity-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Global Architectural Grid Lines overlaying the solid backgrounds */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
          <GridLines />
        </div>

        {/* CENTRAL OVERLAPPING CONTAINER */}
        <div className="relative z-20 flex flex-col xl:flex-row items-center gap-8 xl:gap-12 w-full max-w-5xl -mt-4 sm:-mt-12 lg:mt-0">
            
          {/* The resized central card, straddling the center */}
          <div className="flex flex-col sm:flex-row shadow-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-4xl relative min-h-[250px] xl:ml-32 rounded-xl lg:rounded-none overflow-hidden lg:overflow-visible mx-auto lg:mx-0">
            {/* Dual-colored border effect (Hidden on mobile for better UX) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-30">
              <div className="absolute top-0 left-0 bottom-0 w-1/2 border-l-2 border-t-2 border-b-2 border-white"></div>
              <div className="absolute top-0 right-0 bottom-0 w-1/2 border-r-2 border-t-2 border-b-2 border-black"></div>
            </div>
            
            {/* Top/Left half of container (Over Image) */}
            <div className="w-full sm:w-1/2 min-h-[160px] sm:min-h-0 flex items-center p-0 border-none">
              <ContactoTerminal />
            </div>
            
            {/* Bottom/Right half of container (Over Red) */}
            <div className="w-full sm:w-1/2 bg-white flex flex-col justify-center p-6 sm:p-6 md:p-8 py-8 sm:py-6 md:py-8 border-2 lg:border-none border-black border-t-0 sm:border-t-2 sm:border-l-0 rounded-b-xl sm:rounded-none">
              <p className="font-headline text-primary font-black text-[10px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase mb-6 sm:mb-6 text-center sm:text-left">NUEVA CONSULTA</p>
              <ContactForm compact={true} />
            </div>
          </div>

          {/* Repositioned Contact Info */}
          <div className="flex flex-col gap-2 items-center lg:items-center xl:items-start bg-black/40 lg:bg-black/60 xl:bg-transparent p-6 lg:p-8 xl:p-0 backdrop-blur-md lg:backdrop-blur-md xl:backdrop-blur-none mt-4 lg:mt-8 xl:mt-0 w-full lg:w-auto rounded-xl lg:rounded-xl xl:rounded-none">
            <h3 className="font-headline font-black text-xl lg:text-2xl text-white tracking-tighter uppercase mb-2 text-center lg:text-center xl:text-left">Pongámonos en contacto</h3>
            <a className="font-headline font-medium text-xs lg:text-sm text-white/80 hover:text-white transition-colors tracking-widest uppercase text-center lg:text-center xl:text-left" href="mailto:blackcherrydevs@gmail.com">
              blackcherrydevs@gmail.com
            </a>
            <div className="flex gap-6 mt-6 text-white/60 justify-center lg:justify-center xl:justify-start">
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
      </section>
    </div>
  );
}
               