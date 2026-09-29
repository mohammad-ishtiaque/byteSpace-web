import Image from "next/image";
import TopicCard from "@/components/home/TopicCard";
import ProgressCard from "@/components/home/ProgressCard";
import HappyStudentsCard from "@/components/home/HappyStudentsCard";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto mt-10 aspect-[25/16] w-full max-w-[800px] md:mt-0">
      <Image
        src="/shapes/hero-ring.svg"
        alt=""
        aria-hidden="true"
        width={1149}
        height={1149}
        className="absolute top-[13.67%] left-1/2 w-[143.6%] max-w-none -translate-x-1/2"
      />

      <Image
        src="/images/home/hero-student.webp"
        alt="Smiling student wearing headphones and holding a laptop"
        width={516}
        height={483}
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 800px) 578px, 72vw"
        className="absolute top-0 left-[13.875%] h-auto w-[72.25%] drop-shadow-[25px_37px_36px_rgba(0,0,0,0.1)]"
      />

      <TopicCard
        title="UI/UX Design"
        courses="200 Courses"
        students="1000+ Students"
        className="absolute top-[24.8%] left-[10.5%] origin-top-left max-sm:scale-[0.6]"
      />
      <ProgressCard value={55} className="absolute top-[27.15%] left-[57%] origin-top-left max-sm:scale-[0.6] sm:left-[65.25%]" />
      <HappyStudentsCard className="absolute top-[63.48%] left-[1%] origin-top-left max-sm:scale-[0.6]" />
    </div>
  );
}
