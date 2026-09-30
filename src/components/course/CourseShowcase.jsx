import Image from "next/image";
import CourseCard from "@/components/course/CourseCard";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import { cn } from "@/lib/utils";

const SHAPES = [
  { src: "/shapes/ring-lime.webp", size: 684, className: "top-[19px] left-[30px] w-[131px]" },
  { src: "/shapes/cone-lime.webp", size: 376, className: "top-[396px] left-[-26px] w-[188px]" },
  { src: "/shapes/spring-white-sm.webp", size: 350, className: "top-[320px] left-[348px] w-[175px]" },
];

export default function CourseShowcase({ backCourse, frontCourse, className }) {
  return (
    <div inert aria-hidden="true" className={cn("relative h-[558px] w-[496px]", className)}>
      <div className="absolute top-[90px] left-0 w-[373px]">
        <CourseCard course={backCourse} variant="showcase" />
      </div>
      <div className="absolute top-0 left-[110px] w-[373px]">
        <CourseCard course={frontCourse} variant="showcase" />
      </div>
      <div className="absolute top-[435px] left-[226px]">
        <HappyStudentsCard variant="accent" />
      </div>
      {SHAPES.map((shape) => (
        <Image
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.size}
          height={shape.size}
          className={cn("pointer-events-none absolute h-auto max-w-none", shape.className)}
        />
      ))}
    </div>
  );
}
