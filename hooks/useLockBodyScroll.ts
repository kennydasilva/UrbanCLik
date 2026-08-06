"use client";

import { useEffect } from "react";

/**
 * Prevents the page behind an open overlay (e.g. the mobile menu)
 * from scrolling while `locked` is true.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
