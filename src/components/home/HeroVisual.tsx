import { useEffect, useRef, useState } from "react";
import { FiUsers, FiCamera } from "react-icons/fi";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/cn";
// Reuses the network/constellation illustration built earlier — thematically
// identical to the "Africa constellation map" asset, already navy-toned.
import constellationMap from "../../assets/illustrations/hero-governance-network.svg";

const AUTO_CYCLE_MS = 9000;

type Slot = { type: "photo"; label: string } | { type: "graphic" };

const SLOTS: Slot[] = [
  { type: "photo", label: "Hero Photo 1 — Boardroom wide shot" },
  { type: "photo", label: "Hero Photo 2 — Candid / standing moment" },
  { type: "graphic" },
];

const PHOTO_ICONS = [FiUsers, FiCamera];

export function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (isFinePointer) return; // desktop advances on hover instead, see handleMouseEnter

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
                <PlaceholderImage
                  label={slot.label}
                  icon={PHOTO_ICONS[index]}
                  aspect="square"
                  className={cn(
                    "h-full rounded-none",
                    isActive && !prefersReducedMotion && "animate-kenburns",
                  )}
                />
                {/* Navy duotone overlay ~25% opacity, per the imagery spec. */}
                <div className="absolute inset-0 bg-navy/25" />
              </div>
            ) : (
              <img
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
