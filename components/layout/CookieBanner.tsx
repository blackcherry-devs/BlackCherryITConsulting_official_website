"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "@/components/ui/AnimatedLink";
import { sendGTMEvent } from "@next/third-parties/google";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    sendGTMEvent({ event: "cookie_consent", status: "accepted" });
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    sendGTMEvent({ event: "cookie_consent", status: "declined" });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[1000]"
        >
          <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-none relative overflow-hidden group">
            {/* Technical grid overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid-red"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-primary-container animate-pulse"></span>
                <span className="font-headline font-black text-[10px] tracking-[0.4em] text-white uppercase">
                  PROTOCOLO DE PRIVACIDAD
                </span>
              </div>
              
              <h3 className="font-headline font-black text-xl text-white tracking-tighter uppercase mb-3">
                GESTIÓN DE COOKIES
              </h3>
              
              <p className="font-body text-white/50 text-[10px] md:text-xs leading-relaxed mb-6 uppercase tracking-widest">
                Utilizamos tecnologías de rastreo para optimizar la arquitectura de su experiencia y analizar el tráfico de nuestra infraestructura digital. Al continuar, acepta nuestra{" "}
                <Link href="/privacidad" className="text-white border-b border-white/20 hover:border-primary-container transition-colors">
                  política de datos
                </Link>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-white px-6 py-3 transition-all hover:bg-primary-container hover:text-white"
                >
                  <span className="font-headline font-black text-[10px] text-black tracking-[0.2em] uppercase group-hover:text-inherit">
                    ACEPTAR TODO
                  </span>
                </button>
                <button
                  onClick={declineCookies}
                  className="flex-1 bg-transparent border border-white/10 px-6 py-3 transition-all hover:bg-white/5 hover:border-white/30"
                >
                  <span className="font-headline font-black text-[10px] text-white/40 tracking-[0.2em] uppercase">
                    RECHAZAR
                  </span>
                </button>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container/50"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
