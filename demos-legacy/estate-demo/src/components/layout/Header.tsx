"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon, ListIcon } from "@/components/ui/Icons";

const navItems = [
  { href: "/properties", label: "매물" },
  { href: "/areas", label: "지역정보" },
  { href: "/consultation", label: "상담" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-5 h-[56px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-[28px] h-[28px] bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-[13px]">한</span>
          </div>
          <span className="text-[17px] font-bold tracking-tight">강남한결부동산</span>
        </Link>

        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-1.5 text-[15px] rounded transition-colors ${
                pathname.startsWith(item.href)
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {!isHome && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) router.push(`/properties?q=${encodeURIComponent(query)}`);
            }}
            className="flex-1 max-w-sm hidden sm:flex items-center bg-gray-100 rounded-lg px-3 gap-2"
          >
            <SearchIcon className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="지역, 아파트 검색"
              className="flex-1 py-2 text-[15px] bg-transparent outline-none placeholder:text-gray-400"
            />
          </form>
        )}

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <Link
            href="/consultation"
            className="hidden sm:inline-flex px-4 py-[7px] text-[14px] font-medium border border-gray-300 text-gray-700 rounded-md hover:border-primary hover:text-primary transition-colors"
          >
            상담예약
          </Link>
          <button className="md:hidden p-1.5" aria-label="메뉴">
            <ListIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
