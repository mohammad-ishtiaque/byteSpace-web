"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const states = {
  static: "",
  hidden: "translate-y-6 opacity-0",
  shown: "translate-y-0 opacity-100 transition duration-700 ease-out",
};

export default function Reveal({ as: Tag = "div", delay = 0, className, children }) {
  const ref = useRef(null);
  const [state, setState] = useState("static");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let isFirstCheck = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isFirstCheck) setState("shown");
          observer.disconnect();
        } else if (isFirstCheck) {
          setState("hidden");
        }
        isFirstCheck = false;
      },
      { threshold: 0.15 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn(states[state], className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
