import { creators } from "@/mocks/creators";

export async function getCreatorBySlug(slug) {
  return creators.find((creator) => creator.slug === slug) ?? null;
}

export async function getCreatorByCourseName(name) {
  return creators.find((creator) => creator.courseCreatorName === name) ?? null;
}

export async function getCreatorSlugs() {
  return creators.map((creator) => creator.slug);
}
