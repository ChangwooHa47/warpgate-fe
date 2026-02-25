import { SITE } from "@/data/siteData";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: `오시는 길 - ${SITE.name}`,
};

export default function DirectionsPage() {
  return (
    <>
      <PageHero title="오시는 길" subtitle="찾아오시는 방법을 안내합니다" />

      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Map placeholder */}
        <section className="mb-6">
          <ImagePlaceholder
            height="400px"
            label="지도 영역 (네이버 지도 / 카카오맵 연동)"
            className="rounded-xl"
          />
        </section>

        {/* Address & Contact - right below map */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5 pl-8">
            <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg font-bold text-gray-800">{SITE.address}</span>
          </div>
          <div className="flex items-center gap-2.5 pr-8">
            <svg className="w-5 h-5 text-[var(--primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="text-lg font-bold text-[var(--primary)] hover:underline">{SITE.phone}</a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
          {/* Hours */}
          <div className="bg-white border border-gray-200 rounded-xl px-8 py-7 shadow-[0_0_20px_rgba(0,0,0,0.06)]">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[var(--primary-light)] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              진료 시간
            </h2>
            <ul className="text-base text-gray-500 space-y-2.5">
              <li className="flex">
                <span>평일</span>
                <span className="ml-auto font-medium text-gray-700">{SITE.hours.weekday}</span>
              </li>
              <li className="flex">
                <span>토요일</span>
                <span className="ml-auto font-medium text-gray-700">{SITE.hours.saturday}</span>
              </li>
              <li className="flex">
                <span>점심시간</span>
                <span className="ml-auto font-medium text-gray-700">{SITE.hours.lunch}</span>
              </li>
              <li className="flex">
                <span>일요일·공휴일</span>
                <span className="ml-auto font-medium text-red-400">휴진</span>
              </li>
            </ul>
          </div>

          {/* Public Transportation */}
          <div className="bg-white border border-gray-200 rounded-xl px-8 py-7 shadow-[0_0_20px_rgba(0,0,0,0.06)] flex flex-col">
            <h2 className="font-bold text-lg mb-5">대중교통 안내</h2>
            <div className="flex flex-col md:flex-row flex-1 md:gap-0 gap-6">
              <div className="flex-1">
                <h3 className="text-base font-bold text-[var(--primary)] mb-1.5">지하철</h3>
                <p className="text-base text-gray-500">신분당선 신논현역 6번 출구 도보 2분</p>
                <p className="text-base text-gray-500">2호선 강남역 10번 출구 도보 7분</p>
              </div>
              <div className="hidden md:block w-px bg-gray-200 mx-6 self-stretch" />
              <div className="flex-1">
                <h3 className="text-base font-bold text-[var(--primary)] mb-1.5">버스</h3>
                <p className="text-base text-gray-500">간선버스 146·360·740번</p>
                <p className="text-base text-gray-500">신논현역 정류장 하차 후 도보 2분</p>
              </div>
            </div>
          </div>
        </div>

        {/* Car + Parking - full width */}
        <div className="bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)] rounded-xl px-8 py-7 mt-6 flex flex-col md:flex-row gap-8 md:gap-0">
          {/* 자가용 이용 */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/70 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 .001M13 16H9m4 0h3m1 0h1a1 1 0 001-1v-3.65a1 1 0 00-.22-.624l-3.48-4.35A1 1 0 0013.52 6H13" />
                </svg>
              </div>
              자가용 이용 시
            </h2>
            <ul className="space-y-2">
              {["강남대로 방면 → 논현역 사거리에서 좌회전 후 200m 직진", "서초 방면 → 반포대로 경유, 신논현역에서 우회전 후 100m", "네비게이션 검색 시 '루멘안과의원'으로 검색"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 구분선 */}
          <div className="hidden md:block w-px bg-[var(--primary-light)] mx-8 self-stretch" style={{ backgroundColor: 'rgba(18,101,200,0.15)' }} />

          {/* 주차 안내 */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/70 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              주차 안내
            </h2>
            <ul className="space-y-2">
              {["지하 1·2층 전용 주차장 운영 (약 50면)", "진료 시 최대 2시간 무료 (원무과 접수 시 주차권 발급)", "만차 시 인근 공영주차장 이용 가능 (도보 3분)"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
