"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { courseUrl } from "@/lib/constants";
import { pillClasses } from "@/lib/styles";

const TABS = [
  { label: "About", tab: "" },
  { label: "Lessons", tab: "lessons" },
  { label: "Reviews", tab: "reviews" },
];

export default function CourseTabs({ slug }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Course sections">
      <ul className="flex gap-4">
        {TABS.map(({ label, tab }) => {
          const href = courseUrl(slug, tab);
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                scroll={false}
                aria-current={isActive ? "page" : undefined}
                className={pillClasses(isActive, "block")}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
