import Image from "next/image";
import CreatorStats from "@/components/creator/CreatorStats";

export default function CreatorHeader({ creator, courseCount }) {
  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={creator.avatar}
          alt={creator.name}
          width={96}
          height={96}
          loading="eager"
          className="size-24 rounded-full object-cover"
        />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-heading text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-h3">
              {creator.name}
            </h1>
            <span className="rounded-3xl bg-accent px-6 py-2 text-label-m font-medium text-shuttle-950">Creator</span>
          </div>
          <p className="mt-2 text-body-l text-shuttle-100">{creator.headline}</p>
        </div>
      </div>
      <p className="mt-6 max-w-[902px] text-body-l text-shuttle-100">{creator.bio}</p>
      <div className="mt-10">
        <CreatorStats products={courseCount} followers={creator.followers} name={creator.name} />
      </div>
    </div>
  );
}
