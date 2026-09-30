import Stars from "@/components/ui/Stars";

export default function RatingSummary({ average, breakdown }) {
  const rows = [5, 4, 3, 2, 1].map((stars) => ({ stars, count: breakdown[stars] ?? 0 }));
  const highest = Math.max(...rows.map((row) => row.count));

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-shuttle-200 p-6 sm:flex-row sm:items-center sm:p-10">
      <div className="flex h-[140px] w-full shrink-0 flex-col items-center justify-center rounded-2xl bg-accent sm:w-[129px]">
        <p className="text-label-s">Ratings</p>
        <p className="font-heading text-h3 font-semibold">{average}</p>
      </div>
      <ul className="flex flex-1 flex-col gap-1">
        {rows.map(({ stars, count }) => (
          <li key={stars} className="flex items-center gap-4">
            <span className="h-2 flex-1 rounded-3xl bg-shuttle-50">
              <span
                className="block h-full rounded-3xl bg-accent"
                style={{ width: `${(count / highest) * 100}%` }}
              />
            </span>
            <Stars rating={stars} className="[&_svg]:size-5 sm:[&_svg]:size-6" />
            <span className="w-10 text-right text-body-m text-shuttle-700">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
