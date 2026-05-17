'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridLines from '@/components/ui/GridLines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const servicesData = {
  default: {
    subtitle: 'SERVICIOS DE GRADO INDUSTRIAL',
    title: 'EXCELENCIA\nARQUITECTÓNICA',
    desc: 'No solo construimos software. Arquitectamos monolitos digitales que definen líderes de mercado. Nuestro enfoque combina estabilidad técnica brutalista con precisión estética quirúrgica.',
    sub1Title: 'PROTOCOLO DE AUDITORÍA',
    sub1Desc:
      'Análisis profundo de infraestructuras heredadas para determinar vectores de evolución óptimos.',
    sub2Title: 'DESPLIEGUE A ESCALA',
    sub2Desc:
      'Pipelines de CI/CD diseñados para un rendimiento masivo y actualizaciones quirúrgicas sin tiempo de inactividad.',
  },
  web: {
    subtitle: 'EXPERIENCIAS FRONTEND',
    title: 'DESARROLLO\nWEB',
    desc: 'Interfaces digitales inmersivas y de alto rendimiento. Construimos aplicaciones web modernas que combinan velocidad asombrosa con estética premium.',
    sub1Title: 'ARQUITECTURA NEXT.JS',
    sub1Desc:
      'Ecosistemas frontend construidos para escala, con Server-Side Rendering y optimización de carga extrema.',
    sub2Title: 'ANIMACIONES FLUIDAS',
    sub2Desc:
      'Micro-interacciones y transiciones de nivel cinematográfico que elevan la percepción de la marca.',
  },
  backend: {
    subtitle: 'NÚCLEOS DE ALTO RENDIMIENTO',
    title: 'SISTEMAS\nBACKEND',
    desc: 'Arquitecturas robustas diseñadas para procesar operaciones masivas. Creamos la infraestructura invisible pero invencible que sostiene a los líderes del mercado.',
    sub1Title: 'BASES DE DATOS ESCALABLES',
    sub1Desc:
      'Sistemas de almacenamiento optimizados para lectura y escritura de alta concurrencia.',
    sub2Title: 'APIs DE ALTA VELOCIDAD',
    sub2Desc:
      'Interfaces de comunicación seguras y eficientes para conectar todo tu ecosistema digital.',
  },
  uiux: {
    subtitle: 'DISEÑO CENTRADO EN USUARIO',
    title: 'PRECISIÓN\nUI/UX',
    desc: 'Cada píxel es intencional. Diseñamos flujos de usuario que convierten, reduciendo la fricción a cero mediante estética vanguardista.',
    sub1Title: 'SISTEMAS DE DISEÑO',
    sub1Desc:
      'Librerías de componentes escalables que aseguran consistencia visual en cada punto de contacto.',
    sub2Title: 'PROTOTIPADO RÁPIDO',
    sub2Desc:
      'Validamos conceptos de alta fidelidad antes de escribir código, ahorrando recursos y tiempo.',
  },
  ia: {
    subtitle: 'INTELIGENCIA OPERATIVA',
    title: 'INTEGRACIÓN\nDE IA',
    desc: 'Automatizamos decisiones complejas y potenciamos capacidades humanas integrando modelos de lenguaje avanzados directamente en tu flujo.',
    sub1Title: 'AGENTES AUTÓNOMOS',
    sub1Desc:
      'Sistemas capaces de razonar, planificar y ejecutar tareas complejas de forma independiente 24/7.',
    sub2Title: 'RAG Y FINE-TUNING',
    sub2Desc:
      'Entrenamos modelos con tus datos corporativos para respuestas precisas y contextualmente conscientes.',
  },
  wa: {
    subtitle: 'INTERACCIÓN AUTÓNOMA',
    title: 'INTELIGENCIA\nCONVERSACIONAL',
    desc: 'Diseñamos ecosistemas de mensajería que operan con la precisión de un humano y la escala de un algoritmo. Automatización de grado industrial para WhatsApp y canales directos.',
    sub1Title: 'ARQUITECTURA DE FLUJOS',
    sub1Desc:
      'Diseño de árboles de decisión de alta complejidad para una calificación de leads quirúrgica.',
    sub2Title: 'OMNICANALIDAD CRÍTICA',
    sub2Desc:
      'Sincronización total con tu infraestructura interna para una trazabilidad absoluta del cliente.',
  },
  seo: {
    subtitle: 'DOMINIO DE BÚSQUEDA',
    title: 'ESTRATEGIAS\nSEO',
    desc: 'Arquitecturamos tu visibilidad digital. Estrategias técnicas diseñadas para conquistar los primeros lugares de manera orgánica y sostenida.',
    sub1Title: 'OPTIMIZACIÓN TÉCNICA',
    sub1Desc:
      'Reestructuración de código y mejora de Core Web Vitals para máxima indexación.',
    sub2Title: 'AUTORIDAD DE DOMINIO',
    sub2Desc:
      'Construcción de enlaces y contenido semántico que establece tu marca como el referente del sector.',
  },
};

type ServiceKey = keyof typeof servicesData;

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<ServiceKey>('default');
  const [carouselOrder, setCarouselOrder] = useState([0, 1, 2, 3, 4, 5]);
  const [isTablet, setIsTablet] = useState(false);

  const { contextSafe } = useGSAP(() => {
    // Animate IN from right side
    gsap.fromTo(".info-text",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.5)" }
    );
  }, { scope: containerRef, dependencies: [activeService] });

  const handleServiceChange = contextSafe((newService: ServiceKey) => {
    if (newService === activeService) return;

    // Kill existing animations and animate OUT to the left side
    gsap.killTweensOf(".info-text");
    gsap.to(".info-text", {
      x: -50,
      opacity: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.in",
      onComplete: () => setActiveService(newService)
    });
  });

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  const nextSlide = () => {
    const newOrder = [...carouselOrder.slice(1), carouselOrder[0]];
    setCarouselOrder(newOrder);
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      const keys: ServiceKey[] = ['web', 'backend', 'uiux', 'ia', 'wa', 'seo'];
      handleServiceChange(keys[newOrder[0]]);
    }
  };

  const prevSlide = () => {
    const newOrder = [
      carouselOrder[carouselOrder.length - 1],
      ...carouselOrder.slice(0, carouselOrder.length - 1),
    ];
    setCarouselOrder(newOrder);
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      const keys: ServiceKey[] = ['web', 'backend', 'uiux', 'ia', 'wa', 'seo'];
      handleServiceChange(keys[newOrder[0]]);
    }
  };

  // Tablet Scroll Interaction: Update activeService based on viewport position
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!isTablet) return;

    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Narrow center strip
      threshold: 0,
    };

    const visibleServices = new Set<ServiceKey>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const serviceId = entry.target.getAttribute(
          'data-service',
        ) as ServiceKey;
        if (!serviceId) return;

        if (entry.isIntersecting) {
          visibleServices.add(serviceId);
        } else {
          visibleServices.delete(serviceId);
        }
      });

      if (visibleServices.size > 0) {
        handleServiceChange(Array.from(visibleServices)[0]);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Use a timeout to ensure refs are populated after first render/resize
    const timeoutId = setTimeout(() => {
      Object.values(observerRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isTablet]);


  const CARDS_DATA = [
    {
      id: 'web',
      title: 'DESARROLLO <br /> WEB',
      img: '/services/web_dev.png',
      mt: '',
    },
    {
      id: 'backend',
      title: 'SISTEMAS <br /> BACKEND',
      img: '/services/backend.png',
      mt: 'lg:mt-32',
    },
    {
      id: 'uiux',
      title: 'PRECISIÓN <br /> UI/UX',
      img: '/services/uiux.png',
      mt: 'lg:-mt-16',
    },
    {
      id: 'ia',
      title: 'INTEGRACIÓN <br /> DE IA',
      img: '/services/ai.png',
      mt: 'lg:mt-16',
    },
    {
      id: 'wa',
      title: 'AUTOMATIZACIÓN <br /> DE WHATSAPP',
      img: 'https://images.unsplash.com/photo-1553390774-b4822481c894?q=80&w=1944&auto=format&fit=crop',
      mt: '',
    },
    {
      id: 'seo',
      title: 'ESTRATEGIA <br /> SEO',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      mt: 'lg:mt-48',
    },
  ];

  const data = servicesData[activeService];

  return (
    <section
      ref={containerRef}
      className="w-full py-20 md:py-32 px-6 md:px-[var(--gutter-width)] relative bg-[#1F1F1F]"
      style={{ clipPath: 'inset(0)' }}
    >
      <GridLines />
      {/* Overriding Left Line to appear above cards */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[var(--gutter-width)] w-[1.3px] bg-white/20 z-30 pointer-events-none"></div>

      {/* Note: Removed items-start to allow the flex children to stretch, making the sticky element work across the entire height */}
      <div className="flex flex-col sm:flex-row relative z-10 gap-12 sm:gap-4 lg:gap-16">
        {/* Left Side: Cards Container */}
        <div
          className="w-full sm:w-1/2 lg:w-2/3 relative z-20"
          onMouseLeave={() => {
            if (window.innerWidth >= 1024) handleServiceChange('default');
          }}
        >
          {/* Mobile Carousel (< 640px) */}
          <div className="flex sm:hidden flex-col relative w-full overflow-hidden pb-6">
            {/* The carousel track must be much wider than the screen to hold items off-screen smoothly */}
            <div className="flex gap-4 w-[300%]">
              <AnimatePresence mode="popLayout">
                {carouselOrder.map((index) => {
                  const card = CARDS_DATA[index];
                  return (
                    <motion.div
                      layout
                      key={card.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, { offset }) => {
                        const swipe = offset.x;
                        if (swipe < -50) nextSlide();
                        else if (swipe > 50) prevSlide();
                      }}
                      className="relative w-[85vw] h-[300px] shrink-0 overflow-hidden group rounded-lg"
                    >
                      <img
                        alt={card.id}
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700 pointer-events-none"
                        src={card.img}
                      />
                      <div className="absolute inset-0 p-8 flex items-end justify-center text-center pointer-events-none pb-12">
                        <h3
                          className="font-headline font-black text-3xl text-white leading-[0.85] tracking-tighter uppercase break-words"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        ></h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-4 mt-6 justify-center w-[85vw]">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Tablet/Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            {CARDS_DATA.map((card) => (
              <div
                key={card.id}
                ref={(el) => {
                  observerRefs.current[card.id] = el;
                }}
                data-service={card.id}
                className={`relative h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden group rounded-lg md:rounded-none ${card.mt}`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024)
                    handleServiceChange(card.id as ServiceKey);
                }}
              >
                <img
                  alt={card.title.replace('<br />', '')}
                  className={`absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700
                    ${activeService === card.id ? 'grayscale-0 brightness-50' : ''}
                  `}
                  src={card.img}
                />

                {/* Desktop Vertical Titles (Visible ONLY on LG screens) */}
                <div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none hidden lg:flex">
                  <div className="flex items-center h-full">
                    <div
                      className={`h-full overflow-hidden transition-opacity relative flex items-end opacity-70 group-hover:opacity-100 ${activeService === card.id ? 'opacity-100' : ''}`}
                    >
                      <div className="relative">
                        <div className="pb-12 opacity-0 pointer-events-none">
                          <h3 className="font-headline font-black text-4xl lg:text-[6vw] xl:text-[5vw] text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                            {card.id === 'wa'
                              ? 'WHATSAPP AUTOMATION'
                              : card.title
                                  .replace('<br />', '')
                                  .replace('  ', ' ')}
                          </h3>
                        </div>
                        <div
                          className={`absolute top-0 left-0 flex flex-col group-hover:animate-scroll-up ${activeService === card.id ? 'animate-scroll-up' : ''}`}
                        >
                          <div className="pb-12">
                            <h3 className="font-headline font-black text-4xl lg:text-[6vw] xl:text-[5vw] text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap">
                              {card.id === 'wa'
                                ? 'WHATSAPP AUTOMATION'
                                : card.title
                                    .replace('<br />', '')
                                    .replace('  ', ' ')}
                            </h3>
                          </div>
                          <div className="pb-12">
                            <h3
                              className="font-headline font-black text-4xl lg:text-[6vw] xl:text-[5vw] text-white tracking-tighter uppercase leading-none vertical-text-up whitespace-nowrap"
                              aria-hidden="true"
                            >
                              {card.id === 'wa'
                                ? 'WHATSAPP AUTOMATION'
                                : card.title
                                    .replace('<br />', '')
                                    .replace('  ', ' ')}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet Horizontal Layout (Hidden on LG screens) */}
                <div
                  className="absolute inset-0 p-8 md:p-12 flex items-end justify-center text-center pb-12 lg:hidden cursor-pointer"
                  onClick={() => handleServiceChange(card.id as ServiceKey)}
                >
                  <h3
                    className="font-headline font-black text-2xl md:text-3xl text-white leading-[0.85] tracking-tighter uppercase break-words px-6 md:px-10"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content Block */}
        <div className="w-full sm:w-1/2 lg:w-1/3 min-w-0 sm:sticky sm:top-24 lg:top-32 self-start relative transition-all duration-500 sm:min-h-[500px]">
          <span
            className="info-text font-headline font-black text-white text-[10px] tracking-[0.4em] uppercase mb-4 block"
            key={`sub-${activeService}`}
          >
            {data.subtitle}
          </span>
          <h2 className="info-text font-headline font-black text-3xl md:text-4xl lg:text-5xl leading-[0.9] tracking-tighter uppercase text-white mb-8 overflow-hidden break-words whitespace-pre-line">
            {data.title}
          </h2>
          <div className="max-w-md space-y-8">
            <p className="info-text font-body text-white/50 text-[10px] lg:text-xs uppercase tracking-widest leading-relaxed">
              {data.desc}
            </p>
            <div className="space-y-6">
              <div className="info-text border-l border-primary-container pl-6">
                <span className="font-headline font-black text-[10px] text-white tracking-widest uppercase block mb-1">
                  {data.sub1Title}
                </span>
                <p className="font-body text-white/30 text-[10px] pr-1 uppercase tracking-wider leading-relaxed">
                  {data.sub1Desc}
                </p>
              </div>
              <div className="info-text border-l border-primary-container pl-6">
                <span className="font-headline font-black text-[10px] text-white tracking-widest uppercase block mb-1">
                  {data.sub2Title}
                </span>
                <p className="font-body text-white/30 text-[10px] pr-1 uppercase tracking-wider leading-relaxed">
                  {data.sub2Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
