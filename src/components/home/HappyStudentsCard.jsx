import AvatarGroup from "@/components/ui/AvatarGroup";
import StarIcon from "@/components/ui/StarIcon";
import { cn } from "@/lib/utils";

const STUDENT_AVATARS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatars/student-${n}.webp`);

const variants = {
  light: { card: "bg-white", star: "text-accent", extra: "bg-accent text-shuttle-950" },
  accent: { card: "bg-accent", star: "text-primary", extra: "bg-shuttle-950 text-white" },
};

export default function HappyStudentsCard({ rating = 4.5, reviews = 240, total = "2K+", variant = "light", className }) {
  const styles = variants[variant];

  return (
    <div className={cn("w-[258px] rounded-2xl p-4", styles.card, className)}>
      <p className="text-label-m font-medium">Happy Students</p>
      <p className="flex items-center text-body-xs">
        <span>{rating}</span>
        <span className="ml-1 text-shuttle-400">({reviews})</span>
        <StarIcon className={cn("ml-0.5 size-4", styles.star)} />
        <span className="sr-only">average rating</span>
      </p>
      <AvatarGroup
        avatars={STUDENT_AVATARS}
        extraLabel={total}
        size={43}
        overlap={16}
        extraClassName={styles.extra}
        className="mt-2"
      />
    </div>
  );
}
