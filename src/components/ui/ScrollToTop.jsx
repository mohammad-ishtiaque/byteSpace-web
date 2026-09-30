"use client";

import { useEffect } from "react";

export default function ScrollToTop({ trigger }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [trigger]);

  return null;
}
