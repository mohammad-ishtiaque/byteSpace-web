import Image from "next/image";
import CheckList from "@/components/course/CheckList";
import DetailSection from "@/components/course/DetailSection";
import { getCourseDetails } from "@/services/courses";

export default async function CourseAboutPage({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);

  return (
    <div className="flex flex-col gap-6">
      <DetailSection title="Description">
        <div className="flex flex-col gap-4 text-body-m text-shuttle-700">
          {course.description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Sneak Peak">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[19px]">
          {course.sneakPeek.map((image, index) => (
            <li key={image} className="relative aspect-[167/125] overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={`${course.title} preview ${index + 1}`}
                fill
                sizes="(min-width: 640px) 167px, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection title="Key Points">
        <CheckList items={course.keyPoints} />
      </DetailSection>
    </div>
  );
}
