"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PREVIEW_BRANDS } from "@/data/brands";

export default function BrandPreview() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-spacing bg-[#f8f7f5]">
      <div className="container-main">
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
            PREMIUM BRANDS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            프리미엄 브랜드
          </h2>
          <p className="text-gray-500 text-base mt-5 max-w-lg mx-auto leading-relaxed">
            세계적인 럭셔리 브랜드부터 감각적인 컨템포러리 브랜드까지,
            <br className="hidden md:block" />
            PREMIA에서 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {PREVIEW_BRANDS.map((brand, index) => (
            <div
              key={brand.name}
              className={`group bg-white py-14 px-6 text-center cursor-pointer transition-all duration-700 hover:shadow-lg ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p
                className="text-xl md:text-2xl tracking-[0.1em] text-gray-800 group-hover:text-[#b8965a] transition-colors duration-300"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {brand.name}
              </p>
              <p className="text-sm text-gray-400 mt-3">{brand.category}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-3 text-base tracking-[0.15em] text-gray-700 border border-gray-300 px-10 py-4 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            ALL BRANDS
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
