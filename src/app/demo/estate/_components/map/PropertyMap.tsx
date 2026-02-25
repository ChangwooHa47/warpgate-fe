"use client";

import type { Property } from "../../_lib/types";

interface PropertyMapProps {
  properties: Property[];
  center?: { lat: number; lng: number };
  onPropertySelect?: (property: Property) => void;
}

export default function PropertyMap({
  properties,
  center = { lat: 37.5051, lng: 127.0253 },
  onPropertySelect,
}: PropertyMapProps) {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-gray-100 rounded-xl overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <p className="text-muted mb-2">
          지도 서비스 연동 준비 중
        </p>
        <p className="text-sm text-muted/70">
          Kakao Map API 키 설정 후 이용 가능합니다
        </p>
      </div>

      {/* Property Markers Legend (placeholder) */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
        <p className="text-xs font-medium text-foreground mb-2">
          매물 {properties.length}건
        </p>
        <div className="space-y-1 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>매매</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>전세</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>월세</span>
          </div>
        </div>
      </div>

      {/* Center Coordinates (for reference) */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
        <p className="text-xs text-muted">
          중심: {center.lat.toFixed(4)}, {center.lng.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
