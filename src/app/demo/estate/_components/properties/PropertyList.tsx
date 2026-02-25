"use client";

import { memo } from "react";
import { Property, ViewMode } from "../../_lib/types";
import PropertyCard from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
  selectedId?: string;
  viewMode?: ViewMode;
}

function PropertyList({ properties, selectedId, viewMode = "list" }: PropertyListProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <p className="text-muted font-medium text-[15px]">조건에 맞는 매물이 없습니다</p>
        <p className="text-[14px] text-muted mt-1">필터를 변경해 보세요</p>
      </div>
    );
  }

  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-2 gap-3 p-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className={selectedId === property.id ? "ring-2 ring-primary rounded-lg" : ""}
          >
            <PropertyCard property={property} variant="grid" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="divide-y divide-border overflow-y-auto">
      {properties.map((property) => (
        <div
          key={property.id}
          className={selectedId === property.id ? "bg-blue-50" : ""}
        >
          <PropertyCard property={property} variant="list" />
        </div>
      ))}
    </div>
  );
}

export default memo(PropertyList);
