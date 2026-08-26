import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// Ease-out: fast start, slow settle — avoids the robotic look of a linear count.
function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

export function useCountUp(target: number, active: boolean, durationMs = 1400) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / durationMs, 1);
      setAnimatedValue(Math.round(target * easeOutQuint(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs, prefersReducedMotion]);

  return prefersReducedMotion ? target : animatedValue;
}
