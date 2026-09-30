import Image from "next/image";
import Link from "next/link";
import AvatarGroup from "@/components/ui/AvatarGroup";
import StarIcon from "@/components/ui/StarIcon";
import { ROUTES, creatorUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function CourseCard({ course, variant = "default", className }) {
  const { slug, title, image, creator, lessons, duration, comments, rating, level, learners, extraLearners, price } = course;
  const isShowcase = variant === "showcase";

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl border border-shuttle-200 bg-white p-[15px] transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute bottom-3 left-3 flex flex-wrap gap-2 sm:gap-3">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map((item) => (
            <li
              key={item}
              className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-label-xs font-medium text-muted backdrop-blur-[4px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-title font-semibold text-black">
            <Link href={`${ROUTES.courses}/${slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
              {title}
            </Link>
          </h3>
          <p className="text-body-xs text-muted">
            by{" "}
            <Link
              href={creatorUrl(course.creatorSlug)}
              className="relative z-10 text-primary underline-offset-2 hover:underline"
            >
              {creator}
            </Link>
          </p>
        </div>
        <p className="flex shrink-0 items-center text-body-l text-muted">
          {rating}
          {isShowcase ? (
            <StarIcon className="ml-1 size-5 text-accent" />
          ) : (
            <Image src="/icons/star-outline.svg" alt="" width={24} height={24} />
          )}
          <span className="sr-only">out of 5</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5 text-label-xs font-medium text-shuttle-700">
          <Image src="/icons/signal.svg" alt="" width={20} height={20} />
          {level}
        </span>
        <AvatarGroup
          avatars={learners}
          extraLabel={`${extraLearners}+`}
          size={32}
          overlap={8}
          extraClassName={isShowcase ? "bg-shuttle-950 text-white" : undefined}
        />
      </div>

      <p className="mt-4 flex items-end">
        <span className="font-heading text-title font-semibold text-primary">${price}</span>
        <span className="text-body-xs text-muted">/lifetime</span>
      </p>
    </article>
  );
}
