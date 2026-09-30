"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PROVIDERS = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export default function SocialLogin({ className }) {
  const [notice, setNotice] = useState("");

  return (
    <div className={className}>
      <div className="flex items-center gap-3 text-body-m text-shuttle-400">
        <span className="h-px flex-1 bg-shuttle-200" />
        or
        <span className="h-px flex-1 bg-shuttle-200" />
      </div>

      <ul className="mt-12 flex justify-center gap-4">
        {PROVIDERS.map((provider) => (
          <li key={provider.name}>
            <button
              type="button"
              aria-label={`Continue with ${provider.name}`}
              onClick={() => setNotice(`${provider.name} sign-in is coming soon.`)}
              className={cn(
                "flex rounded-3xl transition-colors hover:bg-shuttle-50",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              )}
            >
              <Image src={provider.icon} alt="" width={72} height={72} />
            </button>
          </li>
        ))}
      </ul>

      <p role="status" className={cn("text-center text-body-xs text-shuttle-400", notice && "mt-4")}>
        {notice}
      </p>
    </div>
  );
}
