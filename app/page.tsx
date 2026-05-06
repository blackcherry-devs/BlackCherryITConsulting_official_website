import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BentoGrid from "@/components/home/BentoGrid";
import Portfolio from "@/components/home/Portfolio";
import TechStack from "@/components/home/TechStack";
import ContactForm from "@/components/home/ContactForm";

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
