"use client";

import React from "react";

interface DotPatternProps {
  opacity?: number;
  className?: string;
  size?: number;
}

/**
 * DotPattern Component
 * Renders a radial gradient dots pattern (wireframe-overlay).
 */
const DotPattern: React.FC<DotPatternProps> = ({
  opacity = 0.05,
  className = "",
  size = 24,
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none wireframe-overlay ${className}`}
      style={{ 
        opacity,
        backgroundSize: `${size}px ${size}px`
      }}
    />
  );
};

export default DotPattern;
