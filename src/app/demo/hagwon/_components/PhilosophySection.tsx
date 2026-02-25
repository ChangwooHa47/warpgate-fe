export default function PhilosophySection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 px-8 md:px-12 lg:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-sm lg:text-base tracking-[0.3em] text-gray-500 uppercase" style={{ fontFamily: "var(--font-display)" }}>
            About
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            이런 수업을 합니다
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="space-y-5">
            <div className="text-5xl lg:text-6xl font-black text-white/10" style={{ fontFamily: "var(--font-display)" }}>01</div>
            <h3 className="text-xl lg:text-2xl font-bold">개념을 정리하는 수업</h3>
            <p className="text-gray-400 text-base lg:text-lg leading-[1.8]">
              공식을 외우게 하지 않습니다.
              <br />
              개념이 어떻게 연결되는지를 정리해
              <br />
              문제를 구조로 이해하게 합니다.
            </p>
          </div>

          <div className="space-y-5">
            <div className="text-5xl lg:text-6xl font-black text-white/10" style={{ fontFamily: "var(--font-display)" }}>02</div>
            <h3 className="text-xl lg:text-2xl font-bold">실전에 맞춘 훈련</h3>
            <p className="text-gray-400 text-base lg:text-lg leading-[1.8]">
              많이 푸는 대신, 정확히 훈련합니다.
              <br />
              출제 유형을 선별해 반복하고
              <br />
              시험장에서 바로 쓰일 감각을 만듭니다.
            </p>
          </div>

          <div className="space-y-5">
            <div className="text-5xl lg:text-6xl font-black text-white/10" style={{ fontFamily: "var(--font-display)" }}>03</div>
            <h3 className="text-xl lg:text-2xl font-bold">개인별 학습 관리</h3>
            <p className="text-gray-400 text-base lg:text-lg leading-[1.8]">
              모든 학생을 같은 방식으로 보지 않습니다.
              <br />
              개인별 약점과 흐름을 관리해
              <br />
              학습이 끊기지 않도록 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
