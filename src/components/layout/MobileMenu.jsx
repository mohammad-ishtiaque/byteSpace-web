"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import NavLink from "@/components/layout/NavLink";
import { NAV_LINKS, ROUTES } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex size-10 items-center justify-center rounded-full text-shuttle-50 hover:bg-white/10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-30 border-t border-white/15 bg-primary px-6 pb-6 pt-4 text-shuttle-50 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} onClick={close} className="text-label-l">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button href={ROUTES.login} variant="secondary" onClick={close} className="flex-1">
              Sign In
            </Button>
            <Button href={ROUTES.signup} onClick={close} className="flex-1">
              Join Us
            </Button>
          </div>
        </nav>
      )}
    </div>
  );
}
