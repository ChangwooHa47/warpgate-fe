import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy-950 overflow-hidden">
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-8 pt-32 pb-16 md:px-16 lg:py-0">
          <p className="mb-4 text-base font-medium tracking-wider text-gold-400 opacity-0 animate-fade-in md:text-lg">
            당신의 든든한 조력자
          </p>
          <h1 className="mb-8 font-serif text-5xl font-bold leading-[1.2] text-white opacity-0 animate-fade-up break-keep md:text-6xl xl:text-7xl">
            의뢰인의 어려움을{" "}
            <br className="hidden md:block" />
            끝까지 함께하는 정율
            <span className="text-gold-400">.</span>
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-300 opacity-0 animate-fade-up animate-delay-1 md:text-xl">
            찾아주신 의뢰인께서 어려움에서 벗어나
            <br />
            행복한 삶을 되찾을 수 있도록
            <br />
            법무법인 정율은 최선의 노력을 아끼지 않겠습니다.
          </p>

          <div className="flex items-center gap-5 opacity-0 animate-fade-up animate-delay-2">
            <Link
              href="/consultation"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded bg-gold-400 px-10 py-4 text-base font-semibold text-navy-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_0_24px_rgba(212,168,74,0.3)]"
            >
              무료 상담 예약
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/practice-areas"
              className="inline-block border-b border-slate-500 pb-0.5 text-base font-medium text-slate-300 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              업무분야 보기
            </Link>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative hidden lg:block">
          <img
            src="/images/hero.jpg"
            alt="법무법인 정율"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Left edge fade into navy-950 */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent" />
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-navy-800/60 bg-navy-950/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-navy-800/60 px-8 md:px-16">
          <div className="py-6 text-center">
            <p className="font-serif text-3xl font-bold text-gold-400 md:text-4xl">
              20+
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">업력 (년)</p>
          </div>
          <div className="py-6 text-center">
            <p className="font-serif text-3xl font-bold text-gold-400 md:text-4xl">
              5,000+
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">누적 사건</p>
          </div>
          <div className="py-6 text-center">
            <p className="font-serif text-3xl font-bold text-gold-400 md:text-4xl">
              95%
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">의뢰인 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
}
