import Image from "next/image";
import Link from "next/link";
import { creatorUrl } from "@/lib/constants";

export default function CreatorCard({ creator }) {
  return (
    <article className="relative flex h-full flex-col rounded-3xl border border-shuttle-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-4">
        <Image src={creator.avatar} alt="" width={64} height={64} className="size-16 rounded-full object-cover" />
        <div className="min-w-0">
          <h2 className="truncate font-heading text-title font-semibold">
            <Link href={creatorUrl(creator.slug)} className="after:absolute after:inset-0 after:rounded-3xl">
              {creator.name}
            </Link>
          </h2>
          <p className="text-body-m text-shuttle-400">{creator.role}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-body-m text-shuttle-700">{creator.headline}</p>
      <p className="mt-6 flex gap-4 text-label-m">
        <span>
          <span className="font-bold">{creator.courseCount}</span> {creator.courseCount === 1 ? "Course" : "Courses"}
        </span>
        <span>
          <span className="font-bold">{creator.followers.toLocaleString("en-US")}</span> Followers
        </span>
      </p>
    </article>
  );
}
