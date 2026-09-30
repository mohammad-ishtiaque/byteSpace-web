export default function CourseCardSkeleton() {
  return (
    <div aria-hidden="true" className="animate-pulse rounded-3xl border border-shuttle-200 bg-white p-[15px]">
      <div className="aspect-[341/195] rounded-xl bg-shuttle-100" />
      <div className="mt-5 h-6 w-3/4 rounded-lg bg-shuttle-100" />
      <div className="mt-2 h-3 w-1/3 rounded-lg bg-shuttle-100" />
      <div className="mt-4 flex gap-3">
        <div className="h-8 w-24 rounded-3xl bg-shuttle-100" />
        <div className="h-8 w-32 rounded-3xl bg-shuttle-100" />
      </div>
      <div className="mt-4 h-6 w-20 rounded-lg bg-shuttle-100" />
    </div>
  );
}
