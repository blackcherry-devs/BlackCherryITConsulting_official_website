import React from "react";
import Link from "next/link";
import GridLines from "@/components/ui/GridLines";
import ShuffleHero from "@/components/ia/ShuffleHero";
import CollapseCardFeatures from "@/components/ia/CollapseCardFeatures";
import ManychatFeatures from "@/components/ia/ManychatFeatures";
import AnimatedButton from "@/components/ui/AnimatedButton";

export const metadata = {
  title: "BLACKCHERRY IT | IA",
  description: "Soluciones de IA de Vanguardia",
};

export default function IAPage() {
  return (
    <div className="w-full bg-white relative overflow-x-clip">
      
      {/* Brand Icon (Outside Margin) */}
      <div className="fixed top-0 left-0 w-[7rem] h-20 flex items-center justify-center z-[110]">
        <div className="relative flex flex-col items-center">
          <Link href="/">
            <img src="/cherry-icon.png" alt="BlackCherry Icon" className="w-10 h-10 object-contain" />
          </Link>
        </div>
      </div>

      {/* Custom Navbar for IA Page - Glass Effect */}
      <div className="fixed top-0 left-[7rem] right-[7rem] h-20 z-[105] flex pointer-events-none">
        <nav className="w-1/2 bg-white/5 backdrop-blur-md flex items-center px-12 h-full border-r border-white/10 pointer-events-auto">
          <div className="flex gap-12 items-center w-full justify-start">
            <Link className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-stone-500 hover:text-stone-900 transition-colors" href="/">INICIO</Link>
            <Link className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-stone-500 hover:text-stone-900 transition-colors" href="/servicios">SERVICIOS</Link>
            <Link className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-stone-500 hover:text-stone-900 transition-colors" href="/portafolio">PORTAFOLIO</Link>
            <Link className="font-headline tracking-tighter uppercase font-black text-[10px] md:text-xs text-primary-container border-b-2 border-primary-container pb-1" href="/ia">IA</Link>
            <Link className="font-headline tracking-tighter uppercase font-bold text-[10px] md:text-xs text-stone-500 hover:text-stone-900 transition-colors" href="/contacto">CONTACTO</Link>
          </div>
        </nav>
        <div className="w-1/2 flex items-center justify-end px-12 h-full pointer-events-auto">
          <AnimatedButton 
            href="/contacto"
            theme="primary"
          >
            TRABAJA CON NOSOTROS
          </AnimatedButton>
        </div>
      </div>

      {/* HERO SECTION */}
      <ShuffleHero />
      {/* SECTION 2: NEURAL VOICE */}
      <section className="relative w-full min-h-screen bg-[#1F1F1F] flex items-center px-6 md:px-[7rem] py-24 overflow-hidden border-y border-white/5">
        <GridLines />
        <div className="absolute inset-0 opacity-30 pointer-events-none technical-grid-dark"></div>
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left: AI Image with Overlapping Card */}
            <div className="md:col-span-5 relative order-2 md:order-1 mt-12 md:mt-0 pl-4 md:pl-8">
              <div className="relative w-full aspect-[4/5] border border-white/10 overflow-hidden bg-black rounded-xl shadow-2xl">
                <img alt="Neural AI Voice Technology" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 scale-105 hover:scale-100" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80" />
              </div>
              {/* Overlapping Red Card */}
              <div className="absolute bottom-8 md:bottom-16 right-[-1rem] md:right-[-2rem] bg-primary-container p-6 md:p-10 text-white shadow-2xl z-20 min-w-[200px] md:min-w-[240px] rounded-xl">
                <div className="font-headline font-black text-3xl md:text-4xl mb-1">-40%</div>
                <div className="font-headline font-bold text-[8px] md:text-[10px] tracking-widest uppercase">COSTES DE PRODUCCIÓN</div>
              </div>
            </div>
            
            {/* Right: Massive Title and Benefits */}
            <div className="md:col-span-7 flex flex-col justify-between md:pl-12 order-1 md:order-2">
              <div className="space-y-12">
                <div className="space-y-2">
                  <span className="font-headline font-bold text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase">SISTEMAS DE AUDIO AVANZADO</span>
                  <h2 className="font-headline font-black text-white text-4xl md:text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter bg-[#1F1F1F] relative z-20 inline-block pr-8 py-2">
                    SISTEMAS DE <br />VOZ NEURAL
                  </h2>
                </div>
                <div className="space-y-8 md:space-y-12 max-w-lg">
                  <div className="flex gap-4 md:gap-6">
                    <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl mt-1">record_voice_over</span>
                    <div className="space-y-2">
                      <h4 className="font-headline font-black text-white text-base md:text-lg tracking-widest uppercase">ALTA FIDELIDAD SINTÉTICA</h4>
                      <p className="font-body text-white/40 text-xs md:text-sm leading-relaxed">Voces indistinguibles del habla humana con control tonal quirúrgico y matices emocionales profundos.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl mt-1">language</span>
                    <div className="space-y-2">
                      <h4 className="font-headline font-black text-white text-base md:text-lg tracking-widest uppercase">INTELIGENCIA MULTILINGÜE</h4>
                      <p className="font-body text-white/40 text-xs md:text-sm leading-relaxed">Escalabilidad global instantánea en más de 29 idiomas manteniendo la identidad de marca vocal única.</p>
                    </div>
                  </div>
                </div>
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
