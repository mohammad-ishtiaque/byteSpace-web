import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export default function CheckList({ items, className }) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => {
        const { label, icon } = typeof item === "string" ? { label: item, icon: "check" } : item;
        return (
          <li key={label} className="flex items-start gap-2 text-body-m text-shuttle-700">
            <Icon name={icon} className="text-primary" />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
