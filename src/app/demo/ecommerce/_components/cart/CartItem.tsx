"use client";

import Image from "next/image";
import { CartItem as CartItemType } from "../../_lib/types";
import { formatPrice } from "../../_lib/utils";
import { useCart } from "../../_context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, selectedVariants } = item;

  return (
    <div className="flex gap-6 py-6 border-b border-line">
      <div className="relative w-20 h-24 bg-surface flex-shrink-0 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-muted mb-0.5">{product.nameEn}</p>
          <p className="text-sm">{product.name}</p>
          {selectedVariants && (
            <p className="text-xs text-muted mt-1">
              {Object.entries(selectedVariants)
                .map(([k, v]) => `${k}: ${v}`)
                .join(" / ")}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-7 h-7 border border-line text-muted hover:border-primary hover:text-primary transition-colors text-xs flex items-center justify-center"
            >
              &minus;
            </button>
            <span className="text-sm w-6 text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-7 h-7 border border-line text-muted hover:border-primary hover:text-primary transition-colors text-xs flex items-center justify-center"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm">{formatPrice(product.price * quantity)}</p>
            <button
              onClick={() => removeItem(product.id)}
              className="text-xs text-muted hover:text-primary transition-colors"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
