import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://blackcherryitconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BlackCherry IT Consulting | Desarrollo Web, IA y Automatización en México",
    template: "%s | BlackCherry IT Consulting",
  },
  description:
    "Agencia de desarrollo web, diseño web, inteligencia artificial y automatización de WhatsApp en México. Creamos sitios web profesionales, chatbots y soluciones de IA para empresas. León, Guanajuato.",
  keywords: [
    "desarrollo web México",
    "diseño web profesional México",
    "creación de páginas web México",
    "creación de sitios web México",
    "agencia web México",
    "consultoría web México",
    "desarrollo web León Guanajuato",
    "agencia web León Guanajuato",
    "inteligencia artificial para empresas México",
    "chatbots para negocios México",
    "automatización de WhatsApp México",
    "Manychat México",
    "automatización de marketing México",
    "páginas web para empresas",
    "sitios web profesionales Mexico",
    "BlackCherry IT",
    "BlackCherry IT Consulting",
  ],
  authors: [{ name: "BlackCherry IT Consulting", url: BASE_URL }],
  creator: "BlackCherry IT Consulting",
  publisher: "BlackCherry IT Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "BlackCherry IT Consulting",
    title: "BlackCherry IT Consulting | Desarrollo Web, IA y Automatización en México",
    description:
      "Agencia de desarrollo web, diseño web, inteligencia artificial y automatización de WhatsApp en México. Creamos sitios web profesionales para empresas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlackCherry IT Consulting — Desarrollo Web, IA y Automatización en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blackcherrydevs",
    creator: "@blackcherrydevs",
    title: "BlackCherry IT Consulting | Desarrollo Web, IA y Automatización en México",
    description:
      "Agencia de desarrollo web, diseño web, inteligencia artificial y automatización de WhatsApp en México.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/cherry-icon.png" },
      { url: "/cherry-icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/cherry-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#1F1F1F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BlackCherry IT Consulting",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-blackcherry-footer.png`,
  image: `${BASE_URL}/og-image.png`,
  description:
    "Agencia especializada en desarrollo web, diseño web, inteligencia artificial, chatbots y automatización de WhatsApp para empresas en México.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.122,
    longitude: -101.6826,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "blackcherrydevs@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  serviceType: [
    "Desarrollo Web",
    "Diseño Web",
    "Creación de Páginas Web",
    "Inteligencia Artificial para Empresas",
    "Chatbots",
    "Automatización de WhatsApp",
    "Consultoría Tecnológica",
  ],
  sameAs: [
    "https://www.facebook.com/people/Blackcherry-Devs/61587561059170/",
    "https://www.instagram.com/blackcherrydevs",
    "https://www.tiktok.com/@blackcherry_devs",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/services/web_dev.png"
          as="image"
          type="image/png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#8B090A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-white relative min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
