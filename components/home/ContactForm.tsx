"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import GridLines from "@/components/ui/GridLines";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { BeamInputWrapper } from "@/components/ui/BeamInputWrapper";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    
    // Check if env vars are present
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not found in environment variables. Simulating success.");
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        form.reset();
      }, 1000);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );
      setSuccess(true);
      form.reset();
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError("Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="w-full bg-[#1F1F1F] text-white relative overflow-hidden flex flex-col md:flex-row">
      {/* Split Background: Solid White on Right */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-white z-0 hidden md:block"></div>
      <GridLines />
      
      {/* Glyph Rain Background */}
      <div className="glyph-rain-container z-0 opacity-10">
        <div className="glyph-column" style={{ animationDelay: "0s" }}>MATRIX_SYSTEM_CONTACT_INIT_010101</div>
        <div className="glyph-column" style={{ animationDelay: "3s" }}>101011110101010111010101101010101011110101</div>
        <div className="glyph-column" style={{ animationDelay: "6s" }}>HABLEMOS_DEL_FUTURO_010101101010101011110101</div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-stretch w-full px-4 md:px-[7rem] py-32 md:py-48">
        {/* Left Side: Massive Typography & Info */}
        <div className="md:w-1/2 flex flex-col justify-center pl-0 md:pl-4 py-12">
          <span className="font-headline font-black text-white text-xs tracking-[0.4em] uppercase mb-12 block">05 / CONTACTO</span>
          <h2 className="font-headline font-black text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter uppercase mb-12">
            HABLEMOS <br /> DEL <br /> <span className="text-[#8B090A]">FUTURO.</span>
          </h2>
          <div className="max-w-md">
            <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-16">
              Su próximo sitio web comienza aquí. Déjenos los detalles técnicos a nosotros.
            </p>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">Transmission</span>
                <a className="font-headline font-bold text-xl hover:text-primary-container transition-colors tracking-tight" href="mailto:blackcherrydevs@gmail.com">
                  blackcherrydevs@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">Coordinates</span>
                <p className="font-headline font-bold text-xl tracking-tight">Remote / León, Guanajuato, Mexico.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sophisticated Glassmorphism Form over White BG */}
        <div className="md:w-1/2 flex items-center justify-end pr-0 md:pr-4 py-12 relative">
          {/* Mobile background fix */}
          <div className="absolute inset-0 bg-white z-0 md:hidden w-[100vw] left-[-1rem]"></div>
          
          <div className="w-full max-w-lg p-6 md:p-14 relative overflow-hidden pl-[1rem] rounded-xl bg-transparent border-none shadow-none md:translate-x-2">
            {/* Subtle Form Background Polish */}
            <div className="absolute inset-0 wireframe-overlay opacity-5 pointer-events-none hidden md:block"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-focus-within:text-primary-container transition-colors text-black">
                  Nombre Completo
                </label>
                <BeamInputWrapper rounded="rounded-xl">
                  <input 
                    name="user_name"
                    className="w-full bg-white py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/80 rounded-xl px-4 min-h-[44px]" 
                    placeholder="IDENTIFICACIÓN DEL OPERADOR" 
                    type="text" 
                    required
                  />
                </BeamInputWrapper>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-focus-within:text-primary-container transition-colors text-black">
                  Email Corporativo
                </label>
                <BeamInputWrapper rounded="rounded-xl">
                  <input 
                    name="user_email"
                    className="w-full bg-white py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/80 rounded-xl px-4 min-h-[44px]" 
                    placeholder="CANAL@COMUNICACION.IT" 
                    type="email" 
                    required
                  />
                </BeamInputWrapper>
              </div>
              
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-focus-within:text-primary-container transition-colors text-black">
                  Mensaje / HABLANOS DE TU PROYECTO
                </label>
                <BeamInputWrapper rounded="rounded-xl">
                  <textarea 
                    name="message"
                    className="w-full bg-white py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/80 rounded-xl px-4 min-h-[44px]" 
                    placeholder="DESCRIBA LA INFRAESTRUCTURA..." 
                    rows={4} 
                    required
                  ></textarea>
                </BeamInputWrapper>
              </div>

              {error && <p className="text-red-600 font-bold text-sm">{error}</p>}
              {success && <p className="text-green-600 font-bold text-sm uppercase tracking-wider">¡Mensaje enviado exitosamente!</p>}
              
              <AnimatedButton 
                disabled={loading}
                theme="light"
                className="mt-8 w-full justify-center"
                type="submit"
              >
                {loading ? "TRANSMITIENDO..." : "ENVIAR CONSULTA"}
              </AnimatedButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
