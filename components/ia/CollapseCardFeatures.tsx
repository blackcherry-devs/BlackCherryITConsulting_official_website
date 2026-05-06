"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GridLines from "@/components/ui/GridLines";
import { IconType } from "react-icons";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-white py-16 relative z-20 w-full border-y border-black/5">
      <GridLines />
      <div className="absolute inset-0 opacity-50 pointer-events-none technical-grid-light"></div>
      
      <div className="w-full px-6 md:px-[7rem] relative z-10">
        <div className="mb-8 flex justify-between gap-4 items-end">
          <h2 className="font-headline font-black text-black text-4xl md:text-6xl tracking-tighter uppercase">
            Ventajas <br/><span className="text-primary-container">Estratégicas</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-primary-container"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-primary-container"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  position: number;
  index: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Feature = ({
  position,
  index,
  title,
  description,
  Icon,
}: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-xl md:w-3/5 border border-black/5 rounded-xl ${
        index % 2 ? "bg-black text-white" : " bg-stone-100 text-black"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20 text-primary-container" />
      <h3 className="mb-8 font-headline font-black tracking-tighter uppercase text-xl md:text-3xl">{title}</h3>
      <p className={`font-body text-sm ${index % 2 ? 'text-white/70' : 'text-black/70'}`}>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "Atención Premium",
    Icon: FiUpload,
    description:
      "Resolución instantánea de consultas con un nivel de calidad humana, asegurando la satisfacción del cliente 24/7.",
  },
  {
    title: "Consistencia de Marca",
    Icon: FiArrowUp,
    description:
      "Mantenemos la identidad vocal única de tu marca en cada interacción, creando confianza y lealtad a largo plazo.",
  },
  {
    title: "Ahorro Operativo",
    Icon: FiTarget,
    description:
      "Reducción masiva en costes de producción y atención, escalando tu capacidad sin necesidad de expandir infraestructura física.",
  },
  {
    title: "Contenido Masivo",
    Icon: FiLink,
    description:
      "Generación de material auditivo y respuestas dinámicas en segundos, listo para despliegue en múltiples canales.",
  },
  {
    title: "Interfaces Industriales",
    Icon: FiTool,
    description:
      "Integración de inteligencia vocal en hardware y sistemas complejos para facilitar operaciones de alta demanda.",
  },
];
