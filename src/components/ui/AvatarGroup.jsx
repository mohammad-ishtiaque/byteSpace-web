import Image from "next/image";
import { cn } from "@/lib/utils";


export default function AvatarGroup({ avatars, extraLabel, size = 32, overlap = 8, className }) {
  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full"
          style={{ marginLeft: index === 0 ? 0 : -overlap }}
        />
      ))}
      {extraLabel && (
        <span
          className="flex shrink-0 items-center justify-center rounded-full bg-accent text-label-xs font-bold text-shuttle-950"
          style={{ width: size, height: size, marginLeft: -overlap }}
        >
          {extraLabel}
        </span>
      )}
    </div>
  );
}
