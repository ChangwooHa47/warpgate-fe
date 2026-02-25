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
        src="/images/hero-image.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-night-950/85 via-night-950/70 to-night-950/90"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
