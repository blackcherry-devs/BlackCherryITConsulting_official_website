# BlackCherry IT Consulting — Infraestructura Digital Premium

![BlackCherry IT Consulting](public/og-image.png)

Sitio web oficial de **BlackCherry IT Consulting**, una agencia boutique especializada en desarrollo web de alto rendimiento, diseño arquitectónico digital, inteligencia artificial conversacional y automatización de procesos industriales.

## 🏗️ Filosofía de Diseño
El sitio implementa una estética **Industrial-Arquitectónica**, utilizando una paleta de colores curada (On-Surface, Primary-Container), tipografía moderna (Space Grotesk & Inter) y un sistema de rejillas técnicas (GridLines) que refuerza la precisión y la robustez de la marca.

## 🛠️ Stack Tecnológico
- **Core**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Estilos**: [Tailwind CSS 4+](https://tailwindcss.com/)
- **Emails**: [Resend](https://resend.com/)
- **Analítica**: [Google Tag Manager (GTM)](https://tagmanager.google.com/)
- **Multimedia**: [Cloudinary](https://cloudinary.com/) (Optimización de video/imagen)

## 🚀 Características de Optimización
- **SEO de Alto Impacto**: 
  - Metadatos dinámicos para cada proyecto del portafolio.
  - Esquemas de datos estructurados (JSON-LD) para servicios y breadcrumbs.
  - Sitemap dinámico y robots.txt optimizado.
- **Rendimiento (Lighthouse 100)**:
  - Uso de `next/image` con atributos `sizes` calculados.
  - Pre-carga (preload) de recursos críticos en el Hero.
  - Fuentes optimizadas con `display: swap`.
- **Accesibilidad**: ARIA roles completos, navegación por teclado y contraste de color optimizado.

## 📈 Integración de Marketing
El sitio está pre-configurado para escalar con campañas de publicidad:
- **GTM Event**: `generate_lead` se dispara automáticamente en cada envío exitoso del formulario.
- **Contenedor GTM**: Listo para insertar Píxeles de Meta, TikTok y Conversiones de Google Ads sin tocar el código.

## ⚙️ Configuración del Entorno
Crea un archivo `.env.local` con las siguientes variables:

```bash
# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_RECEIVER_EMAIL=tu@email.com

# Analítica
NEXT_PUBLIC_GTM_ID=GTM-PHZKCJXR

# Cloudinary (Opcional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
```

## 💻 Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

---
Diseñado y desarrollado por **BlackCherry IT Consulting**. © 2026 Todos los derechos reservados.
