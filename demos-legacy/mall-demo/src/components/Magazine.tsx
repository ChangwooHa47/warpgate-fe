"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ALL_ARTICLES } from "@/data/articles";

const PAGE_SIZE = 3;

export default function Magazine() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();
  const { loadMoreRef, displayedItems, hasMore, loading } = useInfiniteScroll({
    items: ALL_ARTICLES,
    pageSize: PAGE_SIZE,
  });

  return (
    <section ref={sectionRef} className="section-spacing bg-[#1a1a1a]">
      <div className="container-main">
        <div
          className={`mb-16 transition-all duration-700 ${
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
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedItems.map((article, index) => (
            <article
              key={article.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % PAGE_SIZE) * 150}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: article.gradient }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-2xl tracking-[0.2em] font-light ${
                      index % 3 === 2 ? "text-white/30" : "text-black/15"
                    }`}
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

        {hasMore && (
          <div ref={loadMoreRef} className="flex justify-center py-12">
            {loading && (
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-5 h-5 border-2 border-gray-600 border-t-[#b8965a] rounded-full animate-spin" />
                <span className="text-sm">불러오는 중...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
