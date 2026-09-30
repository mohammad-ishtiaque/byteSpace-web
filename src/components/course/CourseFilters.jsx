"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TopicFilter from "@/components/course/TopicFilter";
import Icon from "@/components/ui/Icon";
import SelectPill from "@/components/ui/SelectPill";
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

  function update(changes) {
    const params = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => (value ? params.set(key, value) : params.delete(key)));
    params.delete("page");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="-mx-6 flex items-center justify-between gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
        <div className="flex shrink-0 gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => update({ level: "", category: "", topic: "" })}
            disabled={activeCount === 0}
            title="Clear all filters"
            className={cn(
              "flex h-12 items-center gap-1 rounded-3xl border bg-white px-4 text-label-m font-medium transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              activeCount > 0 ? "border-primary hover:bg-shuttle-50" : "border-shuttle-200",
            )}
          >
            <Icon name="filter" className="text-shuttle-700" />
            Filter
            {activeCount > 0 && (
              <span className="ml-1 rounded-full bg-accent px-2 text-label-xs leading-5">
                {activeCount}
                <span className="sr-only"> active, clear all</span>
              </span>
            )}
          </button>
          <SelectPill
            icon="level"
            label="Level"
            value={level}
            onChange={(value) => update({ level: value })}
            options={[{ value: "", label: "Level" }, ...levels.map((item) => ({ value: item, label: item }))]}
          />
          <SelectPill
            icon="category"
            label="Category"
            value={category}
            onChange={(value) => update({ category: value })}
            options={[
              { value: "", label: "Category" },
              ...categories.map((item) => ({ value: item.slug, label: item.name })),
            ]}
          />
        </div>
        <SelectPill
          icon="sort"
          label="Sort by"
          value={sort}
          onChange={(value) => update({ sort: value === "relevant" ? "" : value })}
          options={SORT_OPTIONS}
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
