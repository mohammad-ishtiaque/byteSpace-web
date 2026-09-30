import { cn } from "@/lib/utils";

export default function DetailSection({ title, children, className }) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h2 className="font-heading text-title font-semibold">{title}</h2>
      {children}
    </section>
  );
}
