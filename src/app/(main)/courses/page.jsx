import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";
import Dropdown from "@/components/ui/Dropdown";
import Pagination from "@/components/ui/Pagination";
import CourseFilters from "@/components/course/CourseFilters";
import CourseGrid from "@/components/course/CourseGrid";
import SearchForm from "@/components/ui/SearchForm";
import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { getCategories, getCourseLevels, getCourseTopics, searchCourses } from "@/services/courses";

const SEARCH_SCOPES = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
];

export const metadata = {
  title: "Courses",
  description: "Search ByteSpace courses by topic, level and category.",
};

export default async function CoursesPage({ searchParams }) {
  const { q = "", topic = "", level = "", category = "", sort = "", page, scope } = await searchParams;
  if (scope === "creators") redirect(q ? `${ROUTES.creators}?q=${encodeURIComponent(q)}` : ROUTES.creators);
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
          <SearchForm
            id="course-search"
            defaultValue={q}
            placeholder="Search"
            keepParams={{ topic, level, category, sort }}
            className="mt-8 max-w-[624px]"
          >
            <Dropdown
              name="scope"
              label="Search in"
              defaultValue="courses"
              options={SEARCH_SCOPES}
              variant="accent"
              submitOnChange
            />
          </SearchForm>
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
