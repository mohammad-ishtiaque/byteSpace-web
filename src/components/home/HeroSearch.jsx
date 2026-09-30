import SearchForm from "@/components/ui/SearchForm";

export default function HeroSearch() {
  return (
    <SearchForm id="hero-search" placeholder="Course, topic, creator" className="max-w-[578px]">
      <button
        type="submit"
        className="h-[52px] rounded-3xl bg-accent px-6 text-label-l font-medium text-shuttle-950 transition-colors hover:bg-[#c2e80f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Search
      </button>
    </SearchForm>
  );
}
