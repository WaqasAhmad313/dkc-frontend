'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/shared/Badge';
import type { BadgeVariant } from '@/components/shared/Badge';

/* ── Types ── */

type SectionHeaderLayout = 'centered' | 'split';
type SectionHeaderSize = 'sm' | 'md' | 'lg' | 'xl';
type SectionHeaderAlign = 'left' | 'center';

export interface SectionHeaderProps {
  layout?: SectionHeaderLayout | undefined;
  size?: SectionHeaderSize | undefined;
  align?: SectionHeaderAlign | undefined;
  eyebrow?: string | undefined;
  badgeVariant?: BadgeVariant | undefined;
  headline: string;
  description?: string | undefined;
  className?: string | undefined;
}

/* ── Heading size map — fluid type tokens ── */

const headingClasses: Record<SectionHeaderSize, string> = {
  sm: 'heading-card',
  md: 'heading-subsection',
  lg: 'heading-section',
  xl: 'heading-page',
};

const descriptionClasses: Record<SectionHeaderSize, string> = {
  sm: 'text-sm   text-(--muted-foreground)',
  md: 'text-base text-(--muted-foreground)',
  lg: 'text-lg   text-(--muted-foreground)',
  xl: 'text-xl   text-(--muted-foreground)',
};

/* ── Motion — premium ease, not rushed ── */

const ENTER = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── SectionHeader ── */

export function SectionHeader({
  layout = 'centered',
  size = 'md',
  align = 'center',
  eyebrow,
  badgeVariant = 'default',
  headline,
  description,
  className,
}: SectionHeaderProps) {
  const isLeft = layout === 'split' || align === 'left';

  if (layout === 'split') {
    return (
      <motion.div
        className={cn('flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12', className)}
        variants={ENTER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-6%' }}
      >
        {/* Left — eyebrow + headline */}
        <div className="flex flex-col gap-3 lg:w-[40%] lg:shrink-0">
          {eyebrow !== undefined && (
            <Badge variant={badgeVariant} size="sm">
              {eyebrow}
            </Badge>
          )}
          <h2 className={cn(headingClasses[size], 'text-(--foreground)')}>{headline}</h2>
        </div>

        {/* Right — description */}
        {description !== undefined && (
          <p className={cn(descriptionClasses[size], 'leading-relaxed lg:pt-1')}>{description}</p>
        )}
      </motion.div>
    );
  }

  /* Centered / left-aligned layout */
  return (
    <motion.div
      className={cn(
        'flex flex-col gap-3',
        isLeft ? 'items-start text-left' : 'items-center text-center',
        className,
      )}
      variants={ENTER}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-6%' }}
    >
      {eyebrow !== undefined && (
        <Badge variant={badgeVariant} size="sm">
          {eyebrow}
        </Badge>
      )}
      <h2 className={cn(headingClasses[size], 'text-(--foreground) max-w-[30ch]')}>{headline}</h2>
      {description !== undefined && (
        <p className={cn(descriptionClasses[size], 'max-w-[58ch] leading-relaxed')}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
