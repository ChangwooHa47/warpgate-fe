"use client";

import { memo } from "react";
import { PropertyCategory } from "../../_lib/types";
import { CATEGORIES } from "../../_lib/constants";

interface CategoryTabsProps {
  selected: PropertyCategory;
  onChange: (category: PropertyCategory) => void;
  counts?: Record<PropertyCategory, number>;
}

function CategoryTabs({ selected, onChange, counts }: CategoryTabsProps) {
  return (
    <div className="flex border-b border-border bg-white">
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat.value;
        const count = counts?.[cat.value] ?? 0;
        return (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 px-2 text-center relative transition-colors ${
              isActive ? "text-primary" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="text-[18px]">{cat.icon}</span>
            <span className={`text-[13px] font-medium whitespace-nowrap ${isActive ? "font-semibold" : ""}`}>
              {cat.value}
            </span>
            {counts && count > 0 && (
              <span className={`text-[11px] ${isActive ? "text-primary" : "text-gray-400"}`}>
                {count}
              </span>
            )}
            {isActive && (
              <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary rounded-t" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default memo(CategoryTabs);
