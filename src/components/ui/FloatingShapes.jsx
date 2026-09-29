import Image from "next/image";
import { cn } from "@/lib/utils";

 
export default function FloatingShapes({ shapes }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {shapes.map((shape) => (
          <Image
            key={shape.src + shape.className}
            src={shape.src}
            alt=""
            width={shape.size}
            height={shape.size}
            className={cn("absolute h-auto", shape.className)}
          />
        ))}
      </div>
    </div>
  );
}
