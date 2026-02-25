'use client';

import { cn } from '../../_lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  title,
  description,
  selected = false,
  onClick,
  className,
}: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative flex flex-col items-center justify-center gap-2 py-10 px-0 w-[340px] rounded-2xl transition-all duration-300 overflow-hidden border-[1.5px] border-transparent',
        selected && 'shadow-[inset_0px_0px_50px_0px_rgba(134,196,247,0.9)] border-primary/60',
        !selected && 'hover:shadow-[inset_0px_0px_30px_0px_rgba(134,196,247,0.3)]',
        className
      )}
    >
      {/* Gradient border - default state (only when not selected) */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl p-[1.5px] transition-opacity duration-300',
          selected ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
        )}
        style={{
          background: 'linear-gradient(180deg, rgba(100, 103, 122, 1) 0%, rgba(49, 51, 62, 1) 100%)',
        }}
      >
        <div className="w-full h-full rounded-[14.5px] bg-[#030406]" />
      </div>

      {/* Gradient border - hover state (only when not selected) */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl p-[1.5px] transition-opacity duration-300',
          selected ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
        )}
        style={{
          background: 'linear-gradient(180deg, rgba(134, 196, 247, 0.6) 0%, rgba(134, 196, 247, 0.15) 100%)',
        }}
      >
        <div className="w-full h-full rounded-[14.5px] bg-[#030406]" />
      </div>

      {/* Content background - always visible */}
      <div
        className={cn(
          'absolute rounded-[14.5px] bg-white/5 transition-all duration-300',
          selected ? 'inset-0' : 'inset-[1.5px]'
        )}
      />

      {/* Content */}
      <h3
        className={cn(
          'relative z-10 text-4xl font-semibold transition-colors duration-300',
          selected ? 'text-primary' : 'text-text-normal group-hover:text-primary/70'
        )}
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.4' }}
      >
        {title}
      </h3>
      <p
        className={cn(
          'relative z-10 text-xl font-medium transition-colors duration-300',
          selected ? 'text-primary' : 'text-text-neutral group-hover:text-primary/70'
        )}
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
      >
        {description}
      </p>
    </button>
  );
}
