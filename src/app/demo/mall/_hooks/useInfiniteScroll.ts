"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseInfiniteScrollOptions<T> {
  items: T[];
  pageSize: number;
  delay?: number;
}

export function useInfiniteScroll<T>({
  items,
  pageSize,
  delay = 400,
}: UseInfiniteScrollOptions<T>) {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [displayCount, setDisplayCount] = useState(pageSize);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (displayCount >= items.length || loading) return;
    setLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + pageSize, items.length));
      setLoading(false);
    }, delay);
  }, [displayCount, loading, items.length, pageSize, delay]);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  const displayedItems = items.slice(0, displayCount);
  const hasMore = displayCount < items.length;

  return { loadMoreRef, displayedItems, hasMore, loading };
}
