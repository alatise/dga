import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/cn";
// Reuses the network/constellation illustration built earlier — thematically
// identical to the "Africa constellation map" asset, already navy-toned.
import constellationMap from "../../assets/illustrations/hero-governance-network.svg";
import heroPhoto1 from "../../assets/images/Hero-1.webp";
import heroPhoto2 from "../../assets/images/Team_Photo_About_Page.webp";
import Africamap from "../../assets/images/DGA_MAP.webp";

import { ImageWithOverlay } from "../ui/ImageOverlay";

const AUTO_CYCLE_MS = 4000;

type Slot = { type: "photo"; src: string; alt: string } | { type: "graphic" };

const SLOTS: Slot[] = [
  {
    type: "photo",
    src: heroPhoto1,
    alt: "Digital Governance Africa leadership meeting",
  },
  {
    type: "photo",
    src: heroPhoto2,
    alt: "Digital Governance Africa team",
  },
  {
    type: "photo",
    src: Africamap,
    alt: "Digital Governance Africa Map",
  },
];

export function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLOTS.length);
    }, AUTO_CYCLE_MS);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  function handleMouseEnter() {
    if (prefersReducedMotion) return;
    setActiveIndex((prev) => (prev + 1) % SLOTS.length);
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className="relative aspect-square w-full overflow-hidden rounded-lg border border-line"
    >
      {SLOTS.map((slot, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity ease-crossfade",
              prefersReducedMotion ? "duration-0" : "duration-900",
              isActive ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={!isActive}
          >
            {slot.type === "photo" ? (
              <div className="relative h-full w-full">
                <img
                  src={slot.src}
                  alt={slot.alt}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover",
                    isActive && !prefersReducedMotion && "animate-kenburns",
                  )}
                />

                <div className="absolute inset-0 bg-navy/25" />
              </div>
            ) : (
              <ImageWithOverlay
                key={isActive ? "active" : "idle"}
                src={constellationMap}
                alt="Africa constellation map — a network of connected governance nodes"
                className={cn(
                  "h-full w-full bg-navy object-contain p-8",
                  isActive && !prefersReducedMotion && "animate-kenburns",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
