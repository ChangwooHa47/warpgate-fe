"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../_context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/80 backdrop-blur-md border-b border-line">
      <nav className="max-w-[1200px] mx-auto px-8 md:px-12 h-[60px] flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link
            href="/demo/ecommerce"
            className="text-[15px] tracking-[0.25em] font-light text-primary"
          >
            ORDINAR
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/demo/ecommerce/about"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/demo/ecommerce/products"
              className="text-[13px] text-muted hover:text-primary transition-colors duration-300"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* Right — logged-in state */}
        <div className="flex items-center gap-7">
          {/* Cart */}
          <Link
            href="/demo/ecommerce/cart"
            className="text-muted hover:text-primary transition-colors duration-300 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2.5 w-[16px] h-[16px] bg-primary text-base text-[9px] rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User menu — rightmost */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-[13px] text-muted hover:text-primary transition-colors duration-300"
            >
              <span className="w-[26px] h-[26px] bg-surface rounded-full flex items-center justify-center text-muted border border-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <span className="hidden md:inline">ㅇㅇㅇ</span>
            </button>

            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute right-0 top-11 z-50 w-[160px] bg-base border border-line py-1.5">
                  <Link
                    href="/demo/ecommerce/orders"
                    className="block px-4 py-2.5 text-[13px] text-muted hover:text-primary hover:bg-surface transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    주문 내역
                  </Link>
                  <Link
                    href="/demo/ecommerce/orders/ORD-240215-001"
                    className="block px-4 py-2.5 text-[13px] text-muted hover:text-primary hover:bg-surface transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    주문 조회
                  </Link>
                  <button className="w-full text-left px-4 py-2.5 text-[13px] text-muted hover:text-primary hover:bg-surface transition-colors">
                    로그아웃
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
