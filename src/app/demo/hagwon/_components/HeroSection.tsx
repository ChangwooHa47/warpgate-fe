export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 pt-28 pb-16 flex flex-col">
      {/* Hero Title */}
      <div className="flex-1 flex items-start pt-8 md:pt-16">
        <h1
          className="font-black leading-[1.1] tracking-tight text-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
          }}
        >
          수학의 구조를 잡으면
          <br />
          <span className="text-gray-300">점수는 따라옵니다</span>
        </h1>
      </div>

      {/* Bottom: Tagline left + Philosophy right */}
      <div className="mt-auto flex flex-col md:flex-row justify-between items-end gap-12">
        {/* Left: Tagline */}
        <div>
          <p className="text-sm lg:text-base leading-relaxed text-gray-500" style={{ fontFamily: "var(--font-display)" }}>
            고1 &middot; 고2 &middot; 고3 &middot; 내신 &middot; 수능 &middot; 수학 전문
          </p>
          <p className="text-sm lg:text-base leading-relaxed text-gray-500 mt-1" style={{ fontFamily: "var(--font-display)" }}>
            Prime Math Academy, Daechi-dong
          </p>
        </div>

        {/* Right: Philosophy */}
        <div className="text-right space-y-6">
          <div>
            <p className="text-base md:text-lg lg:text-xl font-bold leading-relaxed">Prime은</p>
            <p className="text-base md:text-lg lg:text-xl font-bold leading-relaxed">개념 이해부터 실전 적용까지</p>
            <p className="text-base md:text-lg lg:text-xl font-bold leading-relaxed">수학 학습의 전 과정을 설계합니다.</p>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-500">많이 푸는 것이 아니라 제대로 푸는 것,</p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-500">양이 아니라 구조를 잡아주는 수업으로</p>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-500">내신과 수능 모두에서</p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-500">흔들리지 않는 실력을 만들어 갑니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
