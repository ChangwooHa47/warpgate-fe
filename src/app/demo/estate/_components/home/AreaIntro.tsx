import Link from "next/link";
import Image from "next/image";
import { areas } from "../../_data/areas";

const BASE_PATH = "/demo/estate";

export default function AreaIntro() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-1">AREA INFO</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            지역 안내
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            서울에서 가장 선호되는 주거 지역인 강남구와 서초구의
            <br className="hidden md:block" />
            부동산 시장과 생활 인프라를 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`${BASE_PATH}/areas`}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm opacity-80 mb-1">{area.nameEn}</p>
                <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-2">
                  {area.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    평균 평당가 {(area.averagePrice / 100).toFixed(0)}만원
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={`${BASE_PATH}/areas`}
            className="inline-flex items-center px-6 py-3 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-colors"
          >
            지역 상세 정보 보기
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
