"use client";

import { useState, useEffect, useRef } from "react";

const videos = [
  "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-with-nodes-and-lines-27318-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-server-racks-in-a-data-center-41712-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-31420-large.mp4"
];

export default function HeroVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Play the active video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.currentTime = 0;
          video.play().catch(e => console.log("Auto-play prevented", e));
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  const handleVideoEnd = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="relative w-full bg-stone-100 overflow-hidden h-[400px] md:h-[620px]">
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      ))}
      
      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20 pointer-events-none"></div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-30">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-12 h-1 transition-colors duration-300 ${
              index === activeIndex ? "bg-primary-container" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
