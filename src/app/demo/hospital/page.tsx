import Link from "next/link";
import { SITE, DOCTORS, NOTICES, EVENTS, PRESS } from "./_data/siteData";
import ImagePlaceholder from "./_components/ImagePlaceholder";

export default function Home() {
  const featuredDoctor = DOCTORS[0];
  const otherDoctors = DOCTORS.slice(1);
  const recentNotices = NOTICES.slice(0, 5);
  const recentPress = PRESS.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0e50a8, #1265c8, #1780e8)' }}>
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <ImagePlaceholder
            height="300px"
            label="메인 비주얼 이미지"
            className="mb-10 max-w-3xl mx-auto !border-white/20 !from-white/5 !to-white/10"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{SITE.name}</h1>
          <p className="text-lg text-blue-100/80 mb-10 font-light">{SITE.slogan}</p>
          <Link
            href="/demo/hospital/appointment"
            className="inline-block bg-white px-8 py-3.5 rounded-full font-bold text-base hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            style={{ color: '#1265c8' }}
          >
            온라인 진료 예약
          </Link>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white relative" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

            {/* 진료 시간 */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}>
              <div className="w-11 h-11 bg-[var(--primary-light)] rounded-lg flex items-center justify-center text-[var(--primary)] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5">진료 시간</h3>
                <div className="text-base text-gray-500 leading-relaxed flex gap-1">
                  <span className="font-medium" style={{ display: 'inline-block', minWidth: '3.5em' }}>평일</span>
                  <span>{SITE.hours.weekday}</span>
                </div>
                <div className="text-base text-gray-500 leading-relaxed flex gap-1">
                  <span className="font-medium" style={{ display: 'inline-block', minWidth: '3.5em' }}>토요일</span>
                  <span>{SITE.hours.saturday}</span>
                </div>
                <p className="text-base text-gray-400 leading-relaxed mt-1.5">{SITE.hours.sunday}</p>
              </div>
            </div>

            {/* 전화 예약 */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}>
              <div className="w-11 h-11 bg-[var(--primary-light)] rounded-lg flex items-center justify-center text-[var(--primary)] shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5">전화 예약</h3>
                <a href={`tel:${SITE.phone.replace(/-/g, "")}`} className="text-lg font-bold text-[var(--primary)] hover:underline">{SITE.phone}</a>
              </div>
            </div>

            {/* 오시는 길 */}
            <div className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}>
              <div className="w-11 h-11 bg-[var(--primary-light)] rounded-lg flex items-center justify-center text-[var(--primary)] shrink-0 self-start">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-1.5">오시는 길</h3>
                <p className="text-base text-gray-500 leading-relaxed">{SITE.address}</p>
                <Link href="/demo/hospital/directions" className="text-base font-medium hover:underline mt-auto pt-1" style={{ color: '#a0aab5' }}>
                  자세히 보기 &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Doctors - Featured CEO + Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-10 border-b-2 border-[var(--primary)] pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">의료진 소개</h2>
              <p className="text-base text-gray-400 mt-1">의학박사 &amp; 안과 전문의로 이루어진 프리미엄 의료진을 만나보세요</p>
            </div>
            <Link href="/demo/hospital/doctors" className="text-base text-gray-400 hover:text-[#1265c8] transition shrink-0">
              더보기
            </Link>
          </div>

          {/* Featured + Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
            {/* Featured Doctor (CEO) */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl overflow-hidden mb-5">
                <ImagePlaceholder
                  height="420px"
                  label="대표원장 사진"
                  className="!rounded-none !border-0"
                />
              </div>
              <p className="text-sm text-gray-400 mb-1">{SITE.name} CEO</p>
              <h3 className="text-2xl font-bold tracking-tight">{featuredDoctor.name} {featuredDoctor.position}</h3>
              <p className="text-base text-gray-400 mt-1">{featuredDoctor.specialty}</p>
            </div>

            {/* Other Doctors Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherDoctors.map((doctor) => (
                <div key={doctor.id} className="text-center group">
                  <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                    <ImagePlaceholder
                      height="100%"
                      label="의료진 사진"
                      className="!rounded-none !border-0 h-full"
                    />
                  </div>
                  <p className="text-lg font-bold tracking-tight">{doctor.name}</p>
                  <p className="text-sm text-gray-400">{doctor.position} · {doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events - Banner Style */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10 border-b-2 border-[var(--primary)] pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">이벤트</h2>
              <p className="text-base text-gray-400 mt-1">진행 중인 특별 이벤트를 확인하세요</p>
            </div>
            <Link href="/demo/hospital/notices" className="text-base text-gray-400 hover:text-[#1265c8] transition shrink-0">
              더보기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EVENTS.slice(0, 3).map((event) => (
              <Link
                key={event.id}
                href={`/demo/hospital/events/${event.id}`}
                className="group"
              >
                {/* Banner Image */}
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <ImagePlaceholder
                    height="220px"
                    label="이벤트 배너 이미지"
                    className="!rounded-none !border-0 group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="inline-block px-2.5 py-1 text-sm font-bold bg-white/20 backdrop-blur-sm rounded-md mb-2">
                      {event.period}
                    </span>
                    <h3 className="font-bold text-lg leading-snug">{event.title}</h3>
                  </div>
                </div>
                <p className="text-base text-gray-500 truncate px-1">{event.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notices & Press - Table Style */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Notices */}
            <div>
              <div className="flex items-end justify-between mb-6 border-b-2 border-[var(--primary)] pb-4">
                <h2 className="text-xl font-bold tracking-tight">공지사항</h2>
                <Link href="/demo/hospital/notices" className="text-base text-gray-400 hover:text-[#1265c8] transition">
                  더보기
                </Link>
              </div>
              <div className="divide-y divide-gray-100">
                {recentNotices.map((notice) => (
                  <Link
                    key={notice.id}
                    href={`/demo/hospital/notices/${notice.id}`}
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] rounded shrink-0">
                        {notice.category}
                      </span>
                      <h3 className="text-base text-gray-700 group-hover:text-[#1265c8] transition truncate">
                        {notice.title}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500 shrink-0">{notice.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Press */}
            <div>
              <div className="flex items-end justify-between mb-6 border-b-2 border-[var(--primary)] pb-4">
                <h2 className="text-xl font-bold tracking-tight">언론보도</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {recentPress.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base text-gray-700 group-hover:text-[#1265c8] transition truncate">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500 mt-0.5 block">{item.source}</span>
                    </div>
                    <span className="text-sm text-gray-500 shrink-0">{item.date}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">진료 예약 안내</h2>
          <p className="text-base text-gray-500 mb-8">
            온라인 또는 전화로 편리하게 진료를 예약하실 수 있습니다.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/demo/hospital/appointment"
              className="px-7 py-3 rounded-full text-base font-bold hover:shadow-lg transition-all"
              style={{ backgroundColor: '#1265c8', color: '#ffffff' }}
            >
              온라인 예약
            </Link>
            <Link
              href="/demo/hospital/contact"
              className="bg-white border border-gray-200 px-7 py-3 rounded-full text-base font-bold hover:shadow-md transition-all"
              style={{ color: '#1265c8' }}
            >
              상담·문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
