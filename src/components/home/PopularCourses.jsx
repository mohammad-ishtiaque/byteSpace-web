import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseExplorer from "@/components/course/CourseExplorer";
import { getCourses, getCourseTopics } from "@/services/courses";

export default async function PopularCourses() {
  const [courses, topics] = await Promise.all([getCourses(), getCourseTopics()]);

  return (
    <section aria-labelledby="courses-title" className="py-16 md:py-[72px]">
      <Container>
        <SectionHeading
          id="courses-title"
          title={
            <>
              Discover Your Passion, <br className="hidden sm:block" />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="mx-auto max-w-[917px]"
        />

        <CourseExplorer courses={courses} topics={topics} />
      </Container>
    </section>
  );
}
