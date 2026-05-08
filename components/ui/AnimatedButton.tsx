"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  theme?: "light" | "dark" | "primary";
  children: React.ReactNode;
  className?: string;
  asDiv?: boolean;
  style?: React.CSSProperties;
}

const AnimatedButton = ({ 
  children, 
  href, 
  theme = "light", 
  className = "", 
  asDiv = false,
  style,
  ...props 
}: AnimatedButtonProps) => {
  // Base classes for the button container
  const baseClasses = "group/btn flex h-12 w-fit items-center gap-4 rounded-full pl-5 pr-6 transition-all duration-300 ease-in-out hover:pl-4 font-headline font-black text-[10px] md:text-xs tracking-[0.2em] uppercase";
  
  // Background, text, and hover colors based on the theme
  const themeClasses = {
    // dark theme: used on dark backgrounds, button is white
    dark: "bg-white text-black hover:bg-primary-container hover:text-white active:bg-neutral-300",
    // light theme: used on light backgrounds, button is black
    light: "bg-black text-white hover:bg-primary-container hover:text-white active:bg-neutral-800",
    // primary theme: red button
    primary: "bg-primary-container text-white hover:bg-primary-container hover:text-white active:bg-red-800"
  };

  // The inner dot and arrow icon colors
  const dotClasses = {
    dark: "bg-black text-white group-hover/btn:bg-white group-hover/btn:text-primary-container",
    light: "bg-white text-black group-hover/btn:bg-white group-hover/btn:text-primary-container",
    primary: "bg-white text-primary-container group-hover/btn:bg-white group-hover/btn:text-primary-container"
  };

  const buttonContent = (
    <div className={`${baseClasses} ${themeClasses[theme]} ${className}`} style={style}>
      <span className={`rounded-full w-2.5 h-2.5 group-hover/btn:w-6 group-hover/btn:h-6 flex items-center justify-center transition-all duration-300 ${dotClasses[theme]}`}>
        <FiArrowRight className="-translate-x-[200%] text-[0px] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:text-sm group-hover/btn:opacity-100 group-active:-rotate-45" />
      </span>
      <span>{children}</span>
    </div>
  );

  if (href) {
    // If external link or anchor
    if (href.startsWith("http") || href.startsWith("mailto")) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
          {buttonContent}
        </a>
      );
    }
    // Internal Next.js link
    return (
      <Link href={href}>
        {buttonContent}
      </Link>
    );
  }

  if (asDiv) {
    return (
      <div className={`outline-none ${className}`}>
        {buttonContent}
      </div>
    );
  }

  return (
    <button {...props} className={`outline-none ${className}`}>
      {buttonContent}
    </button>
  );
};

export default AnimatedButton;
