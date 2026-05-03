'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ── */

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'danger'
  | 'info'
  | 'outline'
  | 'glass';

type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  /** Subtle pulse — only for live/active states, not auto-applied */
  pulse?: boolean;
  icon?: React.ReactNode;
  interactive?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

/* ── Variant styles — inline via DKC-B2B tokens only ── */

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-(--muted)               text-(--muted-foreground)    border border-(--border)',
  primary: 'bg-(--primary)             text-(--primary-foreground)  border border-(--primary)',
  secondary: 'bg-(--secondary)           text-(--secondary-foreground) border border-(--border)',
  accent: 'bg-(--signature)            text-white                   border border-(--signature)',
  success: 'bg-(--success-soft)        text-(--success)             border border-(--success)',
  warning: 'bg-(--warning-soft)        text-(--warning)             border border-(--warning)',
  error: 'bg-(--destructive-soft)    text-(--destructive)         border border-(--destructive)',
  danger: 'bg-(--destructive-soft)    text-(--destructive)         border border-(--destructive)',
  info: 'bg-(--info-soft)           text-(--info)                border border-(--info)',
  outline: 'bg-transparent            text-(--foreground)           border border-(--border)',
  glass: 'glass-1                   text-(--foreground)           border border-(--border)',
};

/* ── Dot colors — match variant text color ── */

const dotColorMap: Record<BadgeVariant, string> = {
  default: 'bg-(--muted-foreground)',
  primary: 'bg-(--primary-foreground)',
  secondary: 'bg-(--secondary-foreground)',
  accent: 'bg-white',
  success: 'bg-(--success)',
  warning: 'bg-(--warning)',
  error: 'bg-(--destructive)',
  danger: 'bg-(--destructive)',
  info: 'bg-(--info)',
  outline: 'bg-(--foreground)',
  glass: 'bg-(--foreground)',
};

/* ── Size classes ── */

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-[10px] px-2    py-0.5   gap-[3px]',
  md: 'text-xs     px-2.5  py-[3px] gap-1',
  lg: 'text-[13px] px-3.5  py-1     gap-1.5',
};

/* ── Motion config — subtle only ── */

const motionProps = {
  initial: { opacity: 0, y: 2 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 2 },
  transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
} as const;

/* ── StatusDot ── */

function StatusDot({
  variant,
  size,
  pulse,
}: {
  variant: BadgeVariant;
  size: BadgeSize;
  pulse: boolean;
}) {
  const dim = size === 'lg' ? 'size-2' : 'size-1.5';

  return (
    <span className={cn('relative inline-flex shrink-0 items-center justify-center', dim)}>
      {pulse && (
        <span
          aria-hidden="true"
          className={cn('absolute inset-0 rounded-full', dotColorMap[variant])}
          style={{
            opacity: 0.4,
            transform: 'scale(1.8)',
            animation: 'glowPulse 2.4s ease-in-out infinite',
          }}
        />
      )}
      <span className={cn('relative rounded-full', dim, dotColorMap[variant])} />
    </span>
  );
}

/* ── RemoveButton ── */

function RemoveButton({ onRemove, size }: { onRemove: () => void; size: BadgeSize }) {
  const iconSize = size === 'sm' ? 8 : size === 'md' ? 9 : 10;

  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
      className="-mr-0.5 shrink-0 rounded-full p-px opacity-50 transition-opacity duration-150 hover:opacity-100 focus:outline-none focus-visible:opacity-100"
      whileTap={{ scale: 0.9, transition: { duration: 0.12 } }}
      aria-label="Remove"
    >
      <X size={iconSize} weight="bold" />
    </motion.button>
  );
}

/* ── Badge ── */

export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  icon,
  interactive = false,
  removable = false,
  onRemove,
  onClick,
  children,
  className,
}: BadgeProps) {
  const isClickable = interactive || onClick !== undefined;

  const baseClasses = cn(
    'inline-flex items-center font-medium leading-none whitespace-nowrap',
    'rounded-[var(--radius-badge)]',
    variantClasses[variant],
    sizeClasses[size],
    isClickable && [
      'cursor-pointer',
      'transition-[box-shadow,opacity] duration-150',
      'hover:opacity-90',
      'focus:outline-none',
      'focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
    ],
    className,
  );

  const inner = (
    <>
      {dot && <StatusDot variant={variant} size={size} pulse={pulse} />}
      {!dot && icon !== undefined && <span className="flex shrink-0 items-center">{icon}</span>}
      <span className="leading-none">{children}</span>
      {removable && onRemove !== undefined && <RemoveButton onRemove={onRemove} size={size} />}
    </>
  );

  if (isClickable) {
    return (
      <AnimatePresence>
        <motion.button
          type="button"
          onClick={onClick}
          className={baseClasses}
          whileTap={{ scale: 0.98, transition: { duration: 0.12 } }}
          {...motionProps}
        >
          {inner}
        </motion.button>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.span className={baseClasses} {...motionProps}>
        {inner}
      </motion.span>
    </AnimatePresence>
  );
}

/* ── BadgeGroup ── */

interface BadgeGroupProps {
  children: React.ReactNode;
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

const gapClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-[0.375rem]',
  md: 'gap-2',
  lg: 'gap-3',
};

const alignClasses: Record<'start' | 'center' | 'end', string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

export function BadgeGroup({
  children,
  wrap = true,
  gap = 'sm',
  align = 'start',
  className,
}: BadgeGroupProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        wrap ? 'flex-wrap' : 'overflow-x-auto',
        gapClasses[gap],
        alignClasses[align],
        className,
      )}
    >
      {children}
    </div>
  );
}
