import { cn } from "@/lib/utils";

function ChangeChip({ children }) {
  return (
    <span className="shrink-0 rounded-3xl bg-accent px-2 py-0.5 text-label-xs leading-5 font-medium text-shuttle-950">
      {children}
    </span>
  );
}

export default function RevenueCard({ title, period, amount, change, progress, className }) {
  const hasProgress = progress !== undefined;

  return (
    <div className={cn("rounded-2xl bg-primary p-4 text-white", className)}>
      <p className="text-label-m font-medium">{title}</p>
      <p className="text-[10px] leading-[1.2] text-shuttle-100">{period}</p>

      <div className={cn("mt-2 flex", hasProgress ? "items-center justify-between" : "flex-col items-start gap-2")}>
        <p className="text-2xl leading-8 font-bold">{amount}</p>
        {change && <ChangeChip>{change}</ChangeChip>}
      </div>

      {hasProgress && (
        <div aria-hidden="true" className="mt-2 h-2 rounded-3xl bg-white">
          <div className="h-full rounded-3xl bg-accent" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
