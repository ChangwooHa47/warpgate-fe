'use client';

import { cn } from '../../_lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function CTAButton({
  children,
  active = false,
  onClick,
  disabled = false,
  className,
}: CTAButtonProps) {
  const isDisabled = disabled || !active;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        'group relative flex items-center justify-center w-[600px] overflow-hidden',
        active
          ? 'cursor-pointer active:scale-[0.98]'
          : 'cursor-not-allowed',
        className
      )}
      style={{ borderRadius: '100px' }}
    >
      {/* Active state - gradient fill with gradient border */}
      {active && (
        <>
          {/* Gradient border */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '100px',
              padding: '1px',
              background:
                'linear-gradient(0deg, rgba(203, 237, 245, 0.4) 0%, rgba(30, 46, 67, 0.1) 48%, rgba(203, 237, 245, 0.4) 100%)',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {/* Default gradient fill background */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: '100px',
              background:
                'linear-gradient(270deg, rgba(157, 190, 242, 0.2) 0%, rgba(157, 190, 242, 0.9) 40%, rgba(157, 190, 242, 0.9) 62%, rgba(157, 190, 242, 0.2) 100%)',
            }}
          />
          {/* Hover state - full sky blue fill expanding from center */}
          <div
            className="absolute inset-0 scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
            style={{
              borderRadius: '100px',
              background: 'rgba(157, 190, 242, 0.9)',
              transformOrigin: 'center',
            }}
          />
        </>
      )}

      {/* Inactive state - dark background */}
      {!active && (
        <div
          className="absolute inset-0 bg-[#1A1A1A]"
          style={{ borderRadius: '100px' }}
        />
      )}

      {/* Content */}
      <span
        className={cn(
          'relative z-10 flex items-center justify-center gap-1.5 text-xl font-semibold transition-colors duration-300',
          active ? 'text-[#0E0E0E]' : 'text-text-disable'
        )}
        style={{
          padding: '20px 44px',
          letterSpacing: '-0.0175em',
          lineHeight: '1.45',
        }}
      >
        {children}
      </span>
    </button>
  );
}
