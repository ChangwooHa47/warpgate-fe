"use client";

import { useCart } from "../../_context/CartContext";
import { formatPrice } from "../../_lib/utils";

interface PaymentFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PaymentForm({ onNext, onBack }: PaymentFormProps) {
  const { items, totalPrice } = useCart();
  const shippingFee = totalPrice >= 50000 ? 0 : 3000;

  return (
    <div className="max-w-lg">
      <h2 className="text-lg font-light mb-8">결제</h2>

      {/* Order Summary */}
      <div className="bg-surface p-6 mb-8">
        <p className="text-xs text-muted tracking-wider uppercase mb-4">
          주문 내역
        </p>
        <div className="space-y-3 mb-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between text-sm text-muted"
            >
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <span>
                {formatPrice(item.product.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-line pt-3 space-y-2">
          <div className="flex justify-between text-sm text-muted">
            <span>배송비</span>
            <span>{shippingFee === 0 ? "무료" : formatPrice(shippingFee)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>합계</span>
            <span className="text-base">
              {formatPrice(totalPrice + shippingFee)}
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method (Demo) */}
      <div className="mb-8">
        <p className="text-xs text-muted mb-4">결제 수단</p>
        <div className="space-y-2">
          {["신용카드", "카카오페이", "네이버페이", "무통장입금"].map(
            (method) => (
              <label
                key={method}
                className="flex items-center gap-3 border border-line p-4 cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary"
              >
                <input
                  type="radio"
                  name="payment"
                  defaultChecked={method === "신용카드"}
                  className="accent-[#2C2C2C]"
                />
                <span className="text-sm">{method}</span>
              </label>
            )
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-line py-4 text-sm text-muted hover:border-primary hover:text-primary transition-colors"
        >
          이전
        </button>
        <button
          onClick={onNext}
          className="flex-[2] bg-primary text-base py-4 text-sm tracking-wider hover:bg-primary/90 transition-colors"
        >
          {formatPrice(totalPrice + shippingFee)} 결제하기
        </button>
      </div>
    </div>
  );
}
