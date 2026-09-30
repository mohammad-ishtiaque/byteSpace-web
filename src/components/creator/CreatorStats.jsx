"use client";

import { useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { getUser, isFollowing as readIsFollowing, setFollowing, subscribe } from "@/lib/session";
import { cn } from "@/lib/utils";

function StatPill({ value, label }) {
  return (
    <li className="flex h-[46px] items-center gap-2 rounded-3xl border border-white/30 px-6 text-label-l text-white">
      <span className="font-bold">{value.toLocaleString("en-US")}</span>
      {label}
    </li>
  );
}

export default function CreatorStats({ creatorSlug, name, products, followers }) {
  const router = useRouter();
  const pathname = usePathname();
  const isFollowing = useSyncExternalStore(
    subscribe,
    () => Boolean(getUser()) && readIsFollowing(creatorSlug),
    () => false,
  );

  function handleFollow() {
    if (!getUser()) {
      router.push(`${ROUTES.login}?next=${encodeURIComponent(pathname)}`);
      return;
    }
    setFollowing(creatorSlug, !isFollowing);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        <StatPill value={products} label={products === 1 ? "Product" : "Products"} />
        <StatPill value={followers + (isFollowing ? 1 : 0)} label="Followers" />
      </ul>
      <button
        type="button"
        aria-pressed={isFollowing}
        onClick={handleFollow}
        aria-label={isFollowing ? `Unfollow ${name}` : `Follow ${name}`}
        className={cn(
          "h-[46px] rounded-3xl px-6 text-label-l font-medium transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
          isFollowing ? "border border-white/60 text-white hover:bg-white/10" : "bg-accent text-shuttle-950 hover:bg-[#c2e80f]",
        )}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}
