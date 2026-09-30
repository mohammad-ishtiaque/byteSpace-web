"use client";

import { useState } from "react";
import ReviewCard from "@/components/course/ReviewCard";
import EmptyState from "@/components/ui/EmptyState";
import Icon from "@/components/ui/Icon";
import { pillClasses } from "@/lib/styles";

const FILTERS = [0, 5, 4, 3, 2, 1];

export default function ReviewList({ reviews }) {
  const [rating, setRating] = useState(0);
  const visibleReviews = rating ? reviews.filter((review) => review.rating === rating) : reviews;

  return (
    <>
      <ul className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
        {FILTERS.map((value) => {
          const isActive = value === rating;
          return (
            <li key={value} className="relative shrink-0">
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setRating(value)}
                className={pillClasses(isActive, "flex h-12 items-center gap-1")}
              >
                {value ? (
                  <>
                    <Icon name="star" />
                    {value}
                    <span className="sr-only"> stars</span>
                  </>
                ) : (
                  "All rating"
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="flex flex-col gap-6">
        {visibleReviews.length > 0 ? (
          visibleReviews.map((review) => <ReviewCard key={review.id} review={review} />)
        ) : (
          <EmptyState title={`No ${rating}-star reviews yet.`} message="Try another rating." />
        )}
      </div>
    </>
  );
}
