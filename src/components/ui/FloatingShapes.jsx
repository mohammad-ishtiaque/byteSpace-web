import Image from "next/image";
import { floatStyle } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function FloatingShapes({ shapes, eager = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 animate-fade-in overflow-hidden">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {shapes.map((shape, index) => (
          <Image
            key={shape.src + shape.className}
            src={shape.src}
            alt=""
            width={shape.size}
            height={shape.size}
            loading={eager ? "eager" : "lazy"}
            style={floatStyle(index)}
            className={cn("absolute h-auto animate-float", shape.className)}
          />
        ))}
      </div>
    </div>
  );
}
