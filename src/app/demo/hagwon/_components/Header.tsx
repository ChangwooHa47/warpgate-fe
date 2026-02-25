"use client";

import { useState } from "react";
import Link from "next/link";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 py-5">
          {/* Left: Logo */}
          <div className="flex items-center gap-5">
            <Link
              href="/demo/hagwon"
              className="text-[22px] font-extrabold tracking-tight uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prime
            </Link>
            <div className="hidden md:block h-4 w-px bg-gray-200" />
            <span
              className="hidden md:block text-[11px] tracking-[0.15em] text-gray-400 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Math Academy
            </span>
          </div>

          {/* Right: Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/demo/hagwon/courses" className="text-[15px] font-medium hover:text-gray-600 transition-colors">강좌소개</Link>
            <Link href="/demo/hagwon/teachers" className="text-[15px] font-medium hover:text-gray-600 transition-colors">강사소개</Link>
            <Link href="/demo/hagwon/schedule" className="text-[15px] font-medium hover:text-gray-600 transition-colors">시간표</Link>
            <button
              onClick={() => setConsultOpen(true)}
              className="text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              상담 신청
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="메뉴"
          >
            <span className="w-5 h-[1.5px] bg-black" />
            <span className="w-5 h-[1.5px] bg-black" />
            <span className="w-5 h-[1.5px] bg-black" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-8 py-6">
            <nav className="flex flex-col gap-4">
              <Link href="/demo/hagwon/courses" className="text-base font-medium" onClick={() => setMenuOpen(false)}>강좌소개</Link>
              <Link href="/demo/hagwon/teachers" className="text-base font-medium" onClick={() => setMenuOpen(false)}>강사소개</Link>
              <Link href="/demo/hagwon/schedule" className="text-base font-medium" onClick={() => setMenuOpen(false)}>시간표</Link>
              <button
                className="text-base font-medium text-left"
                onClick={() => { setMenuOpen(false); setConsultOpen(true); }}
              >
                상담 신청
              </button>
            </nav>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </>
  );
}
