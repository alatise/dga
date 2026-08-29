import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — cap around 400ms for grids with many items. */
  delayMs?: number;
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: delayMs / 1000,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
