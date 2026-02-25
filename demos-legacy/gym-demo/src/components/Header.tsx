"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { NAV_ITEMS } from "@/data/menu";

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
      <header className="sticky top-0 z-50 border-b border-night-600 bg-night-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 lg:px-12 h-16 md:h-[72px]">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-tight text-steel-100 hover:text-mint-400 transition-colors"
          >
            GRIT
          </Link>

          {/* Desktop nav */}
          <nav aria-label="메인 내비게이션" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = pathname === href;
                const isRegister = href === "/register";
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={
                        isRegister
                          ? "text-sm font-medium tracking-wide px-5 py-2 bg-mint-500 text-night-950 hover:bg-mint-400 active:bg-mint-600 transition-colors"
                          : `text-sm tracking-wide transition-colors ${
                              isActive
                                ? "text-mint-400 border-b border-mint-400 pb-0.5"
                                : "text-steel-400 hover:text-steel-100"
                            }`
                      }
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
              className={`block h-px w-5 bg-steel-100 transition-all duration-300 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-steel-100 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-steel-100 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-night-950/60 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            aria-label="모바일 내비게이션"
            className="fixed top-16 left-0 right-0 z-50 bg-night-900 border-b border-night-600 md:hidden animate-slide-down"
          >
            <ul className="flex flex-col py-4">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = pathname === href;
                const isRegister = href === "/register";
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block px-6 py-3.5 text-sm tracking-wide transition-colors ${
                        isRegister
                          ? "text-mint-400 font-medium hover:bg-night-800"
                          : isActive
                            ? "text-steel-100 bg-night-800"
                            : "text-steel-400 hover:text-steel-100 hover:bg-night-800"
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
