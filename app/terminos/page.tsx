import GridLines from "@/components/ui/GridLines";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Términos y Condiciones | BlackCherry IT Consulting",
  description: "Términos y condiciones de uso para el sitio web y servicios de BlackCherry IT Consulting.",
  robots: { index: false, follow: true }
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 px-6 md:px-[var(--gutter-width)] overflow-hidden">
      <GridLines />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-headline font-black text-primary-container tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform">
          <FiArrowLeft /> VOLVER AL INICIO
        </Link>
        
        <header className="mb-16 border-l-4 border-primary-container pl-8">
          <span className="block text-xs font-headline font-black text-stone-400 tracking-[0.3em] uppercase mb-4">DOCUMENTO LEGAL / 02</span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-[#1a1a1a] tracking-tighter uppercase leading-[0.8]">
            TÉRMINOS Y <br /> CONDICIONES
          </h1>
          <p className="mt-6 text-stone-500 font-body text-sm uppercase tracking-widest">Última actualización: 14 de Mayo, 2026</p>
        </header>

        <div className="space-y-12 font-body text-stone-600 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web de BlackCherry IT Consulting, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">2. Propiedad Intelectual</h2>
            <p>
              Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, diseños, logotipos, interfaces, animaciones y código fuente, es propiedad intelectual de BlackCherry IT Consulting o se utiliza bajo licencia. Queda estrictamente prohibida la reproducción total o parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">3. Uso del Sitio</h2>
            <p>
              Usted se compromete a utilizar el sitio únicamente para fines lícitos y de una manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte de otros. Queda prohibido el uso de técnicas de "scraping" o cualquier método automatizado para extraer datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              BlackCherry IT Consulting se esfuerza por mantener la información actualizada y precisa, sin embargo, no garantizamos que el sitio esté libre de errores o interrupciones. No somos responsables por daños directos o indirectos derivados del uso de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">5. Contacto</h2>
            <p>
              Para cualquier duda o aclaración sobre estos términos, puede contactarnos a través de nuestro formulario de contacto o al correo: <strong>blackcherrydevs@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
