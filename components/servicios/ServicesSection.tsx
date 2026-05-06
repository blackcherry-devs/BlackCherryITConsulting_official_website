"use client";

import { useState } from "react";
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
    subtitle: "COMUNICACIÓN ESCALABLE",
    title: "WA\nAUTOMATIZACIÓN",
    desc: "Transformamos WhatsApp en un motor de ventas y servicio automatizado. Chatbots que atienden a miles de clientes simultáneamente.",
    sub1Title: "FLUJOS CONVERSACIONALES",
    sub1Desc: "Árboles de decisión dinámicos diseñados para calificar leads y resolver consultas al instante.",
    sub2Title: "INTEGRACIÓN CRM",
    sub2Desc: "Conectamos los chats directamente con tus sistemas internos para un seguimiento omnicanal perfecto."
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

  const data = servicesData[activeService];

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-[7rem] relative bg-[#1F1F1F]" style={{ clipPath: 'inset(0)' }}>
      <GridLines />
      {/* Overriding Left Line to appear above cards */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[7rem] w-[1.3px] bg-white/20 z-30 pointer-events-none"></div>
      
      {/* Note: Removed items-start to allow the flex children to stretch, making the sticky element work across the entire height */}
      <div className="flex flex-col lg:flex-row relative z-10 gap-8 md:gap-16">
        {/* Left Side: 2x3 Grid of Service Cards */}
        <div 
          className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-20"
          onMouseLeave={() => setActiveService("default")}
        >
          {/* Row 1 */}
          <div 
            className="relative h-[400px] md:h-[800px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("web")}
          >
            <img 
              alt="Tecnología Industrial" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                DESARROLLO <br /> WEB
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-32 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("backend")}
          >
            <img 
              alt="Centro de Datos" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyVGD6sPck3VMfPz7uyQrkY7JbFjNmFGquR8kOWJXMQ9QzJoP6aRi-YBoKxn34liISGDGNptdvVxpjASSZTn_FrPRZa2UAuUjrsCT-mHC9rdmhVu3nROT0mQuq6lnjcRJ2GBt36C8AhQJ4ru-xinb-YW40LfnwFh_We0nAw4U8zqNvw2nEAUzfFW4jsuBSBVC0BUxvWx56YHx7pFzKAGHx2AcOLjO1U-F7lxDOUlrjUUUDvQ7JEwg1A051OerN1O-6VfFZwX1OKk4" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                SISTEMAS <br /> BACKEND
              </h3>
            </div>
          </div>
          {/* Row 2 */}
          <div 
            className="relative h-[400px] md:h-[800px] md:-mt-16 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("uiux")}
          >
            <img 
              alt="Laboratorio de Diseño" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                PRECISIÓN <br /> UI/UX
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-16 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("ia")}
          >
            <img 
              alt="Red Neuronal" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                INTEGRACIÓN <br /> DE IA
              </h3>
            </div>
          </div>
          {/* Row 3 */}
          <div 
            className="relative h-[400px] md:h-[800px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("wa")}
          >
            <img 
              alt="Consola de Automatización" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv" 
            />
            <div className="absolute inset-0 p-8 md:p-12 flex items-end">
              <h3 className="font-headline font-black text-2xl md:text-3xl lg:text-4xl text-white leading-none tracking-tighter uppercase break-words">
                WA <br /> AUTOMATIZACIÓN
              </h3>
            </div>
          </div>
          <div 
            className="relative h-[400px] md:h-[800px] md:mt-48 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setActiveService("seo")}
          >
            <img 
              alt="Analítica Digital" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-50 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY" 
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
          <span 
            className="font-headline font-black text-white text-[10px] tracking-[0.4em] uppercase mb-4 block transition-all duration-300"
            key={`sub-${activeService}`}
          >
            {data.subtitle}
          </span>
          <h2 
            className="font-headline font-black text-3xl md:text-4xl lg:text-[3.5rem] leading-[0.9] tracking-tighter uppercase text-white mb-8 overflow-hidden break-words whitespace-pre-line transition-all duration-300"
            key={`title-${activeService}`}
          >
            {data.title}
          </h2>
          <div className="max-w-md space-y-8">
            <p 
              className="font-body text-white/50 text-[10px] lg:text-xs uppercase tracking-widest leading-relaxed transition-all duration-300"
              key={`desc-${activeService}`}
            >
              {data.desc}
            </p>
            <div className="space-y-6">
              <div 
                className="border-l border-primary-container pl-6 transition-all duration-300"
                key={`sub1-${activeService}`}
              >
                <span className="font-headline font-black text-[10px] text-white tracking-widest uppercase block mb-1">
                  {data.sub1Title}
                </span>
                <p className="font-body text-white/30 text-[10px] pr-1 uppercase tracking-wider leading-relaxed">
                  {data.sub1Desc}
                </p>
              </div>
              <div 
                className="border-l border-primary-container pl-6 transition-all duration-300"
                key={`sub2-${activeService}`}
              >
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
