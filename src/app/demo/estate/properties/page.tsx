"use client";

import { useState, useMemo } from "react";
import type { PropertyFilter, SortOption } from "../_lib/types";
import { properties } from "../_data/properties";
import { filterProperties, sortProperties } from "../_lib/filtering";
import { DEFAULT_FILTER } from "../_lib/constants";
import PropertyFilterComponent from "../_components/properties/PropertyFilter";
import PropertyList from "../_components/properties/PropertyList";
import PropertyMap from "../_components/map/PropertyMap";

export default function PropertiesPage() {
  const [filter, setFilter] = useState<PropertyFilter>(DEFAULT_FILTER);
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filteredProperties = useMemo(() => {
    const filtered = filterProperties(properties, filter);
    return sortProperties(filtered, sortOption);
  }, [filter, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            매물 검색
          </h1>
          <p className="text-muted mt-1">
            강남/서초 지역의 다양한 매물을 검색해 보세요
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              viewMode === "list"
                ? "bg-white text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            목록
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              viewMode === "map"
                ? "bg-white text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            지도
          </button>
        </div>
      </div>

      {/* Filter */}
      <PropertyFilterComponent
        filter={filter}
        sortOption={sortOption}
        onFilterChange={setFilter}
        onSortChange={setSortOption}
        resultCount={filteredProperties.length}
      />

      {/* Content */}
      {viewMode === "list" ? (
        <PropertyList properties={filteredProperties} />
      ) : (
        <div className="h-[600px]">
          <PropertyMap properties={filteredProperties} />
        </div>
      )}

      {/* Load More (for list view) */}
      {viewMode === "list" && filteredProperties.length > 9 && (
        <div className="mt-8 text-center">
          <button className="px-8 py-3 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-card transition-colors">
            더 보기
          </button>
        </div>
      )}
    </div>
  );
}
