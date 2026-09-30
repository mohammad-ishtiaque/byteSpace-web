"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TopicFilter from "@/components/course/TopicFilter";
import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import { SORT_OPTIONS } from "@/lib/courses";
import { cn } from "@/lib/utils";

export default function CourseFilters({ topics, levels, categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const level = searchParams.get("level") ?? "";
  const category = searchParams.get("category") ?? "";
  const topic = searchParams.get("topic") ?? "";
  const sort = searchParams.get("sort") ?? "";
  const activeCount = [level, category, topic].filter(Boolean).length;
  const hasFilters = activeCount > 0;

  function update(changes) {
    const params = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => (value ? params.set(key, value) : params.delete(key)));
    params.delete("page");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 lg:gap-4">
        <div className="flex flex-wrap gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => update({ level: "", category: "", topic: "" })}
            disabled={!hasFilters}
            className={cn(
              "flex h-12 items-center gap-1 rounded-3xl border px-4 text-label-m font-medium transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              hasFilters
                ? "border-primary bg-primary text-white hover:bg-[#0033c4]"
                : "cursor-default border-shuttle-200 bg-white text-shuttle-950",
            )}
          >
            <Icon name={hasFilters ? "close" : "filter"} className={hasFilters ? "text-white" : "text-shuttle-700"} />
            {hasFilters ? `Clear filters (${activeCount})` : "Filter"}
          </button>
          <Dropdown
            icon="level"
            label="Level"
            placeholder="Level"
            value={level}
            onChange={(value) => update({ level: value })}
            options={[{ value: "", label: "All levels" }, ...levels.map((item) => ({ value: item, label: item }))]}
          />
          <Dropdown
            icon="category"
            label="Category"
            placeholder="Category"
            value={category}
            onChange={(value) => update({ category: value })}
            options={[
              { value: "", label: "All categories" },
              ...categories.map((item) => ({ value: item.slug, label: item.name })),
            ]}
          />
        </div>
        <Dropdown
          icon="sort"
          label="Sort by"
          placeholder="Most relevant"
          value={sort}
          onChange={(value) => update({ sort: value })}
          options={SORT_OPTIONS}
          align="right"
        />
      </div>

      <div className="mt-8">
        <TopicFilter
          topics={topics}
          selected={topic}
          onSelect={(value) => update({ topic: value === topic ? "" : value })}
          layout="row"
          showMore={false}
        />
      </div>
    </div>
  );
}
