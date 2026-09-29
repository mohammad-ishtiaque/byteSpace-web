"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLink({ href, className, children, onClick }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-body-m transition-colors hover:text-accent",
        isActive ? "font-medium" : "font-normal",
        className,
      )}
    >
      {children}
    </Link>
  );
}
