import { useEffect, useMemo, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AccessibilityContext, type TextSize } from "./AccessibilityContext";

const TEXT_SIZES: TextSize[] = ["base", "lg", "xl"];

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useLocalStorage("dga-high-contrast", false);
  const [textSize, setTextSize] = useLocalStorage<TextSize>("dga-text-size", "base");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-contrast",
      highContrast ? "high" : "normal",
    );
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.setAttribute("data-text-size", textSize);
  }, [textSize]);

  const value = useMemo(
    () => ({
      highContrast,
      textSize,
      toggleHighContrast: () => setHighContrast((prev) => !prev),
      increaseTextSize: () =>
        setTextSize((prev) => {
          const index = TEXT_SIZES.indexOf(prev);
          return TEXT_SIZES[Math.min(index + 1, TEXT_SIZES.length - 1)];
        }),
      decreaseTextSize: () =>
        setTextSize((prev) => {
          const index = TEXT_SIZES.indexOf(prev);
          return TEXT_SIZES[Math.max(index - 1, 0)];
        }),
    }),
    [highContrast, textSize, setHighContrast, setTextSize],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}
