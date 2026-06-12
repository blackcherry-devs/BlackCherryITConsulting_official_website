"use client";

import { motion, AnimatePresence } from "framer-motion";
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
    <section className="relative w-full overflow-hidden bg-white mb-8 lg:mb-0" style={{ minHeight: "100svh" }}>
      <GridLines />

      {/* Mobile: Grid as full background (no dark overlay) */}
      <div className="absolute inset-0 lg:hidden z-0 p-2" aria-hidden="true">
        <ShuffleGrid />
      </div>

      {/* Content wrapper — flex column, clears navbar top (h-16/h-20), safe bottom padding */}
      <div className="relative z-10 w-full flex flex-col lg:grid lg:grid-cols-2 lg:items-center
                      px-6 lg:px-[var(--gutter-width)]
                      pt-24 sm:pt-28 pb-10 sm:pb-14
                      lg:pt-28 lg:pb-16
                      gap-0 lg:gap-12">

        {/* Text Section — glass card on mobile (w-fit), plain on desktop */}
        <div className="lg:pr-8 lg:pl-8 flex lg:block">
          <div className="lg:contents w-fit lg:w-auto rounded-2xl lg:rounded-none bg-black/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border lg:border-none border-white/10 p-5 sm:p-6 lg:p-0 shadow-xl lg:shadow-none">
            <span className="block mb-3 font-headline font-black text-white text-[9px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">
              INGENIERÍA COGNITIVA AVANZADA
            </span>
            <h1 className="font-headline font-black leading-[1.05] uppercase tracking-tighter mb-4 sm:mb-6 md:mb-8 text-black max-lg:text-white relative z-20
                           text-[clamp(1.75rem,8vw,3rem)] sm:text-[clamp(2rem,7vw,3.5rem)] lg:text-5xl xl:text-6xl">
              SOLUCIONES DE <br />
              {/* Mobile: dark stroke for readability over glass */}
              <span className="lg:hidden text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>IA DE VANGUARDIA</span>
              {/* Desktop: black stroke */}
              <span className="hidden lg:inline text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>IA DE VANGUARDIA</span>
            </h1>
            <p className="max-w-md font-body text-sm md:text-sm text-white lg:text-black/70 tracking-wide leading-snug mb-6 sm:mb-8">
              BlackCherry IT integra inteligencia avanzada para optimizar la infraestructura empresarial, transformando datos en decisiones estratégicas y procesos autónomos de alta fidelidad.
            </p>
            <AnimatedButton href="/contacto" theme="primary" className="mt-2">
              SOLICITAR DEMOSTRACIÓN
            </AnimatedButton>
          </div>
        </div>

        {/* Desktop only: Shuffle Grid Section */}
        <div className="hidden lg:flex w-full h-full items-center pr-0 lg:pr-8" aria-hidden="true">
          <ShuffleGrid />
        </div>

      </div>
    </section>
  );
};


const ShuffleGrid = () => {
  const [mounted, setMounted] = useState(false);
  const [squares, setSquares] = useState(squareData);
  const [cols, setCols] = useState(4);
  const [count, setCount] = useState(16);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 1024) {
        if (w <= 400) {
          // Very small: 1 col × 2 rows = 2 images
          setCols(1); setCount(2); setIsMobile(true);
        } else if (w <= 600) {
          // Small mobile: 2 cols × 2 rows = 4 images
          setCols(2); setCount(4); setIsMobile(true);
        } else {
          // Tablet/large mobile: 3 cols × 2 rows = 6 images
          setCols(3); setCount(6); setIsMobile(true);
        }
        return;
      }
      setIsMobile(false);

      // Available width for the right column: roughly half the viewport minus gutters
      const gutterPx = 112; // 2×7rem
      const colWidth = (w - gutterPx) / 2;

      if (colWidth >= 480) {
        setCols(4); setCount(16); // 4×4
      } else if (colWidth >= 340) {
        setCols(3); setCount(9);  // 3×3
      } else {
        setCols(2); setCount(4);  // 2×2
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    const interval = setInterval(() => {
      setSquares(prev => shuffle(prev));
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const visibleSquares = squares.slice(0, count);

  const rows = Math.ceil(count / cols);

  // Mobile: fill the full container height; Desktop: square cells
  const gridStyle: React.CSSProperties = isMobile ? {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: "0.5rem",
    width: "100%",
    height: "100%",
  } : {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: "0.5rem",
    width: "100%",
  };

  const cellStyle: React.CSSProperties = isMobile ? {
    position: "relative",
    borderRadius: "0.75rem",
    overflow: "hidden",
    minHeight: 0, // allow flex/grid shrink
  } : {
    aspectRatio: "1 / 1",
    position: "relative",
    borderRadius: "0.75rem",
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
              duration: 0.8, 
              ease: "easeInOut",
              opacity: { duration: 0.3 }
            }}
            style={{ ...cellStyle, transform: "translateZ(0)" }}
            className="bg-stone-100 shadow-inner will-change-transform"
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
