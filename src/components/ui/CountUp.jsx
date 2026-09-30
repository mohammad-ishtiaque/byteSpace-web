"use client";

import { useEffect, useRef } from "react";
import useInView from "@/hooks/useInView";

const DURATION = 1200;

function format(number, decimals) {
  return number.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export default function CountUp({ value, decimals = 0, prefix = "", suffix = "" }) {
  const [ref, isInView] = useInView();
  const textRef = useRef(null);
  const finalText = `${prefix}${format(value, decimals)}${suffix}`;

  useEffect(() => {
    if (!isInView) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - (1 - progress) ** 3;
      textRef.current.textContent = `${prefix}${format(value * eased, decimals)}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      <span ref={textRef} aria-hidden="true">
        {finalText}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  );
}
