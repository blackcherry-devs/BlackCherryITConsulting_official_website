"use client";

import React from "react";

type GridMode = "light" | "dark" | "red" | "dark-red";

interface TechnicalGridProps {
  mode?: GridMode;
  opacity?: number;
  className?: string;
  size?: number; // custom grid size if needed
}

/**
 * TechnicalGrid Component
 * Renders various architectural grid patterns used across the site.
 */
const TechnicalGrid: React.FC<TechnicalGridProps> = ({
  mode = "light",
  opacity,
  className = "",
  size,
}) => {
  const getGridClass = () => {
    switch (mode) {
      case "dark":
        return "technical-grid-dark"; // Note: this class should be defined if not already
      case "red":
        return "technical-grid-red";
      case "dark-red":
        return "technical-grid-dark-red"; // Placeholder for future use
      case "light":
      default:
        return "technical-grid-light";
    }
  };

  // Default opacities based on mode if not provided
  const defaultOpacity = opacity !== undefined ? opacity : (
    mode === "light" ? 0.5 : mode === "red" ? 0.1 : 0.3
  );

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${getGridClass()} ${className}`}
      style={{ 
        opacity: defaultOpacity,
        backgroundSize: size ? `${size}px ${size}px` : undefined
      }}
    />
  );
};

export default TechnicalGrid;
