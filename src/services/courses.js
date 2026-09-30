import { categories, courseLevels, courseTopics, courses as rawCourses } from "@/mocks/courses";
import { courseDetails } from "@/mocks/courseDetails";
import { creators } from "@/mocks/creators";
import { COURSES_PER_PAGE, FEATURED_TOPIC, matchesTopic } from "@/lib/courses";

const creatorNames = Object.fromEntries(creators.map((creator) => [creator.slug, creator.name]));
const courses = rawCourses.map((course) => ({ ...course, creator: creatorNames[course.creatorSlug] }));

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

export async function searchCourses({
  q,
  topic,
  level,
  category,
  creatorSlug,
  sort,
  page = 1,
  pageSize = COURSES_PER_PAGE,
} = {}) {
  const filtered = courses.filter(
    (course) =>
      (!creatorSlug || course.creatorSlug === creatorSlug) &&
      matchesQuery(course, q) &&
      matchesTopic(course, topic) &&
      (!level || course.level === level) &&
      (!category || course.category === category),
  );
  const sorted = sorters[sort] ? [...filtered].sort(sorters[sort]) : filtered;
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    courses: sorted.slice(start, start + pageSize),
    total: sorted.length,
    page: currentPage,
    totalPages,
  };
}

export async function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug) ?? null;
}

export async function getCourseSlugs() {
  return courses.map((course) => course.slug);
}

export async function getCourseDetails(slug) {
  const course = await getCourseBySlug(slug);
  if (!course) return null;

  const ratings = Object.entries(courseDetails.ratingBreakdown);
  const reviewCount = ratings.reduce((sum, [, count]) => sum + count, 0);
  const ratingTotal = ratings.reduce((sum, [stars, count]) => sum + Number(stars) * count, 0);

  return {
    ...course,
    ...courseDetails,
    averageRating: (ratingTotal / reviewCount).toFixed(1),
    reviewCount,
  };
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
