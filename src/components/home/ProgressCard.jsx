import { cn } from "@/lib/utils";

export default function ProgressCard({ label = "Learning Progress", value, className }) {
  return (
    <div className={cn("w-[232px] rounded-2xl bg-white p-4", className)}>
      <p className="text-label-s font-medium">{label}</p>
      <p className="mt-2 font-heading text-stat font-semibold">{value}%</p>
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
