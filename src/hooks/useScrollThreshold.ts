import { useEffect, useState } from "react";

/** True once the page has scrolled past `threshold` px. */
export function useScrollThreshold(threshold = 100) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setPast(window.scrollY > threshold);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return past;
}
