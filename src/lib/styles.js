import { cn } from "@/lib/utils";

export function pillClasses(isActive, className) {
  return cn(
    "rounded-3xl px-4 py-3 text-label-m font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    isActive ? "bg-accent text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
    className,
  );
}
