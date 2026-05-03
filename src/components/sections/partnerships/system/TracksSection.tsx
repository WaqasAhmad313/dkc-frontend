'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';
import {
  Package,
  Truck,
  Globe,
  Storefront,
  ArrowRight,
  Tag,
  Buildings,
  Warehouse,
  Gavel,
  Camera,
  Cpu,
  Bank,
  PaintBrush,
  BookOpen,
  GitBranch,
  Lightning,
  ShoppingBag,
  CaretRight,
  CheckCircle,
} from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface TracksSectionProps {
  data: PartnershipSystemData['tracksSection'];
  tier: number;
}

type TrackData = PartnershipSystemData['tracksSection']['tracks'][number];

/* ── Icon map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  Package,
  Truck,
  Globe,
  Store: Storefront,
  Tag,
  Buildings,
  Warehouse,
  Gavel,
  Camera,
  Cpu,
  Bank,
  PaintBrush,
  BookOpen,
  Frame: Tag,
  Box: Package,
  PenTool: PaintBrush,
  Presentation: Bank,
  TreeStructure: GitBranch,
  ShoppingBag,
};

/* ── Helpers ────────────────────────────────────────────────────── */

function isNone(val: string) {
  return val.toLowerCase() === 'none';
}

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CARD_ENTER = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      delay: 0.06 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── MetaRow ────────────────────────────────────────────────────── */

function MetaRow({ label, value, isKpi }: { label: string; value: string; isKpi: boolean }) {
  const empty = isNone(value);

  return (
    <div
      className="bg-(--background-elevated) border-(--border) rounded-[var(--radius-input)] flex items-center justify-between border px-3 py-2"
    >
      <span
        className="font-label text-(--muted-foreground) text-[10px] font-semibold uppercase tracking-widest"
      >
        {label}
      </span>
      {empty ? (
        <div className="flex items-center gap-1">
          <CheckCircle weight="fill" size={11} className="text-(--success)" />
          <span
            className="font-ui text-(--success) text-[11px] font-semibold"
          >
            Open
          </span>
        </div>
      ) : (
        <span
          className="font-data text-(--foreground) text-[13px] font-bold tabular-nums"
        >
          {value}
        </span>
      )}
    </div>
  );
}

/* ── TrackCard ──────────────────────────────────────────────────── */

interface TrackCardProps {
  track: TrackData;
  index: number;
  isActive: boolean;
  isLast: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

function TrackCard({ track, index, isActive, isLast, onActivate, onDeactivate }: TrackCardProps) {
  const Icon = ICON_MAP[track.icon] ?? Package;

  return (
    <div className="flex flex-1 items-start">
      <motion.div
        variants={CARD_ENTER}
        custom={index}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        onMouseLeave={onDeactivate}
        onBlur={onDeactivate}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'bg-(--card) rounded-[var(--radius-card)] flex flex-1 flex-col gap-4 border p-4 transition-[box-shadow,border-color] duration-200',
          'border-l-[3px]',
          isActive ? 'border-(--signature) shadow-(--shadow-md)' : 'border-(--border) shadow-(--shadow-sm)',
          track.fastTrackAvailable ? 'border-l-(--signature)' : 'border-l-(--border)'
        )}
      >
        {/* Top row — icon + badge */}
        <div className="flex items-start justify-between gap-2">
          <div
            className={cn(
              'rounded-[var(--radius-card-sm)] flex size-10 shrink-0 items-center justify-center shadow-inner',
              track.fastTrackAvailable ? 'bg-(--background-focus)' : 'bg-(--background-elevated)'
            )}
          >
            <Icon
              weight="duotone"
              size={18}
              className="text-(--foreground)"
            />
          </div>

          {!track.previousLevel ? (
            <span
              className="font-label bg-(--success-soft) border-(--success)/20 text-(--success) rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
            >
              Entry
            </span>
          ) : track.fastTrackAvailable ? (
            <span
              className="font-label bg-(--muted) border-(--border) text-(--foreground) flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap"
            >
              <Lightning weight="fill" size={10} className="shrink-0" />
              Fast-Track
            </span>
          ) : (
            <span
              className={cn(
                'font-data text-[11px] font-semibold tabular-nums transition-colors duration-200',
                isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        {/* Name + core benefit */}
        <div className="flex flex-col gap-1">
          <h3
            className="font-heading text-(--foreground) text-sm font-bold leading-snug"
          >
            {track.name}
          </h3>
          <p className="text-(--muted-foreground) text-[12px] leading-relaxed">
            {track.coreBenefit}
          </p>
        </div>

        {/* KPI + Retention */}
        <div className="flex flex-col gap-1.5">
          <MetaRow label="KPI" value={track.kpiRequired} isKpi />
          <MetaRow label="Retention" value={track.retentionRequired} isKpi={false} />
        </div>

        {/* Best for */}
        <p className="text-(--muted-foreground) text-[11px] leading-relaxed">
          <span className="text-(--foreground) font-semibold">Best for: </span>
          {track.bestFor}
        </p>

        {/* Prerequisite */}
        {track.previousLevel && (
          <div className="flex items-center gap-1.5">
            <CaretRight
              weight="bold"
              size={10}
              className="text-(--muted-foreground) shrink-0"
            />
            <span className="text-(--muted-foreground) text-[11px]">
              Follows{' '}
              <span className="text-(--foreground) font-semibold">
                {track.previousLevel}
              </span>
            </span>
          </div>
        )}

        {/* CTA */}
        <Link href={track.href} className="mt-auto">
          <Button
            variant="elite"
            size="sm"
            fullWidth
            iconRight={<ArrowRight weight="bold" size={12} />}
          >
            {track.ctaLabel}
          </Button>
        </Link>
      </motion.div>

      {/* Connector arrow */}
      {!isLast && (
        <div className="flex shrink-0 items-center self-center px-1.5 pt-1" aria-hidden="true">
          <CaretRight weight="bold" size={13} className="text-(--border)" />
        </div>
      )}
    </div>
  );
}

/* ── TracksSection ──────────────────────────────────────────────── */

export function TracksSection({ data, tier }: TracksSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tracks = data.tracks;

  return (
    <section
      aria-label={data.sectionLabel}
      className="relative w-full overflow-hidden section"
    >
      {/* Background texture */}
      <div className="texture-noise pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="container relative">
        <motion.div
          className="flex flex-col gap-10"
          variants={SECTION_ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="centered"
            eyebrow={data.sectionLabel}
            headline={data.headline}
            description={data.description}
          />

          {/* Desktop — 4-col with connectors */}
          <motion.div
            className="hidden sm:flex sm:items-stretch sm:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            {tracks.map((track, idx) => (
              <TrackCard
                key={track.id}
                track={track}
                index={idx}
                isActive={activeIndex === idx}
                isLast={idx === tracks.length - 1}
                onActivate={() => setActiveIndex(idx)}
                onDeactivate={() => setActiveIndex(null)}
              />
            ))}
          </motion.div>

          {/* Mobile — vertical stack */}
          <div className="flex flex-col gap-3 sm:hidden">
            {tracks.map((track, idx) => {
              const Icon = ICON_MAP[track.icon] ?? Package;
              const isEntry = !track.previousLevel;

              return (
                <div
                  key={track.id}
                  className={cn(
                    'bg-(--card) rounded-[var(--radius-card)] flex flex-col gap-4 border p-4 shadow-(--shadow-sm)',
                    'border-l-[3px]',
                    track.fastTrackAvailable ? 'border-l-(--signature)' : 'border-l-(--border)'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={cn(
                        'rounded-[var(--radius-card-sm)] flex size-10 items-center justify-center shadow-inner',
                        track.fastTrackAvailable ? 'bg-(--background-focus)' : 'bg-(--background-elevated)'
                      )}
                    >
                      <Icon weight="duotone" size={18} className="text-(--foreground)" />
                    </div>
                    {isEntry ? (
                      <span
                        className="font-label bg-(--success-soft) border-(--success)/20 text-(--success) rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
                      >
                        Entry
                      </span>
                    ) : track.fastTrackAvailable ? (
                      <span
                        className="font-label bg-(--muted) border-(--border) text-(--foreground) flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap"
                      >
                        <Lightning weight="fill" size={10} className="shrink-0" />
                        Fast-Track
                      </span>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-heading text-(--foreground) text-sm font-bold"
                    >
                      {track.name}
                    </h3>
                    <p className="text-(--muted-foreground) text-[12px]">
                      {track.coreBenefit}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <MetaRow label="KPI" value={track.kpiRequired} isKpi />
                    <MetaRow label="Retention" value={track.retentionRequired} isKpi={false} />
                  </div>

                  <p className="text-(--muted-foreground) text-[11px]">
                    <span className="text-(--foreground) font-semibold">
                      Best for:{' '}
                    </span>
                    {track.bestFor}
                  </p>

                  <Link href={track.href}>
                    <Button
                      variant="elite"
                      size="sm"
                      fullWidth
                      iconRight={<ArrowRight weight="bold" size={12} />}
                    >
                      {track.ctaLabel}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
