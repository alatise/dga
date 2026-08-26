import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCountUp } from "../../hooks/useCountUp";

interface CountUpStatProps {
  /** Numeric target, e.g. 50 */
  value: number;
  /** Static suffix that isn't animated, e.g. "+" or "%" */
  suffix?: string;
  label: string;
  className?: string;
}

// Reusable primitive for a "50+ institutions supported" style stat block.
// Not placed on any page yet — drop it in once real, confirmed figures exist.
export function CountUpStat({ value, suffix = "", label, className }: CountUpStatProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className={className}>
      <p className="text-4xl font-extrabold text-gold">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-ink-muted">{label}</p>
    </div>
  );
}
