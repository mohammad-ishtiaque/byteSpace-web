import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";
import SearchForm from "@/components/ui/SearchForm";
import CreatorCard from "@/components/creator/CreatorCard";
import { ROUTES } from "@/lib/constants";
import { getCreators } from "@/services/creators";

export const metadata = {
  title: "Creators",
  description: "Meet the creators who teach on ByteSpace.",
};

export default async function CreatorsPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const creators = await getCreators({ q });

  return (
    <>
      <section aria-labelledby="creators-title" className="bg-grid pt-8 pb-16 md:pt-11 md:pb-[69px]">
        <Container className="flex flex-col items-center text-center">
          <h1
            id="creators-title"
            className="font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-h3"
          >
            Meet Our Creators
          </h1>
          <SearchForm
            id="creator-search"
            action={ROUTES.creators}
            label="Search creators"
            defaultValue={q}
            placeholder="Search creators"
            className="mt-8 max-w-[624px]"
          >
            <button
              type="submit"
              className="h-[52px] rounded-3xl bg-accent px-6 text-label-l font-medium text-shuttle-950 transition-colors hover:bg-[#c2e80f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Search
            </button>
          </SearchForm>
        </Container>
      </section>

      <Container className="pt-12 pb-16 md:pt-[72px] md:pb-[120px]">
        <p aria-live="polite" className="sr-only">
          {creators.length} creators found
        </p>
        {creators.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {creators.map((creator) => (
              <li key={creator.slug} className="min-w-0">
                <CreatorCard creator={creator} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No creators found."
            message="Try another name."
            actionLabel="Show all creators"
            actionHref={ROUTES.creators}
          />
        )}
      </Container>
    </>
  );
}
