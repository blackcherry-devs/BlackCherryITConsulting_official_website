export interface ProjectData {
  id: string;
  title: string;
  category: string;
  logo: string;
  heroImage: string;
  narrativeTitle: string;
  narrativeText: string;
  stats: {
    techLabel: string;
    techValue: string;
    perfLabel: string;
    perfValue: string;
  };
  technicalImage: string;
  galleryImages: string[];
  color?: string;
  url?: string;
  video?: string;
  logoBg?: string;
  logoPadding?: string;
  logoContainerClass?: string;
  heroBgOverride?: string;
}

export const portfolioData: ProjectData[] = [
  {
    id: "cerato",
    title: "CERATO",
    category: "E-COMMERCE",
    logo: "/projects/cerato/cerato_logo.jpg",
    heroImage: "/projects/cerato/cerato1.jpg",
    narrativeTitle: "EL ARTE DE LA LOGÍSTICA DIGITAL",
    narrativeText: "Cerato Arte Floral requería una infraestructura que fusionara la delicadeza de su producto con la robustez de un sistema de e-commerce de alto tráfico. Desarrollamos una plataforma basada en microservicios que optimiza la cadena de suministro en tiempo real.",
    stats: {
      techLabel: "TECNOLOGÍA",
      techValue: "Next.js + Shopify Plus",
      perfLabel: "RENDIMIENTO",
      perfValue: "99.9% Uptime Global"
    },
    technicalImage: "/projects/cerato/cerato2.jpg",
    galleryImages: [
      "/projects/cerato/cerato3.jpg",
      "/projects/cerato/cerato4.jpg",
      "/projects/cerato/cerato5.jpg"
    ],
    color: "#2D1B2E",
    url: "https://ceratoartefloral.com/",
    video: "/projects/cerato/video.mp4",
    logoContainerClass: "w-56 h-56 md:w-80 md:h-80",
    logoBg: "white",
    logoPadding: "p-4"
  },
  {
    id: "gpamex",
    title: "GPAMEX",
    category: "CONSTRUCCIÓN",
    logo: "/projects/gpamex/gpamex_logo.png",
    heroImage: "/projects/gpamex/gpamex_1.jpg",
    narrativeTitle: "INGENIERÍA ESTRUCTURAL DIGITAL",
    narrativeText: "Para GPAMEX diseñamos un sistema de control logístico y de proyectos que unifica el trabajo en campo y oficina. Implementamos arquitecturas escalables para mantener la sincronización y seguimiento de obras masivas.",
    stats: {
      techLabel: "STACK",
      techValue: "React + Node.js",
      perfLabel: "PROYECTOS",
      perfValue: "Gestión simultánea"
    },
    technicalImage: "/projects/gpamex/gpamex_2.jpg",
    galleryImages: [
      "/projects/gpamex/gpamex_3.jpg",
      "/projects/gpamex/gpamex_4.jpg",
      "/projects/gpamex/gpamex_5.jpg"
    ],
    color: "#676767",
    url: "https://gpamex.com/",
    video: "/projects/gpamex/video.mp4",
    heroBgOverride: "#FFFFFF",
    logoContainerClass: "w-64 h-64 md:w-96 md:h-96"
  },
  {
    id: "grupo-cosiam",
    title: "GRUPO COSIAM",
    category: "INFRAESTRUCTURA",
    logo: "/projects/grupo-cosiam/logo.png",
    heroImage: "/projects/grupo-cosiam/cosiam1.jpg",
    narrativeTitle: "TECNOLOGÍA DE ALTO IMPACTO",
    narrativeText: "Desarrollamos el sitio web corporativo, diseño de identidad digital e implementación de Inteligencia Artificial avanzada para eficientar la atención al cliente y optimizar los procesos operativos del grupo.",
    stats: {
      techLabel: "SISTEMA",
      techValue: "Arquitectura Cloud",
      perfLabel: "DISPONIBILIDAD",
      perfValue: "Redundancia 24/7"
    },
    technicalImage: "/projects/grupo-cosiam/cosiam2.webp",
    galleryImages: [
      "/projects/grupo-cosiam/cosiam3.jpg",
      "/projects/grupo-cosiam/cosiam4.jpg",
      "/projects/grupo-cosiam/cosiam5.webp"
    ],
    color: "#001A70",
    url: "https://www.grupocosiam.com/",
    video: "/projects/grupo-cosiam/video.mp4",
    logoContainerClass: "w-64 h-64 md:w-96 md:h-96"
  },
  {
    id: "adelai",
    title: "ADELAI",
    category: "TECNOLOGÍA",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "/projects/adelai/adelai1.jpg",
    narrativeTitle: "INTELIGENCIA ARTIFICIAL",
    narrativeText: "Adelai es el producto de integrar tecnología avanzada de lenguaje natural con bases de datos operacionales. Una solución que aprende y automatiza interacciones complejas, diseñada con una arquitectura resiliente y rápida.",
    stats: {
      techLabel: "MOTOR",
      techValue: "AI + LLMs",
      perfLabel: "LATENCIA",
      perfValue: "< 200ms"
    },
    technicalImage: "/projects/adelai/adelai2.jpg",
    galleryImages: [
      "/projects/adelai/adelai3.jpg",
      "/projects/adelai/adelai4.webp",
      "/projects/adelai/adelai5.jpg"
    ],
    color: "#8B090A",
    url: "#",
    video: "/projects/adelai/video.mp4"
  },
  {
    id: "dani-suacha",
    title: "DANI SUACHÁ",
    category: "DISEÑO",
    logo: "/projects/dani-suacha/logo.png",
    heroImage: "/projects/dani-suacha/perfil_dani_suacha.jpg",
    narrativeTitle: "PORTAFOLIO CREATIVO",
    narrativeText: "Un espacio digital enfocado en resaltar la identidad y la estética de las piezas artísticas. Optimizamos el renderizado visual y la fluidez de las animaciones para entregar una experiencia inmersiva sin comprometer la velocidad.",
    stats: {
      techLabel: "FRONTEND",
      techValue: "WebGL + Framer Motion",
      perfLabel: "OPTIMIZACIÓN",
      perfValue: "Carga diferida 100%"
    },
    technicalImage: "/projects/dani-suacha/danisuacha2.jpg",
    galleryImages: [
      "/projects/dani-suacha/foto1_galeria_danisuacha.jpg",
      "/projects/dani-suacha/foto2_galeria_danisuacha.jpg.png",
      "/projects/dani-suacha/foto3_galeria_danisuacha.png"
    ],
    color: "#5F7D76",
    url: "https://danisuacha.com/",
    video: "/projects/dani-suacha/video.mp4",
    logoBg: "white",
    logoPadding: "p-2",
    logoContainerClass: "w-56 h-56 md:w-80 md:h-80"
  },
  {
    id: "guermar",
    title: "GUERMAR",
    category: "INDUSTRIAL",
    logo: "/projects/guermar/guermar_logo.webp",
    heroImage: "/projects/guermar/guermar1.jpg",
    narrativeTitle: "LOGÍSTICA PESADA",
    narrativeText: "Solución tecnológica para gestionar los activos y operaciones industriales de Guermar. Implementamos paneles de control en tiempo real, integrando bases de datos de inventario y seguimiento satelital de la flota.",
    stats: {
      techLabel: "INFRAESTRUCTURA",
      techValue: "Microservicios",
      perfLabel: "SEGURIDAD",
      perfValue: "Encriptación AES-256"
    },
    technicalImage: "/projects/guermar/guermar2.jpg",
    galleryImages: [
      "/projects/guermar/guermar3.jpg",
      "/projects/guermar/guermar4.jpg",
      "/projects/guermar/guermar5.jpg"
    ],
    color: "#FF7C00",
    url: "https://guermar.com/",
    video: "/projects/guermar/video.mp4",
    logoContainerClass: "w-56 h-56 md:w-80 md:h-80"
  },
  {
    id: "lars-dynamics",
    title: "LARS DYNAMICS",
    category: "INDUSTRIAL",
    logo: "/projects/lars-dynamics/logo.png",
    heroImage: "/projects/lars-dynamics/lars_1.png",
    narrativeTitle: "INGENIERÍA WEB",
    narrativeText: "Creación de la presencia digital para Lars Dynamics, enfocada en proyectar la solidez técnica de la empresa. El diseño resalta su experiencia en el sector y garantiza compatibilidad en dispositivos móviles para el campo.",
    stats: {
      techLabel: "CORE",
      techValue: "Arquitectura Híbrida",
      perfLabel: "SEO",
      perfValue: "Puntuación 100/100"
    },
    technicalImage: "/projects/lars-dynamics/lars_2.png",
    galleryImages: [
      "/projects/lars-dynamics/lars_3.png",
      "/projects/lars-dynamics/lars_4.png",
      "/projects/lars-dynamics/lars_5.png"
    ],
    color: "#23215F",
    url: "https://lars-dynamics.com/",
    video: "/projects/lars-dynamics/video.mp4",
    logoBg: "white"
  }
];
