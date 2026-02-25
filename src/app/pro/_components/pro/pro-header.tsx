'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../../_lib/utils';

export function ProHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 backdrop-blur-[60px]">
      <nav className="flex items-center justify-between px-[98px] py-3 max-lg:px-6">
        {/* Logo */}
        <Link href="/pro" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Warpgate"
            width={105}
            height={24}
            priority
          />
        </Link>

        {/* CTA Button - Desktop */}
        <Link
          href="/pro/inquiry"
          className="hidden md:flex items-center justify-center rounded-[6px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#030406] transition-opacity hover:opacity-90"
          style={{ letterSpacing: '-0.0175em' }}
        >
          견적문의하기
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-gray-300 hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 px-6',
          mobileMenuOpen ? 'max-h-40 pb-4' : 'max-h-0'
        )}
      >
        <Link
          href="/pro/inquiry"
          className="flex items-center justify-center rounded-[6px] bg-primary px-6 py-2.5 text-sm font-semibold text-[#030406] transition-opacity hover:opacity-90"
          style={{ letterSpacing: '-0.0175em' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          견적문의하기
        </Link>
      </div>
    </header>
  );
}
