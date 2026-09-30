import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import CourseShowcase from "@/components/course/CourseShowcase";
import { getCourseBySlug } from "@/services/courses";

export default async function AuthShell({ title, description, children }) {
  const [backCourse, frontCourse] = await Promise.all([
    getCourseBySlug("build-digital-asset"),
    getCourseBySlug("the-power-of-big-data"),
  ]);

  return (
    <Container className="grid gap-10 py-10 lg:grid-cols-[496px_576px] lg:justify-between lg:py-[41px]">
      <div>
        <div className="lg:h-[270px]">
          <Logo iconOnly />
          <p className="mt-10 font-heading text-title font-semibold text-white lg:mt-[57px]">{title}</p>
          <p className="mt-4 max-w-[480px] text-body-m text-shuttle-100 sm:text-body-l">{description}</p>
        </div>
        <CourseShowcase backCourse={backCourse} frontCourse={frontCourse} className="hidden lg:block" />
      </div>

      <div className="lg:pt-[86px]">{children}</div>
    </Container>
  );
}
