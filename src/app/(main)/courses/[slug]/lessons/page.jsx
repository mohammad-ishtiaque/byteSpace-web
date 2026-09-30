import DetailSection from "@/components/course/DetailSection";
import Icon from "@/components/ui/Icon";
import ProgressCard from "@/components/ui/ProgressCard";
import { getCourseDetails } from "@/services/courses";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);
  return course ? { title: { absolute: `Lessons - ${course.title} | ByteSpace` } } : {};
}

export default async function CourseLessonsPage({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);

  return (
    <div className="flex flex-col gap-6">
      <DetailSection title="Explore the Modules">
        <p className="text-body-m text-shuttle-700">{course.modulesIntro}</p>
      </DetailSection>

      <DetailSection title="Lesson List">
        <ol className="flex flex-col gap-6">
          {course.modules.map((module) => (
            <li key={module.title} className="flex items-start gap-3">
              <span className="flex size-[72px] shrink-0 items-center justify-center rounded-2xl bg-accent">
                <Icon name="lessonVideo" className="size-10 text-primary" />
              </span>
              <div>
                <h3 className="text-label-m font-medium">{module.title}</h3>
                <p className="mt-3 text-body-m text-shuttle-700">{module.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </DetailSection>

      <DetailSection title="Lesson Content">
        <p className="text-body-m text-shuttle-700">{course.lessonContent}</p>
      </DetailSection>

      <DetailSection title="Lesson Progress Tracking">
        <p className="text-body-m text-shuttle-700">{course.progressText}</p>
        <ProgressCard value={course.progress} size="wide" />
      </DetailSection>
    </div>
  );
}
