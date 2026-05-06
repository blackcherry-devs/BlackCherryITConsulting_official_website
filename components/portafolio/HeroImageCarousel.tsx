"use client";

import { useState, useEffect } from "react";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp"
];

export default function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden group">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover grayscale" 
              src={src} 
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>
      
      {/* Carousel Nav */}
      <div className="absolute bottom-12 left-6 md:left-12 flex gap-4 z-20">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-12 h-1 transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 pointer-events-none technical-grid-red opacity-20 z-10"></div>
    </div>
  );
}
