import CourseCard from "@/components/course/CourseCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function CourseGrid({ courses, className }) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10", className)}>
      {courses.map((course, index) => (
        <Reveal as="li" key={course.id} delay={(index % 3) * 100} className="min-w-0">
          <CourseCard course={course} className="h-full" />
        </Reveal>
      ))}
    </ul>
  );
}
