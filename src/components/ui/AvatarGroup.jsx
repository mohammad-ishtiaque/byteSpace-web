import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AvatarGroup({
  avatars,
  extraLabel,
  size = 32,
  overlap = 8,
  extraClassName = "bg-accent text-shuttle-950",
  className,
}) {
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
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full text-label-xs font-bold",
            extraClassName,
          )}
          style={{ width: size, height: size, marginLeft: -overlap }}
        >
          {extraLabel}
        </span>
      )}
    </div>
  );
}
