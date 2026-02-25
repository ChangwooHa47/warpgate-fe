import Link from "next/link";
import Image from "next/image";
import { Product } from "../../_lib/types";
import { formatPrice } from "../../_lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/demo/ecommerce/products/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase text-muted bg-base/90 px-2.5 py-1">
            New
          </span>
        )}
        {product.stock === "low_stock" && (
          <span className="absolute bottom-4 left-4 text-[10px] tracking-wider text-muted bg-base/90 px-2.5 py-1">
            재고 소량
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-[11px] text-muted">{product.nameEn}</p>
        <p className="text-[13px]">{product.name}</p>
        <p className="text-[13px] text-muted">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
