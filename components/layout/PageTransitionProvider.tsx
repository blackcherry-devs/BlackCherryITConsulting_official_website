'use client';

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  Suspense,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import gsap from 'gsap';

interface PageTransitionContextType {
  triggerTransition: (href: string, x?: number, y?: number) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(
  null,
);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      'usePageTransition must be used within a PageTransitionProvider',
    );
  }
  return context;
};

function SearchParamsUpdater({ onUpdate }: { onUpdate: (s: string) => void }) {
  const searchParams = useSearchParams();
  const paramsStr = searchParams.toString();
  useEffect(() => {
    onUpdate(paramsStr);
  }, [paramsStr, onUpdate]);
  return null;
}

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);
  const [searchParamsStr, setSearchParamsStr] = useState('');
  const startPath = useRef<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const triggerTransition = useCallback(
    (href: string, clickX?: number, clickY?: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTargetHref(href);
      startPath.current = pathname + '?' + searchParamsStr;

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
          display: 'block',
        });

        // Prepare the logo
        gsap.set(logoRef.current, {
          opacity: 0,
          scale: 0.8,
          display: 'block',
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
          },
        );

        // Fade in logo while red dot covers screen
        gsap.to(logoRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.3, // Wait for red dot to cover center
          ease: 'power2.out',
        });
      }
    },
    [isTransitioning, router, pathname, searchParamsStr],
  );

  // Phase 3: When the route finishes changing, shrink the dot
  useEffect(() => {
    if (isTransitioning && targetHref) {
      const currentPath = pathname + '?' + searchParamsStr;

      // Only shrink if the path has actually changed from when we started the transition
      if (startPath.current !== currentPath) {
        // Wait a tiny bit to ensure the new page DOM has painted behind the dot
        const timer = setTimeout(() => {
          if (dotRef.current && logoRef.current) {
            // Fade out the logo
            gsap.to(logoRef.current, {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              ease: 'power2.in',
            });

            // Shrink the red dot
            gsap.to(dotRef.current, {
              scale: 0,
              duration: 0.8,
              delay: 0.1, // Wait slightly for logo to begin fading
              ease: 'power3.inOut',
              onComplete: () => {
                gsap.set(dotRef.current, { display: 'none' });
                gsap.set(logoRef.current, { display: 'none' });
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
  }, [pathname, searchParamsStr, isTransitioning, targetHref]);

  return (
    <PageTransitionContext.Provider value={{ triggerTransition }}>
      <Suspense fallback={null}>
        <SearchParamsUpdater onUpdate={setSearchParamsStr} />
      </Suspense>
      {/* The Red Dot Overlay */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-5 h-5 bg-[#8B090A] rounded-full z-[9998] pointer-events-none hidden"
        style={{ transformOrigin: 'center center' }}
      ></div>
      {/* The White Logo Overlay (Pure SVG) */}
      <div
        ref={logoRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-32 z-[9999] pointer-events-none hidden text-black"
      >
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="28" cy="70" r="18" fill="currentColor" stroke="none" />
          <circle cx="72" cy="70" r="18" fill="currentColor" stroke="none" />
          <path
            d="M28 52 L50 15 L72 52"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {children}
    </PageTransitionContext.Provider>
  );
}
