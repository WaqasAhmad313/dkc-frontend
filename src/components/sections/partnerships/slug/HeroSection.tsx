'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import { ArrowRight, CaretRight, House } from '@/lib/icons';
import type { ModelPageContent } from '@/data/partnership/models';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

export interface HeroSectionProps {
  data: ModelPageContent['heroSection'];
  role: Role;
  tier: number;
  modelLabel: string;
  modelSystem: string;
}

/* ── Constants ──────────────────────────────────────────────────── */

const TIER_LABEL: Record<number, string> = {
  1: 'Entry Tier',
  2: 'Growth Tier',
  3: 'Collaborative Tier',
  4: 'Institutional Tier',
};

const SYSTEM_DISPLAY: Record<string, string> = {
  'core-trade': 'Core Trade',
  'brand-growth': 'Brand Expansion',
  collaborative: 'Collaborative',
  institutional: 'Institutional',
};

const SYSTEM_ROUTE: Record<string, string> = {
  'core-trade': 'core-trade',
  'brand-growth': 'brand-expansion',
  collaborative: 'collaborative',
  institutional: 'institutional',
};

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

/* ── Bottom strip items ─────────────────────────────────────────── */

const STRIP_ITEMS = ['Verified Entry', 'KPI Tracked', 'Progression Path'] as const;

/* ── HeroSection ────────────────────────────────────────────────── */

export default function HeroSection({
  data,
  role,
  tier,
  modelLabel,
  modelSystem,
}: HeroSectionProps) {
  const roleContent = data.roles[role];
  const tierLabel = TIER_LABEL[tier] ?? 'Partnership Tier';
  const systemDisplay = SYSTEM_DISPLAY[modelSystem] ?? modelSystem;
  const systemRoute = SYSTEM_ROUTE[modelSystem] ?? modelSystem;

  return (
    <section
      aria-label={`${modelLabel} Hero`}
      className="section section-major relative w-full overflow-hidden"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="container relative z-10 py-16">
        {/* ── Breadcrumb ────────────────────────────────────────── */}
        <motion.nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-1.5"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
            className="flex items-center text-(--muted-foreground) transition-opacity hover:opacity-75 focus-visible:outline-none"
            aria-label="Home"
          >
            <House size={12} weight="fill" />
          </Link>
          <CaretRight size={10} className="text-(--border)" aria-hidden="true" />
          <Link
            href={`/partnership-paths/${systemRoute}`}
            className="text-[11px] font-medium text-(--muted-foreground) transition-opacity hover:opacity-75 focus-visible:outline-none"
          >
            {systemDisplay}
          </Link>
          <CaretRight size={10} className="text-(--border)" aria-hidden="true" />
          <span
            className="text-[11px] font-semibold text-(--foreground)"
            aria-current="page"
          >
            {modelLabel}
          </span>
        </motion.nav>

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-12 xl:grid-cols-[1fr_420px]">
          {/* ── LEFT ──────────────────────────────────────────── */}
          <motion.div className="flex flex-col gap-5" initial="hidden" animate="visible">
            {/* Eyebrow: tier chip + section label */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              variants={FADE_UP}
              custom={0.04}
            >
              <Chip variant="outline" size="sm">
                {tierLabel}
              </Chip>
              <span
                className="eyebrow"
              >
                {data.sectionLabel}
              </span>
            </motion.div>

            {/* Headline — crossfades on role switch */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={role + '-headline'}
                {...CROSSFADE}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="heading-page text-(--foreground) max-w-[22ch] font-heading"
                style={{ lineHeight: '0.9' }}
              >
                {roleContent.headline}
              </motion.h1>
            </AnimatePresence>

            {/* Description — crossfades on role switch */}
            <AnimatePresence mode="wait">
              <motion.p
                key={role + '-desc'}
                {...CROSSFADE}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg max-w-[52ch] text-(--muted-foreground)"
              >
                {roleContent.description}
              </motion.p>
            </AnimatePresence>

            {/* CTAs — crossfade on role switch */}
            <AnimatePresence mode="wait">
              <motion.div
                key={role + '-cta'}
                {...CROSSFADE}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <Link href={roleContent.primaryCta.href}>
                  <Button
                    variant="depth"
                    size="md"
                    iconRight={<ArrowRight weight="bold" size={14} />}
                  >
                    {roleContent.primaryCta.label}
                  </Button>
                </Link>
                <Link href={roleContent.secondaryCta.href}>
                  <Button variant="outline" size="md">
                    {roleContent.secondaryCta.label}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── RIGHT — model info glass panel ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.44, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="border border-(--border) bg-(--card) rounded-[var(--radius-card)] shadow-(--shadow-md)"
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between border-b border-(--border) px-4 py-3"
              >
                <span
                  className="text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground) font-label"
                >
                  Model overview
                </span>
                <Chip variant="outline" size="sm">
                  {data.shared.badge}
                </Chip>
              </div>

              {/* Status chip */}
              <div className="flex flex-col gap-4 px-4 py-4">
                <div
                  className="flex items-center gap-2 px-3 py-2 bg-(--background-elevated) rounded-[var(--radius-card-sm)]"
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-(--primary)"
                    aria-hidden="true"
                  />
                  <span
                    className="text-[12px] font-semibold leading-snug text-(--primary) font-ui"
                  >
                    {data.shared.statusChip}
                  </span>
                </div>

                <div
                  className="h-px bg-(--border)"
                  aria-hidden="true"
                />

                {/* Role-aware headline preview — crossfades on switch */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={role + '-card'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-1.5"
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground) font-label"
                    >
                      {role === 'buyer' ? 'Buyer perspective' : 'Vendor perspective'}
                    </span>
                    <p
                      className="text-sm font-semibold leading-snug text-(--foreground)"
                    >
                      {roleContent.headline}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom strip */}
              <div
                className="flex items-center overflow-hidden border-t border-(--border)"
              >
                {STRIP_ITEMS.map((label, i) => (
                  <div
                    key={label}
                    className={cn(
                      'flex flex-1 items-center justify-center px-2 py-2.5 border-(--border)',
                      i < STRIP_ITEMS.length - 1 && 'border-r',
                    )}
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide text-(--muted-foreground) font-label"
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-(--background)"
        style={{
          zIndex: 1,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
