import { categories, courseTopics, courses } from "@/mocks/courses";
import { FEATURED_TOPIC, matchesTopic } from "@/lib/courses";

export async function getCourses({ topic, limit } = {}) {
  const result = courses.filter((course) => matchesTopic(course, topic));
  return limit ? result.slice(0, limit) : result;
}

export async function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug) ?? null;
}

export async function getFeaturedCourses({ limit } = {}) {
  return getCourses({ topic: FEATURED_TOPIC, limit });
}

export async function getCourseTopics() {
  return courseTopics;
}

export async function getCategories() {
  return categories;
}
