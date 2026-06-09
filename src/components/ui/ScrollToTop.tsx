"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration so it never restores position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // Scroll to top immediately on mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}
