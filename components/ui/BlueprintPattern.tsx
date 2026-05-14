"use client";

import React from "react";

type PatternType = "circuit" | "diagonal";

interface BlueprintPatternProps {
  type?: PatternType;
  opacity?: number;
  className?: string;
  size?: number;
}

/**
 * BlueprintPattern Component
 * Renders technical/engineering background patterns.
 */
const BlueprintPattern: React.FC<BlueprintPatternProps> = ({
  type = "circuit",
  opacity,
  className = "",
  size,
}) => {
  const getPatternClass = () => {
    switch (type) {
      case "diagonal":
        return "diagonal-blueprint";
      case "circuit":
      default:
        return "blueprint-circuit";
    }
  };

  const defaultOpacity = opacity !== undefined ? opacity : (
    type === "circuit" ? 0.08 : 0.04
  );

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${getPatternClass()} ${className}`}
      style={{ 
        opacity: defaultOpacity,
        backgroundSize: size ? `${size}px ${size}px` : undefined
      }}
    />
  );
};

export default BlueprintPattern;
