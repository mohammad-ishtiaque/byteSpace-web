"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/course/CourseCard";
import TopicFilter from "@/components/course/TopicFilter";
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
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {visibleCourses.map((course) => (
              <li key={course.id} className="min-w-0">
                <CourseCard course={course} className="h-full" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-3xl bg-shuttle-50 px-6 py-16 text-center">
            <p className="text-label-l font-medium">No {selectedTopic} courses yet.</p>
            <p className="mt-2 text-body-m text-shuttle-700">
              New courses are added every week.{" "}
              <Link href={ROUTES.courses} className="font-medium text-primary underline-offset-2 hover:underline">
                Browse all courses
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
