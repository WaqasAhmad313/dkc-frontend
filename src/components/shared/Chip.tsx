'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ── */

type ChipVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'outline'
  | 'glass';

type ChipSize = 'sm' | 'md' | 'lg';

/* Discriminated union — removable requires onRemove */
type ChipRemovable =
  | { removable?: false; onRemove?: never }
  | { removable: true; onRemove: () => void };

type ChipBase = {
  variant?: ChipVariant | undefined;
  size?: ChipSize | undefined;
  icon?: React.ReactNode | undefined;
  dot?: boolean | undefined;
  /** Subtle pulse — only for live/active filter states */
  pulse?: boolean | undefined;
  onClick?: (() => void) | undefined;
  active?: boolean | undefined;
  disabled?: boolean | undefined;
  children: React.ReactNode;
  className?: string | undefined;
};

export type ChipProps = ChipBase & ChipRemovable;

/* ── Variant classes — inline DKC-B2B tokens, no chip-* dependency ── */

const variantClasses: Record<ChipVariant, string> = {
  default: 'bg-(--muted)            text-(--muted-foreground)    border border-(--border)',
  primary: 'bg-(--primary)          text-(--primary-foreground)  border border-(--primary)',
  secondary: 'bg-(--secondary)        text-(--secondary-foreground) border border-(--border)',
  accent: 'bg-(--accent)           text-(--accent-foreground)   border border-(--border)',
  success: 'bg-(--success-soft)     text-(--success)             border border-(--success)',
  warning: 'bg-(--warning-soft)     text-(--warning)             border border-(--warning)',
  error: 'bg-(--destructive-soft) text-(--destructive)         border border-(--destructive)',
  info: 'bg-(--info-soft)        text-(--info)                border border-(--info)',
  outline: 'bg-transparent          text-(--foreground)          border border-(--border)',
  glass: 'glass-1                   text-(--foreground)          border border-(--border)',
};

/* Active state — uniform across all variants, uses accent tokens */
const activeClass = 'bg-(--accent) text-(--accent-foreground) border-(--ring)';

/* Dot colors — match variant text */
const dotColors: Record<ChipVariant, string> = {
  default: 'bg-(--muted-foreground)',
  primary: 'bg-(--primary-foreground)',
  secondary: 'bg-(--secondary-foreground)',
  accent: 'bg-(--accent-foreground)',
  success: 'bg-(--success)',
  warning: 'bg-(--warning)',
  error: 'bg-(--destructive)',
  info: 'bg-(--info)',
  outline: 'bg-(--foreground)',
  glass: 'bg-(--foreground)',
};

/* ── Size classes ── */

const sizeClasses: Record<ChipSize, string> = {
  sm: 'text-[10px] px-2   py-0.5  gap-1',
  md: 'text-xs     px-3   py-1    gap-1.5',
  lg: 'text-sm     px-4   py-1.5  gap-2',
};

const iconSizeClasses: Record<ChipSize, string> = {
  sm: 'size-2.5',
  md: 'size-3',
  lg: 'size-3.5',
};

/* ── Motion — subtle, no bounce ── */

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Chip ── */

export function Chip({
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  pulse = false,
  removable,
  onRemove,
  onClick,
  active = false,
  disabled = false,
  children,
  className,
}: ChipProps) {
  const isInteractive = onClick !== undefined;

  const baseClass = cn(
    'inline-flex items-center font-medium leading-none whitespace-nowrap select-none',
    'rounded-[var(--radius-chip)]',
    'transition-[background,border-color,box-shadow,transform] duration-150',
    variantClasses[variant],
    sizeClasses[size],
    active && activeClass,
    disabled && 'pointer-events-none cursor-not-allowed opacity-40',
    isInteractive &&
      'cursor-pointer focus:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
    className,
  );

  const motionProps =
    !disabled && isInteractive
      ? {
          whileHover: { y: -1, transition: { duration: 0.15, ease: EASE } },
          whileTap: { scale: 0.98, transition: { duration: 0.12, ease: EASE } },
        }
      : {};

  const inner = (
    <ChipContent
      dot={dot}
      pulse={pulse}
      icon={icon}
      size={size}
      variant={variant}
      removable={removable ?? false}
      onRemove={onRemove}
    >
      {children}
    </ChipContent>
  );

  if (isInteractive) {
    return (
      <motion.button
        type="button"
        disabled={disabled}
        aria-pressed={active}
        onClick={onClick}
        className={baseClass}
        {...motionProps}
      >
        {inner}
      </motion.button>
    );
  }

  return <motion.span className={baseClass}>{inner}</motion.span>;
}

/* ── ChipContent (internal) ── */

interface ChipContentProps {
  dot: boolean;
  pulse: boolean;
  icon: React.ReactNode | undefined;
  size: ChipSize;
  variant: ChipVariant;
  removable: boolean;
  onRemove: (() => void) | undefined;
  children: React.ReactNode;
}

function ChipContent({
  dot,
  pulse,
  icon,
  size,
  variant,
  removable,
  onRemove,
  children,
}: ChipContentProps) {
  return (
    <>
      {/* Dot — with optional pulse via glowPulse keyframe */}
      {dot && (
        <span className="relative inline-flex shrink-0 items-center justify-center">
          {pulse && (
            <span
              aria-hidden="true"
              className={cn('absolute inset-0 rounded-full', dotColors[variant])}
              style={{
                opacity: 0.4,
                transform: 'scale(1.8)',
                animation: 'glowPulse 2.4s ease-in-out infinite',
              }}
            />
          )}
          <span
            className={cn(
              'relative shrink-0 rounded-full',
              iconSizeClasses[size],
              dotColors[variant],
            )}
            aria-hidden="true"
          />
        </span>
      )}

      {/* Icon — only when no dot */}
      {!dot && icon !== undefined && (
        <span
          className={cn('flex shrink-0 items-center', iconSizeClasses[size])}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      {/* Label */}
      <span className="truncate">{children}</span>

      {/* Remove button — subtle, no parkour */}
      {removable && onRemove !== undefined && (
        <motion.button
          type="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
          className={cn(
            'shrink-0 rounded-full',
            'opacity-50 hover:opacity-100',
            'transition-opacity duration-150',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-current',
            iconSizeClasses[size],
          )}
        >
          <X className="size-full" weight="bold" />
        </motion.button>
      )}
    </>
  );
}

/* ── ChipGroup ── */

interface ChipGroupProps {
  children: React.ReactNode;
  wrap?: boolean | undefined;
  gap?: 'sm' | 'md' | 'lg' | undefined;
  align?: 'start' | 'center' | 'end' | undefined;
  className?: string | undefined;
}

const gapClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-3',
};

const alignClasses: Record<'start' | 'center' | 'end', string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

export function ChipGroup({
  children,
  wrap = true,
  gap = 'sm',
  align = 'start',
  className,
}: ChipGroupProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        gapClasses[gap],
        alignClasses[align],
        wrap ? 'flex-wrap' : 'overflow-x-auto',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ── ChipSelector — controlled multi/single select ── */

interface ChipOption {
  value: string;
  label: string;
  icon?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
}

interface ChipSelectorProps {
  options: ChipOption[];
  value: string[];
  onChange: (value: string[]) => void;
  variant?: ChipVariant | undefined;
  size?: ChipSize | undefined;
  multiple?: boolean | undefined;
  className?: string | undefined;
}

export function ChipSelector({
  options,
  value,
  onChange,
  variant = 'default',
  size = 'md',
  multiple = true,
  className,
}: ChipSelectorProps) {
  function toggle(val: string) {
    if (multiple) {
      onChange(value.includes(val) ? value.filter((v) => v !== val) : [...value, val]);
    } else {
      onChange(value.includes(val) ? [] : [val]);
    }
  }

  return (
    <ChipGroup className={className}>
      <AnimatePresence initial={false}>
        {options.map((opt) => (
          <Chip
            key={opt.value}
            variant={variant}
            size={size}
            icon={opt.icon}
            active={value.includes(opt.value)}
            disabled={opt.disabled}
            onClick={() => toggle(opt.value)}
          >
            {opt.label}
          </Chip>
        ))}
      </AnimatePresence>
    </ChipGroup>
  );
}
