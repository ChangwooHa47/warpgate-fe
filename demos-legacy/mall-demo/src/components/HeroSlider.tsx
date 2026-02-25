"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  bgImage: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "2026 SPRING\nCOLLECTION",
    subtitle: "새로운 계절, 새로운 스타일을 만나보세요",
    cta: "VIEW MORE",
    bgImage:
      "linear-gradient(135deg, #2d2b28 0%, #4a3f35 40%, #3d3530 100%)",
  },
  {
    id: 2,
    title: "지금 가장 Hot한\n쇼핑 소식을 확인하세요!",
    subtitle: "PREMIA만의 특별한 혜택과 이벤트",
    cta: "VIEW MORE",
    bgImage:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
  },
  {
    id: 3,
    title: "LUXURY\nBRAND WEEK",
    subtitle: "프리미엄 브랜드의 특별한 한 주",
    cta: "VIEW MORE",
    bgImage:
      "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1a1a1a 100%)",
  },
];

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPaused, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  return (
    <section className="relative h-[calc(100vh-104px)] mt-[104px] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: slide.bgImage }}
        >
          {/* Decorative element */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 hidden lg:block" />
          <div className="absolute right-[12%] top-[45%] -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5 hidden lg:block" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main w-full">
          {/* Slide indicators */}
          <div className="flex items-center gap-6 mb-10">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`text-sm font-light transition-all duration-300 ${
                  index === current
                    ? "text-white text-lg font-normal"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}

            {/* Progress bar */}
            <div className="w-32 h-[1px] bg-white/20 relative ml-2">
              <div
                className="absolute left-0 top-0 h-full bg-white transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Pause button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-white/50 hover:text-white transition-colors ml-2"
            >
              {isPaused ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              )}
            </button>
          </div>

          {/* Slide text */}
          <div
            key={current}
            className="animate-fade-in-up"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight tracking-tight whitespace-pre-line"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {SLIDES[current].title}
            </h2>
            <p className="text-white/60 text-base md:text-lg mt-6 font-light">
              {SLIDES[current].subtitle}
            </p>
            <a
              href="#"
              className="inline-block mt-10 text-white text-sm tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition-opacity"
            >
              {SLIDES[current].cta}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
