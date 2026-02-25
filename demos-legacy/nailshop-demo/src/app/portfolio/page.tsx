"use client";

import { useState } from "react";

const filters = ["ALL", "GEL", "ART", "PEDICURE", "SEASONAL"];

const works = [
  { id: 1, title: "Cherry Blossom", ko: "봄꽃 핸드페인팅", cat: "ART", artist: "OOO", tags: ["Painting", "Floral"] },
  { id: 2, title: "Classic French", ko: "클래식 프렌치", cat: "GEL", artist: "OOO", tags: ["French", "Bridal"] },
  { id: 3, title: "Aurora Glitter", ko: "오로라 글리터", cat: "GEL", artist: "OOO", tags: ["Glitter", "Party"] },
  { id: 4, title: "Rose Sculpture", ko: "3D 장미", cat: "ART", artist: "OOO", tags: ["3D", "Bridal"] },
  { id: 5, title: "Ocean Blue", ko: "여름 바다 페디", cat: "PEDICURE", artist: "OOO", tags: ["Summer", "Blue"] },
  { id: 6, title: "Holiday Red", ko: "크리스마스 스페셜", cat: "SEASONAL", artist: "OOO", tags: ["Christmas", "Gold"] },
  { id: 7, title: "Nude Minimal", ko: "미니멀 누드", cat: "GEL", artist: "OOO", tags: ["Minimal", "Office"] },
  { id: 8, title: "Leopard Print", ko: "레오파드 패턴", cat: "ART", artist: "OOO", tags: ["Animal", "Trend"] },
  { id: 9, title: "Valentine Heart", ko: "발렌타인 하트", cat: "SEASONAL", artist: "OOO", tags: ["Valentine", "Pink"] },
  { id: 10, title: "Spa Pedicure", ko: "스파 풋 케어", cat: "PEDICURE", artist: "OOO", tags: ["Spa", "Care"] },
  { id: 11, title: "Galaxy Cat Eye", ko: "갤럭시 캣아이", cat: "GEL", artist: "OOO", tags: ["Magnet", "Galaxy"] },
  { id: 12, title: "Autumn Leaves", ko: "가을 단풍", cat: "SEASONAL", artist: "OOO", tags: ["Autumn", "Season"] },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? works : works.filter((w) => w.cat === active);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] text-primary mb-4">OUR WORKS</p>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-[0.08em]">포트폴리오</h1>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-6 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs tracking-[0.2em] pb-2 transition-all duration-300 ${
              active === f
                ? "text-primary border-b border-primary"
                : "text-muted hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-card-bg border border-border rounded overflow-hidden group cursor-pointer hover:bg-card-hover hover:border-primary/30 transition-all duration-500"
          >
            {/* Image area */}
            <div className="aspect-square bg-surface relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700">
                  {item.cat === "GEL" ? "◆" : item.cat === "ART" ? "◇" : item.cat === "PEDICURE" ? "○" : "✦"}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-light tracking-wide mb-1">{item.ko}</p>
                  <p className="text-xs tracking-[0.2em] text-primary">{item.title}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-baseline justify-between mb-3">
                <p className="text-xs tracking-[0.2em] text-primary">{item.title}</p>
                <p className="text-xs text-muted">{item.artist}</p>
              </div>
              <div className="flex gap-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs tracking-wider text-muted">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
