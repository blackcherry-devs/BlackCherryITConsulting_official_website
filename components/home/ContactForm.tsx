'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import GridLines from '@/components/ui/GridLines';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { BeamInputWrapper } from '@/components/ui/BeamInputWrapper';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactForm() {
  const containerRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        // Hide the right side at the bottom initially
        gsap.set('.form-right-side', { yPercent: 100 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: true,
          },
        });

        tl.to('.form-right-side', {
          yPercent: 0,
          ease: 'none',
        });
      });
    },
    { scope: containerRef },
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        'EmailJS credentials not found in environment variables. Simulating success.',
      );
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        form.reset();
      }, 1000);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(
        'Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="w-full text-white relative overflow-hidden min-h-screen"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-stretch w-full h-full min-h-screen">
        {/* Left Side: Massive Typography & Info */}
        <div className="form-left-side w-full md:w-1/2 flex flex-col justify-center px-4 md:pl-[8rem] md:pr-12 py-32 md:py-48 bg-[#1F1F1F] text-white relative z-10 overflow-hidden">
          <GridLines showRight={false} showCenter={false} />
          <div className="relative z-10">
            <span className="font-headline font-black text-white text-xs tracking-[0.4em] uppercase mb-12 block">
              05 / CONTACTO
            </span>
            <h2 className="font-headline font-black text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter uppercase mb-12">
              HABLEMOS <br /> DEL <br />{' '}
              <span className="text-[#8B090A]">FUTURO.</span>
            </h2>
            <div className="max-w-md">
              <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-16">
                Su próximo sitio web comienza aquí. Déjenos los detalles
                técnicos a nosotros.
              </p>
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">
                    Transmission
                  </span>
                  <a
                    className="font-headline font-bold text-xl hover:text-primary-container transition-colors tracking-tight"
                    href="mailto:blackcherrydevs@gmail.com"
                  >
                    blackcherrydevs@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-container">
                    Coordinates
                  </span>
                  <p className="font-headline font-bold text-xl tracking-tight">
                    Remote / León, Guanajuato, Mexico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sophisticated Glassmorphism Form over White BG */}
        <div className="form-right-side w-full md:w-1/2 flex items-center justify-start md:justify-end px-4 md:pr-[7rem] md:pl-12 py-32 md:py-48 bg-white relative z-20 shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
          <div className="w-full max-w-lg p-6 md:p-14 relative overflow-hidden rounded-xl bg-transparent border-none shadow-none md:translate-x-2">
            {/* Subtle Form Background Polish */}
            <div
              className="absolute inset-0 wireframe-overlay opacity-5 pointer-events-none hidden md:block"
              style={{ filter: 'invert(1)' }}
            ></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-focus-within:text-primary-container transition-colors text-black">
                  Nombre Completo
                </label>
                <BeamInputWrapper rounded="rounded-xl">
                  <input
                    name="user_name"
                    className="w-full bg-[#fcfcfc] border border-black/5 py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/30 rounded-xl px-4 min-h-[44px]"
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
                    className="w-full bg-[#fcfcfc] border border-black/5 py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/30 rounded-xl px-4 min-h-[44px]"
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
                    className="w-full bg-[#fcfcfc] border border-black/5 py-3 focus:outline-none transition-all text-black font-headline text-lg placeholder:text-black/30 rounded-xl px-4 min-h-[44px]"
                    placeholder="DESCRIBA LA INFRAESTRUCTURA..."
                    rows={4}
                    required
                  ></textarea>
                </BeamInputWrapper>
              </div>

              {error && (
                <p className="text-red-600 font-bold text-sm">{error}</p>
              )}
              {success && (
                <p className="text-green-600 font-bold text-sm uppercase tracking-wider">
                  ¡Mensaje enviado exitosamente!
                </p>
              )}

              <AnimatedButton
                disabled={loading}
                theme="light"
                className="mt-8 w-full justify-center"
                type="submit"
              >
                {loading ? 'TRANSMITIENDO...' : 'ENVIAR CONSULTA'}
              </AnimatedButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
