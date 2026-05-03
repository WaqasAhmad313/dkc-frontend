'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── Types ── */

type ProgressVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';

interface ProgressProps {
  value: number;
  max?: number | undefined;
  variant?: ProgressVariant | undefined;
  size?: ProgressSize | undefined;
  label?: string | undefined;
  showValue?: boolean | undefined;
  animated?: boolean | undefined;
  /** Optional light pass — only for active loading/progress, not static stats */
  shine?: boolean | undefined;
  className?: string | undefined;
}

/* ── Size map ── */

const sizeClasses: Record<ProgressSize, string> = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

/* ── Fill colors — solid token-based, no gradients ── */

const variantFill: Record<ProgressVariant, string> = {
  default: 'var(--primary)',
  primary: 'var(--primary)',
  accent: 'var(--signature)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--destructive)',
  info: 'var(--info)',
};

/* ── Motion ── */

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Progress ── */

export function Progress({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  label,
  showValue = false,
  animated = true,
  shine = false,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div className={cn('flex w-full flex-col gap-1.5', className)}>
      {(label !== undefined || showValue) && (
        <div className="flex items-center justify-between gap-2">
          {label !== undefined && (
            <span className="text-(--foreground) text-sm font-medium">{label}</span>
          )}
          {showValue && (
            <span className="text-(--muted-foreground) text-xs font-semibold tabular-nums">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        className={cn(
          'relative w-full overflow-hidden rounded-[var(--radius-pill)]',
          'bg-(--secondary)',
          sizeClasses[size],
        )}
      >
        {/* Fill */}
        <motion.div
          className="relative h-full overflow-hidden rounded-[var(--radius-pill)]"
          style={{ background: variantFill[variant] }}
          initial={{ width: 0 }}
          animate={{ width: inView || !animated ? `${percentage}%` : '0%' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          {/* Shine — optional, only for active loading contexts */}
          {shine && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--foreground) 18%, transparent) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* ── StepProgress ── */

interface StepProgressProps {
  steps: string[];
  current: number;
  className?: string | undefined;
}

export function StepProgress({ steps, current, className }: StepProgressProps) {
  return (
    <div
      className={cn('flex w-full items-center', className)}
      role="list"
      aria-label="Progress steps"
    >
      {steps.map((step, idx) => {
        const isDone = idx < current;
        const isActive = idx === current;
        const isLast = idx === steps.length - 1;

        return (
          <div
            key={idx}
            role="listitem"
            className="flex flex-1 items-center last:flex-none"
            aria-current={isActive ? 'step' : undefined}
          >
            <div className="flex flex-col items-center gap-1.5">
              {/* Step disc */}
              <motion.div
                className={cn(
                  'flex size-8 items-center justify-center rounded-full text-xs font-bold',
                  'border-2 transition-colors duration-300',
                  isDone && 'border-(--success) bg-(--success) text-(--success-foreground)',
                  isActive && 'border-(--primary) bg-(--background) text-(--primary)',
                  !isDone &&
                    !isActive &&
                    'border-(--border) bg-(--background) text-(--muted-foreground)',
                )}
                animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                {isDone ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </motion.div>

              <span
                className={cn(
                  'hidden whitespace-nowrap text-xs font-medium sm:block',
                  isActive && 'text-(--primary)',
                  isDone && 'text-(--foreground)',
                  !isDone && !isActive && 'text-(--muted-foreground)',
                )}
              >
                {step}
              </span>
            </div>

            {/* Connector */}
            {!isLast && (
              <div className="mx-2 mb-5 flex-1">
                <div className="bg-(--border) h-0.5 w-full overflow-hidden rounded-full">
                  <motion.div
                    className="bg-(--success) h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: isDone ? '100%' : '0%' }}
                    transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── ProgressStack ── */

interface ProgressSegment {
  value: number;
  variant?: ProgressVariant | undefined;
  label?: string | undefined;
}

interface ProgressStackProps {
  segments: ProgressSegment[];
  size?: ProgressSize | undefined;
  showLegend?: boolean | undefined;
  className?: string | undefined;
}

export function ProgressStack({
  segments,
  size = 'md',
  showLegend = false,
  className,
}: ProgressStackProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <div
        className={cn(
          'bg-(--secondary) flex w-full overflow-hidden rounded-[var(--radius-pill)]',
          sizeClasses[size],
        )}
        role="presentation"
      >
        {segments.map((seg, idx) => {
          const pct = (seg.value / total) * 100;
          return (
            <motion.div
              key={idx}
              className="h-full first:rounded-l-[var(--radius-pill)] last:rounded-r-[var(--radius-pill)]"
              style={{ background: variantFill[seg.variant ?? 'default'] }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: EASE }}
              aria-label={seg.label !== undefined ? `${seg.label}: ${Math.round(pct)}%` : undefined}
            />
          );
        })}
      </div>

      {showLegend && (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {segments.map((seg, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span
                className="size-2.5 shrink-0 rounded-full"
                style={{ background: variantFill[seg.variant ?? 'default'] }}
                aria-hidden="true"
              />
              {seg.label !== undefined && (
                <span className="text-(--muted-foreground) text-xs">
                  {seg.label}{' '}
                  <span className="text-(--foreground) font-semibold tabular-nums">
                    {Math.round((seg.value / total) * 100)}%
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
