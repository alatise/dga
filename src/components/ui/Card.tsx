import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardVariant = "light" | "dark";

const VARIANT_CLASSES: Record<CardVariant, string> = {
  light:
    "bg-white shadow-sm hover:shadow-lg hover:shadow-black/10",
  dark:
    "bg-navy-slate hover:shadow-lg hover:shadow-gold/20 hover:ring-1 hover:ring-gold/40",
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ className, variant = "light", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 transition-[transform,box-shadow] duration-200 ease-card hover:-translate-y-1",
        VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    />
  );
}
