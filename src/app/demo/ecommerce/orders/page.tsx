"use client";

import Link from "next/link";
import Image from "next/image";
import { sampleOrders } from "../_data/orders";
import { formatPrice } from "../_lib/utils";

const statusLabel: Record<string, string> = {
  confirmed: "주문 확인",
  preparing: "상품 준비 중",
  shipping: "배송 중",
  delivered: "배송 완료",
};

export default function OrdersPage() {
  return (
    <div className="max-w-[800px] mx-auto px-8 md:px-12 pt-16 pb-24">
      <div className="mb-10">
        <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-2">
          Order History
        </p>
        <h1 className="text-2xl font-light">주문 내역</h1>
      </div>

      {sampleOrders.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted text-sm mb-4">아직 주문 내역이 없습니다.</p>
          <Link
            href="/demo/ecommerce/products"
            className="inline-block text-sm border-b border-line hover:border-primary pb-0.5 text-muted hover:text-primary transition-colors"
          >
            쇼핑하러 가기
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {sampleOrders.map((order) => (
            <Link
              key={order.id}
              href={`/demo/ecommerce/orders/${order.id}`}
              className="block border border-line hover:border-accent transition-colors p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-mono text-muted">{order.id}</p>
                <span className="text-xs text-muted bg-surface px-2.5 py-1">
                  {statusLabel[order.status] || order.status}
                </span>
              </div>

              <div className="flex gap-3 mb-4">
                {order.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="relative w-14 h-14 bg-surface overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">
                  {order.items.length > 1
                    ? `${order.items[0].product.name} 외 ${order.items.length - 1}건`
                    : order.items[0].product.name}
                </p>
                <p className="text-sm">{formatPrice(order.totalPrice)}</p>
              </div>

              <p className="text-xs text-accent mt-2">
                {order.createdAt.split("T")[0]}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
