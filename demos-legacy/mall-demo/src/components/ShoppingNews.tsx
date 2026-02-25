"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ALL_NEWS_ITEMS } from "@/data/news";

const PAGE_SIZE = 4;

export default function ShoppingNews() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();
  const { loadMoreRef, displayedItems, hasMore, loading } = useInfiniteScroll({
    items: ALL_NEWS_ITEMS,
    pageSize: PAGE_SIZE,
  });

  return (
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="container-main">
        <div
          className={`mb-16 transition-all duration-700 ${
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedItems.map((item, index) => (
            <article
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % PAGE_SIZE) * 150}ms` }}
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

        {hasMore && (
          <div ref={loadMoreRef} className="flex justify-center py-12">
            {loading && (
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-5 h-5 border-2 border-gray-300 border-t-[#b8965a] rounded-full animate-spin" />
                <span className="text-sm">불러오는 중...</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
