"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { BeamInputWrapper } from "@/components/ui/BeamInputWrapper";
import { Notification, NotificationType } from "@/components/ui/Notification";
import { sendGTMEvent } from "@next/third-parties/google";

interface ContactFormProps {
  theme?: "light" | "dark" | "industrial";
  compact?: boolean;
}

export default function ContactForm({ 
  theme = "light",
  compact = false 
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const removeNotif = () => setNotification(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setNotification({
          id: Math.random(),
          text: "Mensaje enviado con éxito. Te contactaremos pronto.",
        });
        sendGTMEvent({ event: "generate_lead", value: "contact_form" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error || "Ocurrió un error al enviar el mensaje.");
      }
    } catch (error: any) {
      setNotification({
        id: Math.random(),
        text: error.message || "Error de conexión. Intenta de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === "dark" || theme === "industrial";
  
  const labelClasses = "text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-stone-500 group-focus-within:text-primary-container transition-colors";

  const inputBaseClasses = `w-full bg-transparent py-2 sm:py-3 font-headline font-bold tracking-widest uppercase focus:outline-none transition-colors placeholder:text-stone-400 px-1 text-black ${compact ? "text-[8px] sm:text-[10px] md:text-xs" : "text-base md:text-lg"}`;

  const borderClasses = isDark ? "border-white/10" : "border-stone-300";

  return (
    <>
      <form className={`${compact ? "space-y-4" : "space-y-8"} w-full`} onSubmit={handleSubmit}>
        <div className="relative group">
          <label htmlFor="contact-name" className={labelClasses}>Nombre Completo</label>
          <BeamInputWrapper rounded={isDark ? "rounded-xl" : "rounded-none"} className={`group border-b ${borderClasses}`}>
            <input 
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBaseClasses}
              placeholder="Nombre" 
              type="text"
              required
              aria-required="true"
            />
          </BeamInputWrapper>
        </div>
        
        <div className="relative group">
          <label htmlFor="contact-email" className={labelClasses}>Email Corporativo</label>
          <BeamInputWrapper rounded={isDark ? "rounded-xl" : "rounded-none"} className={`group border-b ${borderClasses}`}>
            <input 
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputBaseClasses}
              placeholder="Correo" 
              type="email"
              required
              aria-required="true"
            />
          </BeamInputWrapper>
        </div>

        <div className="relative group">
          <label htmlFor="contact-message" className={labelClasses}>Mensaje / Proyecto</label>
          <BeamInputWrapper rounded={isDark ? "rounded-xl" : "rounded-none"} className={`group border-b ${borderClasses}`}>
            <textarea 
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputBaseClasses} resize-none min-h-[44px]`}
              placeholder="Mensaje" 
              rows={compact ? 2 : 4}
              required
              aria-required="true"
            ></textarea>
          </BeamInputWrapper>
        </div>

        <AnimatedButton 
          className={`mt-4 sm:mt-8 w-full justify-center ${compact ? "text-[8px] sm:text-[10px] md:text-xs py-2 sm:py-3" : "py-4"}`} 
          type="submit"
          theme={theme === "industrial" ? "light" : "primary"}
          disabled={loading}
        >
          {loading ? "TRANSMITIENDO..." : "ENVIAR CONSULTA"}
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
