import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ShareButton from "@/components/course/ShareButton";

function MetaPill({ icon, children }) {
  return (
    <li className="flex h-10 items-center gap-2 rounded-3xl bg-white px-6 text-label-m font-medium text-shuttle-950">
      <Icon name={icon} className="text-primary" />
      {children}
    </li>
  );
}

export default function CourseHero({ course, creatorHref }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-[769px]">
        <h1 className="font-heading text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-h3">
          {course.title}
        </h1>
        <p className="mt-2 text-body-l text-shuttle-100">{course.subtitle}</p>
        <p className="mt-6 text-body-m text-shuttle-100">
          by{" "}
          {creatorHref ? (
            <Link href={creatorHref} className="font-medium text-accent underline-offset-2 hover:underline">
              {course.creator}
            </Link>
          ) : (
            course.creator
          )}
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          <MetaPill icon="level">{course.level}</MetaPill>
          <MetaPill icon="star">
            {course.averageRating} ({course.reviewCount} reviews)
          </MetaPill>
          <MetaPill icon="students">{course.students} Students</MetaPill>
        </ul>
      </div>
      <ShareButton title={course.title} />
    </div>
  );
}
