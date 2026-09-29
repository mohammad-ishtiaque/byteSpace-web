"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <div className="max-w-[504px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="h-[52px] flex-1 rounded-3xl border border-shuttle-200 px-6 text-body-l outline-none placeholder:text-shuttle-400 focus:border-primary"
        />
        <button
          type="submit"
          className="h-[46px] self-start rounded-3xl bg-accent px-6 text-label-l font-medium transition-colors hover:bg-[#c2e80f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-center"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-6 text-body-xs text-shuttle-400" role="status">
        {isSubscribed
          ? "Thanks for subscribing! We'll keep you posted."
          : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
      </p>
    </div>
  );
}
