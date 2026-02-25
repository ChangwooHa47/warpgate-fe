"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "점포 안내", href: "/demo/mall/stores" },
  { label: "쇼핑 정보", href: "/demo/mall/shopping" },
  { label: "브랜드", href: "/demo/mall/brands" },
  { label: "아트 & 컬처", href: "/demo/mall/culture" },
  { label: "매거진", href: "/demo/mall/magazine" },
  { label: "고객 서비스", href: "/demo/mall/service" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        {/* Top bar */}
        <div className="border-b border-gray-100">
          <div className="container-main flex justify-end items-center h-8 gap-4 text-xs text-gray-500">
            <button className="hover:text-gray-900 transition-colors font-medium">
              KR
            </button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-gray-900 transition-colors">
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-gray-900 transition-colors">
              CN
            </button>
            <span className="text-gray-300 ml-2">|</span>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              온라인몰
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="container-main flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/demo/mall" className="flex-shrink-0">
            <h1
              className="text-2xl tracking-[0.3em] font-bold"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              PREMIA
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] transition-colors relative group py-2 ${
                  pathname === item.href || pathname?.startsWith(item.href + "/")
                    ? "text-black font-medium"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${
                    pathname === item.href || pathname?.startsWith(item.href + "/")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              로그인
            </a>
            <span className="hidden sm:block text-gray-200">|</span>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 hover:opacity-60 transition-opacity"
              aria-label="검색"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={menuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 animate-slide-down">
            <div className="container-main py-4">
              <div className="flex items-center gap-3 max-w-[600px] mx-auto">
                <label htmlFor="site-search" className="sr-only">검색</label>
                <input
                  id="site-search"
                  type="text"
                  placeholder="브랜드, 매장, 이벤트를 검색하세요"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  autoFocus
                />
                <button className="bg-black text-white rounded-full px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
                  검색
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white animate-slide-down">
            <div className="pt-28 px-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block py-4 text-lg border-b border-gray-100 transition-colors ${
                    pathname === item.href || pathname?.startsWith(item.href + "/")
                      ? "text-black font-medium"
                      : "text-gray-800 hover:text-black"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
