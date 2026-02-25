'use client';

import { cn } from '../../_lib/utils';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  className?: string;
}

export function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = true,
  className,
}: InputFieldProps) {
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
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'w-full rounded-2xl bg-white/5 outline-none text-xl font-medium',
            'placeholder:text-text-assistive',
            value ? 'text-text-normal' : 'text-text-assistive'
          )}
          style={{
            padding: '28px 32px',
            letterSpacing: '-0.0175em',
            lineHeight: '1.45',
          }}
        />
      </div>
    </div>
  );
}
