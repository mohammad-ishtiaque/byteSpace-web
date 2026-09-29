import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { ROUTES } from "@/lib/constants";

const CTA_SHAPES = [
  { src: "/shapes/spring-lime.webp", size: 770, className: "top-[-33.2%] left-[-8.2%] w-[26.7%]" },
  { src: "/shapes/spring-white-sm.webp", size: 350, className: "top-[1%] left-[12.4%] w-[12.2%] hidden lg:block" },
  { src: "/shapes/cone-white.webp", size: 376, className: "top-[46.1%] left-[-3.3%] w-[13.1%] hidden md:block" },
  { src: "/shapes/ring-lime.webp", size: 684, className: "top-[61.3%] left-[1.4%] w-[23.75%]" },
  { src: "/shapes/cone-lime.webp", size: 376, className: "top-0 left-[75%] w-[13.1%] hidden md:block" },
  { src: "/shapes/cylinder-white.webp", size: 740, className: "top-[1.2%] left-[85.1%] w-[25.7%]" },
  { src: "/shapes/coil-lime.webp", size: 660, className: "top-[59.2%] left-[77.1%] w-[22.9%]" },
];

export default function CreatorCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-grid py-16 md:py-[85px]">
      <FloatingShapes shapes={CTA_SHAPES} />

      <Container className="relative flex flex-col items-center text-center">
        <h2
          id="cta-title"
          className="max-w-[710px] font-heading text-[2rem] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-h2"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-[964px] text-body-m text-shuttle-100 sm:text-body-l md:mt-10">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href={ROUTES.signup} className="mt-10">
          Join as Creator
        </Button>
      </Container>
    </section>
  );
}
