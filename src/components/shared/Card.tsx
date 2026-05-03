'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── Types ── */

type CardVariant =
  | 'default'
  | 'elevated'
  | 'interactive'
  | 'active'
  | 'accent'
  | 'popover'
  | 'glass'
  | 'focus'
  | 'stat';

type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: CardVariant;
  padding?: CardPadding;
  /** Disables motion — for virtualised lists */
  static?: boolean;
  children: React.ReactNode;
  className?: string;
}

/* ── Variant classes — map to DKC-B2B globals.css tokens ── */

const variantClasses: Record<CardVariant, string> = {
  default: 'dkc-card',
  elevated: 'dkc-card shadow-[var(--shadow-lg)]',
  interactive:
    'dkc-card cursor-pointer transition-[transform,box-shadow] duration-[var(--duration-fast)]',
  active: 'dkc-card-active',
  accent: cn('dkc-card', 'border-(--signature) bg-(--signature-soft)'),
  popover: 'dkc-card-popover',
  glass: 'glass-2',
  focus: cn('dkc-card', 'bg-(--background-focus)'),
  stat: 'dkc-card',
};

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  xs: 'p-3',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

/* ── Motion — premium ease only, no bounce ── */

const EASE = [0.22, 1, 0.36, 1] as const;

const INTERACTIVE_MOTION = {
  whileHover: { y: -3, transition: { duration: 0.18, ease: EASE } },
  whileTap: { scale: 0.99, transition: { duration: 0.12, ease: EASE } },
};

const STAT_MOTION = {
  whileHover: { y: -2, transition: { duration: 0.18, ease: EASE } },
  whileTap: { scale: 0.99, transition: { duration: 0.12, ease: EASE } },
};

/* ── Card ── */

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      static: isStatic = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const effectivePadding: CardPadding = variant === 'stat' ? 'none' : padding;

    const motionProps = isStatic
      ? {}
      : variant === 'interactive'
        ? INTERACTIVE_MOTION
        : variant === 'stat'
          ? STAT_MOTION
          : {};

    return (
      <motion.div
        ref={ref}
        className={cn(variantClasses[variant], paddingClasses[effectivePadding], className)}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = 'Card';

/* ── Sub-components ── */

interface SubProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: SubProps) {
  return (
    <div className={cn('mb-4 flex items-start justify-between gap-3', className)}>{children}</div>
  );
}

export function CardBody({ children, className }: SubProps) {
  return <div className={cn('', className)}>{children}</div>;
}

/* CardFooter — border uses --border token */
export function CardFooter({ children, className }: SubProps) {
  return (
    <div
      className={cn(
        'border-(--border) mt-4 border-t pt-4',
        'flex items-center justify-between gap-3',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* CardDivider — single pixel, --border token */
export function CardDivider({ className }: { className?: string }) {
  return <div className={cn('bg-(--border) my-1.5 h-px w-full', className)} />;
}

/* ── CardImage ── */

interface CardImageProps {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
}

export function CardImage({ src, alt, aspectClass = 'aspect-video', className }: CardImageProps) {
  return (
    <div
      className={cn('-mx-px -mt-px overflow-hidden rounded-t-[inherit]', aspectClass, className)}
    >
      <img
        src={src}
        alt={alt}
        /* scale only when parent card has .group — no unconditional zoom */
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/* ── CardBadge ── */

type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface CardBadgeProps {
  children: React.ReactNode;
  position?: BadgePosition;
  className?: string;
}

const badgePosClasses: Record<BadgePosition, string> = {
  'top-left': 'top-3 left-3',
  'top-right': 'top-3 right-3',
  'bottom-left': 'bottom-3 left-3',
  'bottom-right': 'bottom-3 right-3',
};

export function CardBadge({ children, position = 'top-right', className }: CardBadgeProps) {
  return (
    <div className={cn('absolute z-[var(--z-content)]', badgePosClasses[position], className)}>
      {children}
    </div>
  );
}

/* ── StatCard ── */

type DeltaDirection = 'up' | 'down' | 'neutral';
type StatCardVariant = 'default' | 'elevated' | 'compact' | 'active';

interface StatCardProps {
  label?: string;
  value: string | number;
  delta?: string;
  deltaDirection?: DeltaDirection;
  icon?: React.ReactNode;
  description?: string;
  variant?: StatCardVariant;
  className?: string;
}

const statVariantClasses: Record<StatCardVariant, string> = {
  default: 'dkc-card',
  elevated: 'dkc-card shadow-[var(--shadow-lg)]',
  compact: 'dkc-card',
  active: 'dkc-card-active',
};

const statPaddingClasses: Record<StatCardVariant, string> = {
  default: 'p-5',
  elevated: 'p-6',
  compact: 'p-4',
  active: 'p-5',
};

/* Delta — maps to success/destructive/muted tokens */
const deltaClasses: Record<DeltaDirection, string> = {
  up: 'inline-flex items-center gap-1 rounded-[var(--radius-badge)] px-1.5 py-0.5 text-xs font-semibold bg-(--success-soft) text-(--success)',
  down: 'inline-flex items-center gap-1 rounded-[var(--radius-badge)] px-1.5 py-0.5 text-xs font-semibold bg-(--destructive-soft) text-(--destructive)',
  neutral:
    'inline-flex items-center gap-1 rounded-[var(--radius-badge)] px-1.5 py-0.5 text-xs font-semibold bg-(--muted) text-(--muted-foreground)',
};

const deltaArrow: Record<DeltaDirection, string> = {
  up: '↑',
  down: '↓',
  neutral: '→',
};

export function StatCard({
  label,
  value,
  delta,
  deltaDirection = 'up',
  icon,
  description,
  variant = 'default',
  className,
}: StatCardProps) {
  return (
    <motion.div
      className={cn(statVariantClasses[variant], statPaddingClasses[variant], className)}
      {...STAT_MOTION}
    >
      <div className="flex items-start justify-between gap-3">
        {label !== undefined && (
          <p className="text-(--muted-foreground) text-sm font-medium">{label}</p>
        )}
        {icon !== undefined && (
          <span className="text-(--muted-foreground) mt-0.5 shrink-0 opacity-70">{icon}</span>
        )}
      </div>

      <div className="mt-1 flex items-end gap-2.5">
        <p className="text-(--foreground) text-2xl font-semibold tracking-tight">{value}</p>
        {delta !== undefined && (
          <span className={cn(deltaClasses[deltaDirection], 'mb-1')}>
            <span aria-hidden="true">{deltaArrow[deltaDirection]}</span>
            {delta}
          </span>
        )}
      </div>

      {description !== undefined && (
        <p className="text-(--muted-foreground) mt-1 text-xs">{description}</p>
      )}
    </motion.div>
  );
}
