import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export default function CheckList({ items, className }) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-body-m text-shuttle-700">
          <Icon name="check" className="text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
