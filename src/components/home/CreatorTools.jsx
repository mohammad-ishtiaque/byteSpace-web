import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import HappyStudentsCard from "@/components/ui/HappyStudentsCard";
import RevenueCard from "@/components/home/RevenueCard";

const BENEFITS = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-primary">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
      />
    </svg>
  );
}

export default function CreatorTools() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[541px_1fr] lg:gap-[79px]">
      <div className="relative order-2 mx-auto aspect-[541/596] w-full max-w-[541px] lg:order-1">
        <RevenueCard
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          change="+12$"
          progress={56}
          className="absolute top-[7.4%] left-0 w-[232px] origin-top-left max-sm:scale-[0.6]"
        />
        <RevenueCard
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          change="+12$"
          className="absolute top-[32.6%] left-0 w-[134px] origin-top-left max-sm:scale-[0.6]"
        />
        <Image
          src="/images/home/creator-woman.webp"
          alt="Course creator wearing a headset and holding a tablet"
          width={579}
          height={719}
          sizes="(min-width: 640px) 579px, 107vw"
          className="absolute top-[-0.5%] left-[1.4%] h-auto w-[107%] max-w-none"
        />
        <HappyStudentsCard className="absolute top-[69.3%] left-[52.3%] origin-top-left max-sm:scale-[0.6]" />
        <Image
          src="/shapes/spring-lime.webp"
          alt=""
          aria-hidden="true"
          width={770}
          height={770}
          className="pointer-events-none absolute top-[19.1%] left-[56.4%] h-auto w-[39.7%]"
        />
      </div>

      <div className="order-1 lg:order-2">
        <SectionHeading
          align="left"
          title="Create & Manage Courses Easily."
          description={
            <>
              <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </>
          }
          className="[&>h2]:max-w-[391px]"
        />
        <ul className="mt-10 flex flex-col gap-4">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-label-l font-medium">
              <CheckIcon />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
