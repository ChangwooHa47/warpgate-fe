"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, POPULAR_SEARCHES } from "../../_lib/constants";
import { SearchIcon } from "../ui/Icons";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/demo/estate/properties?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 py-14 md:py-18">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[36px] md:text-[44px] font-bold text-gray-900 mb-3 leading-tight">
            어떤 집을 찾고 계세요?
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-500 mb-8">
            강남, 서초, 송파 등 서울 핵심 지역 매물을 한눈에
          </p>

          <form onSubmit={handleSearch} className="flex items-center bg-white border border-gray-300 rounded-xl shadow-sm hover:border-primary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            <div className="flex-1 flex items-center px-5 gap-3">
              <SearchIcon className="w-6 h-6 text-gray-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="지역명, 아파트명, 지하철역으로 검색"
                className="w-full py-4 text-[17px] outline-none placeholder:text-gray-400 bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white text-[16px] font-semibold rounded-lg hover:bg-primary-dark transition-colors m-2"
            >
              검색
            </button>
          </form>

          <div className="flex items-center justify-center gap-1 mt-5 flex-wrap">
            <span className="text-[14px] text-gray-400 mr-1">인기검색</span>
            {POPULAR_SEARCHES.map((tag) => (
              <button
                key={tag}
                onClick={() => router.push(`/demo/estate/properties?q=${encodeURIComponent(tag)}`)}
                className="px-3 py-1.5 text-[14px] text-gray-500 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.value}
                href="/demo/estate/properties"
                className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${cat.color} hover:shadow-md transition-all text-center`}
              >
                <span className="text-[28px] group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-[14px] font-semibold text-gray-800">
                  {cat.value}
                </span>
                <span className="text-[12px] text-gray-500 leading-tight hidden md:block">
                  {cat.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
