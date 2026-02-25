import Image from "next/image";
import Link from "next/link";
import { areas } from "../_data/areas";
import { properties } from "../_data/properties";

const BASE_PATH = "/demo/estate";

export const metadata = {
  title: "지역 안내 - 강남부동산",
  description: "강남구, 서초구 주요 지역 부동산 시세 및 정보",
};

export default function AreasPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          지역 안내
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          강남/서초 지역의 부동산 시장 정보와 각 지역의 특징을 안내해 드립니다.
        </p>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {areas.map((area) => {
          const areaProperties = properties.filter((p) =>
            p.address.includes(area.name)
          );
          const avgPrice =
            areaProperties.length > 0
              ? Math.round(
                  areaProperties.reduce((sum, p) => sum + p.price, 0) /
                    areaProperties.length
                )
              : 0;

          return (
            <div
              key={area.id}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              {/* Area Image */}
              <div className="relative h-48 md:h-64">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{area.name}</h2>
                  <p className="text-sm opacity-90">{area.nameEn}</p>
                </div>
              </div>

              {/* Area Info */}
              <div className="p-6">
                <p className="text-muted mb-4">{area.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-muted mb-1">평당 평균가</p>
                    <p className="text-lg font-bold text-primary">
                      {(area.averagePrice / 10000).toFixed(1)}억원
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-muted mb-1">등록 매물</p>
                    <p className="text-lg font-bold text-foreground">
                      {areaProperties.length}건
                    </p>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    주요 인프라
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.infrastructure.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">
                    지역 특징
                  </p>
                  <ul className="space-y-1">
                    {area.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-primary flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={`${BASE_PATH}/properties?area=${area.name}`}
                  className="block w-full text-center px-4 py-3 text-sm font-medium bg-primary text-background rounded-lg hover:bg-primary-dark transition-colors"
                >
                  {area.name} 매물 보기
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact CTA */}
      <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-background">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          원하시는 지역의 매물을 찾고 계신가요?
        </h2>
        <p className="text-background/80 mb-6 max-w-xl mx-auto">
          20년 경력의 전문 컨설턴트가 고객님의 조건에 맞는 최적의 매물을 찾아드립니다.
        </p>
        <Link
          href={`${BASE_PATH}/consultation`}
          className="inline-flex items-center px-8 py-3 text-base font-medium bg-background text-primary rounded-lg hover:bg-gray-100 transition-colors"
        >
          무료 상담 신청
        </Link>
      </div>
    </div>
  );
}
