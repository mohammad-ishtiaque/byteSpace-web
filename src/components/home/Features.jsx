import Container from "@/components/ui/Container";
import GlowBackground, { GLOW } from "@/components/ui/GlowBackground";
import CareerGrowth from "@/components/home/CareerGrowth";
import CreatorTools from "@/components/home/CreatorTools";
const FEATURE_GLOWS = [
  { left: "-10.6%", top: "-31.9%", width: "79%", color: GLOW.lime },
  { left: "56.3%", top: "-31.4%", width: "79%", color: GLOW.blue },
  { left: "-35.3%", top: "12.6%", width: "79%", color: GLOW.blue },
  { left: "50.1%", top: "54%", width: "79%", color: GLOW.blue },
  { left: "-19.9%", top: "64.8%", width: "46.7%", color: GLOW.lime },
];

export default function Features() {
  return (
    <section aria-label="Why ByteSpace" className="relative isolate overflow-hidden py-16 md:py-[120px]">
      <GlowBackground glows={FEATURE_GLOWS} />

      <Container className="flex flex-col gap-20 md:gap-[72px]">
        <CareerGrowth />
        <CreatorTools />
      </Container>
    </section>
  );
}
