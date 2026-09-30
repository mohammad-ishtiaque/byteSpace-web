"use client";

import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export default function ProgressBar({ value, trackClassName = "bg-[#f6f6f6]", fillClassName = "bg-accent", className }) {
  const [ref, isInView] = useInView();

  return (
    <span ref={ref} className={cn("block h-2 rounded-3xl", trackClassName, className)}>
      <span
        className={cn("block h-full rounded-3xl transition-[width] duration-1000 ease-out", fillClassName)}
        style={{ width: isInView ? `${value}%` : "0%" }}
      />
    </span>
  );
}
