"use client";

import { useState, useEffect, useRef } from "react";

const videos = [
  "/services/video_servicios.mp4"
];

export default function HeroVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Play the active video
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.log("Auto-play prevented", e));
    }
  }, [activeIndex]);

  const handleVideoEnd = () => {
    // Auto loop the single video or cycle if more are added
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="relative w-full bg-stone-100 overflow-hidden h-full lg:h-[620px]">
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
          autoPlay
          loop
          onEnded={handleVideoEnd}
        />
      ))}
      
      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
