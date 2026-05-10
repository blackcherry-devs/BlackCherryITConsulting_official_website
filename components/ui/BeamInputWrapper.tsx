"use client";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";

interface BeamInputWrapperProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}

export const BeamInputWrapper = ({ children, className = "", rounded = "rounded-xl" }: BeamInputWrapperProps) => {
  const turn = useMotionValue(0);

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
    });
  }, [turn]);

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #8B090A00 75%, #8B090A 100%)`;

  return (
    <div className={`relative flex w-full items-center gap-2 bg-white transition-all duration-300 ${rounded} ${className}`}>
      {children}
      <div className={`pointer-events-none absolute inset-0 z-10 ${rounded}`}>
        <motion.div
          style={{
            backgroundImage,
          }}
          className={`mask-with-browser-support absolute -inset-[1px] ${rounded} border border-transparent bg-origin-border opacity-0 group-focus-within:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </div>
  );
};
