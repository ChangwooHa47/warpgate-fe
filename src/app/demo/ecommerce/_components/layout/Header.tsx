"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../_context/CartContext";

const BASE_PATH = "/demo/ecommerce";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-sm border-b border-line">
      <nav className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={BASE_PATH}
            className="text-lg tracking-[0.3em] font-light uppercase"
          >
            Mono
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href={`${BASE_PATH}/products`}
              className="text-[13px] tracking-wide text-muted hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link
              href={`${BASE_PATH}/orders`}
              className="text-[13px] tracking-wide text-muted hover:text-primary transition-colors"
            >
              Orders
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            {/* Cart */}
            <Link href={`${BASE_PATH}/cart`} className="relative">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-base text-[9px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-7 h-7 rounded-full bg-surface flex items-center justify-center text-xs text-muted hover:text-primary transition-colors"
              >
                U
              </button>
              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-base border border-line py-2 shadow-sm">
                  <Link
                    href={`${BASE_PATH}/orders`}
                    className="block px-4 py-2 text-sm text-muted hover:text-primary hover:bg-surface transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    주문 내역
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm text-muted hover:text-primary hover:bg-surface transition-colors">
                    로그아웃
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
