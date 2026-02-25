"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FIRM_NAME } from "@/lib/constants";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function HeroSection() {
  const years = useCountUp(15, 800);
  const clients = useCountUp(3000, 1200);
  const satisfaction = useCountUp(98, 1000);

  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-950">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pt-32 pb-32 md:px-16">
        <p className="mb-4 animate-fade-in text-base font-medium tracking-wider text-accent-400 opacity-0 md:text-lg">
          기업의 성장을 함께하는 세무 파트너
        </p>
        <h1 className="mb-8 animate-fade-up text-5xl font-bold leading-[1.2] text-white opacity-0 break-keep md:text-6xl xl:text-7xl">
          정확한 세무 서비스로
          <br className="hidden md:block" />
          기업의 미래를 설계합니다
          <span className="text-accent-400">.</span>
        </h1>

        <p className="mb-10 max-w-lg animate-fade-up animate-delay-1 text-lg leading-relaxed text-slate-300 opacity-0 md:text-xl">
          법인세, 소득세, 부가가치세부터 경영 컨설팅까지
          <br />
          {FIRM_NAME}의 전문 세무사가 함께합니다.
        </p>

        <div className="flex animate-fade-up animate-delay-2 items-center gap-5 opacity-0">
          <Link
            href="/consultation"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded bg-accent-400 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-accent-300 hover:shadow-[0_0_24px_rgba(33,150,243,0.3)]"
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
            href="/services"
            className="inline-block border-b border-slate-500 pb-0.5 text-base font-medium text-slate-300 transition-colors hover:border-accent-400 hover:text-accent-400"
          >
            서비스 보기
          </Link>
        </div>
      </div>

      {/* Background gradient decoration */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-accent-600/5 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-navy-950/80 to-transparent" />

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-navy-800/60 bg-navy-950/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-navy-800/60 px-8 md:px-16">
          <div ref={years.ref} className="py-6 text-center">
            <p className="text-3xl font-bold text-accent-400 md:text-4xl">
              {years.count}+
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">업력 (년)</p>
          </div>
          <div ref={clients.ref} className="py-6 text-center">
            <p className="text-3xl font-bold text-accent-400 md:text-4xl">
              {clients.count.toLocaleString()}+
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">누적 고객사</p>
          </div>
          <div ref={satisfaction.ref} className="py-6 text-center">
            <p className="text-3xl font-bold text-accent-400 md:text-4xl">
              {satisfaction.count}%
            </p>
            <p className="mt-1 text-sm text-slate-400 md:text-base">고객 만족도</p>
          </div>
        </div>
      </div>
    </section>
  );
}
