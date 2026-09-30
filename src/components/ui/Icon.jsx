import { cn } from "@/lib/utils";

const PATHS = {
  filter:
    "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z",
  level: "M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z",
  category:
    "M12 2l-5.5 9h11L12 2zm5.5 11c-2.49 0-4.5 2.01-4.5 4.5S15.01 22 17.5 22s4.5-2.01 4.5-4.5S19.99 13 17.5 13zM3 21.5h8v-8H3v8z",
  sort: "M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z",
  chevronDown: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
  chevronLeft: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
  chevronRight: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  close:
    "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  tick: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  check:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z",
};

export default function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-6 shrink-0", className)}>
      <path fill="currentColor" d={PATHS[name]} />
    </svg>
  );
}
