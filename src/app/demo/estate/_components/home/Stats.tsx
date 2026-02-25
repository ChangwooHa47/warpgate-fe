export default function Stats() {
  const stats = [
    { label: "누적 거래 건수", value: "2,500+", suffix: "건" },
    { label: "고객 만족도", value: "98", suffix: "%" },
    { label: "전문 컨설턴트", value: "15", suffix: "명" },
    { label: "업력", value: "20", suffix: "년" },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-background">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
