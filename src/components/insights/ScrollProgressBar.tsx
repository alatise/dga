import { useEffect, useState, type RefObject } from "react";

/** Fixed gold bar at the top of the viewport, tracking scroll through `targetRef`'s content specifically. */
export function ScrollProgressBar({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const node = targetRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(100);
        return;
      }

      const scrolled = -rect.top;
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setProgress(pct);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetRef]);

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-transparent">
      <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
    </div>
  );
}
