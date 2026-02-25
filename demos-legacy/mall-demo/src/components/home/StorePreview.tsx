"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ALL_STORES } from "@/data/stores";

export default function StorePreview() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="container-main">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
            STORE INFO
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            매장 안내
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ALL_STORES.map((store, index) => (
            <div
              key={store.name}
              className={`group relative overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-[#1a1a1a] py-16 px-8 text-center">
                <p className="text-xs tracking-[0.3em] text-white/40 mb-3">
                  PREMIA
                </p>
                <h3
                  className="text-2xl md:text-3xl tracking-[0.15em] text-white font-light mb-4"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {store.nameEn}
                </h3>
                <div className="w-8 h-px bg-white/20 mx-auto mb-4" />
                <p className="text-sm text-gray-500">{store.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/stores"
            className="inline-flex items-center gap-3 text-base text-[#b8965a] hover:text-[#96783e] transition-colors group"
          >
            전체 매장 보기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 16 12 12 16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
