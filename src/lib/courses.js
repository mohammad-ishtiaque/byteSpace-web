export const FEATURED_TOPIC = "Featured";
export function matchesTopic(course, topic) {
  if (!topic) return true;
  if (topic === FEATURED_TOPIC) return course.featured;
  return course.topics.includes(topic);
}
