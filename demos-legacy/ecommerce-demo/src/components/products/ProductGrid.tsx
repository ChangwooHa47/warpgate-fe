"use client";

import { useState } from "react";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = getProductsByCategory(activeCategory);

  return (
    <div>
      <div className="flex gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              "text-sm pb-1 transition-colors duration-300 border-b",
              activeCategory === cat.key
                ? "text-primary border-primary"
                : "text-muted border-transparent hover:text-primary"
            )}
          >
            {cat.labelEn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-20 text-sm">
          해당 카테고리에 상품이 없습니다.
        </p>
      )}
    </div>
  );
}
