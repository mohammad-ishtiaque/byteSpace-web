import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { FOOTER_LINKS, LEGAL_LINKS } from "@/lib/constants";

const PLACEHOLDER_HREF = "#";

export default function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white">
      <Container className="pt-16 pb-12 md:pt-[71px]">
        <div className="grid gap-12 lg:grid-cols-[528px_1fr] lg:gap-[92px]">
          <div>
            <Logo className="text-shuttle-950" />
            <p className="mt-4 text-sm leading-[22px] text-shuttle-700">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-8 md:mt-11">
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4 lg:pt-[53px]">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h2 className="sr-only">{group.title}</h2>
                <div className="flex gap-10">
                  {group.columns.map((column) => (
                    <ul key={column[0]} className="flex w-[140px] flex-col gap-4 xl:w-[166px]">
                      {column.map((label) => (
                        <li key={label}>
                          <Link
                            href={PLACEHOLDER_HREF}
                            className="text-sm leading-[22px] text-shuttle-700 transition-colors hover:text-primary"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-shuttle-200 pt-6 text-body-xs text-shuttle-700 md:flex-row md:items-center md:justify-between lg:mt-[130px]">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <Link href={PLACEHOLDER_HREF} className="underline-offset-2 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
