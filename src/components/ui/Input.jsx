import { cn } from "@/lib/utils";

export default function Input({ id, label, error, className, ...props }) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-label-s font-medium text-shuttle-950">
        {label}
      </label>
      <input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-2 h-[52px] w-full rounded-xl border bg-white px-6 text-body-m text-shuttle-950 outline-none transition-colors placeholder:text-shuttle-400 focus:border-primary",
          error ? "border-red-500" : "border-shuttle-200",
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-2 text-body-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
