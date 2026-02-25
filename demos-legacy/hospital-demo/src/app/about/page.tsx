import Link from "next/link";
import { SITE } from "@/data/siteData";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: `병원 소개 - ${SITE.name}`,
};

export default function AboutPage() {
  return (
    <>
      {/* Custom Hero with larger hospital name */}
      <section className="relative text-white py-16 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0e50a8, #1265c8, #1780e8)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">병원 소개</h1>
          <p className="mt-3 text-xl md:text-2xl text-white/90 font-bold">{SITE.name}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Intro - left-top aligned */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <ImagePlaceholder height="320px" label="병원 외관/내부 이미지" />
            <div>
              <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">About Us</p>
              <h2 className="text-2xl font-bold mb-5 tracking-tight">병원 소개</h2>
              <p className="text-base text-gray-500 leading-relaxed">루멘안과의원은 2010년 개원 이래 강남 지역의 대표적인 안과 전문 의료기관으로 자리매김해 왔습니다. 국내 최고 수준의 안과 전문의와 최신 의료 장비를 바탕으로, 라식·라섹·백내장·망막 질환 등 다양한 안과 질환에 대해 정확한 진단과 안전한 치료를 제공합니다.</p>
              <p className="text-base text-gray-500 leading-relaxed mt-4">환자 한 분 한 분의 눈 건강을 소중히 여기며, 단순한 치료를 넘어 평생 눈 건강을 함께 관리하는 파트너가 되고자 합니다. 오랜 임상 경험과 축적된 노하우를 토대로, 개인 맞춤형 진료로 최상의 시력 교정 결과를 추구합니다.</p>
            </div>
          </div>
        </section>

        {/* History - horizontal timeline */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">History</p>
            <h2 className="text-2xl font-bold tracking-tight">병원 연혁</h2>
          </div>
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-[var(--accent)]/30" />
            <div className="grid grid-cols-4 gap-6">
              {["OOO", "OOO", "OOO", "OOO"].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center pt-0">
                  {/* Circle on line */}
                  <div className="w-4 h-4 bg-white border-2 border-[var(--primary)] rounded-full mb-4 relative z-10 shrink-0" style={{ marginTop: '8px' }} />
                  <p className="text-lg font-bold text-gray-800 mb-1">20XX</p>
                  <p className="text-base text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)] rounded-xl p-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">Mission</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">미션 및 운영 방침</h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              루멘안과의원은 <strong className="text-gray-700 font-semibold">"빛을 되찾아 드리는 것"</strong>을 사명으로, 환자 중심의 의료 문화를 실천합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "환자 중심 진료",
                desc: "충분한 상담과 설명으로 환자가 스스로 치료를 결정할 수 있도록 돕고, 불필요한 시술 없이 꼭 필요한 치료만 권합니다.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "안전과 신뢰",
                desc: "검증된 수술 기법과 최신 장비로 안전한 치료를 보장합니다. 시술 전·후 철저한 검사를 통해 부작용을 최소화합니다.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "지속적인 발전",
                desc: "국내외 최신 안과 의학 연구를 적극 도입하고, 전문의 교육과 연수를 통해 늘 발전하는 의료 서비스를 제공합니다.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/70 rounded-xl px-6 py-5">
                <div className="w-9 h-9 bg-[var(--primary-light)] rounded-lg flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-2">Facilities</p>
            <h2 className="text-2xl font-bold tracking-tight">시설 및 장비 소개</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-xl">
                  <ImagePlaceholder
                    height="180px"
                    label={`시설/장비 이미지 ${i}`}
                    className="group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2.5 text-center">OOO</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - only appointment */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/appointment"
            className="text-white px-7 py-3 rounded-full text-sm font-bold hover:brightness-90 transition-all"
            style={{ backgroundColor: '#1265c8', color: 'white' }}
          >
            진료 예약하기
          </Link>
        </div>
      </div>
    </>
  );
}
