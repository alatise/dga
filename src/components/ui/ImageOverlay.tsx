import type { ImgHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface ImageWithOverlayProps extends ImgHTMLAttributes<HTMLImageElement> {
  overlayOpacity?: string;
}

export function ImageWithOverlay({
  className,
  overlayOpacity = "25",
  ...props
}: ImageWithOverlayProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img
        {...props}
        className={cn("block h-full w-full object-contain", className)}
      />

      <div className={"pointer-events-none absolute inset-0 bg-[#0a1128]/25"} />
    </div>
  );
}
