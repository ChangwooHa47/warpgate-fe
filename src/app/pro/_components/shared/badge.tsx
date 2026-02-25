import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../_lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'pro' | 'new' | 'success' | 'warning';
}

const variantStyles = {
  default: 'bg-gray-100 text-gray-800',
  pro: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
  new: 'bg-green-100 text-green-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
