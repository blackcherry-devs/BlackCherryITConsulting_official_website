import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BentoGrid from "@/components/home/BentoGrid";
import Portfolio from "@/components/home/Portfolio";
import TechStack from "@/components/home/TechStack";
import ContactForm from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "BlackCherry IT Consulting | Desarrollo Web y IA en México",
  description:
    "Agencia de desarrollo web y diseño de sitios web en México. Creamos páginas web profesionales, implementamos inteligencia artificial, chatbots y automatización de WhatsApp para empresas. León, Guanajuato.",
  keywords: [
    "desarrollo web México",
    "creación de páginas web México",
    "agencia web profesional",
    "diseño web para empresas",
    "sitios web profesionales México",
    "inteligencia artificial México",
    "chatbots empresas México",
    "automatización WhatsApp México",
    "pagina web",
    "sitio web",
  ],
  alternates: { canonical: "https://blackcherryitconsulting.com" },
  openGraph: {
    title: "BlackCherry IT Consulting | Desarrollo Web y IA en México",
    description:
      "Creamos sitios web profesionales, chatbots e IA para empresas en México.",
    url: "https://blackcherryitconsulting.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BentoGrid />
      <Portfolio />
      <TechStack />
      <ContactForm />
    </>
  );
}
