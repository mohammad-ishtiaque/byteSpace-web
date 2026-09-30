import Image from "next/image";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function SearchForm({
  id,
  action = ROUTES.courses,
  label = "Search courses",
  defaultValue = "",
  placeholder,
  keepParams = {},
  className,
  children,
}) {
  return (
    <form action={action} role="search" className={cn("flex w-full flex-col gap-3 sm:flex-row sm:gap-4", className)}>
      {Object.entries(keepParams).map(
        ([name, value]) => value && <input key={name} type="hidden" name={name} value={value} />,
      )}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex h-[52px] items-center gap-2 rounded-3xl bg-white px-6 focus-within:outline-2 focus-within:outline-accent sm:flex-1">
        <Image src="/icons/search.svg" alt="" width={24} height={24} />
        <input
          id={id}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full bg-transparent text-body-l text-shuttle-950 outline-none placeholder:text-shuttle-400"
        />
      </div>
      {children}
    </form>
  );
}
