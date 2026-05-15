"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LegalModal } from "@/components/ui/LegalModal";

export default function Footer() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({ title: "", body: <></> });

  const isProjectDetail = pathname.startsWith('/portafolio/') && pathname !== '/portafolio';

  if (isProjectDetail) return null;

  const openPrivacy = () => {
    setDrawerContent({
      title: "Aviso de Privacidad",
      body: (
        <>
          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">1. Identidad y Domicilio del Responsable</p>
          <p>BLACKCHERRY IT CONSULTING (en lo sucesivo "BlackCherry"), con domicilio en México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
          
          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">2. Datos Personales Recabados</p>
          <p>Para las finalidades señaladas en el presente aviso, recabamos sus datos personales de forma directa cuando usted nos los proporciona a través de nuestros formularios de contacto, interacciones en chats automatizados (ManyChat) y redes sociales. Los datos recabados incluyen: Nombre completo, correo electrónico, número telefónico y perfiles de mensajería instantánea.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">3. Finalidades del Tratamiento</p>
          <p>Sus datos personales serán utilizados para las siguientes finalidades primarias:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proveer los servicios de consultoría y desarrollo tecnológico solicitados.</li>
            <li>Responder a sus dudas y comentarios a través de nuestros sistemas de IA conversacional.</li>
            <li>Informar sobre cambios en nuestros servicios o protocolos técnicos.</li>
          </ul>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">4. Transferencia de Datos</p>
          <p>BlackCherry podrá transferir sus datos personales a terceros proveedores de servicios para el cumplimiento de las finalidades descritas, tales como servicios de hosting, plataformas de IA (ManyChat, ElevenLabs) y servicios de analítica. Nos aseguramos de que estos terceros mantengan medidas de seguridad administrativas, técnicas y físicas para proteger sus datos.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">5. Derechos ARCO</p>
          <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
          <p>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de: <span className="text-white border-b border-primary-container">contacto@blackcherry.it</span></p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">6. Uso de Cookies y Tecnologías de Rastreo</p>
          <p>Le informamos que en nuestra página de internet utilizamos cookies y otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">7. Cambios al Aviso de Privacidad</p>
          <p>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestra página de internet.</p>
        </>
      )
    });
    setDrawerOpen(true);
  };

  const openTerms = () => {
    setDrawerContent({
      title: "Términos y Condiciones",
      body: (
        <>
          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">1. Aceptación de Términos</p>
          <p>El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en estos Términos y Condiciones.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">2. Propiedad Intelectual</p>
          <p>Todo el contenido de este sitio, incluyendo pero no limitado a textos, gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de BLACKCHERRY IT CONSULTING o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales y de México.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">3. Uso de Tecnologías de IA de Terceros</p>
          <p>BlackCherry integra servicios de terceros como ManyChat y ElevenLabs para mejorar la experiencia del usuario. El usuario reconoce que estas herramientas son servicios externos y BlackCherry no se hace responsable por interrupciones técnicas, errores en la generación de voz o fallos en la lógica de mensajería derivados directamente de los proveedores de dichas plataformas.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">4. Responsabilidad del Usuario</p>
          <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que BlackCherry ofrece a través de su sitio web y a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">5. Limitación de Responsabilidad</p>
          <p>BlackCherry no será responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse de la falta de disponibilidad, mantenimiento y efectivo funcionamiento de la web o de sus servicios, ni de la presencia de virus o programas maliciosos en los contenidos.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">6. Enlaces a Terceros</p>
          <p>En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, BlackCherry no ejercerá ningún tipo de control sobre dichos sitios y contenidos.</p>

          <p className="font-headline font-bold text-white uppercase tracking-widest text-lg">7. Jurisdicción</p>
          <p>Para la interpretación, cumplimiento y ejecución de los presentes términos, las partes se someten a la jurisdicción de los tribunales competentes en México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles en razón de su domicilio presente o futuro.</p>
        </>
      )
    });
    setDrawerOpen(true);
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden border-t border-white/5 pt-20">
      {/* Persistent Architectural Grid Lines */}
      <div className="gutter-line gutter-left opacity-10 z-[110]"></div>
      <div className="gutter-line gutter-right opacity-10 z-[110]"></div>
      <div className="center-line-full opacity-10 z-[110]"></div>

      {/* Background Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center select-none overflow-hidden z-0">
        <div className="whitespace-nowrap font-headline font-black text-[12vw] leading-none uppercase animate-marquee pointer-events-none">
          {"BLACKCHERRY IT CONSULTING \u00A0 BLACKCHERRY IT CONSULTING \u00A0 BLACKCHERRY IT CONSULTING \u00A0".split("").map((char, i) => (
            <span key={i} className="transition-all duration-300 hover:text-primary-container opacity-5 hover:opacity-100 inline-block pointer-events-auto cursor-default">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-6 lg:px-[var(--gutter-width)] pb-20 pointer-events-none">
        <div className="flex flex-col min-[600px]:flex-row justify-between items-start gap-12 min-[600px]:gap-4 lg:gap-16 pointer-events-auto">
          {/* Brand Block */}
          <div className="space-y-4 min-[600px]:space-y-8 w-full min-[600px]:w-1/2 max-w-xs ml-0 lg:ml-6 pr-0 min-[600px]:pr-4">
            <Link href="/" className="flex items-center mb-2 cursor-pointer group">
              <img src="/logo-blackcherry-footer.png" alt="BlackCherry IT Consulting Logo" className="w-32 sm:w-40 min-[600px]:w-56 lg:w-64 h-auto brightness-0 invert group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="font-body text-white/40 text-[8px] min-[600px]:text-[10px] lg:text-xs uppercase tracking-widest leading-loose">
              Precisión quirúrgica en ingeniería digital. Esculpiendo los monolitos de la infraestructura industrial del mañana.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-8 min-[600px]:gap-x-2 lg:gap-x-12 gap-y-12 w-full min-[600px]:w-1/2 lg:w-auto lg:mr-12">
            <div className="space-y-6">
              <span className="font-headline font-black text-[10px] text-primary-container tracking-[0.4em] uppercase">SISTEMA</span>
              <nav className="flex flex-col gap-4">
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/">Inicio</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/servicios">Servicios</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/portafolio">Portafolio</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/ia">IA</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" href="/contacto">Contacto</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <span className="font-headline font-black text-[10px] text-primary-container tracking-[0.4em] uppercase">CONECTAR</span>
              <nav className="flex flex-col gap-4">
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Blackcherry-Devs/61587561059170/">Facebook</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/blackcherrydevs?igsh=MWQ3ZWQwenRtZnI1Nw==">Instagram</Link>
                <Link className="font-headline font-bold text-[10px] lg:text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@blackcherry_devs">TikTok</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-40 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 pointer-events-auto">
          <span className="font-headline text-[9px] lg:text-[10px] text-white/20 uppercase tracking-[0.5em] text-center lg:text-left">© 2026 BLACKCHERRY IT CONSULTING. TODOS LOS DERECHOS RESERVADOS.</span>
          <div className="flex gap-8">
            <Link 
              href="/privacidad"
              className="font-headline text-[9px] lg:text-[10px] text-white/20 hover:text-white/40 uppercase tracking-[0.2em] cursor-pointer outline-none"
            >
              Política de Privacidad
            </Link>
            <Link 
              href="/terminos"
              className="font-headline text-[9px] lg:text-[10px] text-white/20 hover:text-white/40 uppercase tracking-[0.2em] cursor-pointer outline-none"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>

      <LegalModal isOpen={drawerOpen} setIsOpen={setDrawerOpen} title={drawerContent.title}>
        {drawerContent.body}
      </LegalModal>
    </footer>
  );
}
