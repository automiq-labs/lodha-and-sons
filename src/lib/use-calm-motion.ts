"use client";

import { useEffect, useState } from "react";

/**
 * Returns true on small screens (<=767px) or when the user prefers reduced
 * motion. Use it to freeze continuous/looping animations on mobile while
 * leaving desktop behaviour untouched. SSR-safe: starts false, resolves on mount.
 */
export function useCalmMotion() {
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(
      "(max-width: 767px), (prefers-reduced-motion: reduce)"
    );
    const update = () => setCalm(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return calm;
}
