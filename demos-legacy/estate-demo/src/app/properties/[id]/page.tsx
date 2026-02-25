"use client";

import { use } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";
import { formatPrice, formatArea } from "@/lib/utils";
import KakaoMap from "@/components/map/KakaoMap";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">매물을 찾을 수 없습니다</h1>
          <Link href="/properties" className="text-primary hover:underline">
            매물 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const typeColor = {
    매매: "bg-blue-100 text-blue-700",
    전세: "bg-orange-100 text-orange-700",
    월세: "bg-green-100 text-green-700",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-foreground">
          홈
        </Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-foreground">
          매물 검색
        </Link>
        <span>/</span>
        <span className="text-foreground">{property.complex}</span>
      </nav>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 rounded-2xl overflow-hidden">
        <div className="h-80 md:h-96 bg-gray-100">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {property.images.slice(1, 3).map((img, i) => (
            <div key={i} className="h-[186px] md:h-[190px] bg-gray-100">
              <img
                src={img}
                alt={`${property.title} ${i + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {property.floorPlan && (
            <div className="h-[186px] md:h-[190px] bg-gray-100 relative">
              <img
                src={property.floorPlan}
                alt="평면도"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-sm font-medium">평면도</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title & Price */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${typeColor[property.type]}`}
              >
                {property.type}
              </span>
              <span className="text-sm text-muted">
                찜 {property.bookmarkCount}개
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-1">{property.complex}</h1>
            <p className="text-muted">{property.address}</p>
            <p className="text-4xl font-bold mt-4 text-primary">
              {property.type}{" "}
              {formatPrice(
                property.type,
                property.price,
                property.deposit,
                property.priceMonthly
              )}
            </p>
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="font-semibold text-lg mb-4">매물 정보</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "면적 (공급/전용)",
                  value: formatArea(
                    property.areaM2Supply,
                    property.areaM2Exclusive
                  ),
                },
                { label: "동/층", value: `${property.dong} ${property.floor}` },
                {
                  label: "평형",
                  value: `${property.areaPyeong}평`,
                },
                { label: "등록일", value: property.createdAt },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="font-medium mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="font-semibold text-lg mb-3">상세 설명</h2>
            <p className="text-muted leading-relaxed">{property.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {property.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-semibold text-lg mb-3">위치</h2>
            <div className="h-80 rounded-2xl overflow-hidden border border-border">
              <KakaoMap
                properties={[property]}
                center={{ lat: property.lat, lng: property.lng }}
              />
            </div>
          </div>
        </div>

        {/* Sidebar - CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4">이 매물이 마음에 드시나요?</h3>
              <Link
                href={`/consultation?propertyId=${property.id}`}
                className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                상담 예약하기
              </Link>
              <a
                href="tel:02-1234-5678"
                className="block w-full py-3 mt-3 border border-border text-center font-medium rounded-xl hover:bg-gray-50 transition-colors"
              >
                전화 문의 02-1234-5678
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-sm mb-3">강남한결부동산 안심 서비스</h3>
              <ul className="space-y-2.5">
                {[
                  "실매물 확인 완료",
                  "전문 컨설턴트 배정",
                  "계약서 검토 지원",
                  "입주 후 A/S 안내",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
