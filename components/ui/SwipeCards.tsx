"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface SwipeCardsProps {
  images?: string[];
}

export const SwipeCards: React.FC<SwipeCardsProps> = ({ images }) => {
  const defaultImages = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const sourceImages = images && images.length > 0 ? images : defaultImages;
  
  // The component expects the front card to be the last one in the array.
  // We reverse the images so the first image in the array appears on top.
  const reversedImages = [...sourceImages].reverse();

  const [cards, setCards] = useState(
    reversedImages.map((url, index) => ({
      id: index + 1,
      url,
    }))
  );

  const handleNext = () => {
    if (cards.length <= 1) return;
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.pop(); // Remove from end (top)
      if (topCard) {
        newCards.unshift(topCard); // Add to beginning (back)
      }
      return newCards;
    });
  };

  const handlePrev = () => {
    if (cards.length <= 1) return;
    setCards((prev) => {
      const newCards = [...prev];
      const bottomCard = newCards.shift(); // Remove from beginning (back)
      if (bottomCard) {
        newCards.push(bottomCard); // Add to end (top)
      }
      return newCards;
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="grid h-[500px] w-full place-items-center bg-transparent relative"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d422'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        {cards.map((card) => {
          return (
            <Card 
              key={card.id} 
              cards={cards} 
              setCards={setCards} 
              {...card} 
            />
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex gap-4 mt-6 z-20">
        <button 
          onClick={handlePrev}
          disabled={cards.length <= 1}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all backdrop-blur-md"
          aria-label="Imagen anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          onClick={handleNext}
          disabled={cards.length <= 1}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all backdrop-blur-md"
          aria-label="Siguiente imagen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Card = ({
  id,
  url,
  setCards,
  cards,
}: {
  id: number;
  url: string;
  setCards: React.Dispatch<React.SetStateAction<{ id: number; url: string }[]>>;
  cards: { id: number; url: string }[];
}) => {
  const isFront = id === cards[cards.length - 1].id;

  // Stagger the rotation for cards in the back
  const offset = isFront ? 0 : id % 2 ? 6 : -6;
  const rotate = `${offset}deg`;

  return (
    <motion.img
      src={url}
      alt="Project Details Gallery Image"
      className="h-[28rem] w-80 origin-bottom rounded-2xl bg-black object-cover border border-white/10 transition-all duration-300"
      style={{
        gridRow: 1,
        gridColumn: 1,
        rotate,
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
    />
  );
};

export default SwipeCards;
