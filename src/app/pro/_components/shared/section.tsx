import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../_lib/utils';
import { Container } from './container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const paddingStyles = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-24',
  xl: 'py-24 sm:py-32',
};

export function Section({ children, containerSize = 'xl', padding = 'lg', className, ...props }: SectionProps) {
  return (
    <section className={cn(paddingStyles[padding], className)} {...props}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
