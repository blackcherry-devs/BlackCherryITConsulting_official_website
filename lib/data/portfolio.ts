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
}

export const portfolioData: ProjectData[] = [
  {
    id: "cerato",
    title: "CERATO",
    category: "E-COMMERCE",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx",
    narrativeTitle: "EL ARTE DE LA LOGÍSTICA DIGITAL",
    narrativeText: "Cerato Arte Floral requería una infraestructura que fusionara la delicadeza de su producto con la robustez de un sistema de e-commerce de alto tráfico. Desarrollamos una plataforma basada en microservicios que optimiza la cadena de suministro en tiempo real.",
    stats: {
      techLabel: "TECNOLOGÍA",
      techValue: "Next.js + Shopify Plus",
      perfLabel: "RENDIMIENTO",
      perfValue: "99.9% Uptime Global"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "gpamex",
    title: "GPAMEX",
    category: "CONSTRUCCIÓN",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    narrativeTitle: "INGENIERÍA ESTRUCTURAL DIGITAL",
    narrativeText: "Para GPAMEX diseñamos un sistema de control logístico y de proyectos que unifica el trabajo en campo y oficina. Implementamos arquitecturas escalables para mantener la sincronización y seguimiento de obras masivas.",
    stats: {
      techLabel: "STACK",
      techValue: "React + Node.js",
      perfLabel: "PROYECTOS",
      perfValue: "Gestión simultánea"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzEy7Vci4B0xbgbRCSOh9_5Llx8xL7WPsQRQIdAGjaBn43C0OVrb6_ql0VDJf2jlCKDweK6OCoRCyzwWvgMAu0fnIEtwuubF4W4ejJn8oceew1FzmON90SpealEdtNDGBRzGaT1a9xY98hMC8P1y2Xo3AdYgSVoF_tGQUSqA4VAX0sUS2gmN-7cEfHSo2kvUrW3W8NuxtN0ak8zmOTFtZ1ENENmPCe_b2XCL_RPxF2hDgH2m97NoCY8CohWNsfB-mZtMGL88uxs2lx",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "grupo-cosiam",
    title: "GRUPO COSIAM",
    category: "INFRAESTRUCTURA",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuyVGD6sPck3VMfPz7uyQrkY7JbFjNmFGquR8kOWJXMQ9QzJoP6aRi-YBoKxn34liISGDGNptdvVxpjASSZTn_FrPRZa2UAuUjrsCT-mHC9rdmhVu3nROT0mQuq6lnjcRJ2GBt36C8AhQJ4ru-xinb-YW40LfnwFh_We0nAw4U8zqNvw2nEAUzfFW4jsuBSBVC0BUxvWx56YHx7pFzKAGHx2AcOLjO1U-F7lxDOUlrjUUUDvQ7JEwg1A051OerN1O-6VfFZwX1OKk4",
    narrativeTitle: "TECNOLOGÍA DE ALTO IMPACTO",
    narrativeText: "Grupo Cosiam necesitaba consolidar sus operaciones a través de un portal corporativo sólido y eficiente. El reto fue proveer de herramientas seguras para el manejo de información confidencial y presentación de grandes licitaciones.",
    stats: {
      techLabel: "SISTEMA",
      techValue: "Arquitectura Cloud",
      perfLabel: "DISPONIBILIDAD",
      perfValue: "Redundancia 24/7"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "adelai",
    title: "ADELAI",
    category: "TECNOLOGÍA",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
    narrativeTitle: "INTELIGENCIA ARTIFICIAL",
    narrativeText: "Adelai es el producto de integrar tecnología avanzada de lenguaje natural con bases de datos operacionales. Una solución que aprende y automatiza interacciones complejas, diseñada con una arquitectura resiliente y rápida.",
    stats: {
      techLabel: "MOTOR",
      techValue: "AI + LLMs",
      perfLabel: "LATENCIA",
      perfValue: "< 200ms"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "dani-suacha",
    title: "DANI SUACHÁ",
    category: "DISEÑO",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
    narrativeTitle: "PORTAFOLIO CREATIVO",
    narrativeText: "Un espacio digital enfocado en resaltar la identidad y la estética de las piezas artísticas. Optimizamos el renderizado visual y la fluidez de las animaciones para entregar una experiencia inmersiva sin comprometer la velocidad.",
    stats: {
      techLabel: "FRONTEND",
      techValue: "WebGL + Framer Motion",
      perfLabel: "OPTIMIZACIÓN",
      perfValue: "Carga diferida 100%"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "guermar",
    title: "GUERMAR",
    category: "INDUSTRIAL",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY",
    narrativeTitle: "LOGÍSTICA PESADA",
    narrativeText: "Solución tecnológica para gestionar los activos y operaciones industriales de Guermar. Implementamos paneles de control en tiempo real, integrando bases de datos de inventario y seguimiento satelital de la flota.",
    stats: {
      techLabel: "INFRAESTRUCTURA",
      techValue: "Microservicios",
      perfLabel: "SEGURIDAD",
      perfValue: "Encriptación AES-256"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  },
  {
    id: "lars-dynamics",
    title: "LARS DYNAMICS",
    category: "INDUSTRIAL",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0ug9Rf_ygu5y3C53O8uazzOJjOuSV2A_7Fb82MSHffrUi5hUu0bHe0LGjjV7ET027gzVg-xWIEhK7V-EuKPer46VdD6QPEb36sN0LxliM07cRJwiTZ7b_9g4rAUrsqxGQm4nISquasokBU-fN-MU4b0IcvL7N9Pltzlsba0iIHXZuf0yWT7Kn1LHGqANbLatvUQ-LeGuAvQ0ch2j0lAWl4gYZXe_PVWvoej9IWdyvYt07ZVTWYO1AjTq24teaY2Qx2RJq1OZHHjuHcE", // Placeholder
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    narrativeTitle: "INGENIERÍA WEB",
    narrativeText: "Creación de la presencia digital para Lars Dynamics, enfocada en proyectar la solidez técnica de la empresa. El diseño resalta su experiencia en el sector y garantiza compatibilidad en dispositivos móviles para el campo.",
    stats: {
      techLabel: "CORE",
      techValue: "Arquitectura Híbrida",
      perfLabel: "SEO",
      perfValue: "Puntuación 100/100"
    },
    technicalImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
    galleryImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpN535JcSfGzbKZsUOaB5RSM4T6dzUSKuiAZO3stQJYOrpTATC9bKFHdKjkijXLWsa0SAPDmwK-sr0hhYswGnyL0ZcURU_r2McFw4lxB-5wD2tUYJwzLJsT8_U7U-PIdO1w0iewAFxPuqPXr9HDaDmdcGAoi85J-MY1lcBWiRAiBf-HKfONb5vAcBjdAWdmtQrXztRVXDnDZL3hBa10-CAwk-PBHY7sOv3EPen3Ef9qtCvuf6laCWqvDcSoHU7SwMwCkdobLDje8iv",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2XMUhceKvhNl5lmQIDtqfcdsZ3TfNf6HTI_GVSfkbZCPwiiYe4AKYPbh52WVO7KcH3VDs7phWHNLMSKOgtqRS672TDkYarkzsDJ-1-Vd-Ndf2ruiO9OjfpLJXfF7WctSX4lB82Rf5UKsKZGYlb9XzhP4xYotNXJVwERxIMJnne8vnDvNsQldM8JJWlT-vtUz0FKS3DVavmKNdKb1rwe6lOZNq4J6ySox6OX07FrER7SOeqzG9cUW3dEVWHlAWagI8G1Uyhbw0GIUY"
    ]
  }
];
