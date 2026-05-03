'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CardDivider } from '@/components/shared/Card';
import { Chip } from '@/components/shared/Chip';
import {
  Package,
  Truck,
  Globe,
  Storefront,
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
  CheckCircle,
  ShoppingBag,
  ArrowRight,
} from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface PricingSectionProps {
  data: PartnershipSystemData['pricingSection'];
}

type TrackPricing = PartnershipSystemData['pricingSection']['tracks'][number];
type PlanData = TrackPricing['plans'][number];

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

function isFreeOnboarding(text: string) {
  return text.toLowerCase().startsWith('free');
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

const PLANS_SWAP = {
  initial: { opacity: 0, x: 12 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

/* ── TrackTab ───────────────────────────────────────────────────── */

interface TrackTabProps {
  track: TrackPricing;
  isActive: boolean;
  onActivate: () => void;
}

function TrackTab({ track, isActive, onActivate }: TrackTabProps) {
  const Icon = ICON_MAP[track.icon] ?? Package;
  const free = isFreeOnboarding(track.onboarding);

  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className={cn(
        'flex w-full items-center gap-3 border px-3 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-(--primary)/30 focus-visible:ring-2',
        'rounded-[var(--radius-card)]',
        isActive ? 'bg-(--card) border-(--primary) border-l-[3px] shadow-(--shadow-sm)' : 'bg-(--background-elevated) border-(--border) border-l-[1px]'
      )}
    >
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] transition-all duration-200',
          isActive ? 'bg-(--primary)/10 shadow-inner' : 'bg-(--background-elevated)'
        )}
      >
        <Icon
          weight={isActive ? 'fill' : 'duotone'}
          size={15}
          className={cn(
            'transition-colors duration-200',
            isActive ? 'text-(--primary)' : 'text-(--muted-foreground)'
          )}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span
          className={cn(
            'font-ui truncate text-[13px] font-semibold transition-colors duration-200',
            isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'
          )}
        >
          {track.trackName}
        </span>
        <span
          className={cn(
            'font-data text-[11px] font-semibold tabular-nums transition-colors duration-200',
            isActive ? 'text-(--primary)' : 'text-(--muted-foreground)'
          )}
        >
          {track.priceRange}
        </span>
      </div>

      {free && (
        <span
          className="font-label bg-(--success-soft) border-(--success)/20 text-(--success) shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest"
        >
          Free
        </span>
      )}
    </button>
  );
}

/* ── PlanCard ───────────────────────────────────────────────────── */

interface PlanCardProps {
  plan: PlanData;
  position: 0 | 1 | 2;
  onboarding: string;
}

function PlanCard({ plan, position, onboarding }: PlanCardProps) {
  const free = isFreeOnboarding(onboarding);
  const isMiddle = position === 1;

  return (
    <div
      className={cn(
        'flex h-full flex-col overflow-hidden border rounded-[var(--radius-card)]',
        isMiddle ? 'bg-(--card) border-(--primary) border-t-[3px] shadow-(--shadow-md)' : 'bg-(--background-elevated) border-(--border) shadow-(--shadow-sm)'
      )}
    >
      {isMiddle && (
        <div className="bg-(--primary)/5 px-4 py-2">
          <div className="flex items-center justify-between">
            <span
              className="font-label text-(--primary) text-[10px] font-semibold uppercase tracking-widest"
            >
              Most popular
            </span>
            <Chip variant="primary" size="sm">
              Popular
            </Chip>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-4">
        <span
          className={cn(
            'font-label text-[11px] font-semibold uppercase tracking-widest',
            isMiddle ? 'text-(--primary)' : 'text-(--muted-foreground)'
          )}
        >
          {plan.name}
        </span>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-end gap-1">
            <span
              className="font-heading text-(--primary) text-3xl font-bold tabular-nums leading-none"
            >
              {plan.price.split('/')[0]}
            </span>
          </div>
          <span className="text-(--muted-foreground) text-[11px]">
            per month
          </span>
        </div>

        <CardDivider />

        <div className="flex flex-1 flex-col gap-2">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle
                weight="fill"
                size={12}
                className={cn(
                  'mt-[2px] shrink-0',
                  isMiddle ? 'text-(--primary)' : 'text-(--success)'
                )}
              />
              <span
                className="text-(--muted-foreground) text-[12px] leading-relaxed"
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        <CardDivider />

        <div
          className={cn(
            'rounded-[var(--radius-card-sm)] border px-3 py-2',
            free ? 'bg-(--success-soft) border-(--success)/20' : 'bg-(--background-elevated) border-(--border)'
          )}
        >
          <span
            className={cn(
              'font-label text-[10px] font-semibold uppercase tracking-widest',
              free ? 'text-(--success)' : 'text-(--muted-foreground)'
            )}
          >
            Onboarding
          </span>
          <p
            className={cn(
              'mt-0.5 text-[11px] leading-relaxed',
              free ? 'text-(--success)' : 'text-(--muted-foreground)'
            )}
          >
            {free ? 'Free' : onboarding}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── PricingSection ─────────────────────────────────────────────── */

export function PricingSection({ data }: PricingSectionProps) {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const activeTrack = data.tracks[activeTrackIndex];

  return (
    <section aria-label={data.sectionLabel} className="section w-full">
      <div className="container">
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
            badgeVariant="primary"
          />

          {data.note && (
            <p
              className="text-(--muted-foreground) text-sm -mt-6 self-center text-center italic max-w-[52ch]"
            >
              {data.note}
            </p>
          )}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
            {/* LEFT — track selector */}
            <div className="flex flex-col gap-1.5">
              <span
                className="font-label text-(--muted-foreground) mb-1 px-1 text-[10px] font-semibold uppercase tracking-widest"
              >
                Select track
              </span>
              {data.tracks.map((track, idx) => (
                <TrackTab
                  key={track.trackId}
                  track={track}
                  isActive={activeTrackIndex === idx}
                  onActivate={() => setActiveTrackIndex(idx)}
                />
              ))}

              {activeTrack && (
                <motion.div
                  key={activeTrackIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    'rounded-[var(--radius-card-sm)] mt-2 border p-3',
                    isFreeOnboarding(activeTrack.onboarding) ? 'bg-(--success-soft) border-(--success)/20' : 'bg-(--card) border-(--border)'
                  )}
                >
                  <span
                    className={cn(
                      'font-label text-[10px] font-semibold uppercase tracking-widest',
                      isFreeOnboarding(activeTrack.onboarding) ? 'text-(--success)' : 'text-(--muted-foreground)'
                    )}
                  >
                    Onboarding
                  </span>
                  <p
                    className="text-(--muted-foreground) mt-1 text-[11px] leading-relaxed"
                  >
                    {activeTrack.onboarding}
                  </p>
                </motion.div>
              )}
            </div>

            {/* RIGHT — 3 plan cards */}
            <AnimatePresence mode="wait">
              {activeTrack && (
                <motion.div
                  key={activeTrackIndex}
                  {...PLANS_SWAP}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {activeTrack.plans.map((plan, idx) => (
                    <PlanCard
                      key={plan.name}
                      plan={plan}
                      position={idx as 0 | 1 | 2}
                      onboarding={activeTrack.onboarding}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
