import DetailSection from "@/components/course/DetailSection";
import RatingSummary from "@/components/course/RatingSummary";
import ReviewList from "@/components/course/ReviewList";
import { getCourseDetails } from "@/services/courses";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);
  return course ? { title: { absolute: `Reviews - ${course.title} | ByteSpace` } } : {};
}

export default async function CourseReviewsPage({ params }) {
  const { slug } = await params;
  const course = await getCourseDetails(slug);

  return (
    <div className="flex flex-col gap-6">
      <DetailSection title="What Learners Are Saying">
        <p className="text-body-m text-shuttle-700">{course.reviewsIntro}</p>
        <RatingSummary average={course.averageRating} breakdown={course.ratingBreakdown} />
      </DetailSection>

      <DetailSection title="Individual Reviews:">
        <ReviewList reviews={course.reviews} />
      </DetailSection>
    </div>
  );
}
