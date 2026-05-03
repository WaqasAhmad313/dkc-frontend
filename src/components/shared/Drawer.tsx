'use client';

import { useEffect, useCallback, useId } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { Variants } from 'framer-motion';

/* ── Types ── */

type DrawerPosition = 'right' | 'left' | 'bottom';
type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type DrawerSurface = 'default' | 'elevated' | 'focus' | 'glass';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string | undefined;
  description?: string | undefined;
  position?: DrawerPosition | undefined;
  size?: DrawerSize | undefined;
  surface?: DrawerSurface | undefined;
  closeOnOverlay?: boolean | undefined;
  closeOnEsc?: boolean | undefined;
  showClose?: boolean | undefined;
  children: React.ReactNode;
  footer?: React.ReactNode | undefined;
  className?: string | undefined;
}

/* ── Size map ── */

const sizeMap: Record<DrawerPosition, Record<DrawerSize, string>> = {
  right: { sm: 'w-80', md: 'w-96', lg: 'w-[480px]', xl: 'w-[600px]', full: 'w-screen' },
  left: { sm: 'w-80', md: 'w-96', lg: 'w-[480px]', xl: 'w-[600px]', full: 'w-screen' },
  bottom: { sm: 'h-64', md: 'h-96', lg: 'h-[480px]', xl: 'h-[600px]', full: 'h-[90dvh]' },
};

const positionClasses: Record<DrawerPosition, string> = {
  right: 'top-0 right-0 h-full',
  left: 'top-0 left-0 h-full',
  bottom: 'bottom-0 left-0 w-full',
};

/* ── Surface — panel background ── */

const surfaceClasses: Record<DrawerSurface, string> = {
  default: 'bg-(--popover)',
  elevated: 'bg-(--background-elevated)',
  focus: 'bg-(--background-focus)',
  glass: 'glass-2',
};

/* ── Edge border per position ── */

const edgeBorderClasses: Record<DrawerPosition, string> = {
  right: 'border-l border-(--border)',
  left: 'border-r border-(--border)',
  bottom: 'border-t border-(--border)',
};

/* ── Motion variants — ease-premium, no spring ── */

const EASE_IN = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.4, 0, 1, 1] as const;

const drawerVariants: Record<DrawerPosition, Variants> = {
  right: {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: EASE_IN } },
    exit: { x: '100%', transition: { duration: 0.22, ease: EASE_OUT } },
  },
  left: {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: EASE_IN } },
    exit: { x: '-100%', transition: { duration: 0.22, ease: EASE_OUT } },
  },
  bottom: {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 0.32, ease: EASE_IN } },
    exit: { y: '100%', transition: { duration: 0.22, ease: EASE_OUT } },
  },
};

/* ── Drawer ── */

export function Drawer({
  open,
  onClose,
  title,
  description,
  position = 'right',
  size = 'md',
  surface = 'default',
  closeOnOverlay = true,
  closeOnEsc = true,
  showClose = true,
  children,
  footer,
  className,
}: DrawerProps) {
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

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <div
          className="fixed inset-0 z-[var(--z-modal)]"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnOverlay ? onClose : undefined}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className={cn(
              'absolute flex flex-col',
              surfaceClasses[surface],
              edgeBorderClasses[position],
              positionClasses[position],
              sizeMap[position][size],
              /* edge drawers — modal radius on the inward-facing corners only */
              position === 'bottom' && 'rounded-t-[var(--radius-modal)]',
              position === 'right' && 'rounded-l-[var(--radius-modal)]',
              position === 'left' && 'rounded-r-[var(--radius-modal)]',
              className,
            )}
            style={{ boxShadow: 'var(--shadow-2xl)' }}
            variants={drawerVariants[position]}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Bottom sheet drag handle */}
            {position === 'bottom' && (
              <div className="flex shrink-0 justify-center pb-1 pt-3" aria-hidden="true">
                <div className="bg-(--border) h-1 w-10 rounded-full" />
              </div>
            )}

            {/* Header */}
            {(title !== undefined || showClose) && (
              <div className="border-(--border) flex shrink-0 items-start justify-between gap-4 border-b px-6 py-5">
                <div className="flex min-w-0 flex-col gap-1">
                  {title !== undefined && (
                    <h2 id={titleId} className="text-(--foreground) text-base font-semibold">
                      {title}
                    </h2>
                  )}
                  {description !== undefined && (
                    <p className="text-(--muted-foreground) text-sm">{description}</p>
                  )}
                </div>

                {showClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close drawer"
                    className={cn(
                      'shrink-0 rounded-[var(--radius-md)] p-1.5',
                      'text-(--muted-foreground) hover:text-(--foreground)',
                      'hover:bg-(--muted)',
                      'transition-colors duration-150',
                      'focus:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
                    )}
                  >
                    <X size={18} weight="bold" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>

            {/* Footer */}
            {footer !== undefined && (
              <div className="border-(--border) shrink-0 border-t px-6 py-4">{footer}</div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
