import { forwardRef, type SelectHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, options, placeholder, error, id, className = "", ...props },
    ref
  ) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={className}>
        <label
          htmlFor={selectId}
          className="block text-sm font-sans text-charcoal-500 mb-2 tracking-wide"
        >
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={`w-full appearance-none border bg-ivory-50 px-4 py-3 pr-10 text-sm transition-colors focus:outline-none focus:border-charcoal-500 ${
              props.value ? "text-charcoal-700" : "text-stone-400"
            } ${error ? "border-red-400" : "border-stone-200"}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-4 w-4 text-stone-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {error && <ErrorText id={`${selectId}-error`}>{error}</ErrorText>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
