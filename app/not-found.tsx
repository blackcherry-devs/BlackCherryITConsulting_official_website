import Link from "next/link";
import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20">
      <GridLines />
      
      {/* Background large number */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-headline font-black text-[25rem] lg:text-[35rem] text-[#1a1a1a]">404</span>
      </div>

      <div className="relative z-10 text-center px-6 mt-12">
        <span className="font-headline font-black text-primary-container text-[10px] tracking-[0.5em] uppercase mb-6 block">
          ERROR DE COORDENADAS / 404
        </span>
        
        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] tracking-tighter uppercase leading-[0.9] mb-10">
          RUTA NO <br /> ENCONTRADA
        </h1>
        
        <p className="font-body text-stone-500 text-[10px] md:text-xs max-w-sm mx-auto mb-10 uppercase tracking-[0.2em] leading-relaxed">
          La arquitectura solicitada no existe o ha sido reubicada en una nueva infraestructura digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <AnimatedButton href="/" theme="primary">
            VOLVER AL INICIO
          </AnimatedButton>
          <AnimatedButton href="/contacto" theme="dark">
            SOLICITAR SOPORTE
          </AnimatedButton>
        </div>
      </div>

      {/* Decorative technical line */}
      <div className="absolute bottom-0 left-0 w-full h-[1.3px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
    </main>
  );
}
