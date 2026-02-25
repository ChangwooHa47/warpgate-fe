"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/practice-areas", label: "업무분야" },
  { href: "/attorneys", label: "변호사 소개" },
  { href: "/cases", label: "업무사례" },
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
          <span className="font-serif text-2xl font-bold tracking-wide text-gold-400">
            正律
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
                  ? "text-gold-400"
                  : "text-slate-200 hover:text-gold-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/consultation"
            className="rounded bg-gold-400 px-6 py-2.5 text-base font-medium text-navy-950 transition-colors hover:bg-gold-300"
          >
            상담 예약
          </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-navy-800 text-gold-400"
                    : "text-slate-200 hover:bg-navy-800 hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="mt-2 rounded-lg bg-gold-400 px-4 py-3 text-center text-base font-medium text-navy-950 transition-colors hover:bg-gold-300"
            >
              상담 예약
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
