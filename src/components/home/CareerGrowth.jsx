import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/course/CourseCard";
import ProgressCard from "@/components/home/ProgressCard";
import { getFeaturedCourses } from "@/services/courses";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default async function CareerGrowth() {
  const [course] = await getFeaturedCourses({ limit: 1 });

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[574px_1fr] lg:gap-16">
      <div>
        <SectionHeading
          align="left"
          title="Your Path to Professional Growth Starts Here!"
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          className="[&>p]:max-w-[477px]"
        />
        <dl className="mt-10 flex gap-10 sm:gap-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-body-l text-shuttle-700">{stat.label}</dt>
              <dd className="font-heading text-h3 font-semibold text-primary">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto aspect-[621/552] w-full max-w-[621px]">
        <CourseCard
          course={course}
          className="absolute top-0 left-0 w-[373px] origin-top-left max-sm:scale-[0.55]"
        />
        <Image
          src="/images/home/hero-student.webp"
          alt="Student learning on a laptop"
          width={516}
          height={483}
          sizes="(min-width: 640px) 522px, 84vw"
          className="absolute top-[8.9%] left-[9.5%] h-auto w-[84%] drop-shadow-[30px_40px_40px_rgba(0,0,0,0.18)]"
        />
        <ProgressCard value={55} className="absolute top-[38.6%] left-[55.6%] origin-top-left max-sm:scale-[0.6]" />
        <Image
          src="/shapes/coil-lime.webp"
          alt=""
          aria-hidden="true"
          width={660}
          height={660}
          className="pointer-events-none absolute top-[12.1%] left-[65.4%] h-auto w-[34.6%]"
        />
      </div>
    </div>
  );
}
