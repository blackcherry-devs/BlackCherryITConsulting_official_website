"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridLines from "@/components/ui/GridLines";

const servicesData = {
  default: {
    subtitle: "SERVICIOS DE GRADO INDUSTRIAL",
    title: "EXCELENCIA\nARQUITECTÓNICA",
    desc: "No solo construimos software. Arquitectamos monolitos digitales que definen líderes de mercado. Nuestro enfoque combina estabilidad técnica brutalista con precisión estética quirúrgica.",
    sub1Title: "PROTOCOLO DE AUDITORÍA",
    sub1Desc: "Análisis profundo de infraestructuras heredadas para determinar vectores de evolución óptimos.",
    sub2Title: "DESPLIEGUE A ESCALA",
    sub2Desc: "Pipelines de CI/CD diseñados para un rendimiento masivo y actualizaciones quirúrgicas sin tiempo de inactividad."
  },
  web: {
    subtitle: "EXPERIENCIAS FRONTEND",
    title: "DESARROLLO\nWEB",
    desc: "Interfaces digitales inmersivas y de alto rendimiento. Construimos aplicaciones web modernas que combinan velocidad asombrosa con estética premium.",
    sub1Title: "ARQUITECTURA NEXT.JS",
    sub1Desc: "Ecosistemas frontend construidos para escala, con Server-Side Rendering y optimización de carga extrema.",
    sub2Title: "ANIMACIONES FLUIDAS",
    sub2Desc: "Micro-interacciones y transiciones de nivel cinematográfico que elevan la percepción de la marca."
  },
  backend: {
    subtitle: "NÚCLEOS DE ALTO RENDIMIENTO",
    title: "SISTEMAS\nBACKEND",
    desc: "Arquitecturas robustas diseñadas para procesar operaciones masivas. Creamos la infraestructura invisible pero invencible que sostiene a los líderes del mercado.",
    sub1Title: "BASES DE DATOS ESCALABLES",
    sub1Desc: "Sistemas de almacenamiento optimizados para lectura y escritura de alta concurrencia.",
    sub2Title: "APIs DE ALTA VELOCIDAD",
    sub2Desc: "Interfaces de comunicación seguras y eficientes para conectar todo tu ecosistema digital."
  },
  uiux: {
    subtitle: "DISEÑO CENTRADO EN USUARIO",
    title: "PRECISIÓN\nUI/UX",
    desc: "Cada píxel es intencional. Diseñamos flujos de usuario que convierten, reduciendo la fricción a cero mediante estética vanguardista.",
    sub1Title: "SISTEMAS DE DISEÑO",
    sub1Desc: "Librerías de componentes escalables que aseguran consistencia visual en cada punto de contacto.",
    sub2Title: "PROTOTIPADO RÁPIDO",
    sub2Desc: "Validamos conceptos de alta fidelidad antes de escribir código, ahorrando recursos y tiempo."
  },
  ia: {
    subtitle: "INTELIGENCIA OPERATIVA",
    title: "INTEGRACIÓN\nDE IA",
    desc: "Automatizamos decisiones complejas y potenciamos capacidades humanas integrando modelos de lenguaje avanzados directamente en tu flujo.",
    sub1Title: "AGENTES AUTÓNOMOS",
    sub1Desc: "Sistemas capaces de razonar, planificar y ejecutar tareas complejas de forma independiente 24/7.",
    sub2Title: "RAG Y FINE-TUNING",
    sub2Desc: "Entrenamos modelos con tus datos corporativos para respuestas precisas y contextualmente conscientes."
  },
  wa: {
    subtitle: "INTERACCIÓN AUTÓNOMA",
    title: "INTELIGENCIA\nCONVERSACIONAL",
    desc: "Diseñamos ecosistemas de mensajería que operan con la precisión de un humano y la escala de un algoritmo. Automatización de grado industrial para WhatsApp y canales directos.",
    sub1Title: "ARQUITECTURA DE FLUJOS",
    sub1Desc: "Diseño de árboles de decisión de alta complejidad para una calificación de leads quirúrgica.",
    sub2Title: "OMNICANALIDAD CRÍTICA",
    sub2Desc: "Sincronización total con tu infraestructura interna para una trazabilidad absoluta del cliente."
  },
  seo: {
    subtitle: "DOMINIO DE BÚSQUEDA",
    title: "ESTRATEGIAS\nSEO",
    desc: "Arquitecturamos tu visibilidad digital. Estrategias técnicas diseñadas para conquistar los primeros lugares de manera orgánica y sostenida.",
    sub1Title: "OPTIMIZACIÓN TÉCNICA",
    sub1Desc: "Reestructuración de código y mejora de Core Web Vitals para máxima indexación.",
    sub2Title: "AUTORIDAD DE DOMINIO",
    sub2Desc: "Construcción de enlaces y contenido semántico que establece tu marca como el referente del sector."
  }
};

type ServiceKey = keyof typeof servicesData;

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceKey>("default");
  const containerRef = useRef<HTMLElement>(null);

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

  const data = servicesData[activeService];

  return (
    <section ref={containerRef} className="w-full py-20 md:py-32 px-6 md:px-[7rem] relative bg-[#1F1F1F]" style={{ clipPath: 'inset(0)' }}>
      <GridLines />
      {/* Overriding Left Line to appear above cards */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[7rem] w-[1.3px] bg-white/20 z-30 pointer-events-none"></div>
      
      {/* Note: Removed items-start to allow the flex children to stretch, making the sticky element work across the entire height */}
      <div className="flex flex-col lg:flex-row relative z-10 gap-8 md:gap-16">
        {/* Left Side: 2x3 Grid of Service Cards */}
        <div 
          className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-20"
          onMouseLeave={() => handleServiceChange("default")}
        >
          {/* Row 1 */}
          <div 
            className="relative h-[400px] md:h-[800px] overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("web")}
          >
            <img 
              alt="Desarrollo Web de Alto Rendimiento" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="/services/web_dev.png" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                DESARROLLO <br /> WEB
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-32 overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("backend")}
          >
            <img 
              alt="Infraestructura de Sistemas Backend" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="/services/backend.png" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                SISTEMAS <br /> BACKEND
              </h3>
            </div>
          </div>
          {/* Row 2 */}
          <div 
            className="relative h-[400px] md:h-[800px] md:-mt-16 overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("uiux")}
          >
            <img 
              alt="Diseño de Interfaces de Precisión" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="/services/uiux.png" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                PRECISIÓN <br /> UI/UX
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-16 overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("ia")}
          >
            <img 
              alt="Arquitectura de Inteligencia Artificial" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="/services/ai.png" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                INTEGRACIÓN <br /> DE IA
              </h3>
            </div>
          </div>
          {/* Row 3 */}
          <div 
            className="relative h-[400px] md:h-[800px] overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("wa")}
          >
            <img 
              alt="Ecosistemas de Inteligencia Conversacional" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1553390774-b4822481c894?q=80&w=1944&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                INTELIGENCIA <br /> CONVERSACIONAL
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-48 overflow-hidden group service-card"
            onMouseEnter={() => handleServiceChange("seo")}
          >
            <img 
              alt="Estrategia de Optimización SEO" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                <br /> SEO
              </h3>
            </div>
          </div>
        </div>
        
        {/* Right Side: Content Block */}
        <div className="w-full lg:w-1/3 min-w-0 lg:sticky lg:top-24 self-start relative transition-all duration-500 min-h-[500px]">
          <span className="info-text font-headline font-black text-white text-[10px] tracking-[0.4em] uppercase mb-4 block">
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
