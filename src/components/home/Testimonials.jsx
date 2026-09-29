import Container from "@/components/ui/Container";
import GlowBackground, { GLOW } from "@/components/ui/GlowBackground";
import TestimonialCard from "@/components/home/TestimonialCard";
import { getTestimonials } from "@/services/testimonials";

const TESTIMONIAL_GLOWS = [
  { left: "58.5%", top: "-30.7%", width: "79%", color: GLOW.limeStrong },
  { left: "27.4%", top: "-17.6%", width: "46.7%", color: GLOW.limeStrong },
  { left: "-30.7%", top: "19%", width: "79%", color: GLOW.blueStrong },
];

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section aria-labelledby="testimonials-title" className="relative isolate overflow-hidden bg-[#fafafa] py-16 md:pt-[74px] md:pb-[57px]">
      <GlowBackground glows={TESTIMONIAL_GLOWS} />

      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-[43px]">
          <h2
            id="testimonials-title"
            className="max-w-[577px] self-end font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-h2"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-shuttle-700 sm:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="mt-12 grid items-start gap-6 md:grid-cols-3 md:gap-10 lg:mt-[72px]">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
