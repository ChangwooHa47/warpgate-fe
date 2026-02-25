import { forwardRef, type TextareaHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={className}>
        <label
          htmlFor={textareaId}
          className="block text-sm font-sans text-steel-300 mb-2 tracking-wide"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={`w-full border bg-night-800 px-4 py-3 text-sm text-steel-100 placeholder:text-steel-500 transition-colors focus:outline-none focus:border-mint-500 resize-y min-h-[120px] ${
            error ? "border-red-400" : "border-night-600"
          }`}
          {...props}
        />
        {error && <ErrorText id={`${textareaId}-error`}>{error}</ErrorText>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
