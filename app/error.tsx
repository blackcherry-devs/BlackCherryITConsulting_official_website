"use client";

import { useEffect } from "react";
import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20">
      <GridLines />
      
      {/* Background large number */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-headline font-black text-[25rem] lg:text-[35rem] text-[#1a1a1a]">500</span>
      </div>

      <div className="relative z-10 text-center px-6 mt-12">
        <span className="font-headline font-black text-primary-container text-[10px] tracking-[0.5em] uppercase mb-6 block">
          ERROR DE SISTEMA / 500
        </span>
        
        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] tracking-tighter uppercase leading-[0.9] mb-10">
          FALLO EN EL <br /> PROTOCOLO
        </h1>
        
        <p className="font-body text-stone-500 text-[10px] md:text-xs max-w-sm mx-auto mb-10 uppercase tracking-[0.2em] leading-relaxed">
          Se ha detectado una anomalía crítica en la infraestructura. Nuestros ingenieros han sido notificados.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button
            onClick={() => reset()}
            className="group relative flex items-center gap-4 bg-[#1a1a1a] px-8 py-4 transition-all hover:bg-primary-container"
          >
            <span className="font-headline font-black text-xs text-white tracking-[0.2em] uppercase">
              REINTENTAR CONEXIÓN
            </span>
          </button>
          <AnimatedButton href="/" theme="primary">
            VOLVER AL INICIO
          </AnimatedButton>
        </div>
      </div>

      {/* Decorative technical line */}
      <div className="absolute bottom-0 left-0 w-full h-[1.3px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
    </main>
  );
}
