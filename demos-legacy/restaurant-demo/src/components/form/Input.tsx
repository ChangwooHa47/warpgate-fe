import { forwardRef, type InputHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    const isEmpty = !props.value;
    const textColor =
      props.type === "date" && isEmpty ? "text-stone-400" : "text-charcoal-700";

    return (
      <div className={className}>
        <label
          htmlFor={inputId}
          className="block text-sm font-sans text-charcoal-500 mb-2 tracking-wide"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full border bg-ivory-50 px-4 py-3 text-sm ${textColor} placeholder:text-stone-400 transition-colors focus:outline-none focus:border-charcoal-500 ${
            error ? "border-red-400" : "border-stone-200"
          }`}
          {...props}
        />
        {error && <ErrorText id={`${inputId}-error`}>{error}</ErrorText>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
