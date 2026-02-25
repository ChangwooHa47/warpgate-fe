"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PREVIEW_ARTICLES } from "@/data/articles";

export default function MagazinePreview() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-spacing bg-[#1a1a1a]">
      <div className="container-main">
        <div
          className={`flex items-end justify-between mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
              PREMIA MAGAZINE
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              매거진
            </h2>
          </div>
          <Link
            href="/magazine"
            className="hidden md:flex items-center gap-3 text-base text-gray-400 hover:text-white transition-colors group"
          >
            전체보기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PREVIEW_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: article.gradient }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-2xl tracking-[0.2em] font-light text-black/15"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    PREMIA
                  </span>
                </div>
              </div>
              <p className="text-sm tracking-[0.15em] text-[#b8965a] mb-3">
                {article.category}
              </p>
              <h3 className="text-lg text-white leading-relaxed group-hover:text-gray-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-3 text-sm text-gray-400 border border-gray-600 rounded-full px-7 py-3 hover:bg-white/5 transition-colors"
          >
            전체보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
