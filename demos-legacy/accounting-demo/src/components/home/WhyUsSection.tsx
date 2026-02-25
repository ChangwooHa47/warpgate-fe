const reasons = [
  {
    icon: "👨‍💼",
    title: "전문 세무사 5인 상주",
    description: "각 분야 전문 세무사가 상시 대기하여 신속하고 정확한 서비스를 제공합니다.",
  },
  {
    icon: "🏢",
    title: "중소기업 전문",
    description: "스타트업부터 중견기업까지, 기업 규모에 맞는 맞춤형 세무 솔루션을 제공합니다.",
  },
  {
    icon: "📱",
    title: "실시간 진행 현황",
    description: "고객 포털을 통해 서류 접수 및 처리 현황을 실시간으로 확인할 수 있습니다.",
  },
  {
    icon: "🤝",
    title: "원스톱 서비스",
    description: "세무, 회계, 급여, 컨설팅을 한 곳에서 해결. 별도 업체 없이 통합 관리됩니다.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-accent-500 uppercase">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-4xl font-bold text-navy-900 md:text-5xl">
            한울 세무회계를 선택하는 이유
          </h2>
          <div className="divider mx-auto" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-slate-200 bg-white p-8 text-center transition-all hover:border-accent-300 hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{reason.icon}</div>
              <h3 className="mb-3 text-lg font-bold text-navy-900">
                {reason.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
