"use client";

import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiMessageCircle, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import TechnicalGrid from "@/components/ui/TechnicalGrid";

const ManychatFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto w-full bg-white text-black border-t border-black/5">
      <TechnicalGrid mode="light" opacity={0.5} />
      
      {/* Intro section */}
      <div className="flex h-[60vh] md:h-[70vh] flex-col items-center justify-center relative z-10 px-6">
        <span className="font-headline font-black text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 text-center">MANYCHAT INTEGRATION</span>
        <h2 className="font-headline font-black text-black text-4xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-center max-w-4xl mt-2">
          MENSAJERÍA <br />
          <span className="text-primary-container">INTELIGENTE</span>
        </h2>
        <span className="mt-12 block rounded-xl bg-black px-6 py-4 text-center font-headline font-black text-[9px] uppercase tracking-[0.3em] text-white shadow-2xl">
          SCROLL PARA EXPLORAR
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <SlidingFeatureDisplay featureInView={featureInView} />

        {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
        <div className="-mt-[100vh] hidden md:block" />

        {features.map((s) => (
          <Content
            key={s.id}
            featureInView={s}
            setFeatureInView={setFeatureInView}
            {...s}
          />
        ))}
      </div>
      
      {/* Outro section */}
      <div className="flex h-32 items-center justify-center bg-black relative z-10 border-t border-white/10">
        <span className="font-headline font-bold text-white/50 tracking-[0.4em] text-[10px] uppercase">FIN DEL RECORRIDO</span>
      </div>
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex px-6 md:px-[var(--gutter-width)]"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-full md:w-[60%] max-w-xl rounded-xl p-4"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen px-6 md:px-[var(--gutter-width)]"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center py-20 md:w-[40%] md:px-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-xl bg-black px-4 py-2 font-headline font-bold text-[9px] uppercase tracking-widest text-white">
            {featureInView.callout}
          </span>
          <p className="my-6 text-2xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter leading-none">{featureInView.title}</p>
          <p className="font-body text-black/60 leading-relaxed text-xs md:text-base max-w-md">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-12 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return (
    <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl bg-[#1F1F1F] shadow-2xl overflow-hidden flex flex-col border border-white/10">
      <div className="flex-1 relative overflow-hidden group">
        <motion.img 
          key={featureInView.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={featureInView.image}
          alt={featureInView.title}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
        />
        
        {/* Decorative background elements */}
        <TechnicalGrid mode="dark" opacity={0.3} />
        <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        <div className="absolute bottom-8 left-8 z-10 space-y-2">
          <motion.div 
            key={`icon-${featureInView.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 bg-primary-container rounded-xl w-fit shadow-2xl"
          >
            <featureInView.Icon className="text-2xl text-white" />
          </motion.div>
          <motion.h4 
            key={`title-${featureInView.id}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-headline font-black text-2xl text-white tracking-tighter uppercase"
          >
            {featureInView.title}
          </motion.h4>
        </div>
      </div>
    </div>
  );
};

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
  image: string;
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "CONECTIVIDAD TOTAL",
    title: "Conecta sin límites",
    description:
      "Unifica Instagram, WhatsApp y Messenger bajo un mismo flujo inteligente. Atrapa a tu audiencia en su plataforma preferida y nunca pierdas un lead por falta de presencia.",
    contentPosition: "r",
    Icon: FiMessageCircle,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    callout: "FILTRADO INTELIGENTE",
    title: "Filtra en tiempo real",
    description:
      "Nuestros flujos automatizados califican a tus prospectos antes de que un humano intervenga, asegurando que tu equipo de ventas solo hable con leads calificados y listos para comprar.",
    contentPosition: "l",
    Icon: FiUsers,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    callout: "CRECIMIENTO ACELERADO",
    title: "Escala tus ventas",
    description:
      "Lanza campañas masivas y recupera carritos abandonados al instante. Convierte conversaciones pasivas en transacciones activas con automatizaciones de alto impacto.",
    contentPosition: "r",
    Icon: FiTrendingUp,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    callout: "EFICIENCIA OPERATIVA",
    title: "Automatiza y Delega",
    description:
      "Reduce el tiempo de respuesta a cero. Resuelve preguntas frecuentes y agenda citas automáticamente, permitiendo que tu equipo se concentre en tareas estratégicas.",
    contentPosition: "l",
    Icon: FiZap,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];


export default ManychatFeatures;
