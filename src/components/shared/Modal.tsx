'use client';

import { useEffect, useCallback, useId } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, WarningCircle, CheckCircle, Info, Warning, Question } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { Variants } from 'framer-motion';

/* ── Types ── */

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type ModalVariant = 'default' | 'error' | 'success' | 'info' | 'warning' | 'confirm';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string | undefined;
  description?: string | undefined;
  size?: ModalSize | undefined;
  variant?: ModalVariant | undefined;
  closeOnOverlay?: boolean | undefined;
  closeOnEsc?: boolean | undefined;
  showClose?: boolean | undefined;
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  className?: string | undefined;
}

/* ── Size classes ── */

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
  full: 'max-w-5xl',
};

/* ── Variant config — state tokens only ── */

const variantConfig: Record<
  ModalVariant,
  {
    icon: React.ReactNode | null;
    headerBg: string;
    iconColor: string;
  } | null
> = {
  default: null,
  error: {
    icon: <WarningCircle size={22} weight="fill" />,
    headerBg: 'bg-(--destructive-soft)',
    iconColor: 'text-(--destructive)',
  },
  success: {
    icon: <CheckCircle size={22} weight="fill" />,
    headerBg: 'bg-(--success-soft)',
    iconColor: 'text-(--success)',
  },
  info: {
    icon: <Info size={22} weight="fill" />,
    headerBg: 'bg-(--info-soft)',
    iconColor: 'text-(--info)',
  },
  warning: {
    icon: <Warning size={22} weight="fill" />,
    headerBg: 'bg-(--warning-soft)',
    iconColor: 'text-(--warning)',
  },
  confirm: {
    icon: <Question size={22} weight="fill" />,
    headerBg: 'bg-(--muted)',
    iconColor: 'text-(--muted-foreground)',
  },
};

/* ── Motion — ease-premium, no bounce ── */

const EASE_IN = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.4, 0, 1, 1] as const;

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.24, ease: EASE_IN } },
  exit: { opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.16, ease: EASE_OUT } },
};

/* ── Modal ── */

export function Modal({
  open,
  onClose,
  title,
  description,
  size = 'md',
  variant = 'default',
  closeOnOverlay = true,
  closeOnEsc = true,
  showClose = true,
  children,
  footer,
  className,
}: ModalProps) {
  const titleId = useId();

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') onClose();
    },
    [closeOnEsc, onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, handleEsc]);

  if (typeof window === 'undefined') return null;

  const vConfig = variantConfig[variant];
  const hasHeader = title !== undefined || showClose;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title !== undefined ? titleId : undefined}
        >
          {/* Overlay — background token + blur */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'color-mix(in srgb, var(--background) 78%, transparent)',
              backdropFilter: 'blur(10px)',
            }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={closeOnOverlay ? onClose : undefined}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className={cn(
              'relative flex max-h-[90dvh] w-full flex-col overflow-hidden',
              'bg-(--popover) text-(--popover-foreground)',
              'border-(--border) border',
              'rounded-[var(--radius-modal)]',
              'shadow-[var(--shadow-2xl)]',
              sizeClasses[size],
              className,
            )}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Variant accent header */}
            {vConfig !== null && (
              <div
                className={cn(
                  'border-(--border) flex shrink-0 items-center gap-3 border-b px-6 py-4',
                  vConfig.headerBg,
                )}
              >
                <span className={cn('shrink-0', vConfig.iconColor)} aria-hidden="true">
                  {vConfig.icon}
                </span>
                {title !== undefined && (
                  <h2 id={titleId} className="text-(--foreground) text-base font-semibold">
                    {title}
                  </h2>
                )}
                {showClose && <CloseButton onClose={onClose} className="ml-auto" />}
              </div>
            )}

            {/* Default header */}
            {vConfig === null && hasHeader && (
              <div className="flex shrink-0 items-start justify-between gap-4 px-6 pb-0 pt-6">
                <div className="flex flex-col gap-1">
                  {title !== undefined && (
                    <h2 id={titleId} className="text-(--foreground) text-base font-semibold">
                      {title}
                    </h2>
                  )}
                  {description !== undefined && (
                    <p className="text-(--muted-foreground) text-sm">{description}</p>
                  )}
                </div>
                {showClose && <CloseButton onClose={onClose} />}
              </div>
            )}

            {/* Header / body divider */}
            {vConfig === null && title !== undefined && (
              <div className="bg-(--border) mx-6 mt-4 h-px shrink-0" />
            )}

            {/* Description for variant modals */}
            {vConfig !== null && description !== undefined && (
              <p className="text-(--muted-foreground) shrink-0 px-6 pt-4 text-sm">{description}</p>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>

            {/* Footer */}
            {footer !== undefined && (
              <>
                <div className="bg-(--border) h-px shrink-0" />
                <div className="shrink-0 px-6 py-4">{footer}</div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* ── CloseButton (internal) ── */

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void;
  className?: string | undefined;
}) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close modal"
      className={cn(
        'shrink-0 rounded-[var(--radius-md)] p-1.5',
        'text-(--muted-foreground) hover:text-(--foreground)',
        'hover:bg-(--muted)',
        'transition-colors duration-150',
        'focus:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
        className,
      )}
    >
      <X size={18} weight="bold" />
    </button>
  );
}

/* ── Spinner (internal) ── */

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
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

/* ── ConfirmModal ── */

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string | undefined;
  confirmLabel?: string | undefined;
  cancelLabel?: string | undefined;
  /** Switches confirm to destructive style */
  destructive?: boolean | undefined;
  loading?: boolean | undefined;
}

export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  loading = false,
}: ConfirmModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={title}
      {...(description !== undefined && { description })}
      size="sm"
      variant={destructive ? 'error' : 'confirm'}
      closeOnOverlay={!loading}
      closeOnEsc={!loading}
      showClose={!loading}
      footer={
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="btn btn-secondary btn-sm"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={cn(
              'btn btn-sm',
              destructive ? 'btn-destructive' : 'btn-primary',
              loading && 'pointer-events-none opacity-70',
            )}
            aria-busy={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Spinner />
                {confirmLabel}
              </span>
            ) : (
              confirmLabel
            )}
          </button>
        </div>
      }
    >
      <span />
    </Modal>
  );
}
