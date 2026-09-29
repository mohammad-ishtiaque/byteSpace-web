import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import NavLink from "@/components/layout/NavLink";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_LINKS, ROUTES } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="relative z-20 bg-grid text-shuttle-50">
      <Container className="flex h-20 items-center justify-between md:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <NavLink href={ROUTES.login} className="hidden md:inline">
            Sign In
          </NavLink>
          <NavLink href={ROUTES.signup} className="hidden md:inline">
            Join Us
          </NavLink>
          <Link
            href={ROUTES.cart}
            aria-label="Shopping cart"
            className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 md:size-auto md:hover:bg-transparent"
          >
            <Image src="/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </Link>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
