'use client';

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import gsap from 'gsap';

interface PageTransitionContextType {
  triggerTransition: (href: string, x?: number, y?: number) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);
  const startPath = useRef<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const triggerTransition = useCallback(
    (href: string, clickX?: number, clickY?: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTargetHref(href);
      startPath.current = pathname + '?' + searchParams.toString();

      if (dotRef.current) {
        const startX = clickX ?? window.innerWidth / 2;
        const startY = clickY ?? window.innerHeight / 2;

        // Calculate max scale needed to cover the screen from the click point
        const maxDistX = Math.max(startX, window.innerWidth - startX);
        const maxDistY = Math.max(startY, window.innerHeight - startY);
        const maxRadius = Math.sqrt(maxDistX * maxDistX + maxDistY * maxDistY);
        const scaleNeeded = (maxRadius * 2.5) / 20; // 20px is base width/height. Add 2.5 multiplier for safety margin

        // Position the dot at the click coordinates
        gsap.set(dotRef.current, {
          x: startX,
          y: startY,
          xPercent: -50,
          yPercent: -50,
          display: 'block'
        });

        gsap.fromTo(
          dotRef.current,
          { scale: 0, opacity: 1 },
          {
            scale: scaleNeeded,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              // Navigate after dot covers screen
              router.push(href);
            },
          }
        );
      }
    },
    [isTransitioning, router, pathname, searchParams]
  );

  // Phase 3: When the route finishes changing, shrink the dot
  useEffect(() => {
    if (isTransitioning && targetHref) {
      const currentPath = pathname + '?' + searchParams.toString();
      
      // Only shrink if the path has actually changed from when we started the transition
      if (startPath.current !== currentPath) {
        // Wait a tiny bit to ensure the new page DOM has painted behind the dot
        const timer = setTimeout(() => {
          if (dotRef.current) {
            // Shrink
            gsap.to(dotRef.current, {
              scale: 0,
              duration: 0.8,
              ease: 'power3.inOut',
              onComplete: () => {
                gsap.set(dotRef.current, { display: 'none' });
                setIsTransitioning(false);
                setTargetHref(null);
                startPath.current = null;
              },
            });
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname, searchParams, isTransitioning, targetHref]);

  return (
    <PageTransitionContext.Provider value={{ triggerTransition }}>
      {/* The Red Dot Overlay */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-5 h-5 bg-[#8B090A] rounded-full z-[9999] pointer-events-none hidden"
        style={{ transformOrigin: 'center center' }}
      ></div>
      {children}
    </PageTransitionContext.Provider>
  );
}
