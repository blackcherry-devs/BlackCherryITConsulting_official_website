import React from "react";
import Link from "next/link";
import GridLines from "@/components/ui/GridLines";
import ShuffleHero from "@/components/ia/ShuffleHero";
import CollapseCardFeatures from "@/components/ia/CollapseCardFeatures";

export const metadata = {
  title: "BLACKCHERRY IT | IA",
  description: "Soluciones de IA de Vanguardia",
};

export default function IAPage() {
  return (
    <div className="w-full bg-white relative overflow-x-hidden">
      
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
          <Link className="bg-primary-container hover:bg-primary text-white font-headline font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all rounded-xl" href="/contacto">
            TRABAJA CON NOSOTROS
          </Link>
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
              <div className="relative w-full aspect-[4/5] border border-white/10 overflow-hidden bg-black rounded-xl">
                <img alt="Neural AI Head" className="w-full h-full object-cover grayscale opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLy0bRGVxVwelbx8mQFh82PJcN2TGgNY4-UiyvA7SFTSUZUEkzm05eAjHLWZnOMHgdwjyXYFilfaGx1Biv2-3795_Z_gteH7U_x5Vb26oTFFLrhHve6e0YweV4xEfWr7e9KrDsABlqHb2Ayar_XNNFXEugTOSmYDYHPtdPYmxT1Y5GqX2dGLvjSx7iAemUdWPWCP97m1DAXE6M18bOPOacVugzir68NnkUbKnYPuF-M8-5iSImAvhW5X_O83q-uoORtg5Fkl-ou-86" />
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
                  <h2 className="font-headline font-black text-white text-5xl md:text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter bg-[#1F1F1F] relative z-20 inline-block pr-8 py-2">
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

      {/* SECTION 3: MESSAGING AUTOMATION */}
      <section className="relative w-full min-h-screen bg-white flex items-center px-6 md:px-[7rem] overflow-hidden py-24">
        <GridLines />
        <div className="absolute inset-0 opacity-50 pointer-events-none technical-grid-light"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10 w-full">
          <div className="order-2 md:order-1 space-y-8 md:space-y-10 pl-4 md:pl-8">
            <div>
              <span className="inline-block px-4 py-1 bg-black text-white font-headline font-black text-[10px] tracking-[0.3em] uppercase mb-6 rounded-xl">MESSAGING AI</span>
              <h2 className="font-headline font-black text-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] tracking-tighter bg-white relative z-20 inline-block pr-8 py-2 mt-2">
                AUTOMATIZACIÓN <br />
                <span className="text-primary-container">INTELIGENTE</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              <div className="space-y-2 border-l-2 border-black/10 pl-6">
                <h4 className="font-headline font-bold text-black text-xs md:text-sm tracking-widest uppercase">Omnicanalidad Total</h4>
                <p className="font-body text-black/60 text-[10px] md:text-xs leading-relaxed">Automatización en WhatsApp, Web y Redes Sociales bajo un mismo núcleo cognitivo.</p>
              </div>
              <div className="space-y-2 border-l-2 border-black/10 pl-6">
                <h4 className="font-headline font-bold text-black text-xs md:text-sm tracking-widest uppercase">Calificación Automática</h4>
                <p className="font-body text-black/60 text-[10px] md:text-xs leading-relaxed">Bots avanzados que filtran y califican leads en tiempo real para optimizar el embudo.</p>
              </div>
              <div className="space-y-2 border-l-2 border-black/10 pl-6">
                <h4 className="font-headline font-bold text-black text-xs md:text-sm tracking-widest uppercase">Handoff Fluido</h4>
                <p className="font-body text-black/60 text-[10px] md:text-xs leading-relaxed">Transición transparente de bot a humano cuando la situación requiere intervención personal.</p>
              </div>
            </div>
            <div className="pt-4 md:pt-6">
              <button className="bg-black text-white px-8 md:px-10 py-4 md:py-5 font-headline font-black text-[9px] md:text-[11px] tracking-[0.3em] uppercase hover:bg-primary-container transition-all rounded-xl">SOLICITAR DEMOSTRACIÓN</button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4 md:gap-6 pr-4 md:pr-8">
            <div className="p-6 md:p-8 border-2 border-black/5 space-y-4 bg-white/50 backdrop-blur-sm rounded-xl">
              <div className="flex justify-between items-end">
                <span className="font-headline font-black text-4xl md:text-5xl text-black">3X</span>
                <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl">trending_up</span>
              </div>
              <p className="font-headline font-bold text-[8px] md:text-[10px] text-black/50 tracking-widest uppercase">INCREMENTO EN CONVERSIÓN</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 md:p-8 border-2 border-black/5 text-center bg-white/50 backdrop-blur-sm rounded-xl">
                <h5 className="font-headline font-black text-xl md:text-2xl text-black mb-1">REAL-TIME</h5>
                <p className="font-headline font-bold text-[7px] md:text-[8px] text-black/50 tracking-widest uppercase">PROCESAMIENTO DE LEADS</p>
              </div>
              <div className="p-4 md:p-8 border-2 border-black/5 text-center bg-white/50 backdrop-blur-sm rounded-xl">
                <h5 className="font-headline font-black text-xl md:text-2xl text-black mb-1">+95%</h5>
                <p className="font-headline font-bold text-[7px] md:text-[8px] text-black/50 tracking-widest uppercase">SATISFACCIÓN DEL CLIENTE</p>
              </div>
            </div>
            <div className="h-48 md:h-64 bg-stone-100 border border-black/5 relative overflow-hidden rounded-xl">
              <img 
                src="/whatsapp_mockup.png" 
                alt="WhatsApp AI Automation Mockup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
