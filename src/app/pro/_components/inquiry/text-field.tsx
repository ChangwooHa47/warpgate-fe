'use client';

import { cn } from '../../_lib/utils';
import { useRef, useEffect } from 'react';

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  minLength?: number;
  helperText?: string;
  className?: string;
}

export function TextField({
  placeholder = '예: 프리랜서와 기업을 연결하는 매칭 플랫폼을 만들고 싶습니다...',
  value,
  onChange,
  minLength = 10,
  helperText,
  className,
}: TextFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hasContent = value.length > 0;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn('relative min-h-[300px]', className)}>
      {/* Gradient border using pseudo-element technique */}
      <div
        className="absolute inset-0 rounded-2xl p-[1.5px]"
        style={{
          background: 'linear-gradient(180deg, rgba(100, 103, 122, 1) 0%, rgba(49, 51, 62, 1) 100%)',
        }}
      >
        <div className="w-full h-full rounded-[14.5px] bg-[#030406]" />
      </div>

      {/* Content background */}
      <div className="absolute inset-[1.5px] rounded-[14.5px] bg-white/5" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between gap-[30px] p-7 min-h-[300px]">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent resize-none outline-none text-xl font-medium flex-1',
            hasContent ? 'text-text-normal' : 'text-text-assistive'
          )}
          style={{
            letterSpacing: '-0.0175em',
            lineHeight: '1.45',
            minHeight: '200px',
          }}
        />
        <p
          className="text-base font-medium text-text-alternative text-right"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          {helperText || `최소 ${minLength}자 이상`}
        </p>
      </div>
    </div>
  );
}
