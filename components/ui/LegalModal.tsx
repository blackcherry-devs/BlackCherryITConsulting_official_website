"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiInfo } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
}

export const LegalModal = ({
  isOpen,
  setIsOpen,
  children,
  title,
}: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-black/90 backdrop-blur-md p-4 fixed inset-0 z-[9999] grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] text-white p-8 rounded-2xl w-full max-w-2xl shadow-2xl cursor-default relative overflow-hidden border border-white/10"
          >
            <FiInfo className="text-white/[0.03] rotate-12 text-[300px] absolute z-0 -top-24 -left-24" />
            
            <div className="relative z-10">
              <div className="bg-primary-container w-16 h-16 mb-6 rounded-full text-3xl text-white grid place-items-center mx-auto shadow-lg shadow-red-900/20">
                <FiInfo />
              </div>
              
              <h3 className="text-3xl font-headline font-black text-center mb-6 uppercase tracking-tighter">
                {title}
              </h3>
              
              <div 
                className="max-h-[50vh] overflow-y-auto pr-4 mb-8 custom-scrollbar font-body text-white/60 text-sm leading-relaxed space-y-4 pointer-events-auto touch-auto"
                onWheel={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {children}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/5 hover:bg-white/10 transition-colors text-white font-headline font-bold uppercase tracking-widest text-xs w-full py-4 rounded-xl border border-white/5"
                >
                  Regresar
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary-container hover:bg-red-700 transition-colors text-white font-headline font-bold uppercase tracking-widest text-xs w-full py-4 rounded-xl shadow-lg shadow-red-900/40"
                >
                  Entendido
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
