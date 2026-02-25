import { cn } from '../../_lib/utils';
import { LevelChip } from './level-chip';

type Level = '낮음' | '보통' | '높음';

interface FeatureCardProps {
  title: string;
  description: string;
  level: Level;
  estimatedDays: number;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  level,
  estimatedDays,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl relative',
        className
      )}
      style={{
        gap: '12px',
        padding: '32px',
        width: '532px',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Gradient border using pseudo-element approach */}
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
      <LevelChip level={level} className="self-start" />
      <div className="flex flex-col gap-2">
        <h3
          className="text-2xl font-semibold text-white"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          {title}
        </h3>
        <p
          className="text-lg font-medium text-text-neutral"
          style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
        >
          {description}
        </p>
      </div>
      <p
        className="text-base font-medium text-text-assistive"
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
      >
        예상 개발 기간: {estimatedDays}일
      </p>
    </div>
  );
}
