"use client";

import { useState } from "react";
import Link from "next/link";

interface Notice {
  id: number;
  category: string;
  title: string;
  date: string;
  content: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "공지사항": "bg-blue-50 text-blue-600",
  "휴진안내": "bg-red-50 text-red-500",
  "병원소식": "bg-emerald-50 text-emerald-600",
};

const categories = ["전체", ...Object.keys(CATEGORY_COLORS)];

export default function NoticeList({ notices }: { notices: Notice[] }) {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered =
    activeCategory === "전체"
      ? notices
      : notices.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "outline-hover border border-gray-200 text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notice list */}
      <div className="divide-y divide-gray-100">
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-base text-gray-400">
            해당 카테고리에 공지사항이 없습니다.
          </p>
        ) : (
          filtered.map((notice) => (
            <Link
              key={notice.id}
              href={`/demo/hospital/notices/${notice.id}`}
              className="flex items-center justify-between gap-4 py-4 group"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span
                  className={`px-2.5 py-0.5 text-xs rounded font-semibold shrink-0 ${
                    CATEGORY_COLORS[notice.category] || "bg-gray-100 text-gray-500"
                  }`}
                >
                  {notice.category}
                </span>
                <h3 className="text-base text-gray-700 group-hover:text-[#1265c8] transition truncate">
                  {notice.title}
                </h3>
              </div>
              <span className="text-sm text-gray-500 shrink-0">{notice.date}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
