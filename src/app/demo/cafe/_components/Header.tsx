"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Cafe Header with updated navigation paths
 * Original: /, /menu, /gallery, /location
 * Migrated: /demo/cafe, /demo/cafe/menu, /demo/cafe/gallery, /demo/cafe/location
 */
const CAFE_BASE = "/demo/cafe";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "소개", href: CAFE_BASE },
    { label: "메뉴", href: `${CAFE_BASE}/menu` },
    { label: "갤러리", href: `${CAFE_BASE}/gallery` },
    { label: "오시는 길", href: `${CAFE_BASE}/location` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(212,197,178,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={CAFE_BASE}
          className="font-serif text-2xl tracking-wide text-espresso hover:text-caramel transition-colors"
        >
          Mellow
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-espresso"
                  : "text-walnut hover:text-espresso"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="메뉴"
        >
          <span
            className={`block w-5 h-px bg-espresso transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-espresso transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-latte/40 px-6 py-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-espresso"
                  : "text-walnut hover:text-espresso"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
