"use client";

import Link from "next/link";
import { useCart } from "../_context/CartContext";
import CartItemComponent from "../_components/cart/CartItem";
import CartSummary from "../_components/cart/CartSummary";

export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-32 text-center">
        <p className="text-muted mb-2">장바구니가 비어있습니다.</p>
        <p className="text-sm text-muted mb-8">
          마음에 드는 제품을 담아보세요.
        </p>
        <Link
          href="/demo/ecommerce/products"
          className="inline-block text-sm border border-primary px-8 py-3 hover:bg-primary hover:text-base transition-all duration-500"
        >
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-16 pb-24">
      <h1 className="text-2xl font-light mb-12">장바구니</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItemComponent key={item.product.id} item={item} />
          ))}
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
