import { categories, courseLevels, courseTopics, courses } from "@/mocks/courses";
import { COURSES_PER_PAGE, FEATURED_TOPIC, matchesTopic } from "@/lib/courses";

const sorters = {
  rating: (a, b) => b.rating - a.rating,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

function matchesQuery(course, query) {
  if (!query) return true;
  const text = [course.title, course.creator, ...course.topics].join(" ").toLowerCase();
  return text.includes(query.trim().toLowerCase());
}

export async function getCourses({ topic, limit } = {}) {
  const result = courses.filter((course) => matchesTopic(course, topic));
  return limit ? result.slice(0, limit) : result;
}

export async function searchCourses({ q, topic, level, category, sort, page = 1 } = {}) {
  const filtered = courses.filter(
    (course) =>
      matchesQuery(course, q) &&
      matchesTopic(course, topic) &&
      (!level || course.level === level) &&
      (!category || course.category === category),
  );
  const sorted = sorters[sort] ? [...filtered].sort(sorters[sort]) : filtered;
  const totalPages = Math.max(1, Math.ceil(sorted.length / COURSES_PER_PAGE));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (currentPage - 1) * COURSES_PER_PAGE;

  return {
    courses: sorted.slice(start, start + COURSES_PER_PAGE),
    total: sorted.length,
    page: currentPage,
    totalPages,
  };
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

export async function getCourseLevels() {
  return courseLevels;
}

export async function getCategories() {
  return categories;
}
