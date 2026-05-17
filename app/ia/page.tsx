import React from "react";
import Link from "@/components/ui/AnimatedLink";
import GridLines from "@/components/ui/GridLines";
import ShuffleHero from "@/components/ia/ShuffleHero";
import CollapseCardFeatures from "@/components/ia/CollapseCardFeatures";
import ManychatFeatures from "@/components/ia/ManychatFeatures";
import AnimatedButton from "@/components/ui/AnimatedButton";

export const metadata = {
  title: "Inteligencia Artificial, Chatbots y Automatización de WhatsApp | BlackCherry IT",
  description:
    "Implementamos inteligencia artificial, chatbots inteligentes y automatización de WhatsApp para empresas en México. Soluciones con Manychat, voz neural y sistemas de IA personalizados.",
  keywords: [
    "inteligencia artificial para empresas México",
    "chatbots para negocios México",
    "automatización WhatsApp México",
    "Manychat México",
    "agencia IA México",
    "sistemas de voz neural",
    "automatización de marketing digital",
    "chatbot WhatsApp para empresas",
  ],
  alternates: { canonical: "https://blackcherryitconsulting.com/ia" },
  openGraph: {
    title: "Inteligencia Artificial y Automatización de WhatsApp | BlackCherry IT",
    description: "Chatbots, IA y automatización de WhatsApp para empresas en México con Manychat y tecnología de vanguardia.",
    url: "https://blackcherryitconsulting.com/ia",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function IAPage() {
  return (
    <div className="w-full bg-white relative overflow-x-clip">

      {/* HERO SECTION */}
      <ShuffleHero />
      {/* SECTION 2: NEURAL VOICE */}
      <section className="relative w-full min-h-screen bg-[#1F1F1F] flex items-center px-4 sm:px-6 md:px-[var(--gutter-width)] py-16 md:py-24 overflow-hidden border-y border-white/5">
        <GridLines />
        <div className="absolute inset-0 opacity-30 pointer-events-none technical-grid-dark"></div>

        <div className="relative z-10 w-full">
          {/* 1-col on mobile <768px, 2-col on 768-1023px, 12-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] lg:grid-cols-12 gap-8 md:gap-4 lg:gap-12 items-center">

            {/* TEXT — centered + full width on mobile, left on md, right on desktop */}
            <div className="col-span-1 lg:col-span-7 lg:order-2 flex flex-col gap-5 lg:gap-8 lg:pl-12 text-center md:text-left">
              <div className="space-y-3">
                <span className="font-headline font-bold text-xs md:text-xs text-white/40 tracking-[0.4em] uppercase">SISTEMAS DE AUDIO AVANZADO</span>
                <h2 className="font-headline font-black text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter">
                  SISTEMAS DE <br />VOZ NEURAL
                </h2>
              </div>
              <div className="space-y-5 lg:space-y-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-6 items-center sm:items-start text-center sm:text-left">
                  <span className="material-symbols-outlined text-primary-container text-3xl lg:text-4xl flex-shrink-0" aria-hidden="true">record_voice_over</span>
                  <div>
                    <h4 className="font-headline font-black text-white text-sm sm:text-sm lg:text-lg tracking-widest uppercase">ALTA FIDELIDAD SINTÉTICA</h4>
                    <p className="font-body text-white/40 text-xs sm:text-xs lg:text-sm leading-relaxed mt-1">Voces indistinguibles del habla humana con control tonal quirúrgico y matices emocionales profundos.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-6 items-center sm:items-start text-center sm:text-left">
                  <span className="material-symbols-outlined text-primary-container text-3xl lg:text-4xl flex-shrink-0" aria-hidden="true">language</span>
                  <div>
                    <h4 className="font-headline font-black text-white text-sm sm:text-sm lg:text-lg tracking-widest uppercase">INTELIGENCIA MULTILINGÜE</h4>
                    <p className="font-body text-white/40 text-xs sm:text-xs lg:text-sm leading-relaxed mt-1">Escalabilidad global instantánea en más de 29 idiomas manteniendo la identidad de marca vocal única.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE — below text on mobile (centered, compact), right on md, left on desktop */}
            <div className="col-span-1 lg:col-span-5 lg:order-1 relative pl-0 lg:pl-8">
              <div className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-none mx-auto md:mx-0 aspect-[3/4] lg:aspect-[4/5] border border-white/10 overflow-hidden bg-black rounded-xl shadow-2xl">
                <img
                  alt="Neural AI Voice Technology"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 scale-105 hover:scale-100"
                  src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80"
                />
              </div>
              {/* Overlapping Red Card */}
              <div className="absolute bottom-3 lg:bottom-16 right-[max(0px,calc(50%-100px))] md:right-[-0.5rem] lg:right-[-2rem] bg-primary-container p-3 sm:p-4 lg:p-10 text-white shadow-2xl z-20 rounded-xl">
                <div className="font-headline font-black text-xl sm:text-2xl lg:text-4xl mb-0.5">-40%</div>
                <div className="font-headline font-bold text-[8px] lg:text-[10px] tracking-widest uppercase">COSTES DE PRODUCCIÓN</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: CollapseCardFeatures (Full width, white bg) */}
      <CollapseCardFeatures />

      {/* SECTION 3: MANYCHAT AUTOMATION */}
      <ManychatFeatures />
    </div>
  );
}
