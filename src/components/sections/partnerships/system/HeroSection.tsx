'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import {
  Package,
  Truck,
  Globe,
  Storefront,
  ArrowRight,
  CaretUp,
  CaretDown,
  Tag,
  Buildings,
  Warehouse,
  Gavel,
  Camera,
  Cpu,
  Bank,
  PaintBrush,
  BookOpen,
  CheckCircle,
  Lightning,
  GitBranch,
} from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface HeroSectionProps {
  data: PartnershipSystemData['heroSection'];
  role: Role;
  systemLabel: string;
  tier: number;
  modelCards: PartnershipSystemData['tradeModelsSection']['cards'];
}

/* ── Tier labels ────────────────────────────────────────────────── */

const TIER_LABEL: Record<number, string> = {
  1: 'Entry Tier',
  2: 'Growth Tier',
  3: 'Collaborative Tier',
  4: 'Institutional Tier',
};

/* ── Icon map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  Package, Truck, Globe,
  Store: Storefront, Tag, Buildings, Warehouse,
  Gavel, Camera, Cpu, Bank, PaintBrush, BookOpen,
  Frame: Tag, Box: Package, PenTool: PaintBrush,
  Presentation: Bank, TreeStructure: GitBranch,
};

/* ── Auto-rotate interval ───────────────────────────────────────── */

const AUTO_ROTATE_MS = 3000;

/* ── Animation variants ─────────────────────────────────────────── */

const FADE_UP = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CROSSFADE = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/* ── ModelShell ─────────────────────────────────────────────────── */

interface ModelShellProps {
  cards: PartnershipSystemData['tradeModelsSection']['cards'];
  activeIndex: number;
  role: Role;
  onPrev: () => void;
  onNext: () => void;
  onUserInteract: () => void;
  isAutoPlaying: boolean;
}

function ModelShell({
  cards, activeIndex, role, onPrev, onNext, onUserInteract, isAutoPlaying,
}: ModelShellProps) {
  const card = cards[activeIndex];
  if (!card) return null;

  const Icon = ICON_MAP[card.icon] ?? Package;
  const total = cards.length;

  function handlePrev() { onUserInteract(); onPrev(); }
  function handleNext() { onUserInteract(); onNext(); }

  return (
    <div
      className="bg-(--background-elevated) border-(--border) rounded-[var(--radius-card)] overflow-hidden border shadow-(--shadow-lg)"
    >
      {/* Shell header */}
      <div
        className="border-(--border) flex items-center justify-between border-b px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <span
            className="font-label text-(--muted-foreground) text-[10px] font-semibold uppercase tracking-widest"
          >
            Model selector
          </span>
          {isAutoPlaying && (
            <span
              className="bg-(--signature) size-1.5 animate-ping rounded-full"
              aria-label="Auto-rotating"
            />
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            className="font-data text-(--muted-foreground) text-[11px] font-semibold tabular-nums"
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous model"
              className={cn(
                'bg-(--muted) border-(--border) flex size-5 items-center justify-center rounded-t-md',
                'border transition-colors duration-150',
                'focus:outline-none focus-visible:ring-1',
              )}
            >
              <CaretUp weight="bold" size={10} className="text-(--muted-foreground)" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next model"
              className={cn(
                'bg-(--muted) border-(--border) flex size-5 items-center justify-center rounded-b-md',
                'border-x border-b transition-colors duration-150',
                'focus:outline-none focus-visible:ring-1',
              )}
            >
              <CaretDown weight="bold" size={10} className="text-(--muted-foreground)" />
            </button>
          </div>
        </div>
      </div>

      {/* Active model card */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {/* Icon + title */}
            <div className="flex items-center gap-3">
              <div
                className="bg-(--background-focus) rounded-[var(--radius-card-sm)] flex size-9 shrink-0 items-center justify-center shadow-inner"
              >
                <Icon weight="fill" size={18} className="text-(--foreground)" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-heading text-(--foreground) text-sm font-bold leading-snug"
                >
                  {card.title}
                </span>
                <span
                  className="font-label text-(--signature) text-[10px] font-semibold uppercase tracking-widest"
                >
                  Model {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Role description */}
            <p
              className="font-ui text-(--muted-foreground) text-[13px] leading-relaxed"
            >
              {card.roles[role]}
            </p>

            {/* Divider */}
            <div className="bg-(--border) h-px w-full" aria-hidden="true" />

            {/* Step dots + explore link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      onUserInteract();
                      if (i < activeIndex) {
                        Array.from({ length: activeIndex - i }).forEach(() => onPrev());
                      } else {
                        Array.from({ length: i - activeIndex }).forEach(() => onNext());
                      }
                    }}
                    aria-label={`Go to model ${i + 1}`}
                    className="focus:outline-none"
                    style={{
                      width: i === activeIndex ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '999px',
                      background: i === activeIndex ? 'var(--foreground)' : 'var(--border)',
                      transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                ))}
              </div>
              <Link
                href={card.href}
                className="text-(--signature) flex items-center gap-1 text-[11px] font-semibold transition-colors duration-150"
                onClick={onUserInteract}
              >
                Explore
                <ArrowRight weight="bold" size={10} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom strip */}
      <div
        className="border-(--border) flex items-center overflow-hidden border-t"
      >
        {[
          { icon: CheckCircle, label: 'Verified Entry' },
          { icon: Lightning, label: 'KPI Tracked' },
          { icon: GitBranch, label: 'Progression Path' },
        ].map(({ icon: TagIcon, label }, i) => (
          <div
            key={label}
            className={cn('border-(--border) flex flex-1 items-center justify-center gap-1.5 px-2 py-2.5', i < 2 && 'border-r')}
          >
            <TagIcon weight="fill" size={11} className="text-(--muted-foreground) shrink-0" />
            <span
              className="font-label text-(--muted-foreground) text-[0.65rem] font-semibold uppercase tracking-wide"
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── HeroSection ────────────────────────────────────────────────── */

export function HeroSection({ data, role, systemLabel, tier, modelCards }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = modelCards.length;

  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const handleUserInteract = useCallback(() => setUserHasInteracted(true), []);

  useEffect(() => {
    if (userHasInteracted) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, AUTO_ROTATE_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [userHasInteracted, goNext]);

  const roleContent = data.roles[role];
  const tierLabel = TIER_LABEL[tier] ?? 'Partnership Tier';

  return (
    <section
      aria-label={`${systemLabel} Hero`}
      className="relative w-full overflow-hidden section-hero hero"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="texture-noise absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Content */}
      <div className="container relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-10 xl:grid-cols-[1fr_440px]">
          {/* ── LEFT ─────────────────────────────────────────── */}
          <motion.div className="flex flex-col gap-4" initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div className="flex flex-wrap items-center gap-2" variants={FADE_UP} custom={0.04}>
              <Chip variant="outline" size="sm">{tierLabel}</Chip>
              <span
                className="eyebrow"
              >
                {data.sectionLabel}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="heading-hero font-display text-(--foreground) relative max-w-[28ch] overflow-hidden"
              style={{ lineHeight: '0.9' }}
              variants={FADE_UP}
              custom={0.1}
            >
              {data.headline}
              <motion.span
                aria-hidden="true"
                initial={{ x: '-110%', skewX: '-18deg' }}
                animate={{ x: '220%', skewX: '-18deg' }}
                transition={{ delay: 0.72, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-(--foreground)/5 to-transparent"
                style={{
                  width: '60%',
                }}
              />
            </motion.h1>

            {/* Role description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={role + '-desc'}
                {...CROSSFADE}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg max-w-[50ch] text-(--muted-foreground)"
              >
                {roleContent.description}
              </motion.p>
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence mode="wait">
              <motion.div
                key={role + '-cta'}
                {...CROSSFADE}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="pt-1"
              >
                <Link href={roleContent.cta.href}>
                  <Button
                    variant="depth"
                    size="md"
                    iconRight={<ArrowRight weight="bold" size={14} />}
                  >
                    {roleContent.cta.label}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT — model shell ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.44, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <ModelShell
              cards={modelCards}
              activeIndex={activeIndex}
              role={role}
              onPrev={goPrev}
              onNext={goNext}
              onUserInteract={handleUserInteract}
              isAutoPlaying={!userHasInteracted}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div
        className="bg-gradient-to-b from-transparent to-(--background) pointer-events-none absolute inset-x-0 bottom-0 h-8"
        aria-hidden="true"
      />
    </section>
  );
}
