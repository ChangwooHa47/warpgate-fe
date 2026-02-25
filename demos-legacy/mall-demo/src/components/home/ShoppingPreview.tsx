"use client";

import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PREVIEW_NEWS } from "@/data/news";

export default function ShoppingPreview() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="container-main">
        <div
          className={`flex items-end justify-between mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-400 mb-4">
              SHOPPING NEWS & EVENT
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              쇼핑 뉴스
            </h2>
          </div>
          <Link
            href="/shopping"
            className="hidden md:flex items-center gap-3 text-base text-gray-500 hover:text-black transition-colors group"
          >
            전체보기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PREVIEW_NEWS.map((item, index) => (
            <article
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: item.image }}
                />
                {item.tag && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-sm ${
                      item.tag === "HOT"
                        ? "bg-red-500 text-white"
                        : item.tag === "NEW"
                          ? "bg-black text-white"
                          : "bg-white text-black"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <p className="text-sm tracking-[0.15em] text-[#b8965a] mb-3">
                {item.category}
              </p>
              <h3 className="text-base text-gray-900 leading-relaxed group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mt-3">{item.date}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/shopping"
            className="inline-flex items-center gap-3 text-sm text-gray-500 border border-gray-300 rounded-full px-7 py-3 hover:bg-gray-50 transition-colors"
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
