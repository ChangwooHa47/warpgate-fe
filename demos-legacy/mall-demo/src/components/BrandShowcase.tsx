"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ALL_BRANDS } from "@/data/brands";

const PAGE_SIZE = 8;

export default function BrandShowcase() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();
  const { loadMoreRef, displayedItems, hasMore, loading } = useInfiniteScroll({
    items: ALL_BRANDS,
    pageSize: PAGE_SIZE,
  });

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
          {displayedItems.map((brand, index) => (
            <div
              key={brand.name}
              className={`group bg-white py-14 px-6 text-center cursor-pointer transition-all duration-700 hover:shadow-lg ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index % PAGE_SIZE) * 100}ms` }}
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
