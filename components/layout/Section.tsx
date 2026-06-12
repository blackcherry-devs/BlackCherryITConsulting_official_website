"use client";

import React, { forwardRef } from "react";
import GridLines from "@/components/ui/GridLines";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withGridLines?: boolean;
  theme?: "light" | "dark" | "red";
  fullHeight?: boolean;
  noPadding?: boolean;
}

/**
 * Section Component
 * A standardized wrapper for page sections to ensure consistent layout and spacing.
 */
const Section = forwardRef<HTMLElement, SectionProps>(({
  id,
  className = "",
  children,
  withGridLines = true,
  theme = "light",
  fullHeight = false,
  noPadding = false,
  ...props
}, ref) => {
  const getThemeClasses = () => {
    switch (theme) {
      case "dark":
        return "bg-[#1A1A1A] text-white";
      case "red":
        return "bg-[#8B090A] text-white";
      case "light":
      default:
        return "bg-white text-black";
    }
  };

  const paddingClasses = noPadding ? "" : "px-4 min-[600px]:px-[4rem] lg:px-[7rem] py-20 md:py-32 lg:py-48";
  const heightClasses = fullHeight ? "min-h-screen" : "h-auto";

  return (
    <section 
      id={id} 
      ref={ref}
      className={`w-full relative overflow-hidden flex flex-col justify-center ${getThemeClasses()} ${heightClasses} ${paddingClasses} ${className}`}
      {...props}
    >
      {withGridLines && <GridLines />}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
