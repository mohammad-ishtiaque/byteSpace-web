import Image from "next/image";
import Icon from "@/components/ui/Icon";
import NoticeButton from "@/components/ui/NoticeButton";

export default function VideoPreview({ image, title }) {
  return (
    <div className="relative aspect-[720/479] overflow-hidden rounded-3xl bg-shuttle-950">
      <Image
        src={image}
        alt={`Preview of ${title}`}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 1024px) 720px, 100vw"
        className="object-cover"
      />
      <NoticeButton
        notice="The preview video is coming soon."
        aria-label={`Play preview of ${title}`}
        className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <Icon name="play" className="size-10" />
      </NoticeButton>
    </div>
  );
}
