"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/data/siteData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header
      className="bg-white sticky top-0 z-50"
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.10)' }}
    >
      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-[52px]">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-[var(--primary)]">
            {SITE.name}
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden md:flex items-stretch h-full">
            <nav className="flex items-stretch h-full gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative group flex"
                  onMouseEnter={() => setOpenSub(item.href)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <Link
                    href={item.href}
                    className="px-4 flex items-center text-[15px] font-semibold text-gray-600 hover:text-[#1265c8] transition relative after:absolute after:bottom-[10px] after:left-4 after:right-4 after:h-[2px] after:bg-[#1265c8] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                  >
                    {item.label}
                  </Link>
                  {item.children.length > 0 && openSub === item.href && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="bg-white border border-gray-100 rounded-xl shadow-lg min-w-[180px] py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-gray-500 hover:bg-[#eef5fb] hover:text-[#1265c8] hover:font-bold transition rounded-lg mx-1"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA button */}
            <div className="flex items-center ml-3">
              <Link
                href="/appointment"
                className="flex items-center px-5 py-1.5 rounded-full text-[14px] font-bold hover:bg-blue-50 active:scale-[0.97] transition"
                style={{ border: '1.5px solid #3b82e8', color: '#3b82e8', background: 'transparent' }}
              >
                진료 예약
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-[#1265c8] rounded-lg hover:bg-gray-50"
            aria-label="메뉴"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="py-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#eef5fb] hover:text-[#1265c8] transition"
                  onClick={() => {
                    if (item.children.length === 0) setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Link>
                {item.children.length > 0 && (
                  <div className="bg-gray-50/50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-9 py-2.5 text-sm text-gray-400 hover:text-[#1265c8]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
