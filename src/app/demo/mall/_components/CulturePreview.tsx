"use client";

import Link from "next/link";
import { useIntersectionObserver } from "../_hooks/useIntersectionObserver";

export default function CulturePreview() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ background: "linear-gradient(135deg, #2d2b28 0%, #1a1a1a 100%)" }}
    >
      <div className="container-main">
        <div
          className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
              ART & CULTURE
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              아트 & 컬처
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-8">
              PREMIA가 선사하는 특별한 예술적 경험.
              <br />
              전시, 공연, 문화 프로그램을 만나보세요.
            </p>
            <Link
              href="/demo/mall/culture"
              className="inline-flex items-center gap-3 text-base text-[#b8965a] hover:text-[#d4b078] transition-colors group"
            >
              자세히 보기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 8 16 12 12 16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-3xl md:text-4xl tracking-[0.2em] text-white/20 font-light"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    PREMIA
                  </p>
                  <p className="text-sm tracking-[0.3em] text-white/30 mt-3">
                    ART HALL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
