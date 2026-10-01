import CreatorCard from "@/components/creator/CreatorCard";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function CreatorGrid({ creators, className }) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10", className)}>
      {creators.map((creator, index) => (
        <Reveal as="li" key={creator.slug} delay={(index % 3) * 100} className="min-w-0">
          <CreatorCard creator={creator} />
        </Reveal>
      ))}
    </ul>
  );
}
