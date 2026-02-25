"use client";

import { Suspense, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { properties } from "../_data/properties";
import { PropertyFilter as FilterType, Property, ViewMode, PropertyCategory } from "../_lib/types";
import { DEFAULT_FILTER } from "../_lib/constants";
import { filterProperties } from "../_lib/filtering";
import KakaoMap from "../_components/map/KakaoMap";
import CategoryTabs from "../_components/properties/CategoryTabs";
import PropertyFilter from "../_components/properties/PropertyFilter";
import PropertyList from "../_components/properties/PropertyList";

function PropertiesContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [filter, setFilter] = useState<FilterType>({ ...DEFAULT_FILTER });
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedProperty, setSelectedProperty] = useState<string | undefined>();

  const categoryCounts = useMemo(() => {
    const counts: Record<PropertyCategory, number> = {
      "아파트": 0, "빌라/투룸+": 0, "원룸": 0, "오피스텔": 0, "상가/사무실": 0,
    };
    for (const p of properties) {
      counts[p.category]++;
    }
    return counts;
  }, []);

  const filteredProperties = useMemo(
    () => filterProperties(properties, filter, query),
    [filter, query]
  );

  const handleMarkerClick = useCallback((property: Property) => {
    setSelectedProperty(property.id);
  }, []);

  const handleCategoryChange = useCallback((category: PropertyCategory) => {
    setFilter((prev) => ({ ...prev, category }));
  }, []);

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-white">
        <h1 className="text-lg font-bold">
          {query ? `"${query}" 검색 결과` : "매물 검색"}
          <span className="text-sm font-normal text-muted ml-2">
            {filteredProperties.length}개
          </span>
        </h1>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="hidden lg:block flex-1">
          <KakaoMap
            properties={filteredProperties}
            onMarkerClick={handleMarkerClick}
          />
        </div>

        <div className="w-full lg:w-[480px] flex flex-col bg-white border-l border-border">
          <CategoryTabs
            selected={filter.category}
            onChange={handleCategoryChange}
            counts={categoryCounts}
          />
          <PropertyFilter
            filter={filter}
            onChange={setFilter}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultCount={filteredProperties.length}
          />
          <div className="flex-1 overflow-y-auto">
            <PropertyList
              properties={filteredProperties}
              selectedId={selectedProperty}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense>
      <PropertiesContent />
    </Suspense>
  );
}
