"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRM_NAME, MOCK_USER } from "@/lib/constants";

const navLinks = [
  { href: "/services", label: "서비스 소개" },
  { href: "/consultation", label: "세무 상담" },
  { href: "/portal", label: "고객 포털" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const headerBg =
    scrolled || !isHome
      ? "bg-navy-900/95 backdrop-blur-md shadow-lg"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wide text-accent-400">
            {FIRM_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-accent-400"
                  : "text-slate-200 hover:text-accent-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Fake logged-in user */}
          <div className="flex items-center gap-2 rounded-full bg-navy-800/60 py-1.5 pr-4 pl-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-white">
              {MOCK_USER.name[0]}
            </div>
            <span className="text-sm font-medium text-slate-200">
              {MOCK_USER.name} {MOCK_USER.title}
            </span>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span
            className={`block h-0.5 w-7 bg-slate-100 transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-slate-100 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-slate-100 transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-slide-down border-t border-navy-700 bg-navy-900/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {/* Mobile user info */}
            <div className="mb-3 flex items-center gap-3 rounded-lg bg-navy-800/60 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-400 text-sm font-bold text-white">
                {MOCK_USER.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-100">
                  {MOCK_USER.name} {MOCK_USER.title}
                </p>
                <p className="text-xs text-slate-400">{MOCK_USER.company}</p>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-navy-800 text-accent-400"
                    : "text-slate-200 hover:bg-navy-800 hover:text-accent-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="mt-2 rounded-lg bg-accent-400 px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-accent-300"
            >
              무료 상담 예약
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
