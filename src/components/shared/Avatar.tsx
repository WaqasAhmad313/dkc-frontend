'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { initials } from '@dkc/utils';

/* ── Types ── */

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

interface AvatarProps {
  src?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  size?: AvatarSize | undefined;
  status?: AvatarStatus | undefined;
  /** Ring highlight — for featured/selected/active users */
  ring?: boolean | undefined;
  /** Show name tooltip on hover */
  showName?: boolean | undefined;
  className?: string | undefined;
}

/* ── Size config ── */

const sizeConfig: Record<
  AvatarSize,
  {
    container: string;
    dim: number;
    text: string;
    statusDot: string;
    statusOffset: string;
    ringClass: string;
  }
> = {
  xs: {
    container: 'size-6',
    dim: 10,
    text: 'text-[9px] font-bold',
    statusDot: 'size-1.5 border',
    statusOffset: '-bottom-px -right-px',
    ringClass: 'ring-[1.5px]',
  },
  sm: {
    container: 'size-8',
    dim: 12,
    text: 'text-[11px] font-bold',
    statusDot: 'size-2 border',
    statusOffset: 'bottom-0 right-0',
    ringClass: 'ring-2',
  },
  md: {
    container: 'size-10',
    dim: 14,
    text: 'text-[13px] font-semibold',
    statusDot: 'size-2.5 border-[1.5px]',
    statusOffset: 'bottom-0 right-0',
    ringClass: 'ring-2',
  },
  lg: {
    container: 'size-12',
    dim: 16,
    text: 'text-sm font-semibold',
    statusDot: 'size-3 border-2',
    statusOffset: 'bottom-0 right-0',
    ringClass: 'ring-2',
  },
  xl: {
    container: 'size-16',
    dim: 20,
    text: 'text-base font-semibold',
    statusDot: 'size-3.5 border-2',
    statusOffset: 'bottom-0.5 right-0.5',
    ringClass: 'ring-[3px]',
  },
  '2xl': {
    container: 'size-20',
    dim: 24,
    text: 'text-xl font-semibold',
    statusDot: 'size-4 border-2',
    statusOffset: 'bottom-0.5 right-0.5',
    ringClass: 'ring-[3px]',
  },
};

/* ── Status config — DKC-B2B semantic tokens ── */

const statusConfig: Record<
  AvatarStatus,
  { dot: string; border: string; label: string; pulse: boolean }
> = {
  online: { dot: 'bg-(--success)', border: 'border-(--background)', label: 'Online', pulse: true },
  offline: {
    dot: 'bg-(--muted-foreground)',
    border: 'border-(--background)',
    label: 'Offline',
    pulse: false,
  },
  busy: { dot: 'bg-(--destructive)', border: 'border-(--background)', label: 'Busy', pulse: false },
  away: { dot: 'bg-(--warning)', border: 'border-(--background)', label: 'Away', pulse: false },
};

/* ── Fallback backgrounds — token pool seeded by name char ── */

const FALLBACK_BACKGROUNDS = [
  { bg: 'var(--accent)', fg: 'var(--accent-foreground)' },
  { bg: 'var(--secondary)', fg: 'var(--secondary-foreground)' },
  { bg: 'var(--muted)', fg: 'var(--foreground)' },
  { bg: 'var(--primary)', fg: 'var(--primary-foreground)' },
  { bg: 'var(--popover)', fg: 'var(--popover-foreground)' },
  { bg: 'var(--card)', fg: 'var(--card-foreground)' },
] as const;

function fallbackFor(char: string): { bg: string; fg: string } {
  const idx = (char.codePointAt(0) ?? 0) % FALLBACK_BACKGROUNDS.length;
  return FALLBACK_BACKGROUNDS[idx]!;
}

/* ── Avatar ── */

export function Avatar({
  src,
  firstName,
  lastName,
  size = 'md',
  status,
  ring = false,
  showName = false,
  className,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cfg = sizeConfig[size];
  const nameParts = [
    ...(firstName ? [firstName] : []),
    ...(lastName ? [lastName] : []),
  ] as string[];
  const fullName = nameParts.join(' ');
  const hasName = nameParts.length > 0;
  const avatarInitials = hasName ? initials(firstName ?? '', lastName ?? '') : null;
  const showImg = Boolean(src) && !imgError;
  const fallback = fallbackFor(nameParts[0]?.[0] ?? 'A');

  return (
    <div
      className={cn('relative inline-flex shrink-0', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Disc */}
      <motion.div
        className={cn(
          'relative flex select-none items-center justify-center overflow-hidden rounded-full',
          cfg.container,
          ring && [
            cfg.ringClass,
            'ring-(--primary)',
            'ring-offset-2',
            'ring-offset-(--background)',
          ],
        )}
        style={{
          background: showImg ? undefined : fallback.bg,
          boxShadow: 'var(--shadow-sm)',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        {showImg ? (
          <img
            src={src}
            alt={hasName ? fullName : 'Avatar'}
            className="size-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : avatarInitials !== null ? (
          <span className={cn('tracking-wide', cfg.text)} style={{ color: fallback.fg }}>
            {avatarInitials}
          </span>
        ) : (
          <User size={cfg.dim} weight="bold" style={{ color: fallback.fg, opacity: 0.7 }} />
        )}
      </motion.div>

      {/* Status dot — pulse via glowPulse keyframe in globals.css */}
      {status !== undefined && (
        <span
          className={cn(
            'absolute rounded-full',
            cfg.statusDot,
            cfg.statusOffset,
            statusConfig[status].dot,
            statusConfig[status].border,
          )}
          role="img"
          aria-label={`Status: ${statusConfig[status].label}`}
        >
          {statusConfig[status].pulse && (
            <span
              aria-hidden="true"
              className={cn('absolute inset-0 rounded-full', statusConfig[status].dot)}
              style={{
                opacity: 0.45,
                transform: 'scale(1.7)',
                animation: 'glowPulse 2.4s ease-in-out infinite',
              }}
            />
          )}
        </span>
      )}

      {/* Tooltip — styled via .dkc-card-popover */}
      {showName && hasName && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              role="tooltip"
              initial={{ opacity: 0, y: 6, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className={cn(
                'dkc-card-popover pointer-events-none',
                'absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2',
                'z-[var(--z-popover)] whitespace-nowrap px-2.5 py-1',
                'text-xs font-medium',
              )}
            >
              {fullName}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ── AvatarGroup ── */

interface AvatarGroupProps {
  avatars: Omit<AvatarProps, 'size'>[];
  size?: AvatarSize | undefined;
  max?: number | undefined;
  overlap?: number | undefined;
  className?: string | undefined;
}

export function AvatarGroup({
  avatars,
  size = 'md',
  max = 4,
  overlap = 0.625,
  className,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflowCount = avatars.length - max;
  const cfg = sizeConfig[size];

  return (
    <div
      className={cn('flex items-center', className)}
      role="group"
      aria-label={`${avatars.length} member${avatars.length !== 1 ? 's' : ''}`}
    >
      {visible.map((avatar, idx) => (
        <motion.div
          key={idx}
          className="ring-(--background) rounded-full ring-2"
          style={{ marginLeft: idx === 0 ? 0 : `-${overlap}rem`, zIndex: visible.length - idx }}
          whileHover={{
            zIndex: 50,
            scale: 1.08,
            marginLeft: idx === 0 ? 0 : `-${overlap * 0.55}rem`,
          }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <Avatar {...avatar} size={size} showName />
        </motion.div>
      ))}

      {/* Overflow pill */}
      {overflowCount > 0 && (
        <motion.div
          aria-label={`${overflowCount} more`}
          className={cn(
            'dkc-card flex items-center justify-center rounded-full',
            'ring-(--background) border-(--border) border ring-2',
            cfg.container,
            cfg.text,
            'text-(--muted-foreground) cursor-default select-none font-semibold',
          )}
          style={{ marginLeft: `-${overlap}rem`, zIndex: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          +{overflowCount}
        </motion.div>
      )}
    </div>
  );
}
