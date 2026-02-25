"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  image,
  className = "",
}: CardProps) {
  const ref = useRef<HTMLElement>(null);
  const [scrollRevealed, setScrollRevealed] = useState(false);

  useEffect(() => {
    if (!image || !ref.current) return;
    const mql = window.matchMedia("(min-width: 768px)");
    if (mql.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [image]);

  return (
    <article
      ref={ref}
      data-revealed={scrollRevealed ? "" : undefined}
      className={`group relative overflow-hidden border border-night-600 bg-night-800 p-10 md:p-12 cursor-default transition-[border-color] duration-[350ms] ease-out max-md:data-[revealed]:border-transparent md:hover:border-mint-500/30 ${className}`}
    >
      {image && (
        <div className="absolute inset-0 opacity-0 max-md:group-data-[revealed]:opacity-100 md:group-hover:opacity-100 transition-opacity duration-[350ms] ease-out">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-night-950/65" />
        </div>
      )}

      <div className="relative z-10">
        {icon && (
          <div
            className={`mb-8 text-mint-400 ${image ? "transition-colors duration-[350ms] ease-out max-md:group-data-[revealed]:text-mint-400 md:group-hover:text-mint-400" : ""}`}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <h3
          className={`text-lg md:text-xl font-semibold text-steel-100 mb-4 ${image ? "transition-colors duration-[350ms] ease-out max-md:group-data-[revealed]:text-steel-100 md:group-hover:text-steel-100" : ""}`}
        >
          {title}
        </h3>
        <p
          className={`text-steel-400 text-sm leading-[1.9] whitespace-pre-line ${image ? "transition-colors duration-[350ms] ease-out max-md:group-data-[revealed]:text-steel-300 md:group-hover:text-steel-300" : ""}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
