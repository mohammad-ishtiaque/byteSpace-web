export const FEATURED_TOPIC = "Featured";

export const COURSES_PER_PAGE = 9;

export const SORT_OPTIONS = [
  { value: "", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function matchesTopic(course, topic) {
  if (!topic) return true;
  if (topic === FEATURED_TOPIC) return course.featured;
  return course.topics.includes(topic);
}
