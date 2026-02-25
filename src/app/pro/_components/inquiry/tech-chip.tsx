import { cn } from '../../_lib/utils';

interface TechChipProps {
  label: string;
  className?: string;
}

export function TechChip({ label, className }: TechChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-5 py-2 rounded-full',
        'bg-gray-800 text-primary text-base font-medium',
        className
      )}
      style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
    >
      {label}
    </span>
  );
}
