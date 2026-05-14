import GridLines from "@/components/ui/GridLines";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Aviso de Privacidad | BlackCherry IT Consulting",
  description: "Aviso de privacidad legal para el manejo de datos personales en BlackCherry IT Consulting.",
  robots: { index: false, follow: true } // Usually legal pages don't need to be indexed as primary content
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 px-6 md:px-[var(--gutter-width)] overflow-hidden">
      <GridLines />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-headline font-black text-primary-container tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform">
          <FiArrowLeft /> VOLVER AL INICIO
        </Link>
        
        <header className="mb-16 border-l-4 border-primary-container pl-8">
          <span className="block text-xs font-headline font-black text-stone-400 tracking-[0.3em] uppercase mb-4">DOCUMENTO LEGAL / 01</span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-[#1a1a1a] tracking-tighter uppercase leading-[0.9]">
            AVISO DE <br /> PRIVACIDAD
          </h1>
          <p className="mt-6 text-stone-500 font-body text-sm uppercase tracking-widest">Última actualización: 14 de Mayo, 2026</p>
        </header>

        <div className="space-y-12 font-body text-stone-600 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">1. Identidad y Domicilio del Responsable</h2>
            <p>
              BlackCherry IT Consulting, con domicilio en León, Guanajuato, México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">2. Datos Personales que Recabamos</h2>
            <p>
              Los datos personales que recabamos a través de nuestro sitio web incluyen: Nombre completo, correo electrónico corporativo y mensaje relacionado con su consulta o proyecto. No recabamos datos personales sensibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">3. Finalidades del Tratamiento</h2>
            <p>
              Sus datos serán utilizados exclusivamente para las siguientes finalidades necesarias:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Responder a sus solicitudes de información y cotización.</li>
              <li>Establecer contacto para el desarrollo de proyectos tecnológicos.</li>
              <li>Enviar información relevante sobre nuestros servicios (solo si usted lo autoriza).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso), solicitar su corrección (Rectificación), que los eliminemos de nuestros registros (Cancelación) u oponerse al uso de los mismos para fines específicos (Oposición). Para ejercer estos derechos, puede enviar un correo a: <strong>blackcherrydevs@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-headline font-black text-[#1a1a1a] uppercase tracking-tight mb-4">5. Transferencia de Datos</h2>
            <p>
              BlackCherry IT Consulting no transfiere sus datos personales a terceros, nacionales o extranjeros, sin su consentimiento previo, salvo las excepciones previstas en la Ley.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
