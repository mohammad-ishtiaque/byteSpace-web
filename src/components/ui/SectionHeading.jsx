import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const titleSizes = {
  lg: "text-[2rem] sm:text-h2",
  md: "text-[1.75rem] sm:text-h3", 
};

export default function SectionHeading({ id, title, description, size = "lg", align = "center", className }) {
  return (
    <Reveal className={cn("flex flex-col", align === "center" ? "items-center text-center" : "items-start", className)}>
      <h2 id={id} className={cn("font-heading leading-[1.2] font-semibold tracking-[-0.01em]", titleSizes[size])}>
        {title}
      </h2>
      {description && <p className="mt-4 text-body-m text-shuttle-700 sm:text-body-l">{description}</p>}
    </Reveal>
  );
}
