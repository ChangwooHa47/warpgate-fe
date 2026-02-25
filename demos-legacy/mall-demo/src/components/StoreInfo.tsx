"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ALL_STORES } from "@/data/stores";

export default function StoreInfo() {
  const { ref: sectionRef, visible } = useIntersectionObserver<HTMLElement>();
  const [activeStore, setActiveStore] = useState(0);

  return (
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - store visual */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div
              className="relative aspect-[4/3] rounded-sm overflow-hidden"
              style={{ background: ALL_STORES[activeStore].gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm tracking-[0.3em] text-white/50 mb-4">
                    PREMIA
                  </p>
                  <h3
                    className="text-4xl md:text-5xl tracking-[0.15em] font-light"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {ALL_STORES[activeStore].nameEn}
                  </h3>
                  <div className="w-12 h-px bg-white/30 mx-auto mt-6" />
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-white/10" aria-hidden="true" />
            </div>
          </div>

          {/* Right - store info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] text-[#b8965a] mb-4">
              STORE INFO
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              매장 안내
            </h2>

            <div className="flex gap-2 mb-10" role="tablist" aria-label="매장 선택">
              {ALL_STORES.map((store, index) => (
                <button
                  key={store.name}
                  onClick={() => setActiveStore(index)}
                  role="tab"
                  aria-selected={index === activeStore}
                  className={`px-6 py-3 text-base transition-all duration-300 ${
                    index === activeStore
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {store.name}
                </button>
              ))}
            </div>

            <div className="space-y-7" role="tabpanel">
              <div className="flex items-start gap-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8965a" strokeWidth="1.5" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">주소</p>
                  <p className="text-base text-gray-800">{ALL_STORES[activeStore].address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8965a" strokeWidth="1.5" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">영업시간</p>
                  <p className="text-base text-gray-800">{ALL_STORES[activeStore].hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8965a" strokeWidth="1.5" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 mb-1">대표전화</p>
                  <p className="text-base text-gray-800">{ALL_STORES[activeStore].phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
