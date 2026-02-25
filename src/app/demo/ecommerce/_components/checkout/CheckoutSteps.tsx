import type { CheckoutStep } from "../../_lib/types";
import { cn } from "../../_lib/utils";

const steps: { key: CheckoutStep; label: string; labelEn: string }[] = [
  { key: "shipping", label: "배송 정보", labelEn: "Shipping" },
  { key: "payment", label: "결제", labelEn: "Payment" },
  { key: "confirmation", label: "확인", labelEn: "Confirmation" },
];

interface CheckoutStepsProps {
  currentStep: CheckoutStep;
}

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  return (
    <div className="flex items-center gap-0 mb-12">
      {steps.map((step, i) => (
        <div key={step.key} className="flex items-center">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-colors",
                i <= currentIndex
                  ? "bg-primary text-base"
                  : "bg-line text-muted"
              )}
            >
              {i + 1}
            </div>
            <div>
              <p
                className={cn(
                  "text-sm transition-colors",
                  i <= currentIndex ? "text-primary" : "text-muted"
                )}
              >
                {step.label}
              </p>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "w-12 h-px mx-4 transition-colors",
                i < currentIndex ? "bg-primary" : "bg-line"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
