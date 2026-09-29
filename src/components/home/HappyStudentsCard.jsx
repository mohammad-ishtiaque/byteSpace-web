import Image from "next/image";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { cn } from "@/lib/utils";

const STUDENT_AVATARS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatars/student-${n}.webp`);

export default function HappyStudentsCard({ rating = 4.5, reviews = 240, total = "2K+", className }) {
  return (
    <div className={cn("w-[258px] rounded-2xl bg-white p-4", className)}>
      <p className="text-label-m font-medium">Happy Students</p>
      <p className="flex items-center text-body-xs">
        <span>{rating}</span>
        <span className="ml-1 text-shuttle-400">({reviews})</span>
        <Image src="/icons/star.svg" alt="" width={16} height={16} className="ml-0.5" />
        <span className="sr-only">average rating</span>
      </p>
      <AvatarGroup avatars={STUDENT_AVATARS} extraLabel={total} size={43} overlap={16} className="mt-2" />
    </div>
  );
}
