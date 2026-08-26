import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const RADIUS = 55; // px beyond the button's edges that starts pulling it in
const MAX_OFFSET = 7; // px, max pull toward the cursor

// Desktop-only "magnetic" pull toward the cursor for hero/primary CTAs.
// Not applied site-wide — reserved for a small number of marquee buttons.
export function useMagneticButton<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let active = false;

    function handleMove(event: MouseEvent) {
      const rect = node!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy) - Math.max(rect.width, rect.height) / 2;

      if (distance < RADIUS) {
        active = true;
        node!.style.transitionDuration = "0ms";
        const pull = Math.max(0, 1 - distance / RADIUS);
        node!.style.transform = `translate(${(dx / RADIUS) * MAX_OFFSET * pull}px, ${(dy / RADIUS) * MAX_OFFSET * pull}px)`;
      } else if (active) {
        active = false;
        resetTransform();
      }
    }

    function resetTransform() {
      node!.style.transitionDuration = "400ms";
      node!.style.transitionTimingFunction = "var(--ease-magnetic)";
      node!.style.transform = "translate(0px, 0px)";
    }

    node.style.transitionProperty = "transform";
    window.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", resetTransform);
    };
  }, [prefersReducedMotion]);

  return ref;
}
