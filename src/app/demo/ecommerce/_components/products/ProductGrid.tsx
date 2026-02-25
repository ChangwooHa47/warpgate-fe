"use client";

import { useState } from "react";
import { products, getProductsByCategory } from "../../_data/products";
import type { Category } from "../../_lib/types";
import { cn } from "../../_lib/utils";
import ProductCard from "./ProductCard";

const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "apparel", label: "의류" },
  { key: "home", label: "홈" },
  { key: "desk", label: "데스크" },
  { key: "wellness", label: "웰니스" },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all" ? products : getProductsByCategory(activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex gap-6 mb-10 border-b border-line pb-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "text-sm transition-colors pb-2 -mb-[17px]",
              activeCategory === cat.key
                ? "text-primary border-b border-primary"
                : "text-muted hover:text-primary"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
