'use client';

import { cn } from '../../_lib/utils';

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

export function TextareaField({
  label,
  placeholder,
  value,
  onChange,
  required = true,
  className,
}: TextareaFieldProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <label
        className="text-2xl font-semibold text-text-neutral"
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
      >
        {label}
        {!required && ' (선택)'}
      </label>
      <div className="relative">
        {/* Gradient border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            padding: '1.5px',
            background: 'linear-gradient(180deg, rgba(100, 103, 122, 1) 0%, rgba(49, 51, 62, 1) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-2xl bg-white/5 outline-none resize-none text-xl font-medium',
            'placeholder:text-text-assistive',
            value ? 'text-text-normal' : 'text-text-assistive'
          )}
          style={{
            padding: '28px 32px',
            height: '200px',
            letterSpacing: '-0.0175em',
            lineHeight: '1.45',
          }}
        />
      </div>
    </div>
  );
}
