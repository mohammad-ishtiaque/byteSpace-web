"use client";

import { useState } from "react";
import CourseGrid from "@/components/course/CourseGrid";
import TopicFilter from "@/components/course/TopicFilter";
import EmptyState from "@/components/ui/EmptyState";
import { ROUTES } from "@/lib/constants";
import { matchesTopic } from "@/lib/courses";

export default function CourseExplorer({ courses, topics, limit = 6 }) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const visibleCourses = courses.filter((course) => matchesTopic(course, selectedTopic)).slice(0, limit);

  return (
    <>
      <div className="mx-auto mt-10 max-w-[1086px]">
        <TopicFilter topics={topics} selected={selectedTopic} onSelect={setSelectedTopic} />
      </div>

      <div aria-live="polite" className="mt-12 md:mt-20">
        {visibleCourses.length > 0 ? (
          <CourseGrid courses={visibleCourses} />
        ) : (
          <EmptyState
            title={`No ${selectedTopic} courses yet.`}
            message="New courses are added every week."
            actionLabel="Browse all courses"
            actionHref={ROUTES.courses}
          />
        )}
      </div>
    </>
  );
}
