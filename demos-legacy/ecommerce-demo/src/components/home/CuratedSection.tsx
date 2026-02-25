import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function CuratedSection() {
  const featured = products.filter((p) => p.isNew).length > 0
    ? products.filter((p) => p.isNew)
    : products.slice(0, 4);

  const displayProducts =
    featured.length < 4
      ? [
          ...featured,
          ...products
            .filter((p) => !p.isNew)
            .slice(0, 4 - featured.length),
        ]
      : featured.slice(0, 4);

  return (
    <section className="max-w-[1200px] mx-auto px-8 md:px-12 py-28">
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-2">
            This Season
          </p>
          <h2 className="text-[22px] font-light">이번 시즌 셀렉션</h2>
        </div>
        <Link
          href="/products"
          className="text-[13px] text-muted hover:text-primary transition-colors border-b border-line hover:border-primary pb-0.5"
        >
          전체 보기
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
