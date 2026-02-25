import { cn } from '../../_lib/utils';

type Level = '낮음' | '보통' | '높음';

interface LevelChipProps {
  level: Level;
  className?: string;
}

const levelStyles: Record<Level, { bg: string; text: string }> = {
  낮음: {
    bg: 'bg-[rgba(159,206,254,0.1)]',
    text: 'text-[#9FCEFE]',
  },
  보통: {
    bg: 'bg-[#1C1C22]',
    text: 'text-text-neutral',
  },
  높음: {
    bg: 'bg-[rgba(254,159,241,0.1)]',
    text: 'text-[#FE9FF1]',
  },
};

export function LevelChip({ level, className }: LevelChipProps) {
  const styles = levelStyles[level];

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full text-base font-medium w-fit',
        styles.bg,
        styles.text,
        className
      )}
      style={{
        padding: '8px 20px',
        letterSpacing: '-0.0175em',
        lineHeight: '1.45'
      }}
    >
      {level}
    </span>
  );
}
