import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function TopicFilter({ topics, selected, onSelect }) {
  return (
    <ul className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 md:gap-x-4 md:gap-y-5">
      {topics.map((topic) => {
        const isActive = topic === selected;
        return (
          <li key={topic} className="shrink-0">
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(topic)}
              className={cn(
                "rounded-3xl px-4 py-3 text-label-m font-medium transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                isActive ? "bg-accent text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
              )}
            >
              {topic}
            </button>
          </li>
        );
      })}
      <li className="flex shrink-0 items-center">
        <Link
          href={ROUTES.courses}
          className="rounded-3xl px-4 py-3 text-label-m font-medium text-shuttle-700 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
        >
          + More
        </Link>
      </li>
    </ul>
  );
}
