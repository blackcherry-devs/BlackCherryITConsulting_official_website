"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { BeamInputWrapper } from "@/components/ui/BeamInputWrapper";

import { Notification, NotificationType } from "@/components/ui/Notification";

export default function ContactForm() {
  const [notification, setNotification] = useState<NotificationType | null>(null);

  const removeNotif = () => setNotification(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock successful email send
    
    // Show success notification
    setNotification({
      id: Math.random(),
      text: "Mensaje enviado con éxito. Te contactaremos pronto.",
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <>
      <form className="space-y-6 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <BeamInputWrapper rounded="rounded-none" className="group border-b border-stone-300">
            <input 
              className="w-full bg-transparent py-1 sm:py-2 font-headline font-bold text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase focus:outline-none transition-colors placeholder:text-stone-400 text-black px-1" 
              placeholder="NOMBRE COMPLETO" 
              type="text"
              required
            />
          </BeamInputWrapper>
        </div>
        <div className="relative">
          <BeamInputWrapper rounded="rounded-none" className="group border-b border-stone-300">
            <input 
              className="w-full bg-transparent py-1 sm:py-2 font-headline font-bold text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase focus:outline-none transition-colors placeholder:text-stone-400 text-black px-1" 
              placeholder="EMAIL CORPORATIVO" 
              type="email"
              required
            />
          </BeamInputWrapper>
        </div>
        <div className="relative">
          <BeamInputWrapper rounded="rounded-none" className="group border-b border-stone-300">
            <textarea 
              className="w-full bg-transparent py-1 sm:py-2 font-headline font-bold text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase focus:outline-none transition-colors placeholder:text-stone-400 resize-none text-black px-1" 
              placeholder="MENSAJE" 
              rows={2}
              required
            ></textarea>
          </BeamInputWrapper>
        </div>
        <AnimatedButton 
          className="mt-4 sm:mt-8 w-full justify-center text-[8px] sm:text-[10px] md:text-xs py-2 sm:py-3" 
          type="submit"
          theme="primary"
          as="button"
        >
          ENVIAR
        </AnimatedButton>
      </form>

      <AnimatePresence>
        {notification && (
          <Notification
            removeNotif={removeNotif}
            key={notification.id}
            {...notification}
          />
        )}
      </AnimatePresence>
    </>
  );
}
