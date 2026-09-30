import Image from "next/image";
import Stars from "@/components/ui/Stars";

export default function ReviewCard({ review }) {
  return (
    <article className="rounded-3xl border border-shuttle-200 p-6 sm:p-10">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src={review.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
          <div>
            <h3 className="text-label-m font-medium">{review.name}</h3>
            <p className="text-body-m text-shuttle-400">{review.role}</p>
          </div>
        </div>
        <p className="shrink-0 text-body-m text-shuttle-400">{review.date}</p>
      </header>
      <Stars rating={review.rating} className="mt-6" />
      <p className="mt-6 text-body-m text-shuttle-700">&ldquo;{review.text}&rdquo;</p>
    </article>
  );
}
