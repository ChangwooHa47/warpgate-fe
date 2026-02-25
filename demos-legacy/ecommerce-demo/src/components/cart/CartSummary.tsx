"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const { totalPrice, totalItems } = useCart();
  const shippingFee = totalPrice >= 50000 ? 0 : 3000;

  return (
    <div className="bg-surface p-8">
      <h3 className="text-sm tracking-wider uppercase mb-6">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-muted">
          <span>상품 금액 ({totalItems}개)</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-muted">
          <span>배송비</span>
          <span>
            {shippingFee === 0 ? "무료" : formatPrice(shippingFee)}
          </span>
        </div>
        {shippingFee > 0 && (
          <p className="text-xs text-accent">
            {formatPrice(50000 - totalPrice)} 더 담으면 무료배송
          </p>
        )}
      </div>

      <div className="border-t border-line mt-6 pt-6">
        <div className="flex justify-between mb-8">
          <span className="text-sm">합계</span>
          <span className="text-lg">{formatPrice(totalPrice + shippingFee)}</span>
        </div>

        <Link
          href="/checkout"
          className="block w-full text-center bg-primary text-base py-4 text-sm tracking-wider hover:bg-primary/90 transition-colors"
        >
          주문하기
        </Link>
      </div>
    </div>
  );
}
