import { cn } from '../../_lib/utils';

type Step = '설명' | '분석' | '견적 확인' | '문의';

interface ProgressBarProps {
  currentStep: Step;
  className?: string;
}

const steps: Step[] = ['설명', '분석', '견적 확인', '문의'];

export function ProgressBar({ currentStep, className }: ProgressBarProps) {
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className={cn('relative flex justify-between w-full max-w-[700px]', className)}>
      {/* Connecting line */}
      <div className="absolute top-[6px] left-[87.5px] right-[87.5px] h-px bg-line-normal" />

      {steps.map((step, index) => {
        const isActive = index === currentIndex;

        return (
          <div key={step} className="flex flex-col items-center gap-6 flex-1">
            {/* Dot */}
            <div
              className={cn(
                'w-3 h-3 rounded-full z-10',
                isActive
                  ? 'bg-primary shadow-[0px_0px_12px_2px_rgba(159,206,254,1)]'
                  : 'bg-text-assistive'
              )}
            />
            {/* Label */}
            <span
              className={cn(
                'text-xl font-semibold',
                isActive ? 'text-primary' : 'text-text-assistive'
              )}
              style={{ letterSpacing: '-0.0175em' }}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
