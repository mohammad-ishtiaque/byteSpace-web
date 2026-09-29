import Image from "next/image";
import { ROUTES } from "@/lib/constants";

export default function HeroSearch() {
  return (
    <form action={ROUTES.courses} role="search" className="flex w-full max-w-[578px] flex-col gap-3 sm:flex-row sm:gap-4">
      <label htmlFor="hero-search" className="sr-only">
        Search courses
      </label>
      <div className="flex h-[52px] items-center sm:flex-1 gap-2 rounded-3xl bg-white px-6 focus-within:outline-2 focus-within:outline-accent">
        <Image src="/icons/search.svg" alt="" width={24} height={24} />
        <input
          id="hero-search"
          name="q"
          type="search"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-body-l text-shuttle-950 outline-none placeholder:text-shuttle-400"
        />
      </div>
      <button
        type="submit"
        className="h-[52px] rounded-3xl bg-accent px-6 text-label-l font-medium text-shuttle-950 transition-colors hover:bg-[#c2e80f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Search
      </button>
    </form>
  );
}
