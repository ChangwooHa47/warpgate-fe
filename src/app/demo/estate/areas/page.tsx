import { areas } from "../_data/areas";
import Link from "next/link";

export default function AreasPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-primary text-sm font-semibold mb-2">
          Area Information
        </p>
        <h1 className="text-3xl font-bold">지역 정보</h1>
        <p className="text-muted mt-2">
          서울 주요 지역의 부동산 시세와 인프라 정보를 확인하세요
        </p>
      </div>

      {/* Area Cards */}
      <div className="space-y-6">
        {areas.map((area) => (
          <div
            key={area.id}
            className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-80 h-48 md:h-auto shrink-0">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {area.nameEn}
                    </p>
                    <h2 className="text-2xl font-bold">{area.name}</h2>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      area.priceChange > 0
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {area.priceChange > 0 ? "+" : ""}
                    {area.priceChange}%
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-muted">평균 매매가</p>
                    <p className="text-lg font-bold">{area.averagePrice}억</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-muted">평균 전세가</p>
                    <p className="text-lg font-bold">{area.averageJeonse}억</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-muted">등록 매물</p>
                    <p className="text-lg font-bold">
                      {area.propertyCount.toLocaleString()}건
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-muted">전월 대비</p>
                    <p
                      className={`text-lg font-bold ${area.priceChange > 0 ? "text-red-600" : "text-blue-600"}`}
                    >
                      {area.priceChange > 0 ? "+" : ""}
                      {area.priceChange}%
                    </p>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">주변 인프라</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted">
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>지하철 {area.infrastructure.subway.length}개 노선</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span>학교 {area.infrastructure.schools}개</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>병원 {area.infrastructure.hospitals}개</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span>공원 {area.infrastructure.parks}개</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {area.infrastructure.subway.map((line) => (
                      <span
                        key={line}
                        className="px-2 py-0.5 bg-gray-100 text-xs rounded text-muted"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    href={`/demo/estate/properties?q=${encodeURIComponent(area.name)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[15px] font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    {area.name} 매물 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
