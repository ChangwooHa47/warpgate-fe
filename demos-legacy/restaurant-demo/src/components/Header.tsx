"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservation" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-ivory-100/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 lg:px-12 h-16 md:h-[72px]">
          <Link
            href="/"
            className="text-[1.6rem] md:text-[1.8rem] font-logo font-normal tracking-[0.15em] text-charcoal-700 hover:text-charcoal-800 transition-colors"
          >
            소담
          </Link>

          {/* Desktop nav */}
          <nav aria-label="메인 내비게이션" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`text-sm tracking-widest transition-colors ${
                        isActive
                          ? "text-charcoal-800 border-b border-charcoal-600 pb-0.5"
                          : "text-stone-500 hover:text-charcoal-700"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`block h-px w-5 bg-charcoal-700 transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal-700 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal-700 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu - outside header to avoid stacking issues */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-charcoal-800/20 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            aria-label="모바일 내비게이션"
            className="fixed top-16 left-0 right-0 z-50 bg-ivory-100 border-b border-stone-200 md:hidden animate-slide-down"
          >
            <ul className="flex flex-col py-4">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-6 py-3.5 text-sm tracking-widest transition-colors ${
                        isActive
                          ? "text-charcoal-800 bg-ivory-200"
                          : "text-stone-500 hover:text-charcoal-700 hover:bg-ivory-200"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
