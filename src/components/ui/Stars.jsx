import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export default function Stars({ rating, max = 5, className }) {
  return (
    <span className={cn("flex gap-1", className)}>
      <span className="sr-only">
        {rating} out of {max} stars
      </span>
      {Array.from({ length: max }, (_, index) => (
        <Icon key={index} name="star" className={index < rating ? "text-shuttle-700" : "text-shuttle-200"} />
      ))}
    </span>
  );
}
