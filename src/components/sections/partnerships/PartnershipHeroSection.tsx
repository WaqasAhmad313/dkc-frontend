'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, CTAButton } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { partnershipHero } from '@/content/partnership.content';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface PartnershipHeroSectionProps {
  role: Role;
  onRoleSwitch?: (() => void) | undefined;
}

/* ── Static data ────────────────────────────────────────────────── */

const METRICS: Record<Role, readonly { value: string; caption: string }[]> = {
  buyer: [
    { value: '4', caption: 'Pathway Systems' },
    { value: '20+', caption: 'Commercial Models' },
    { value: 'Buy', caption: 'Procurement View' },
  ],
  vendor: [
    { value: '4', caption: 'Pathway Systems' },
    { value: '20+', caption: 'Supply Models' },
    { value: 'Sell', caption: 'Supply View' },
  ],
};

const ROLE_STATUS: Record<Role, { label: string; desc: string }> = {
  buyer: {
    label: 'Buyer View Active',
    desc: 'Sourcing, procurement & market access pathways',
  },
  vendor: {
    label: 'Vendor View Active',
    desc: 'Supply, export & commercial growth pathways',
  },
};

/* ── Animation variants ─────────────────────────────────────────── */

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const FADE_RIGHT = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ── Sub-components ─────────────────────────────────────────────── */

/* Role indicator dot */
function RoleDot({ role }: { role: Role }) {
  return (
    <span className="relative flex size-2 shrink-0">
      <span
        className="bg-(--signature) absolute inline-flex size-full animate-ping rounded-full opacity-75"
        aria-hidden="true"
      />
      <span
        className="bg-(--signature) relative inline-flex size-2 rounded-full"
        aria-hidden="true"
      />
    </span>
  );
}

/* Metric mini-card (right panel bottom row) */
function MetricCard({ value, caption }: { value: string; caption: string }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-1',
        'rounded-[var(--radius-card-sm)] px-2 py-3',
        'glass-1 border border-(--border)',
      )}
    >
      <span
        className="font-serif text-xl font-bold leading-none text-(--foreground)"
      >
        {value}
      </span>
      <span
        className="text-center font-label text-[10px] font-medium uppercase leading-tight tracking-wider text-(--muted-foreground)"
      >
        {caption}
      </span>
    </div>
  );
}

/* Role status card (right panel top block) */
function RoleStatusCard({ role }: { role: Role }) {
  const status = ROLE_STATUS[role];

  return (
    <div
      className={cn('flex flex-col gap-2 rounded-[var(--radius-card)] p-4', 'glass-2 border border-(--border)')}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <span
          className="font-label text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground)"
        >
          Platform mode
        </span>
        <Chip variant="glass" size="sm" dot>
          {role === 'buyer' ? 'Buyer' : 'Vendor'}
        </Chip>
      </div>

      {/* Status label */}
      <p
        className="text-sm font-semibold leading-snug text-(--foreground)"
      >
        {status.label}
      </p>

      {/* Description */}
      <p
        className="text-xs leading-relaxed text-(--muted-foreground)"
      >
        {status.desc}
      </p>

      {/* Bottom divider + role indicator */}
      <div
        className="mt-1 flex items-center gap-2 border-t border-(--border) pt-2"
      >
        <RoleDot role={role} />
        <span className="text-[11px] font-medium text-(--muted-foreground)">
          Role-aware content active
        </span>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────── */

export function PartnershipHeroSection({ role, onRoleSwitch }: PartnershipHeroSectionProps) {
  const heroContent = partnershipHero.roles[role];
  const metrics = METRICS[role];
  const [primaryCta, secondaryCta] = heroContent.ctas;

  return (
    <section
      aria-label="Partnership Paths Hero"
      className="section-hero hero relative w-full overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="texture-noise pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      {/* Inner layout */}
      <div className="hero-content hero-content-split">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10 xl:grid-cols-[1fr_380px]">
          {/* ── LEFT: Primary content ─────────────────────────────── */}
          <motion.div
            className="hero-copy stack-lg"
            variants={STAGGER}
            initial="hidden"
            animate="visible"
          >
            <SectionHeader
              layout="centered"
              align="left"
              size="xl"
              eyebrow={heroContent.sectionLabel}
              headline={partnershipHero.shared.headline}
              description={heroContent.subheading}
            />

            {/* Support line */}
            <motion.p
              className="text-sm text-(--muted-foreground) max-w-[46ch]"
              variants={FADE_UP}
            >
              {heroContent.supportLine}
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-1"
              variants={FADE_UP}
            >
              {primaryCta !== undefined && (
                <Link href={primaryCta.href}>
                  <CTAButton variant="depth" size="xl">
                    {primaryCta.label}
                  </CTAButton>
                </Link>
              )}
              {secondaryCta !== undefined && (
                <Link href={secondaryCta.href}>
                  <Button variant="outline" size="xl">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Context panel ──────────────────────────────── */}
          <motion.div
            className="hero-visual flex flex-col gap-3 lg:justify-center"
            variants={FADE_RIGHT}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.18 }}
          >
            {/* BLOCK 1 — Role status card */}
            <RoleStatusCard role={role} />

            {/* BLOCK 2 — Metrics grid */}
            <div className="grid grid-cols-3 gap-2">
              {metrics.map((m, i) => (
                <MetricCard key={i} value={m.value} caption={m.caption} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
