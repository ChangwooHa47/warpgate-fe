import { forwardRef, type InputHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  error?: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={className}>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-steel-300 mb-2"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-night-900 border text-steel-100 placeholder:text-steel-500 transition-colors ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-night-700 focus:border-mint-500"
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
