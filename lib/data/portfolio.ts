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
    narrativeTitle: "ARTE FLORAL Y E-COMMERCE DE ALTA GAMA",
    narrativeText: "Redefinimos la experiencia de regalar lujo a través de una plataforma floral sofisticada. Desarrollamos un ecosistema digital de alta conversión con búsqueda inteligente y una arquitectura optimizada (Performance 100) que traduce la fragilidad y belleza de las flores en una experiencia de compra impecable y fluida.",
    stats: {
      techLabel: "PERFORMANCE",
      techValue: "Lighthouse 100/100",
      perfLabel: "UX/UI",
      perfValue: "Conversión Premium"
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
    category: "INDUSTRIAL",
    logo: "/projects/gpamex/gpamex_logo.png",
    heroImage: "/projects/gpamex/gpamex_1.jpg",
    narrativeTitle: "PRECISIÓN INDUSTRIAL EN LA ERA DIGITAL",
    narrativeText: "Para Grupo GPA, líderes en la Industria 4.0 con más de 30 años de trayectoria, materializamos una infraestructura digital que refleja su precisión técnica. Diseñamos una plataforma que actúa como el gemelo digital de su excelencia operativa, transformando procesos industriales complejos en una experiencia web intuitiva y de alto impacto que proyecta su autoridad en el mercado global.",
    stats: {
      techLabel: "PROTOCOLO",
      techValue: "UX Industrial 4.0",
      perfLabel: "IMPACTO",
      perfValue: "Conversión Global B2B"
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
    narrativeTitle: "MANTENIMIENTO INDUSTRIAL E IA CONVERSACIONAL",
    narrativeText: "Para Grupo COSIAM, integramos Inteligencia Artificial conversacional con síntesis de voz hiperrealista para optimizar la asistencia técnica de su red global. Desarrollamos una plataforma que fusiona la fiabilidad de su ingeniería con una interfaz intuitiva, asegurando la continuidad operativa de clientes como Ford y Live Aqua mediante tecnología predictiva y asistencia digital avanzada.",
    stats: {
      techLabel: "SISTEMA",
      techValue: "IA Conversacional Premium",
      perfLabel: "CLIENTES",
      perfValue: "Marcas Globales B2B"
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
    category: "LUJO / E-COMMERCE",
    logo: "/projects/adelai/adelai_logo.jpeg",
    heroImage: "/projects/adelai/adelai1.jpeg",
    narrativeTitle: "E-COMMERCE DE LUJO Y LEGADO ARTESANAL",
    narrativeText: "Traducimos el legado artesanal de Adelai en un ecosistema e-commerce de lujo. Desarrollamos una infraestructura digital sofisticada que convierte su catálogo en una herramienta de ventas inmersiva, consolidando su autoridad comercial mediante una experiencia de usuario fluida que proyecta la distinción de la alta gama.",
    stats: {
      techLabel: "SISTEMA",
      techValue: "E-commerce Luxury UI",
      perfLabel: "RESULTADO",
      perfValue: "Expansión Comercial de Lujo"
    },
    technicalImage: "/projects/adelai/adelai2.jpeg",
    galleryImages: [
      "/projects/adelai/adelai3.jpeg",
      "/projects/adelai/adelai4.jpeg",
      "/projects/adelai/adelai5.jpg"
    ],
    color: "#000000",
    url: "#",
    video: "/projects/adelai/video.mp4",
    heroBgOverride: "#FFFFFF",
    logoPadding: "p-4",
    logoContainerClass: "w-64 h-64 md:w-[28rem] md:h-[28rem]"
  },
  {
    id: "dani-suacha",
    title: "DANI SUACHÁ",
    category: "BIENESTAR",
    logo: "/projects/dani-suacha/logo.png",
    heroImage: "/projects/dani-suacha/perfil_dani_suacha.jpg",
    narrativeTitle: "EMPATÍA Y PROFESIONALISMO DIGITAL",
    narrativeText: "Para Dani Suachá, transformamos la complejidad de la sanación emocional en una experiencia digital serena y profesional. Desarrollamos una plataforma bilingüe que no solo educa, sino que construye un puente de confianza inmediato. Al optimizar el flujo de agendamiento, logramos que la tecnología actúe como un facilitador silencioso de la conexión humana.",
    stats: {
      techLabel: "PROTOCOLO",
      techValue: "UX Empática Bilingüe",
      perfLabel: "CONVERSIÓN",
      perfValue: "Agendamiento Global"
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
    narrativeTitle: "SOLIDEZ E INFRAESTRUCTURA LOGÍSTICA",
    narrativeText: "Para Racks Guermar, materializamos la escala de sus soluciones de almacenamiento en un ecosistema digital de alto impacto visual. Convertimos su portafolio en una herramienta de ventas inmersiva que proyecta la fiabilidad necesaria para cerrar ciclos B2B complejos, consolidando su autoridad en el sector de logística y warehousing.",
    stats: {
      techLabel: "SISTEMA",
      techValue: "Visual B2B Inmersivo",
      perfLabel: "RESULTADO",
      perfValue: "Autoridad en Infraestructura"
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
    narrativeTitle: "AUTORIDAD TÉCNICA INDUSTRIAL",
    narrativeText: "Elevamos la presencia digital de Lars Dynamics para reflejar la precisión de sus componentes de alto rendimiento. Diseñamos una interfaz robusta que posiciona a la marca como un aliado estratégico en ingeniería. La integración de sistemas de cotización ágil traduce la complejidad técnica de su catálogo en una experiencia de usuario eficiente y profesional.",
    stats: {
      techLabel: "ESTÁNDAR",
      techValue: "Performance Industrial",
      perfLabel: "ALCANCE",
      perfValue: "Liderazgo en Distribución"
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
