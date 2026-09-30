"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ShareButton({ title }) {
  const [status, setStatus] = useState("");

  async function handleShare() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setStatus("Link copied");
    } catch {
      setStatus("");
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span role="status" className="text-body-m text-shuttle-100">
        {status}
      </span>
      <button
        type="button"
        onClick={handleShare}
        className="flex h-10 items-center gap-2 rounded-3xl bg-accent px-6 text-label-l font-medium text-shuttle-950 transition-colors hover:bg-[#c2e80f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Icon name="share" />
        Share
      </button>
    </div>
  );
}
