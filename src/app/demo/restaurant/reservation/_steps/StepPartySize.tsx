import { PARTY_SIZES } from "../_lib/constants";
import ErrorText from "../../_components/form/ErrorText";

interface StepPartySizeProps {
  value: number | null;
  onChange: (size: number) => void;
  error?: string;
}

export default function StepPartySize({ value, onChange, error }: StepPartySizeProps) {
  return (
    <div>
      <div
        role="radiogroup"
        aria-label="인원 선택"
        className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-lg mx-auto"
      >
        {PARTY_SIZES.map((size) => {
          const isSelected = value === size;
          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(size)}
              className={`
                w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                text-lg md:text-xl transition-all duration-200
                ${
                  isSelected
                    ? "bg-charcoal-700 text-ivory-50 font-medium"
                    : "border border-stone-200 bg-ivory-50 text-charcoal-500 hover:border-charcoal-400 hover:text-charcoal-700"
                }
              `}
              style={{ borderRadius: "50%" }}
            >
              {size}
            </button>
          );
        })}
      </div>

      {value && (
        <p className="text-sm text-charcoal-600 text-center mt-8 animate-slide-down">
          <span className="font-medium">{value}명</span>
          <span className="text-stone-400 ml-1">이 방문합니다</span>
        </p>
      )}

      {error && (
        <div className="mt-3 text-center">
          <ErrorText>{error}</ErrorText>
        </div>
      )}

      <p className="text-xs text-stone-400 text-center mt-8">
        8인 이상 단체는{" "}
        <a
          href="tel:+8220000000"
          className="text-charcoal-500 underline underline-offset-2 decoration-stone-300"
        >
          02-000-0000
        </a>
        으로 문의해 주세요.
      </p>
    </div>
  );
}
