import type { WizardStep } from "../_lib/types";
import { STEPS } from "../_lib/constants";

interface StepIndicatorProps {
  currentStep: WizardStep;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="예약 진행 단계" className="flex items-center justify-center gap-0">
      {STEPS.map((step, i) => {
        const isCompleted = step.step < currentStep;
        const isCurrent = step.step === currentStep;

        return (
          <div key={step.step} className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div
                aria-current={isCurrent ? "step" : undefined}
                className={`
                  w-8 h-8 flex items-center justify-center text-xs transition-colors duration-300
                  ${
                    isCompleted
                      ? "bg-charcoal-700 text-ivory-50"
                      : isCurrent
                        ? "border-2 border-warm-500 text-warm-600 bg-ivory-50"
                        : "border border-stone-200 text-stone-400 bg-ivory-50"
                  }
                `}
                style={{ borderRadius: "50%" }}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  step.step
                )}
              </div>
              {/* Label */}
              <span
                className={`mt-2 text-xs tracking-wide hidden md:block ${
                  isCurrent ? "text-charcoal-600 font-medium" : "text-stone-400"
                }`}
              >
                {step.title}
              </span>
            </div>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                className={`w-8 md:w-14 h-px mx-1 md:mx-2 mb-5 md:mb-0 transition-colors duration-300 ${
                  step.step < currentStep ? "bg-charcoal-700" : "bg-stone-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
