import { courses } from "@/mocks/courses";
import { creators } from "@/mocks/creators";

function withCourseCount(creator) {
  const courseCount = courses.filter((course) => course.creatorSlug === creator.slug).length;
  return { ...creator, courseCount };
}

export async function getCreators({ q } = {}) {
  const query = q?.trim().toLowerCase();
  const matches = query
    ? creators.filter((creator) => `${creator.name} ${creator.headline}`.toLowerCase().includes(query))
    : creators;
  return matches.map(withCourseCount);
}

export async function getCreatorBySlug(slug) {
  const creator = creators.find((item) => item.slug === slug);
  return creator ? withCourseCount(creator) : null;
}

export async function getCreatorSlugs() {
  return creators.map((creator) => creator.slug);
}
