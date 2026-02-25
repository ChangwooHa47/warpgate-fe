"use client";

import { useState } from "react";
import type { Case } from "@/types";
import CaseCard from "./CaseCard";

const categories = ["전체", "민사", "형사", "기업법무", "부동산", "이혼/가사", "상속"];

export default function CaseFilter({ cases }: { cases: Case[] }) {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered =
    activeCategory === "전체"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-6 py-2.5 text-base font-medium transition-colors ${
              activeCategory === cat
                ? "bg-navy-900 text-white"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cases Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg text-slate-400">
            해당 분야의 사례가 없습니다.
          </p>
        </div>
      )}
    </>
  );
}
