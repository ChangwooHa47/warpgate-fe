import { cn } from '../../_lib/utils';
import { TechChip } from './tech-chip';

type ProductSize = 'MVP Lite' | 'Full MVP' | 'Production';

interface ProjectSummaryCardProps {
  productSize: ProductSize;
  projectTitle: string;
  projectDescription: string;
  techStack: string[];
  className?: string;
}

export function ProjectSummaryCard({
  productSize,
  projectTitle,
  projectDescription,
  techStack,
  className,
}: ProjectSummaryCardProps) {
  return (
    <div className={cn('flex flex-col self-stretch', className)} style={{ gap: '24px' }}>
      {/* Product size badge */}
      <span
        className="inline-flex items-center justify-center self-start px-5 py-2 rounded-lg bg-primary text-[#030406] text-lg font-semibold"
        style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
      >
        {productSize}
      </span>

      {/* Project info */}
      <div className="flex flex-col" style={{ gap: '20px' }}>
        <div className="flex flex-col gap-2">
          <h2
            className="text-4xl font-bold text-white"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.4' }}
          >
            {projectTitle}
          </h2>
          <p
            className="text-xl font-medium text-text-neutral"
            style={{ letterSpacing: '-0.0175em', lineHeight: '1.45' }}
          >
            {projectDescription}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex items-center" style={{ gap: '12px' }}>
          {techStack.map((tech) => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
