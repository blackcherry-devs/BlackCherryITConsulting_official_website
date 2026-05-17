"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

// Double the dataset for smaller screens that need to cover more vertical height
const extendedSquareData = [
  ...squareData,
  ...squareData.map(sq => ({ ...sq, id: sq.id + 16 }))
];

const ShuffleHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: bgRef.current,
      pinSpacing: false,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white mb-8 lg:mb-0" style={{ minHeight: "100svh" }}>
      {/* Pinned Background Container */}
      <div ref={bgRef} className="absolute top-0 left-0 w-full h-[100svh] z-0 overflow-hidden">
        <GridLines />
        {/* Grid as full background on all breakpoints */}
        <div className="absolute top-0 left-0 w-full h-full z-0 p-2" aria-hidden="true">
          <ShuffleGrid />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center min-h-[100svh]
                      px-6 lg:px-[var(--gutter-width)]
                      pt-24 sm:pt-28 pb-10 sm:pb-14
                      lg:pt-28 lg:pb-16">

        {/* Text Section — glass card on all breakpoints */}
        <div className="w-full lg:w-1/2 flex lg:pr-8">
          <div className="w-fit max-w-xl rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-6 sm:p-10 shadow-xl">
            <span className="block mb-3 font-headline font-black text-white text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">
              INGENIERÍA COGNITIVA AVANZADA
            </span>
            <h1 className="font-headline font-black leading-[1.05] uppercase tracking-tighter mb-4 sm:mb-6 md:mb-8 text-white relative z-20
                           text-[clamp(1.75rem,8vw,3rem)] sm:text-[clamp(2rem,7vw,3.5rem)] lg:text-5xl xl:text-6xl">
              SOLUCIONES DE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>IA DE VANGUARDIA</span>
            </h1>
            <p className="max-w-md font-body text-sm md:text-base text-white tracking-wide leading-snug mb-6 sm:mb-8">
              BlackCherry IT integra inteligencia avanzada para optimizar la infraestructura empresarial, transformando datos en decisiones estratégicas y procesos autónomos de alta fidelidad.
            </p>
            <AnimatedButton href="/contacto" theme="primary" className="mt-2">
              SOLICITAR DEMOSTRACIÓN
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};


const ShuffleGrid = () => {
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState(extendedSquareData);
  const [cols, setCols] = useState(4);
  const [count, setCount] = useState(16);

  useEffect(() => {
    setMounted(true);

    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 500) {
        // Use 32 images (4 cols x 8 rows) on mobile so it covers the full height
        setCols(4);
        setCount(32);
      } else {
        // Standard 16 images (4x4) on desktop
        setCols(4);
        setCount(16);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    const interval = setInterval(() => {
      setSquares(prev => shuffle(prev));
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const visibleSquares = squares.slice(0, count);

  const rows = Math.ceil(count / cols);

  // Always maintain a square grid aspect ratio
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: "0.5rem",
    width: "100%",
  };

  const cellStyle: React.CSSProperties = {
    aspectRatio: "1 / 1",
    position: "relative",
    borderRadius: "0.5rem",
    overflow: "hidden",
  };

  if (!mounted) {
    return (
      <div style={gridStyle}>
        {[...Array(count)].map((_, i) => (
          <div key={i} style={{ ...cellStyle, background: "#f5f5f4" }} />
        ))}
      </div>
    );
  }

  return (
    <div style={gridStyle}>
      <AnimatePresence mode="popLayout">
        {visibleSquares.map((sq) => (
          <motion.div
            key={`${sq.id}-${sq.src}`}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 1.5, 
              type: "spring",
              bounce: 0,
              opacity: { duration: 0.5 }
            }}
            style={cellStyle}
            className="bg-stone-100 shadow-inner"
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
      </AnimatePresence>
    </div>
  );
};

export default ShuffleHero;
