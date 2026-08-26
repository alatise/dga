import type { IconType } from "react-icons";
import { FiImage } from "react-icons/fi";
import { cn } from "../../lib/cn";

interface PlaceholderImageProps {
  label?: string;
  icon?: IconType;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const ASPECT_CLASSES: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

// Self-contained visual stand-in for real photography — no external network
// dependency, so nothing ever breaks or leaks a request to a third party.
export function PlaceholderImage({
  label,
  icon: Icon = FiImage,
  aspect = "video",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label ?? "Placeholder image"}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-br from-navy to-navy-light text-white/70",
        ASPECT_CLASSES[aspect],
        className,
      )}
    >
      <Icon aria-hidden size={28} />
      {label && (
        <span className="px-4 text-center text-xs font-medium tracking-wide text-white/80">
          {label}
        </span>
      )}
    </div>
  );
}
