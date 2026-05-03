'use client';

import { forwardRef, useState, useId } from 'react';
import { Eye, EyeSlash, WarningCircle, CheckCircle, CaretUpDown } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ── */

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'default' | 'filled' | 'elevated' | 'ghost';

/* ── Size config ── */

const sizeConfig: Record<InputSize, { height: string; text: string; icon: string; label: string }> =
  {
    sm: { height: 'input-sm', text: 'text-sm', icon: 'size-4', label: 'text-xs' },
    md: { height: 'input-base', text: 'text-sm', icon: 'size-4', label: 'text-sm' },
    lg: { height: 'input-lg', text: 'text-base', icon: 'size-5', label: 'text-base' },
  };

/* ── Variant surface classes ── */

const variantClasses: Record<InputVariant, string> = {
  default: 'bg-(--background)          border border-(--input)',
  filled: 'bg-(--background-elevated) border border-(--input)',
  elevated: 'bg-(--card)                border border-(--border) shadow-[var(--shadow-sm)]',
  ghost: 'bg-transparent             border border-transparent focus:border-(--ring)',
};

/* ── Shared base input classes ── */

const inputBase = cn(
  'w-full rounded-[var(--radius-input)] px-3',
  'text-(--foreground) placeholder:text-(--muted-foreground)',
  'outline-none transition-[border-color,box-shadow] duration-150',
  'disabled:cursor-not-allowed disabled:opacity-55 disabled:bg-(--muted)',
);

/* ── Focus / state shadows ── */

const focusShadow = '0 0 0 3px color-mix(in srgb, var(--ring) 22%, transparent)';
const errorShadow = '0 0 0 3px color-mix(in srgb, var(--destructive) 18%, transparent)';
const successShadow = '0 0 0 3px color-mix(in srgb, var(--success) 18%, transparent)';

/* ── FieldWrapper ── */

interface FieldWrapperProps {
  id: string;
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  success?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  size: InputSize;
  fullWidth: boolean;
  children: React.ReactNode;
}

function FieldWrapper({
  id,
  label,
  hint,
  error,
  success,
  required = false,
  disabled = false,
  size,
  fullWidth,
  children,
}: FieldWrapperProps) {
  const cfg = sizeConfig[size];
  const hasError = (error?.length ?? 0) > 0;
  const hasSuccess = (success?.length ?? 0) > 0 && !hasError;

  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      {label !== undefined && (
        <label
          htmlFor={id}
          className={cn(
            'text-(--foreground) select-none font-medium',
            cfg.label,
            disabled && 'opacity-50',
          )}
        >
          {label}
          {required && (
            <span className="text-(--destructive) ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {hasError && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-(--destructive) flex items-center gap-1.5 text-xs font-medium"
        >
          <WarningCircle size={12} weight="fill" aria-hidden="true" />
          {error}
        </p>
      )}

      {hasSuccess && (
        <p className="text-(--success) flex items-center gap-1.5 text-xs font-medium">
          <CheckCircle size={12} weight="fill" aria-hidden="true" />
          {success}
        </p>
      )}

      {hint !== undefined && !hasError && !hasSuccess && (
        <p id={`${id}-hint`} className="text-(--muted-foreground) text-xs">
          {hint}
        </p>
      )}
    </div>
  );
}

/* ── Input ── */

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  success?: string | undefined;
  size?: InputSize | undefined;
  variant?: InputVariant | undefined;
  iconLeft?: React.ReactNode | undefined;
  iconRight?: React.ReactNode | undefined;
  fullWidth?: boolean | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      success,
      size = 'md',
      variant = 'default',
      iconLeft,
      iconRight,
      fullWidth = true,
      required,
      type = 'text',
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const cfg = sizeConfig[size];
    const [showPw, setShowPw] = useState(false);
    const [focused, setFocused] = useState(false);

    const isPassword = type === 'password';
    const resolvedType = isPassword ? (showPw ? 'text' : 'password') : type;
    const hasError = (error?.length ?? 0) > 0;
    const hasSuccess = (success?.length ?? 0) > 0 && !hasError;
    const hasRightSlot = isPassword || hasError || hasSuccess || iconRight !== undefined;

    const shadow = hasError
      ? errorShadow
      : hasSuccess
        ? successShadow
        : focused
          ? focusShadow
          : undefined;

    const borderColor = hasError
      ? 'var(--destructive)'
      : hasSuccess
        ? 'var(--success)'
        : focused
          ? 'var(--ring)'
          : undefined;

    return (
      <FieldWrapper
        id={id}
        label={label}
        hint={hint}
        error={error}
        success={success}
        required={required === true}
        disabled={disabled === true}
        size={size}
        fullWidth={fullWidth}
      >
        <div className="relative flex items-center rounded-[var(--radius-input)]">
          {/* Left icon */}
          {iconLeft !== undefined && (
            <span
              className={cn(
                'text-(--muted-foreground) pointer-events-none absolute left-3 shrink-0',
                cfg.icon,
              )}
              aria-hidden="true"
            >
              {iconLeft}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            type={resolvedType}
            disabled={disabled}
            required={required}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={
              hasError ? `${id}-error` : hint !== undefined ? `${id}-hint` : undefined
            }
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            className={cn(
              inputBase,
              variantClasses[variant],
              cfg.height,
              cfg.text,
              iconLeft !== undefined && 'pl-10',
              hasRightSlot && 'pr-10',
              className,
            )}
            style={{ boxShadow: shadow, borderColor }}
            {...props}
          />

          {/* Right slot */}
          {hasRightSlot && (
            <span className="absolute right-3 flex items-center gap-1.5">
              {hasError && !isPassword && (
                <WarningCircle
                  size={16}
                  weight="fill"
                  className="text-(--destructive) shrink-0"
                  aria-hidden="true"
                />
              )}
              {hasSuccess && !isPassword && (
                <CheckCircle
                  size={16}
                  weight="fill"
                  className="text-(--success) shrink-0"
                  aria-hidden="true"
                />
              )}
              {!hasError && !hasSuccess && iconRight !== undefined && (
                <span
                  className={cn('text-(--muted-foreground) pointer-events-none shrink-0', cfg.icon)}
                  aria-hidden="true"
                >
                  {iconRight}
                </span>
              )}
              {isPassword && (
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPw((v) => !v)}
                  className="text-(--muted-foreground) hover:text-(--foreground) shrink-0 transition-colors duration-150 focus:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? (
                    <EyeSlash size={16} weight="regular" />
                  ) : (
                    <Eye size={16} weight="regular" />
                  )}
                </button>
              )}
            </span>
          )}
        </div>
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';

/* ── Textarea ── */

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  success?: string | undefined;
  size?: InputSize | undefined;
  variant?: InputVariant | undefined;
  fullWidth?: boolean | undefined;
  /** Requires maxLength to be set */
  showCount?: boolean | undefined;
  autoResize?: boolean | undefined;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      success,
      size = 'md',
      variant = 'default',
      fullWidth = true,
      showCount = false,
      autoResize = false,
      required,
      disabled,
      className,
      onChange,
      maxLength,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const cfg = sizeConfig[size];
    const hasError = (error?.length ?? 0) > 0;
    const hasSuccess = (success?.length ?? 0) > 0 && !hasError;
    const [focused, setFocused] = useState(false);
    const [charCount, setCharCount] = useState<number>(() => {
      if (typeof value === 'string') return value.length;
      if (typeof defaultValue === 'string') return defaultValue.length;
      return 0;
    });

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setCharCount(e.target.value.length);
      if (autoResize) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      onChange?.(e);
    }

    const shadow = hasError
      ? errorShadow
      : hasSuccess
        ? successShadow
        : focused
          ? focusShadow
          : undefined;

    const borderColor = hasError
      ? 'var(--destructive)'
      : hasSuccess
        ? 'var(--success)'
        : focused
          ? 'var(--ring)'
          : undefined;

    return (
      <FieldWrapper
        id={id}
        label={label}
        hint={hint}
        error={error}
        success={success}
        required={required === true}
        disabled={disabled === true}
        size={size}
        fullWidth={fullWidth}
      >
        <div className="relative rounded-[var(--radius-input)]">
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={
              hasError ? `${id}-error` : hint !== undefined ? `${id}-hint` : undefined
            }
            className={cn(
              inputBase,
              variantClasses[variant],
              cfg.text,
              'min-h-[7.5rem] resize-y',
              autoResize && 'resize-none overflow-hidden',
              disabled === true && 'cursor-not-allowed',
              showCount && maxLength !== undefined && 'pb-8',
              className,
            )}
            style={{ boxShadow: shadow, borderColor }}
            {...props}
          />

          {/* Character count */}
          {showCount && maxLength !== undefined && (
            <span
              className={cn(
                'absolute bottom-2.5 right-3 text-[11px] tabular-nums',
                charCount >= maxLength
                  ? 'text-(--destructive) font-semibold'
                  : charCount >= maxLength * 0.85
                    ? 'text-(--warning)'
                    : 'text-(--muted-foreground)',
              )}
              aria-live="polite"
              aria-label={`${charCount} of ${maxLength} characters`}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </FieldWrapper>
    );
  },
);

Textarea.displayName = 'Textarea';

/* ── Select ── */

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean | undefined;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  success?: string | undefined;
  size?: InputSize | undefined;
  variant?: InputVariant | undefined;
  options: SelectOption[];
  placeholder?: string | undefined;
  fullWidth?: boolean | undefined;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      hint,
      error,
      success,
      size = 'md',
      variant = 'default',
      options,
      placeholder,
      fullWidth = true,
      required,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const cfg = sizeConfig[size];
    const hasError = (error?.length ?? 0) > 0;
    const hasSuccess = (success?.length ?? 0) > 0 && !hasError;
    const [focused, setFocused] = useState(false);

    const shadow = hasError
      ? errorShadow
      : hasSuccess
        ? successShadow
        : focused
          ? focusShadow
          : undefined;

    const borderColor = hasError
      ? 'var(--destructive)'
      : hasSuccess
        ? 'var(--success)'
        : focused
          ? 'var(--ring)'
          : undefined;

    return (
      <FieldWrapper
        id={id}
        label={label}
        hint={hint}
        error={error}
        success={success}
        required={required === true}
        disabled={disabled === true}
        size={size}
        fullWidth={fullWidth}
      >
        <div className="relative flex items-center rounded-[var(--radius-input)]">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={
              hasError ? `${id}-error` : hint !== undefined ? `${id}-hint` : undefined
            }
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            className={cn(
              inputBase,
              variantClasses[variant],
              cfg.height,
              cfg.text,
              'cursor-pointer appearance-none pr-10',
              disabled === true && 'cursor-not-allowed',
              className,
            )}
            style={{ boxShadow: shadow, borderColor }}
            {...props}
          >
            {placeholder !== undefined && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled === true}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Caret */}
          <span
            className={cn(
              'text-(--muted-foreground) pointer-events-none absolute right-3 shrink-0',
              cfg.icon,
            )}
            aria-hidden="true"
          >
            <CaretUpDown weight="bold" className="size-full" />
          </span>
        </div>
      </FieldWrapper>
    );
  },
);

Select.displayName = 'Select';
