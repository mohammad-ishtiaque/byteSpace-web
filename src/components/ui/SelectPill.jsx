import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export default function SelectPill({ icon, label, value, options, onChange, className }) {
  return (
    <label
      className={cn(
        "relative flex h-12 shrink-0 items-center gap-1 rounded-3xl border border-shuttle-200 bg-white pl-4 text-label-m font-medium text-shuttle-950 transition-colors focus-within:border-primary hover:border-shuttle-400",
        value && "border-primary",
        className,
      )}
    >
      <Icon name={icon} className="text-shuttle-700" />
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-full cursor-pointer appearance-none bg-transparent pr-4 outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
