import Link from "next/link";
import { SITE, DOCTORS } from "../_data/siteData";
import PageHero from "../_components/PageHero";
import ImagePlaceholder from "../_components/ImagePlaceholder";

export const metadata = {
  title: `의료진 소개 - ${SITE.name}`,
};

export default function DoctorsPage() {
  const featuredDoctor = DOCTORS[0];
  const otherDoctors = DOCTORS.slice(1);

  return (
    <>
      <PageHero title="의료진 소개" subtitle="의학박사 & 안과 전문의로 이루어진 프리미엄 의료진을 만나보세요" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured Doctor (CEO) */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-0 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.06)]">
            {/* Large Photo */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-50">
              <ImagePlaceholder
                height="420px"
                label="대표원장 사진"
                className="!rounded-none !border-0 h-full"
              />
            </div>

            {/* Info */}
            <div className="pl-12 pr-8 py-5 md:pl-14 md:pr-10 md:py-6 flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-1">{SITE.name} CEO</p>
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-1">
                  <h2 className="text-3xl font-bold tracking-tight">{featuredDoctor.name}</h2>
                  <span className="text-gray-300">·</span>
                  <span className="text-base font-semibold text-[var(--primary)]">{featuredDoctor.position}</span>
                </div>
                <p className="text-base text-gray-400">진료 분야: {featuredDoctor.specialty}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { title: "학력", items: featuredDoctor.education },
                  { title: "경력", items: featuredDoctor.career },
                ].map((section) => (
                  <div key={section.title}>
                    <h3 className="font-bold text-gray-800 mb-2 pb-1.5 border-b border-gray-100 text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-1 text-gray-500">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-[var(--accent)] shrink-0">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-2">
                  <h3 className="font-bold text-gray-800 mb-2 pb-1.5 border-b border-gray-100 text-sm uppercase tracking-wider">
                    학회 활동
                  </h3>
                  <ul className="space-y-1 text-gray-500">
                    {featuredDoctor.society.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-[var(--accent)] shrink-0">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Doctors Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {otherDoctors.map((doctor) => (
              <article key={doctor.id} className="group">
                <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl overflow-hidden mb-3 aspect-[3/4]">
                  <ImagePlaceholder
                    height="100%"
                    label="의료진 사진"
                    className="!rounded-none !border-0 h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg tracking-tight">{doctor.name}</h3>
                  <p className="text-sm font-semibold text-[var(--primary)] mt-0.5">{doctor.position}</p>
                  <p className="text-sm text-gray-400">{doctor.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Detailed Info for all doctors */}
        <section className="mt-16">
          <h2 className="text-xl font-bold tracking-tight border-b-2 border-[var(--primary)] pb-3 mb-6">의료진 상세 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DOCTORS.map((doctor) => (
              <article
                key={doctor.id}
                className="bg-white border border-gray-200 rounded-xl p-5 pl-8 shadow-[0_0_20px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-bold text-2xl tracking-tight">{doctor.name}</h3>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-semibold text-[var(--primary)]">{doctor.position}</span>
                  </div>
                  <p className="text-sm text-gray-400">{doctor.specialty}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {[
                    { title: "학력", items: doctor.education },
                    { title: "경력", items: doctor.career },
                  ].map((section) => (
                    <div key={section.title}>
                      <h4 className="font-bold text-gray-700 mb-1.5 pb-1.5 border-b border-gray-100 text-xs uppercase tracking-wider">{section.title}</h4>
                      <ul className="space-y-1 text-gray-500">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-1.5 text-xs">
                            <span className="text-gray-300 shrink-0">-</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 mt-2">
                    <h4 className="font-bold text-gray-700 mb-1.5 pb-1.5 border-b border-gray-100 text-xs uppercase tracking-wider">학회 활동</h4>
                    <ul className="space-y-1 text-gray-500">
                      {doctor.society.map((item, i) => (
                        <li key={i} className="flex gap-1.5 text-xs">
                          <span className="text-gray-300 shrink-0">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-3">
          <Link
            href="/demo/hospital/appointment"
            className="text-white px-7 py-3 rounded-full text-sm font-bold hover:brightness-90 transition-all"
            style={{ backgroundColor: '#1265c8', color: 'white' }}
          >
            진료 예약하기
          </Link>
          <Link
            href="/demo/hospital/contact"
            className="outline-hover border border-gray-200 text-gray-600 px-7 py-3 rounded-full text-sm font-bold transition-all"
          >
            상담 문의
          </Link>
        </div>
      </div>
    </>
  );
}
