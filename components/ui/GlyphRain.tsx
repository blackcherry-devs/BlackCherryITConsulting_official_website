"use client";

import React from "react";

interface GlyphRainProps {
  className?: string;
  opacity?: number;
  color?: string;
  count?: number;
}

/**
 * GlyphRain Component
 * Renders a matrix-style falling characters background.
 */
const GlyphRain: React.FC<GlyphRainProps> = ({
  className = "",
  opacity = 0.15,
  color = "#8B090A",
  count = 15,
}) => {
  // Predefined strings to use for the glyph columns
  const glyphStrings = [
    "01011101010110101010101111010101010111010101101010101011110101",
    "IT_SYSTEMS_BLACKCHERRY_REDUX_01010101101010101011110101",
    "1010111010101101010101011110101010111010101101010101011110101",
    "0001101010101101010101011110101010111010101101010101011110101",
    "MONOLITH_ARCHITECTURE_STABLE_10101010111101010101110101011",
    "1110101010111010101101010101011110101010111010101101010101011110101",
    "TRANSMISSION_INITIATED_010101",
    "ENCRYPTED_DATA_STREAM_X99",
    "BLACKCHERRY_CORE_v2.0.1",
  ];

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none flex justify-around ${className}`}
      style={{ opacity }}
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="glyph-column"
          style={{
            animationDelay: `${(i * 0.7) % 5}s`,
            animationDuration: `${10 + (i % 10)}s`,
            color: color,
          }}
        >
          {glyphStrings[i % glyphStrings.length]}
        </div>
      ))}
    </div>
  );
};

export default GlyphRain;
