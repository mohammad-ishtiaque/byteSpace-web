import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ROUTES } from "@/lib/constants";
import { getCategories } from "@/services/courses";

export default async function LearningPaths() {
  const categories = await getCategories();

  return (
    <section aria-labelledby="paths-title" className="pb-16 md:pb-[120px]">
      <Container>
        <SectionHeading
          id="paths-title"
          size="md"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="mx-auto max-w-[917px]"
        />

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`${ROUTES.courses}?category=${category.slug}`}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span className="flex rounded-full bg-accent p-3">
                  <Image src={category.icon} alt="" width={36} height={36} />
                </span>
                <span className="text-label-l font-medium sm:text-label-xl">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
