import Image from "next/image";
import Container from "@/components/ui/Container";

const PARTNER_LOGOS = [
  { src: "/logos/partner-1.svg", width: 167, height: 41 },
  { src: "/logos/partner-2.svg", width: 168, height: 41 },
  { src: "/logos/partner-3.svg", width: 170, height: 41 },
  { src: "/logos/partner-4.svg", width: 170, height: 41 },
  { src: "/logos/partner-5.svg", width: 169, height: 42 },
];

export default function LogoStrip() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-50 py-12 md:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-12 gap-y-8 lg:gap-x-[72px]">
          {PARTNER_LOGOS.map((logo, index) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={`Partner ${index + 1}`}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto md:h-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
