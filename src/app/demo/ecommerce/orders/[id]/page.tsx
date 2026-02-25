"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getOrder } from "../../_data/orders";
import { formatPrice } from "../../_lib/utils";
import OrderTimeline from "../../_components/orders/OrderTimeline";

const BASE_PATH = "/demo/ecommerce";

const statusLabel: Record<string, string> = {
  confirmed: "주문 확인",
  preparing: "상품 준비 중",
  shipping: "배송 중",
  delivered: "배송 완료",
};

export default function OrderTrackingPage() {
  const params = useParams();
  const order = getOrder(params.id as string);

  if (!order) {
    return (
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-32 text-center">
        <p className="text-muted mb-4">
          주문을 찾을 수 없습니다.
        </p>
        <Link
          href={BASE_PATH}
          className="inline-block text-sm border-b border-line hover:border-primary pb-0.5 text-muted hover:text-primary transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-8 md:px-12 pt-16 pb-24">
      <Link
        href={BASE_PATH}
        className="inline-block text-sm text-muted hover:text-primary transition-colors mb-8"
      >
        &larr; Home
      </Link>

      <div className="mb-12">
        <p className="text-[11px] tracking-[0.2em] text-muted uppercase mb-2">
          Order Tracking
        </p>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-light">주문 조회</h1>
          <span className="text-[11px] tracking-wider text-primary bg-surface border border-line px-2.5 py-1">
            {statusLabel[order.status] || order.status}
          </span>
        </div>
        <p className="text-sm text-muted font-mono">{order.id}</p>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <OrderTimeline events={order.timeline} />
      </div>

      {/* Order Items */}
      <div className="border-t border-line pt-8 mb-8">
        <p className="text-xs text-muted tracking-wider uppercase mb-6">
          주문 상품
        </p>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.product.id} className="flex gap-4">
              <div className="relative w-16 h-20 bg-surface flex-shrink-0 overflow-hidden">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className="text-sm">{item.product.name}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {item.selectedVariants &&
                      Object.values(item.selectedVariants).join(" / ")}{" "}
                    · 수량 {item.quantity}
                  </p>
                </div>
                <p className="text-sm text-muted">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Total */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-line pt-8">
        <div>
          <p className="text-xs text-muted tracking-wider uppercase mb-4">
            배송지
          </p>
          <div className="text-sm text-muted space-y-1">
            <p className="text-primary">{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.phone}</p>
            <p>
              ({order.shippingAddress.zipCode}) {order.shippingAddress.address}
            </p>
            <p>{order.shippingAddress.addressDetail}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted tracking-wider uppercase mb-4">
            결제 금액
          </p>
          <p className="text-lg">{formatPrice(order.totalPrice)}</p>
          <p className="text-xs text-muted mt-1">배송비 포함</p>
        </div>
      </div>
    </div>
  );
}
