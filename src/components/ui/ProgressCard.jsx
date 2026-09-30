import { cn } from "@/lib/utils";

const sizes = {
  card: { box: "w-[232px]", value: "text-stat" },
  wide: { box: "w-full border border-shuttle-200", value: "text-h3" },
};

export default function ProgressCard({ label = "Learning Progress", value, size = "card", className }) {
  const styles = sizes[size];

  return (
    <div className={cn("rounded-2xl bg-white p-4", styles.box, className)}>
      <p className="text-label-s font-medium">{label}</p>
      <p className={cn("mt-2 font-heading font-semibold", styles.value)}>{value}%</p>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-2 rounded-3xl bg-[#f6f6f6]"
      >
        <div className="h-full rounded-3xl bg-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
