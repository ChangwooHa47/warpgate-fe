import { cn } from '../../_lib/utils';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export function LoadingSpinner({ size = 60, className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{ width: size, height: size }}
    >
      {/* Background circle */}
      <div
        className="absolute inset-0 rounded-full bg-gray-800"
        style={{ width: size, height: size }}
      />
      {/* Animated arc */}
      <svg
        className="absolute inset-0 animate-spin"
        viewBox="0 0 60 60"
        style={{ width: size, height: size }}
      >
        <circle
          cx="30"
          cy="30"
          r="28"
          fill="none"
          stroke="#9FCEFE"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="100 150"
        />
      </svg>
    </div>
  );
}
