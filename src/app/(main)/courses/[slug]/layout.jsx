import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CourseHero from "@/components/course/CourseHero";
import CourseSidebar from "@/components/course/CourseSidebar";
import CourseTabs from "@/components/course/CourseTabs";
import VideoPreview from "@/components/course/VideoPreview";
import { creatorUrl } from "@/lib/constants";
import { getCourseDetails, getCourseSlugs } from "@/services/courses";
import { getCreatorBySlug } from "@/services/creators";
import ScrollToTop from "@/components/ui/ScrollToTop";

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);
  return course ? { title: course.title, description: course.subtitle } : {};
}

export default async function CourseLayout({ children, params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);
  if (!course) notFound();

  const creator = await getCreatorBySlug(course.creatorSlug);
  const creatorHref = creator ? creatorUrl(creator.slug) : null;

  return (
    <>
      <ScrollToTop trigger={slug} />
      <section className="bg-grid">
        <Container className="pt-8 pb-12 md:pt-[52px] lg:pb-[62px]">
          <CourseHero course={course} creatorHref={creatorHref} />
          <div className="mt-10 grid gap-8 lg:mt-[59px] lg:grid-cols-[720px_412px] lg:justify-between">
            <VideoPreview image={course.image} title={course.title} />
            <div className="relative z-10 lg:h-[479px]">
              <CourseSidebar course={course} creator={creator} creatorHref={creatorHref} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid pt-12 pb-16 lg:grid-cols-[720px_412px] lg:justify-between lg:pt-[62px] lg:pb-[120px]">
        <div className="min-w-0 lg:min-h-[520px]">
          <CourseTabs slug={slug} />
          <div className="mt-10">{children}</div>
        </div>
      </Container>
    </>
  );
}
