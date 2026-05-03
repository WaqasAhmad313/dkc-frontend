'use client';

import { useState, useRef, useCallback, useId } from 'react';
import { motion, AnimatePresence, type Variants, type TargetAndTransition } from 'framer-motion';
import { Question } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ── */

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipVariant = 'default' | 'inverse' | 'info';

interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition | undefined;
  variant?: TooltipVariant | undefined;
  delay?: number | undefined;
  maxWidth?: number | undefined;
  disabled?: boolean | undefined;
  children: React.ReactElement;
  className?: string | undefined;
}

/* ── Position classes ── */

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full    left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full  top-1/2  -translate-y-1/2 mr-2',
  right: 'left-full   top-1/2  -translate-y-1/2 ml-2',
};

/* CSS border-trick arrows — zero-size span, solid borders */
const arrowClasses: Record<TooltipPosition, string> = {
  top: 'top-full   left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-b-0 border-x-transparent border-b-transparent border-t-current',
  bottom:
    'bottom-full left-1/2 -translate-x-1/2 border-x-4 border-b-4 border-t-0 border-x-transparent border-t-transparent border-b-current',
  left: 'left-full  top-1/2  -translate-y-1/2 border-y-4 border-l-4 border-r-0 border-y-transparent border-r-transparent border-l-current',
  right:
    'right-full top-1/2  -translate-y-1/2 border-y-4 border-r-4 border-l-0 border-y-transparent border-l-transparent border-r-current',
};

/* ── Variant config — DKC-B2B tokens only ── */

const variantConfig: Record<TooltipVariant, { container: string; arrow: string }> = {
  default: {
    container: cn('bg-(--popover) text-(--popover-foreground)', 'border border-(--border)'),
    arrow: 'text-(--popover)',
  },
  inverse: {
    container: cn(
      'bg-(--primary) text-(--primary-foreground)',
      'border border-[color-mix(in_srgb,var(--primary-foreground)_18%,transparent)]',
    ),
    arrow: 'text-(--primary)',
  },
  info: {
    container: cn('bg-(--info-soft) text-(--foreground)', 'border border-(--info)'),
    arrow: 'text-(--info-soft)',
  },
};

/* ── Motion variants ── */

type PositionVariants = {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
  exit: TargetAndTransition;
} & Variants;

const EASE = [0.22, 1, 0.36, 1] as const;

const motionVariants: Record<TooltipPosition, PositionVariants> = {
  top: {
    hidden: { opacity: 0, y: 4, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 2, scale: 0.99 },
  },
  bottom: {
    hidden: { opacity: 0, y: -4, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -2, scale: 0.99 },
  },
  left: {
    hidden: { opacity: 0, x: 4, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 2, scale: 0.99 },
  },
  right: {
    hidden: { opacity: 0, x: -4, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -2, scale: 0.99 },
  },
};

/* ── Tooltip ── */

export function Tooltip({
  content,
  position = 'top',
  variant = 'default',
  delay = 400,
  maxWidth = 220,
  disabled = false,
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();
  const config = variantConfig[variant];
  const motionVar = motionVariants[position];

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [disabled, delay]);

  const hide = useCallback(() => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            className={cn(
              'z-(--z-popover) pointer-events-none absolute',
              positionClasses[position],
            )}
            variants={motionVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.16, ease: EASE }}
          >
            {/* Tooltip panel */}
            <div
              className={cn(
                'relative px-3 py-2 text-xs font-medium',
                'whitespace-normal leading-snug',
                'rounded-[var(--radius-tooltip)]',
                'shadow-(--shadow-lg)',
                config.container,
                className,
              )}
              style={{ maxWidth }}
            >
              {content}

              {/* Arrow — inherits text color from container */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute h-0 w-0 border-solid',
                  arrowClasses[position],
                  config.arrow,
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── IconTooltip ── */

interface IconTooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition | undefined;
  variant?: TooltipVariant | undefined;
  size?: number | undefined;
  className?: string | undefined;
}

export function IconTooltip({
  content,
  position = 'top',
  variant = 'default',
  size = 14,
  className,
}: IconTooltipProps) {
  return (
    <Tooltip content={content} position={position} variant={variant}>
      <button
        type="button"
        className={cn(
          'rounded-(--radius-pill) inline-flex cursor-help items-center justify-center',
          'text-(--muted-foreground) hover:text-foreground)',
          'transition-colors duration-150 focus:outline-none',
          'focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
          className,
        )}
        aria-label="More information"
      >
        <Question size={size} weight="fill" />
      </button>
    </Tooltip>
  );
}
