import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";
import Icon from "@/components/ui/Icon";
import Pagination from "@/components/ui/Pagination";
import CourseFilters from "@/components/course/CourseFilters";
import CourseGrid from "@/components/course/CourseGrid";
import CourseSearchForm from "@/components/course/CourseSearchForm";
import { ROUTES } from "@/lib/constants";
import { getCategories, getCourseLevels, getCourseTopics, searchCourses } from "@/services/courses";

export const metadata = {
  title: "Courses",
  description: "Search ByteSpace courses by topic, level and category.",
};

export default async function CoursesPage({ searchParams }) {
  const { q = "", topic = "", level = "", category = "", sort = "", page } = await searchParams;
  const filters = { q, topic, level, category, sort };

  const [result, topics, levels, categories] = await Promise.all([
    searchCourses({ ...filters, page }),
    getCourseTopics(),
    getCourseLevels(),
    getCategories(),
  ]);

  return (
    <>
      <section aria-labelledby="courses-title" className="bg-grid pt-8 pb-16 md:pt-11 md:pb-[69px]">
        <Container className="flex flex-col items-center text-center">
          <h1
            id="courses-title"
            className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-h3"
          >
            Find Your Next Course
          </h1>
          <CourseSearchForm
            id="course-search"
            defaultValue={q}
            placeholder="Search"
            keepParams={{ topic, level, category, sort }}
            className="mt-8 max-w-[624px]"
          >
            <label className="relative flex h-12 w-[147px] shrink-0 items-center self-center rounded-3xl bg-accent">
              <span className="sr-only">Search in</span>
              <select className="h-full w-full cursor-pointer appearance-none bg-transparent pr-12 pl-6 text-label-l font-medium text-shuttle-950 outline-none">
                <option>Courses</option>
                <option disabled>Creators (coming soon)</option>
              </select>
              <Icon name="chevronDown" className="pointer-events-none absolute right-4 text-shuttle-950" />
            </label>
          </CourseSearchForm>
        </Container>
      </section>

      <Container className="pt-12 pb-16 md:pt-[72px]">
        <CourseFilters topics={[...topics.slice(0, 8), "Cooking"]} levels={levels} categories={categories} />

        <p aria-live="polite" className="sr-only">
          {result.total} courses found
        </p>

        <div className="mt-12 md:mt-[77px]">
          {result.courses.length > 0 ? (
            <CourseGrid courses={result.courses} />
          ) : (
            <EmptyState
              title="No courses found."
              message="Try another search or remove some filters."
              actionLabel="Show all courses"
              actionHref={ROUTES.courses}
            />
          )}
        </div>

        <div className="mt-16 md:mt-24">
          <Pagination basePath={ROUTES.courses} params={filters} page={result.page} totalPages={result.totalPages} />
        </div>
      </Container>
    </>
  );
}
