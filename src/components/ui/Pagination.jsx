import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

function pageHref(basePath, params, page) {
  const query = new URLSearchParams(Object.entries(params).filter(([, value]) => value));
  if (page > 1) query.set("page", page);
  else query.delete("page");
  const value = query.toString();
  return value ? `${basePath}?${value}` : basePath;
}

function ArrowLink({ href, label, icon }) {
  const classes = "flex size-10 items-center justify-center rounded-full border border-shuttle-200";

  if (!href) {
    return (
      <span aria-hidden="true" className={cn(classes, "text-shuttle-200")}>
        <Icon name={icon} />
      </span>
    );
  }

  return (
    <Link href={href} aria-label={label} className={cn(classes, "text-shuttle-950 hover:border-primary")}>
      <Icon name={icon} />
    </Link>
  );
}

export default function Pagination({ basePath, params = {}, page, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-4">
      <ArrowLink
        href={page > 1 ? pageHref(basePath, params, page - 1) : null}
        label="Previous page"
        icon="chevronLeft"
      />
      <ul className="flex items-center gap-4">
        {pages.map((number) => (
          <li key={number}>
            <Link
              href={pageHref(basePath, params, number)}
              aria-current={number === page ? "page" : undefined}
              className={cn(
                "text-label-l font-medium",
                number === page ? "text-shuttle-950" : "text-shuttle-400 hover:text-primary",
              )}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
      <ArrowLink
        href={page < totalPages ? pageHref(basePath, params, page + 1) : null}
        label="Next page"
        icon="chevronRight"
      />
    </nav>
  );
}
