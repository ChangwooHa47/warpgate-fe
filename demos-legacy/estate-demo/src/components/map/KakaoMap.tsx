"use client";

import { useEffect, useRef } from "react";
import { Property } from "@/types";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  properties: Property[];
  onMarkerClick?: (property: Property) => void;
  center?: { lat: number; lng: number };
}

export default function KakaoMap({
  properties,
  onMarkerClick,
  center = { lat: 37.5095, lng: 127.0335 },
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=DEMO_KAKAO_KEY&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (!mapRef.current) return;

          const options = {
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            level: 5,
          };

          const map = new window.kakao.maps.Map(mapRef.current, options);
          mapInstanceRef.current = map;

          // Add markers
          properties.forEach((property) => {
            const position = new window.kakao.maps.LatLng(
              property.lat,
              property.lng
            );

            const content = `
              <div style="
                padding: 6px 12px;
                background: ${property.type === "매매" ? "#2563eb" : property.type === "전세" ? "#f97316" : "#22c55e"};
                color: white;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                cursor: pointer;
              ">
                ${property.price}억
              </div>
            `;

            const overlay = new window.kakao.maps.CustomOverlay({
              position,
              content,
              yAnchor: 1.3,
            });

            overlay.setMap(map);

            // Click event via DOM
            const el = overlay.getContent();
            if (typeof el !== "string") {
              el.addEventListener("click", () => {
                onMarkerClick?.(property);
              });
            }
          });
        });
      }
    };

    script.onerror = () => {
      // Fallback: show a styled placeholder map
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div style="
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            background: linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 100%);
            color: #6b7280; font-size: 14px;
          ">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <p style="margin-top: 12px; font-weight: 500;">지도 영역</p>
            <p style="margin-top: 4px; font-size: 12px;">카카오맵 API 키가 필요합니다</p>
          </div>
        `;
      }
    };

    return () => {
      script.remove();
    };
  }, [properties, center, onMarkerClick]);

  return <div ref={mapRef} className="kakao-map-container rounded-lg" />;
}
