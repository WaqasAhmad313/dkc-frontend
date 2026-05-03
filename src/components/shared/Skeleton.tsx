'use client';

import { cn } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════
   PRIMITIVES
═══════════════════════════════════════════════════════════ */

type SkeletonTone = 'default' | 'elevated' | 'focus';

interface SkeletonProps {
  className?: string | undefined;
  /** Disables animation — for reduced-motion or SSR */
  static?: boolean | undefined;
  tone?: SkeletonTone | undefined;
}

const toneClasses: Record<SkeletonTone, string> = {
  default: 'bg-(--muted)',
  elevated: 'bg-(--background-elevated)',
  focus: 'bg-(--background-focus)',
};

export function Skeleton({ className, static: isStatic = false, tone = 'default' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(toneClasses[tone], !isStatic && 'skeleton-wave', className)}
    />
  );
}

/* ── Text lines ── */

interface SkeletonTextProps {
  lines?: number | undefined;
  lastLineShort?: boolean | undefined;
  className?: string | undefined;
}

export function SkeletonText({ lines = 3, lastLineShort = true, className }: SkeletonTextProps) {
  return (
    <div aria-hidden="true" className={cn('flex flex-col gap-2', className)}>
      {Array.from({ length: lines }).map((_, idx) => {
        const isLast = idx === lines - 1;
        return (
          <Skeleton
            key={idx}
            className={cn(
              'h-4 rounded-[var(--radius-sm)]',
              isLast && lastLineShort ? 'w-3/5' : 'w-full',
            )}
          />
        );
      })}
    </div>
  );
}

/* ── Avatar ── */

type AvatarSkeletonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const avatarSizeClasses: Record<AvatarSkeletonSize, string> = {
  xs: 'size-6',
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-16',
  '2xl': 'size-20',
};

interface SkeletonAvatarProps {
  size?: AvatarSkeletonSize | undefined;
  className?: string | undefined;
}

export function SkeletonAvatar({ size = 'md', className }: SkeletonAvatarProps) {
  return <Skeleton className={cn('shrink-0 rounded-full', avatarSizeClasses[size], className)} />;
}

/* ═══════════════════════════════════════════════════════════
   COMPONENT SKELETONS
═══════════════════════════════════════════════════════════ */

/* ── Generic Card ── */

interface SkeletonCardProps {
  hasImage?: boolean | undefined;
  lines?: number | undefined;
  hasFooter?: boolean | undefined;
  className?: string | undefined;
}

export function SkeletonCard({
  hasImage = false,
  lines = 3,
  hasFooter = false,
  className,
}: SkeletonCardProps) {
  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading content"
      className={cn('dkc-card overflow-hidden', className)}
    >
      {hasImage && <Skeleton className="aspect-video w-full rounded-none" />}
      <div className={cn('flex flex-col gap-4', hasImage ? 'p-5' : 'p-6')}>
        <Skeleton className="h-5 w-2/3 rounded-[var(--radius-md)]" />
        <SkeletonText lines={lines} />
        {hasFooter && (
          <div className="border-(--border) flex items-center justify-between border-t pt-2">
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-[var(--radius-md)]" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Stat Card ── */

export function SkeletonStatCard({ className }: { className?: string | undefined }) {
  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading metric"
      className={cn('dkc-card p-5', className)}
    >
      <div className="flex items-start justify-between gap-3">
        <Skeleton className="h-3.5 w-24 rounded-[var(--radius-sm)]" />
        <Skeleton className="size-5 shrink-0 rounded-[var(--radius-md)]" />
      </div>
      <Skeleton className="mt-2 h-8 w-28 rounded-[var(--radius-md)]" />
      <Skeleton className="mt-1 h-5 w-16 rounded-full" />
    </div>
  );
}

/* ── List Item ── */

export function SkeletonListItem({
  hasAvatar = true,
  hasAction = false,
  className,
}: {
  hasAvatar?: boolean | undefined;
  hasAction?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <div aria-hidden="true" className={cn('flex items-center gap-3 py-3', className)}>
      {hasAvatar && <SkeletonAvatar size="md" />}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <Skeleton className="h-4 w-2/5 rounded-[var(--radius-sm)]" />
        <Skeleton className="h-3 w-3/5 rounded-[var(--radius-sm)]" />
      </div>
      {hasAction && <Skeleton className="h-8 w-20 shrink-0 rounded-[var(--radius-lg)]" />}
    </div>
  );
}

/* ── Table ── */

export function SkeletonTable({
  rows = 5,
  cols = 4,
  hasHeader = true,
  className,
}: {
  rows?: number | undefined;
  cols?: number | undefined;
  hasHeader?: boolean | undefined;
  className?: string | undefined;
}) {
  const colWidths = ['w-1/4', 'w-2/5', 'w-1/3', 'w-1/2', 'w-3/5'];

  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading table"
      className={cn(
        'border-(--border) w-full overflow-hidden rounded-[var(--radius-table)] border',
        className,
      )}
    >
      {hasHeader && (
        <div className="border-(--border) bg-(--muted) flex items-center gap-4 border-b px-4 py-3">
          {Array.from({ length: cols }).map((_, idx) => (
            <Skeleton
              key={idx}
              className={cn('h-3.5 rounded-[var(--radius-sm)]', colWidths[idx % colWidths.length])}
            />
          ))}
        </div>
      )}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className={cn(
            'flex items-center gap-4 px-4 py-3.5',
            rowIdx !== rows - 1 && 'border-(--border) border-b',
          )}
        >
          {Array.from({ length: cols }).map((_, colIdx) => (
            <Skeleton
              key={colIdx}
              className={cn(
                'h-4 rounded-[var(--radius-sm)]',
                colWidths[(colIdx + rowIdx) % colWidths.length],
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Form ── */

export function SkeletonForm({
  fields = 4,
  className,
}: {
  fields?: number | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading form"
      className={cn('flex flex-col gap-5', className)}
    >
      {Array.from({ length: fields }).map((_, idx) => (
        <div key={idx} className="flex flex-col gap-1.5">
          <Skeleton className="h-3.5 w-24 rounded-[var(--radius-sm)]" />
          <Skeleton className="h-11 w-full rounded-[var(--radius-input)]" />
        </div>
      ))}
    </div>
  );
}

/* ── Profile ── */

export function SkeletonProfile({ className }: { className?: string | undefined }) {
  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading profile"
      className={cn('flex items-start gap-5', className)}
    >
      <SkeletonAvatar size="2xl" />
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <Skeleton className="h-6 w-48 rounded-[var(--radius-md)]" />
        <Skeleton className="h-4 w-36 rounded-[var(--radius-sm)]" />
        <div className="mt-1 flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Skeleton className="h-9 w-28 rounded-[var(--radius-lg)]" />
          <Skeleton className="h-9 w-24 rounded-[var(--radius-lg)]" />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION SKELETONS
   Generic layout placeholders — SectionShell owns background/tone.
═══════════════════════════════════════════════════════════ */

/* ── Hero ── */

export function SkeletonHero({ className }: { className?: string | undefined }) {
  return (
    <section
      aria-busy="true"
      aria-label="Loading hero section"
      className={cn('section-hero container w-full', className)}
    >
      <div className="hero-content hero-content-split">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Skeleton className="h-3.5 w-32 rounded-full" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-10 w-full rounded-[var(--radius-lg)]" />
            <Skeleton className="h-10 w-4/5 rounded-[var(--radius-lg)]" />
          </div>
          <SkeletonText lines={3} />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-12 w-40 rounded-[var(--radius-button)]" />
            <Skeleton className="h-12 w-32 rounded-[var(--radius-button)]" />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4">
          <SkeletonStatCard />
          <SkeletonStatCard />
        </div>
      </div>
    </section>
  );
}

/* ── Section Header ── */

export function SkeletonSectionHeader({ className }: { className?: string | undefined }) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex flex-col items-center gap-4 text-center', className)}
    >
      <Skeleton className="h-3.5 w-28 rounded-full" />
      <Skeleton className="h-8 w-2/3 rounded-[var(--radius-lg)]" />
      <SkeletonText lines={2} className="max-w-lg" />
    </div>
  );
}

/* ── Card Grid ── */

export function SkeletonCardGrid({
  count = 3,
  cols = 3,
  hasImage = false,
  className,
}: {
  count?: number | undefined;
  cols?: number | undefined;
  hasImage?: boolean | undefined;
  className?: string | undefined;
}) {
  const gridCols: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-4', gridCols[cols] ?? gridCols[3], className)}>
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonCard key={idx} hasImage={hasImage} />
      ))}
    </div>
  );
}

/* ── List ── */

export function SkeletonList({
  rows = 5,
  hasAvatar = true,
  hasAction = false,
  className,
}: {
  rows?: number | undefined;
  hasAvatar?: boolean | undefined;
  hasAction?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      aria-busy="true"
      aria-label="Loading list"
      className={cn('divide-(--border) flex flex-col divide-y', className)}
    >
      {Array.from({ length: rows }).map((_, idx) => (
        <SkeletonListItem key={idx} hasAvatar={hasAvatar} hasAction={hasAction} />
      ))}
    </div>
  );
}

/* ── CTA ── */

export function SkeletonCTA({ className }: { className?: string | undefined }) {
  return (
    <section
      aria-busy="true"
      aria-label="Loading call to action"
      className={cn('section container flex items-center justify-center text-center', className)}
    >
      <div className="flex w-full max-w-xl flex-col items-center gap-6">
        <Skeleton className="h-9 w-4/5 rounded-[var(--radius-lg)]" />
        <Skeleton className="h-9 w-3/5 rounded-[var(--radius-lg)]" />
        <SkeletonText lines={2} className="w-full" />
        <div className="flex flex-wrap justify-center gap-3">
          <Skeleton className="h-12 w-44 rounded-[var(--radius-button)]" />
          <Skeleton className="h-12 w-36 rounded-[var(--radius-button)]" />
        </div>
      </div>
    </section>
  );
}
