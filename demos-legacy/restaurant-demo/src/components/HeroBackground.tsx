import type { ReactNode } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
  children: ReactNode;
  className?: string;
}

export default function HeroBackground({
  children,
  className = "",
}: HeroBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Hero 배경 이미지 ── */}
      <Image
        src="/images/hero-image.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal-800/80 via-charcoal-800/70 to-charcoal-800/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
