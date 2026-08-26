import { createContext } from "react";

export type TextSize = "base" | "lg" | "xl";

export interface AccessibilityState {
  highContrast: boolean;
  textSize: TextSize;
  toggleHighContrast: () => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
}

export const AccessibilityContext = createContext<AccessibilityState | undefined>(
  undefined,
);
