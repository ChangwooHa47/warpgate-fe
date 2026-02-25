import Link from "next/link";

const programs = [
  {
    id: "01",
    title: "고1 정규반",
    subtitle: "수학(상) · 수학(하)",
    description: "고등 수학 기초 개념 정립과 내신 대비 집중 훈련",
  },
  {
    id: "02",
    title: "고2 정규반",
    subtitle: "수학 I · 수학 II",
    description: "수능 기초 완성과 학교별 내신 맞춤 대비",
  },
  {
    id: "03",
    title: "고3 수능반",
    subtitle: "미적분 · 확률과 통계",
    description: "수능 실전 감각 극대화, 킬러·준킬러 집중 공략",
  },
  {
    id: "04",
    title: "내신 특강",
    subtitle: "학교별 기출 분석",
    description: "중간·기말 시험 4주 전 집중 내신 대비 프로그램",
  },
];

export default function ProgramSection() {
  return (
    <section className="py-32 px-8 md:px-12 lg:px-16" id="programs">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <span className="text-sm lg:text-base tracking-[0.3em] text-gray-400 uppercase" style={{ fontFamily: "var(--font-display)" }}>
              Programs
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              수업 안내
            </h2>
          </div>
          <Link
            href="/demo/hagwon/courses"
            className="mt-6 md:mt-0 text-sm lg:text-base font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-2"
          >
            자세히 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-200">
          {programs.map((program) => (
            <Link
              key={program.id}
              href="/demo/hagwon/courses"
              className="group flex items-start gap-6 py-10 lg:py-12 px-6 border-b border-gray-200 md:odd:border-r hover:bg-gray-50 transition-colors"
            >
              <span
                className="text-sm lg:text-base text-gray-300 font-medium mt-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {program.id}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">{program.title}</h3>
                  <span className="text-sm lg:text-base text-gray-400" style={{ fontFamily: "var(--font-display)" }}>
                    {program.subtitle}
                  </span>
                </div>
                <p className="text-base lg:text-lg text-gray-500">{program.description}</p>
              </div>
              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
