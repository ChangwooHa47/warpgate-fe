"use client";

import { useState } from "react";
import Link from "next/link";
import type { CheckoutStep, ShippingAddress } from "../_lib/types";
import { useCart } from "../_context/CartContext";
import CheckoutSteps from "../_components/checkout/CheckoutSteps";
import ShippingForm from "../_components/checkout/ShippingForm";
import PaymentForm from "../_components/checkout/PaymentForm";
import OrderConfirmation from "../_components/checkout/OrderConfirmation";

const BASE_PATH = "/demo/ecommerce";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [address, setAddress] = useState<ShippingAddress>({
    name: "",
    phone: "",
    zipCode: "",
    address: "",
    addressDetail: "",
  });

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-32 text-center">
        <p className="text-muted mb-4">장바구니가 비어있습니다.</p>
        <Link
          href={`${BASE_PATH}/products`}
          className="inline-block text-sm border border-primary px-8 py-3 hover:bg-primary hover:text-base transition-all duration-500"
        >
          Shop
        </Link>
      </div>
    );
  }

  const handleConfirmOrder = () => {
    clearCart();
    setStep("confirmation");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-16 pb-24">
      <h1 className="text-2xl font-light mb-8">주문하기</h1>
      <CheckoutSteps currentStep={step} />

      {step === "shipping" && (
        <ShippingForm
          address={address}
          onChange={setAddress}
          onNext={() => setStep("payment")}
        />
      )}
      {step === "payment" && (
        <PaymentForm
          onBack={() => setStep("shipping")}
          onNext={handleConfirmOrder}
        />
      )}
      {step === "confirmation" && <OrderConfirmation />}
    </div>
  );
}
