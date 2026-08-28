import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type CardVariant = "light" | "dark";

const VARIANT_CLASSES: Record<CardVariant, string> = {
  light: "bg-white shadow-sm hover:shadow-lg hover:shadow-black/10",
  dark: "bg-navy-slate hover:shadow-lg hover:shadow-gold/20 hover:ring-1 hover:ring-gold/40",
};

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: CardVariant;
}

export function Card({ className, variant = "light", ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn(
        "rounded-card p-6 overflow-hidden",
        VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    />
  );
}
