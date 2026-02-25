import { forwardRef, type TextareaHTMLAttributes } from "react";
import ErrorText from "./ErrorText";

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label: string;
  error?: string;
  id?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={className}>
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-steel-300 mb-2"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={`w-full px-4 py-3 rounded-lg bg-night-900 border text-steel-100 placeholder:text-steel-500 resize-none transition-colors ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-night-700 focus:border-mint-500"
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
