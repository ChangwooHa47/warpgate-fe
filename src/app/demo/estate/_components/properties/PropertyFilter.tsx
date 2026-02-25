"use client";

import type { PropertyFilter, SortOption } from "../../_lib/types";
import {
  CATEGORIES,
  TRANSACTION_TYPES,
  FLOOR_LEVELS,
  SORT_OPTIONS,
} from "../../_lib/constants";

interface PropertyFilterProps {
  filter: PropertyFilter;
  sortOption: SortOption;
  onFilterChange: (filter: PropertyFilter) => void;
  onSortChange: (sort: SortOption) => void;
  resultCount: number;
}

export default function PropertyFilterComponent({
  filter,
  sortOption,
  onFilterChange,
  onSortChange,
  resultCount,
}: PropertyFilterProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-muted mb-2">
            매물 종류
          </label>
          <select
            value={filter.category}
            onChange={(e) =>
              onFilterChange({ ...filter, category: e.target.value as PropertyFilter["category"] })
            }
            className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Transaction Type */}
        <div>
          <label className="block text-xs font-medium text-muted mb-2">
            거래 유형
          </label>
          <select
            value={filter.type}
            onChange={(e) =>
              onFilterChange({ ...filter, type: e.target.value as PropertyFilter["type"] })
            }
            className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {TRANSACTION_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Floor Level */}
        <div>
          <label className="block text-xs font-medium text-muted mb-2">
            층수
          </label>
          <select
            value={filter.floorLevel}
            onChange={(e) =>
              onFilterChange({ ...filter, floorLevel: e.target.value as PropertyFilter["floorLevel"] })
            }
            className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {FLOOR_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Area Range */}
        <div>
          <label className="block text-xs font-medium text-muted mb-2">
            면적 (㎡)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="최소"
              value={filter.areaMin || ""}
              onChange={(e) =>
                onFilterChange({ ...filter, areaMin: Number(e.target.value) || 0 })
              }
              className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            />
            <span className="text-muted">~</span>
            <input
              type="number"
              placeholder="최대"
              value={filter.areaMax === 500 ? "" : filter.areaMax}
              onChange={(e) =>
                onFilterChange({ ...filter, areaMax: Number(e.target.value) || 500 })
              }
              className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            />
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-xs font-medium text-muted mb-2">
            정렬
          </label>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">{resultCount}</span>개의
          매물이 있습니다
        </p>
        <button
          onClick={() =>
            onFilterChange({
              category: "전체",
              type: "전체",
              priceMin: 0,
              priceMax: 1000000,
              areaMin: 0,
              areaMax: 500,
              floorLevel: "전체",
            })
          }
          className="text-sm text-primary hover:text-primary-dark transition-colors"
        >
          필터 초기화
        </button>
      </div>
    </div>
  );
}
