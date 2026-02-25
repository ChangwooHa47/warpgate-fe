"use client";

import { type Easing, motion } from "framer-motion";

const fade = (delay: number, duration: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration, ease: "easeOut" as Easing },
});

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 따뜻한 베이지 배경 + 미세한 숨결 */}
      <motion.div
        className="absolute inset-0 bg-cream"
        animate={{ scale: [1, 1.008, 1] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      {/* 종이 질감 그레인 오버레이 */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center px-6 max-w-[860px] -translate-y-[4vh]">
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-espresso leading-none"
          {...fade(0.3, 1.1)}
        >
          Mellow
        </motion.h1>

        <motion.div className="mt-10 md:mt-14" {...fade(0.6, 0.9)}>
          <p className="text-walnut text-lg md:text-xl font-light leading-[1.8] tracking-wide">
            오늘도,
            <br />
            한 잔의 여유
          </p>
        </motion.div>

        <motion.p
          className="mt-16 md:mt-20 text-warm-gray text-[11px] tracking-[0.35em]"
          {...fade(0.85, 0.8)}
        >
          — Gangnam, Seoul
        </motion.p>
      </div>
    </section>
  );
}
