import ProductGrid from "../_components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-16 pb-24">
      <div className="mb-12">
        <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-2">
          All Products
        </p>
        <h1 className="text-2xl font-light">전체 제품</h1>
      </div>
      <ProductGrid />
    </div>
  );
}
