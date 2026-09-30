import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CheckList from "@/components/course/CheckList";
import { ROUTES, courseUrl } from "@/lib/constants";

export default function CourseSidebar({ course, creator, creatorHref }) {
  const moreVideos = course.totalLessons - course.previewLessons.length;

  return (
    <aside className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-10">
      <h2 className="font-heading text-title font-semibold">
        {course.totalLessons} Lessons ({course.totalHours} hours)
      </h2>
      <ol className="mt-6 flex flex-col gap-3">
        {course.previewLessons.map((lesson) => (
          <li key={lesson.number} className="flex items-start justify-between gap-4 text-body-m">
            <span className="flex gap-2">
              <span className="font-medium text-primary">{lesson.number}</span>
              <span className="text-shuttle-950">{lesson.title}</span>
            </span>
            <span className="shrink-0 text-shuttle-400">{lesson.duration}</span>
          </li>
        ))}
      </ol>
      <Link
        href={courseUrl(course.slug, "lessons")}
        className="mt-3 inline-block text-body-m font-medium text-primary underline-offset-2 hover:underline"
      >
        {moreVideos} more videos
      </Link>

      <div className="mt-6">
        <p className="font-heading text-title font-semibold">{course.ctaText}</p>
        <p className="mt-6 flex items-end">
          <span className="font-heading text-[2rem] leading-[1.2] font-semibold text-primary">${course.price}</span>
          <span className="text-body-m text-muted">/lifetime</span>
        </p>
        <Button href={ROUTES.signup} className="mt-6 w-full">
          Enroll Now
        </Button>
      </div>

      <h2 className="mt-6 font-heading text-title font-semibold">This course include</h2>
      <CheckList items={course.includes} className="mt-6" />

      {creator && (
        <div className="mt-6 border-t border-shuttle-200 pt-6">
          <div className="flex items-center gap-3">
            <Image src={creator.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
            <div>
              <p className="text-label-m font-medium">{creator.name}</p>
              <p className="text-body-m text-shuttle-400">{creator.role}</p>
            </div>
          </div>
          <p className="mt-6 text-body-m text-shuttle-700">{course.ctaText}</p>
          <Link
            href={creatorHref}
            className="mt-6 inline-flex h-[35px] items-center rounded-3xl border border-shuttle-200 px-4 text-label-s font-medium transition-colors hover:border-primary hover:text-primary"
          >
            See Full Profile
          </Link>
        </div>
      )}
    </aside>
  );
}
