import Container from "@/components/ui/Container";

export default function CreatorListSkeleton({ cards = 6 }) {
  return (
    <div role="status" aria-label="Loading creators">
      <div className="bg-grid h-[240px]" />
      <Container className="pt-12 pb-16 md:pt-[72px]">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {Array.from({ length: cards }, (_, index) => (
            <li key={index}>
              <div aria-hidden="true" className="animate-pulse rounded-3xl border border-shuttle-200 bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-shuttle-100" />
                  <div className="flex-1">
                    <div className="h-6 w-3/4 rounded-lg bg-shuttle-100" />
                    <div className="mt-2 h-4 w-1/2 rounded-lg bg-shuttle-100" />
                  </div>
                </div>
                <div className="mt-4 h-4 w-full rounded-lg bg-shuttle-100" />
                <div className="mt-2 h-4 w-2/3 rounded-lg bg-shuttle-100" />
                <div className="mt-6 h-4 w-1/2 rounded-lg bg-shuttle-100" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
