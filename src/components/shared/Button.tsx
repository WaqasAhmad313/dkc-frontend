'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ── */

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive'
  | 'elite'
  | 'depth'
  | 'aurora';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Shows spinner and dims label */
  loading?: boolean;
  /** SR announcement while loading */
  loadingText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Square icon-only — set aria-label on the button */
  iconOnly?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/* ── Variant classes — map to globals.css btn-* ── */

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  destructive: 'btn-destructive',
  elite: 'btn-elite',
  depth: 'btn-depth-cta',
  aurora: 'btn-aurora',
  link: cn(
    'bg-transparent border-transparent shadow-none p-0 h-auto min-h-0',
    'text-(--signature) underline underline-offset-[3px]',
    'decoration-(--signature)/40',
    'hover:decoration-(--signature) transition-[color,text-decoration-color]',
    'active:opacity-70',
  ),
};

/* ── Size classes — map to globals.css btn-* ── */

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'text-xs  px-2.5  min-h-[32px]',
  sm: 'text-xs  px-3    min-h-[36px]',
  md: 'text-sm  px-4    min-h-[44px]',
  lg: 'text-sm  px-5    min-h-[52px]',
  xl: 'text-base px-6   min-h-[60px]',
};

/* ── Icon-only square sizing ── */

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  xs: 'p-1   min-h-[32px] w-[32px]',
  sm: 'p-2   min-h-[36px] w-[36px]',
  md: 'p-2.5 min-h-[44px] w-[44px]',
  lg: 'p-3   min-h-[52px] w-[52px]',
  xl: 'p-3.5 min-h-[60px] w-[60px]',
};

/* ── Spinner ── */

const spinnerDim: Record<ButtonSize, number> = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 };

function Spinner({ size }: { size: ButtonSize }) {
  return (
    <svg
      width={spinnerDim[size]}
      height={spinnerDim[size]}
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      style={{ animation: 'spin 0.75s linear infinite' }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
      <path d="M12 3a9 9 0 0 1 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Button ── */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      loadingText,
      iconLeft,
      iconRight,
      iconOnly = false,
      fullWidth = false,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled === true || loading;
    const isLink = variant === 'link';

    return (
      <motion.button
        ref={ref}
        type="button"
        className={cn(
          'btn',
          variantClasses[variant],
          !iconOnly && sizeClasses[size],
          iconOnly && [sizeClasses[size], iconOnlySizeClasses[size]],
          fullWidth && 'w-full',
          loading && 'pointer-events-none',
          /* xs/sm get explicit touch target floor — md+ already ≥ 44px */
          (size === 'xs' || size === 'sm') && !iconOnly && 'touch-target',
          className,
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...(!isDisabled && !isLink
          ? { whileTap: { scale: 0.98, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } } }
          : {})}
        {...props}
      >
        {/* Left slot — spinner while loading, icon otherwise */}
        {loading ? (
          <Spinner size={size} />
        ) : iconLeft !== undefined ? (
          <span className="flex shrink-0 items-center" aria-hidden="true">
            {iconLeft}
          </span>
        ) : null}

        {/* Label */}
        {!iconOnly && children !== undefined && (
          <span className={cn('relative transition-opacity duration-150', loading && 'opacity-60')}>
            {loading && loadingText !== undefined ? (
              <>
                <span aria-hidden="true">{children}</span>
                <span className="sr-only">{loadingText}</span>
              </>
            ) : (
              children
            )}
          </span>
        )}

        {/* Right icon — hidden while loading */}
        {!loading && !iconOnly && iconRight !== undefined && (
          <span className="flex shrink-0 items-center" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';

/* ── ButtonGroup — segmented control, flattened inner radii ── */

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn(
        'inline-flex items-center',
        '*:rounded-none',
        '[&>*:first-child]:rounded-l-[var(--radius-md)]',
        '[&>*:last-child]:rounded-r-[var(--radius-md)]',
        '[&>*+*]:-ml-px',
        '[&>*:focus-visible]:z-10',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ── CTAButton — arrow CTA, defaults to elite ── */

interface CTAButtonProps extends Omit<ButtonProps, 'iconRight'> {
  arrow?: boolean;
}

export function CTAButton({
  arrow = true,
  size = 'md',
  variant = 'elite',
  children,
  ...rest
}: CTAButtonProps) {
  const arrowSize = size === 'lg' || size === 'xl' ? 18 : 16;

  return (
    <div className="group inline-flex">
      <Button
        size={size}
        variant={variant}
        {...rest}
        iconRight={
          arrow ? (
            <ArrowRight
              size={arrowSize}
              weight="bold"
              /* max translateX 4px — within motion discipline */
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          ) : undefined
        }
      >
        {children}
      </Button>
    </div>
  );
}
