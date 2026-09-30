import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";
import CourseFilters from "@/components/course/CourseFilters";
import CourseGrid from "@/components/course/CourseGrid";
import CreatorHeader from "@/components/creator/CreatorHeader";
import { creatorUrl } from "@/lib/constants";
import { CREATOR_COURSES_PER_PAGE } from "@/lib/courses";
import { getCategories, getCourseLevels, searchCourses } from "@/services/courses";
import { getCreatorBySlug, getCreatorSlugs } from "@/services/creators";

export async function generateStaticParams() {
  const slugs = await getCreatorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  return creator ? { title: creator.name, description: creator.bio } : {};
}

export default async function CreatorPage({ params, searchParams }) {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  if (!creator) notFound();

  const { level = "", category = "", sort = "", page } = await searchParams;
  const filters = { level, category, sort };
  const basePath = creatorUrl(slug);

  const [result, levels, categories] = await Promise.all([
    searchCourses({ ...filters, creatorSlug: slug, page, pageSize: CREATOR_COURSES_PER_PAGE }),
    getCourseLevels(),
    getCategories(),
  ]);

  return (
    <>
      <section className="bg-grid">
        <Container className="pt-8 pb-16 md:pt-[52px] md:pb-[82px]">
          <CreatorHeader creator={creator} />
        </Container>
      </section>

      <Container className="pt-12 pb-16 md:pt-[62px]">
        <h2 className="sr-only">Courses by {creator.name}</h2>
        <CourseFilters levels={levels} categories={categories} showTopics={false} />

        <p aria-live="polite" className="sr-only">
          {result.total} courses found
        </p>

        <div className="mt-12 md:mt-10">
          {result.courses.length > 0 ? (
            <CourseGrid courses={result.courses} />
          ) : (
            <EmptyState
              title="No courses match these filters."
              message="Try removing a filter to see more."
              actionLabel="Show all courses"
              actionHref={basePath}
            />
          )}
        </div>

        <div className="mt-16 md:mt-24">
          <Pagination basePath={basePath} params={filters} page={result.page} totalPages={result.totalPages} />
        </div>
      </Container>
    </>
  );
}
