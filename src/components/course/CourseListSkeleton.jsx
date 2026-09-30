import Container from "@/components/ui/Container";
import CourseCardSkeleton from "@/components/course/CourseCardSkeleton";

export default function CourseListSkeleton({ heroHeight = "h-[240px]", cards = 6 }) {
  return (
    <div role="status" aria-label="Loading courses">
      <div className={`bg-grid ${heroHeight}`} />
      <Container className="pt-12 pb-16 md:pt-[72px]">
        <div className="flex animate-pulse gap-4">
          <div className="h-12 w-24 rounded-3xl bg-shuttle-100" />
          <div className="h-12 w-28 rounded-3xl bg-shuttle-100" />
          <div className="h-12 w-32 rounded-3xl bg-shuttle-100" />
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {Array.from({ length: cards }, (_, index) => (
            <li key={index}>
              <CourseCardSkeleton />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
