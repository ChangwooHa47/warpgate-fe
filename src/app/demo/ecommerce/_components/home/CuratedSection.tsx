import { products } from "../../_data/products";
import ProductCard from "../products/ProductCard";

export default function CuratedSection() {
  const featured = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-2">
              New Arrivals
            </p>
            <h2 className="text-xl font-light">새로운 제품</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
