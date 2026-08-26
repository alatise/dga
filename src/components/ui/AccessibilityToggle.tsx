import { FiEye, FiMinus, FiPlus } from "react-icons/fi";
import { useAccessibility } from "../../hooks/useAccessibility";
import { cn } from "../../lib/cn";

export function AccessibilityToggle() {
  const { highContrast, textSize, toggleHighContrast, increaseTextSize, decreaseTextSize } =
    useAccessibility();

  return (
    <div
      className="flex items-center gap-1 border-l border-line pl-3"
      role="group"
      aria-label="Accessibility settings"
    >
      <button
        type="button"
        onClick={decreaseTextSize}
        disabled={textSize === "base"}
        aria-label="Decrease text size"
        className="rounded p-1.5 text-ink-muted hover:bg-surface-alt hover:text-ink disabled:opacity-30"
      >
        <FiMinus aria-hidden size={14} />
      </button>
      <span className="text-xs font-semibold text-ink-muted" aria-hidden>
        A
      </span>
      <button
        type="button"
        onClick={increaseTextSize}
        disabled={textSize === "xl"}
        aria-label="Increase text size"
        className="rounded p-1.5 text-ink-muted hover:bg-surface-alt hover:text-ink disabled:opacity-30"
      >
        <FiPlus aria-hidden size={14} />
      </button>
      <button
        type="button"
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        aria-label="Toggle high contrast mode"
        className={cn(
          "ml-1 rounded p-1.5 text-ink-muted hover:bg-surface-alt hover:text-ink",
          highContrast && "bg-navy text-white hover:bg-navy hover:text-white",
        )}
      >
        <FiEye aria-hidden size={14} />
      </button>
    </div>
  );
}
