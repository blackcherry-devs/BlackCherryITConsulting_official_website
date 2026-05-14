"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";

const NOTIFICATION_TTL = 5000;

export type NotificationType = {
  id: number;
  text: string;
};

export const Notification = ({
  text,
  id,
  removeNotif,
}: NotificationType & { removeNotif: Function }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      className="p-4 w-80 flex items-start rounded-lg gap-3 text-sm font-medium shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-white bg-primary fixed z-[200] bottom-6 right-6"
    >
      <FiAlertCircle className="text-3xl min-w-8 min-h-8 p-1.5 rounded-full bg-white text-primary shadow" />
      <span className="font-headline tracking-wide uppercase leading-tight pt-1 text-xs">{text}</span>
      <button onClick={(e) => { e.preventDefault(); removeNotif(id); }} className="ml-auto mt-1 hover:text-white/70 transition-colors">
        <FiX className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
