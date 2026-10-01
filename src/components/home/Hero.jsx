import Container from "@/components/ui/Container";
import FloatingShapes from "@/components/ui/FloatingShapes";
import HeroSearch from "@/components/home/HeroSearch";
import HeroVisual from "@/components/home/HeroVisual";

const HERO_SHAPES = [
  { src: "/shapes/spring-lime.webp", size: 770, className: "top-[11%] left-[-8.2%] w-[26.7%]" },
  { src: "/shapes/cylinder-lime.webp", size: 740, className: "top-[11%] left-[85.5%] w-[25.7%]" },
  { src: "/shapes/spring-white-sm.webp", size: 350, className: "top-[39.5%] left-[12.7%] w-[12.2%] hidden lg:block" },
  { src: "/shapes/cone-white.webp", size: 376, className: "top-[38%] left-[76.8%] w-[13.1%] hidden lg:block" },
  { src: "/shapes/ring-white.webp", size: 684, className: "top-[62.2%] left-[1.25%] w-[23.75%]" },
  { src: "/shapes/spring-white.webp", size: 660, className: "top-[61%] left-[78.3%] w-[22.9%]" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-grid">
      <FloatingShapes shapes={HERO_SHAPES} eager />

      <Container className="relative flex flex-col items-center pt-8 text-center md:pt-12">
        <h1
          id="hero-title"
          className="max-w-[935px] font-heading text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[3.5rem] lg:text-display"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-6 max-w-[860px] text-body-m text-shuttle-100 sm:text-body-l md:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <div className="mt-10 flex w-full justify-center md:mt-[60px]">
          <HeroSearch />
        </div>
      </Container>

      <HeroVisual />
    </section>
  );
}
