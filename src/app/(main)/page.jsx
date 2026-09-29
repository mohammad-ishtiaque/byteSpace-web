import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import PopularCourses from "@/components/home/PopularCourses";
import LearningPaths from "@/components/home/LearningPaths";
import Features from "@/components/home/Features";
import CreatorCTA from "@/components/home/CreatorCTA";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <PopularCourses />
      <LearningPaths />
      <Features />
      <CreatorCTA />
      <Testimonials />
    </>
  );
}
