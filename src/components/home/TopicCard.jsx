import { cn } from "@/lib/utils";

export default function TopicCard({ title, courses, students, className }) {
  return (
    <div className={cn("rounded-2xl bg-white p-4", className)}>
      <p className="text-label-m font-medium">{title}</p>
      <p className="flex items-center gap-2 text-body-xs whitespace-nowrap text-shuttle-400">
        <span>{courses}</span>
        <span aria-hidden="true" className="text-[10px]">
          •
        </span>
        <span>{students}</span>
      </p>
    </div>
  );
}
