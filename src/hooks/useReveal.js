import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Tiny IntersectionObserver hook that flips `true` once an element
 * scrolls into view, and stays true (fire-once) so the "fade up on
 * scroll" animation never replays while scrolling back and forth.
 *
 * Usage:
 *   const [ref, visible] = useReveal();
 *   <div ref={ref} className={visible ? "reveal-in" : "reveal-out"} />
 */
export default function useReveal({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion — show immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
