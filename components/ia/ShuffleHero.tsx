"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";

// 16 New Hero IA Images from Desktop
const squareData = [
  { id: 1, src: "/ia/hero_ia1.jpg" },
  { id: 2, src: "/ia/hero_ia2.jpg" },
  { id: 3, src: "/ia/hero_ia3.jpg" },
  { id: 4, src: "/ia/hero_ia4.jpg" },
  { id: 5, src: "/ia/hero_ia5.jpg" },
  { id: 6, src: "/ia/hero_ia6.jpg" },
  { id: 7, src: "/ia/hero_ia7.jpg" },
  { id: 8, src: "/ia/hero_ia8.jpg" },
  { id: 9, src: "/ia/hero_ia9.jpg" },
  { id: 10, src: "/ia/hero_ia10.jpg" },
  { id: 11, src: "/ia/hero_ia11.jpg" },
  { id: 12, src: "/ia/hero_ia12.jpg" },
  { id: 13, src: "/ia/hero_ia13.jpg" },
  { id: 14, src: "/ia/hero_ia14.jpg" },
  { id: 15, src: "/ia/hero_ia15.jpg" },
  { id: 16, src: "/ia/hero_ia16.jpg" },
];

const shuffle = (array: typeof squareData) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const ShuffleHero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-white border-b border-black/5">
      <GridLines />

      <div className="relative z-10 w-full px-6 md:px-[7rem] pt-32 pb-20 md:py-0 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-[100vw]">
        
        {/* Text Section */}
        <div className="pr-0 md:pr-8 pl-4 md:pl-8 mt-12">
          <span className="block mb-4 font-headline font-black text-primary-container text-[10px] md:text-xs tracking-[0.5em] uppercase">
            INGENIERÍA COGNITIVA AVANZADA
          </span>
          <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] uppercase tracking-tighter mb-6 md:mb-8 text-black relative z-20">
            SOLUCIONES DE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>IA DE VANGUARDIA</span>
          </h1>
          <p className="max-w-md font-body text-xs md:text-sm text-black/60 uppercase tracking-widest leading-relaxed mb-8">
            BlackCherry IT integra inteligencia avanzada para optimizar la infraestructura empresarial, transformando datos en decisiones estratégicas y procesos autónomos de alta fidelidad.
          </p>
          <AnimatedButton href="/contacto" theme="primary" className="mt-4">
            SOLICITAR DEMOSTRACIÓN
          </AnimatedButton>
        </div>

        {/* Shuffle Grid Section */}
        <div className="w-full h-full flex items-center pr-4 md:pr-8 mt-12">
          <ShuffleGrid />
        </div>

      </div>
    </section>
  );
};

const ShuffleGrid = () => {
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState(squareData);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSquares(prev => shuffle(prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 h-[450px] gap-2 w-full opacity-0">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-full h-full rounded-xl bg-stone-100" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 h-[450px] gap-2 w-full">
      {squares.map((sq) => (
        <motion.div
          key={`${sq.id}-${sq.src}`}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full rounded-xl bg-stone-100 overflow-hidden relative shadow-inner"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-stone-200" />
          <img 
            src={sq.src} 
            alt="AI Visual"
            className="absolute inset-0 w-full h-full object-cover z-10"
            loading="eager"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ShuffleHero;
