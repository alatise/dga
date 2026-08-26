import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { cn } from "../../lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — cap around 400ms for grids with many items. */
  delayMs?: number;
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-600 ease-scroll",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
