"use client";

import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiMessageCircle, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import GridLines from "@/components/ui/GridLines";

const ManychatFeatures = () => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto w-full bg-white text-black border-t border-black/5">
      <GridLines />
      <div className="absolute inset-0 opacity-50 pointer-events-none technical-grid-light"></div>
      
      {/* Intro section */}
      <div className="flex h-[70vh] flex-col items-center justify-center relative z-10">
        <span className="font-headline font-black text-[10px] tracking-[0.4em] uppercase text-black/40 mb-4 text-center">MANYCHAT INTEGRATION</span>
        <h2 className="font-headline font-black text-black text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-center max-w-4xl px-4 mt-2">
          AUTOMATIZACIÓN <br />
          <span className="text-primary-container">OMNICANAL</span>
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
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex px-6 md:px-[9rem]"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-1/2 max-w-lg rounded-xl p-8"
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
      className="relative z-0 flex h-fit md:h-screen px-6 md:px-[9rem]"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center py-24 md:w-1/2 md:px-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-xl bg-black px-4 py-2 font-headline font-bold text-[9px] uppercase tracking-widest text-white">
            {featureInView.callout}
          </span>
          <p className="my-6 text-4xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter leading-none">{featureInView.title}</p>
          <p className="font-body text-black/60 leading-relaxed text-sm md:text-base max-w-sm">{featureInView.description}</p>
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
    <div className="relative h-96 w-full rounded-2xl bg-[#1F1F1F] shadow-2xl overflow-hidden flex flex-col border border-white/10">
      <div className="flex w-full gap-2 bg-black p-4 border-b border-white/10 items-center justify-between">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-headline font-bold text-[8px] text-white/40 tracking-[0.2em] uppercase">MANYCHAT_WORKSPACE.EXE</span>
      </div>
      
      <div className="flex-1 p-8 relative flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 technical-grid-dark opacity-30"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-[#1F1F1F]/80 to-[#1F1F1F] opacity-80"></div>
        
        <motion.div 
          key={featureInView.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="p-8 bg-black/50 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
            <featureInView.Icon className="text-7xl md:text-8xl text-primary-container" />
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-black text-2xl md:text-3xl text-white tracking-tighter uppercase">{featureInView.title}</h4>
            <p className="font-headline text-[10px] text-primary-container tracking-[0.3em] uppercase">{featureInView.callout}</p>
          </div>
        </motion.div>
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
};

const features: FeatureType[] = [
  {
    id: 1,
    callout: "Omnicanalidad Total",
    title: "Conecta sin límites",
    description:
      "Unifica Instagram, WhatsApp y Messenger bajo un mismo flujo inteligente. Atrapa a tu audiencia en su plataforma preferida y nunca pierdas un lead por falta de presencia.",
    contentPosition: "r",
    Icon: FiMessageCircle,
  },
  {
    id: 2,
    callout: "Lead Scoring",
    title: "Filtra en tiempo real",
    description:
      "Nuestros flujos automatizados de Manychat hacen las preguntas correctas 24/7. Califican a tus prospectos antes de que un humano intervenga, asegurando que tu equipo de ventas solo hable con leads calientes.",
    contentPosition: "l",
    Icon: FiUsers,
  },
  {
    id: 3,
    callout: "Crecimiento Exponencial",
    title: "Escala tus ventas",
    description:
      "Lanza campañas masivas, recupera carritos abandonados y envía promociones personalizadas al instante. Convierte conversaciones pasivas en transacciones activas con tasas de apertura del 95%.",
    contentPosition: "r",
    Icon: FiTrendingUp,
  },
  {
    id: 4,
    callout: "Eficiencia Absoluta",
    title: "Automatiza y Delega",
    description:
      "Reduce el tiempo de respuesta a cero. Resuelve preguntas frecuentes, agenda citas y procesa pedidos automáticamente, permitiendo que tu equipo se concentre en tareas de alto valor estratégico.",
    contentPosition: "l",
    Icon: FiZap,
  },
];

export default ManychatFeatures;
