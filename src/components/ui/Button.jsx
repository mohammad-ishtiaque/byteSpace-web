import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-shuttle-950 hover:bg-[#c2e80f]",
  secondary: "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100",
};


export default function Button({ href, variant = "primary", className, children, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-3xl px-6 py-3 text-label-l font-medium whitespace-nowrap transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
