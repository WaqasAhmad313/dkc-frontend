'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  CheckCircle,
  Gift,
  ArrowRight,
  Star,
  Info,
} from '@/lib/icons';
import type { ModelPageContent } from '@/data/partnership/models';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

export interface PricingSectionProps {
  data: ModelPageContent['pricingSection'];
  role: Role;
}

type PackageData = ModelPageContent['pricingSection']['packages'][number];

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
      duration: 0.38,
      delay: 0.08 + i * 0.09,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── PricingCard ────────────────────────────────────────────────── */

interface PricingCardProps {
  pkg: PackageData;
  index: number;
  role: Role;
}

function PricingCard({ pkg, index, role }: PricingCardProps) {
  const isRecommended = pkg.recommended;
  const ctaLabel = role === 'buyer' ? 'Start as Buyer' : 'Start as Vendor';

  return (
    <motion.div
      variants={CARD_ENTER}
      custom={index}
      className={cn(
        'relative flex h-full flex-col overflow-hidden border transition-all duration-300 rounded-[var(--radius-card)] shadow-inner',
        isRecommended ? 'bg-(--background-focus) border-(--primary) border-t-[3px]' : 'bg-(--card) border-(--border) border-t-[1px]'
      )}
    >
      {/* Recommended strip */}
      {isRecommended && (
        <div
          className="flex items-center justify-between px-4 py-2 bg-(--background-elevated)"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-widest text-(--primary) font-label"
          >
            Most popular
          </span>
          <span
            className="rounded-full border border-(--border) px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest bg-(--background-elevated) text-(--primary) font-label"
          >
            Recommended
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Plan name */}
        <div className="flex items-center gap-2">
          {isRecommended && (
            <Star
              weight="fill"
              size={12}
              className="text-(--primary)"
            />
          )}
          <span
            className={cn(
              'text-[11px] font-semibold uppercase tracking-widest font-label',
              isRecommended ? 'text-(--primary)' : 'text-(--muted-foreground)'
            )}
          >
            {pkg.name}
          </span>
        </div>

        {/* Price block */}
        <div className="flex flex-col gap-0.5">
          {pkg.price === 'Custom' ? (
            <span
              className="text-2xl font-bold leading-none text-(--foreground) font-heading"
            >
              Custom
            </span>
          ) : (
            <div className="flex items-end gap-1.5">
              <span
                className="text-3xl font-bold tabular-nums leading-none text-(--foreground) font-data"
              >
                {pkg.price}
              </span>
            </div>
          )}
          <span
            className="text-[11px] text-(--muted-foreground) font-label"
          >
            per {pkg.billingPeriod}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-(--border)" aria-hidden="true" />

        {/* Features list */}
        <div className="flex flex-1 flex-col gap-2">
          {pkg.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle
                weight="fill"
                size={13}
                className="mt-0.5 shrink-0 text-(--primary)"
              />
              <span
                className="text-[12px] leading-relaxed text-(--muted-foreground) font-ui"
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-(--border)" aria-hidden="true" />

        {/* CTA */}
        <Link href="/registration" className="block">
          <Button
            variant="elite"
            size="sm"
            fullWidth
            iconRight={<ArrowRight weight="bold" size={13} />}
          >
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

/* ── FreeOfferBanner ────────────────────────────────────────────── */

interface FreeOfferBannerProps {
  title: string;
  description: string;
  note: string;
  badge: string;
}

function FreeOfferBanner({ title, description, note, badge }: FreeOfferBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 border border-(--success)/25 p-4 sm:flex-row sm:items-start sm:gap-4 bg-(--success-soft) rounded-[var(--radius-card)]"
    >
      {/* Icon */}
      <div
        className="flex size-10 shrink-0 items-center justify-center bg-(--success)/15 rounded-[var(--radius-card-sm)]"
      >
        <Gift weight="fill" size={18} className="text-(--success)" />
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="text-[13px] font-bold text-(--success) font-heading"
          >
            {title}
          </span>
          <span
            className="rounded-full border border-(--success)/25 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest bg-(--success)/10 text-(--success) font-label"
          >
            {badge}
          </span>
        </div>
        <p
          className="text-[12px] leading-relaxed text-(--muted-foreground) font-ui"
        >
          {description}
        </p>
        <p className="text-[11px] italic text-(--muted-foreground)">
          {note}
        </p>
      </div>
    </motion.div>
  );
}

/* ── PricingSection ─────────────────────────────────────────────── */

export default function PricingSection({ data, role }: PricingSectionProps) {
  return (
    <section aria-label={data.sectionLabel} className="section relative w-full overflow-hidden">
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="container relative z-10">
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

          {/* Range chip */}
          <div className="flex justify-center">
            <div
              className="flex items-center gap-1.5 rounded-full border border-(--border) px-3 py-1 bg-(--background-elevated)"
            >
              <span
                className="text-[11px] font-bold tabular-nums text-(--primary) font-label"
              >
                {data.range}
              </span>
              <span
                className="text-[11px] text-(--muted-foreground)"
              >
                · pricing range
              </span>
            </div>
          </div>

          {/* Free offer banner */}
          <FreeOfferBanner
            title={data.freeOffer.title}
            description={data.freeOffer.description}
            note={data.freeOffer.note}
            badge={data.freeOffer.badge}
          />

          {/* Package cards */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            {data.packages.map((pkg, idx) => (
              <PricingCard
                key={pkg.name}
                pkg={pkg}
                index={idx}
                role={role}
              />
            ))}
          </motion.div>

          {/* Footer note */}
          <div
            className="flex items-start gap-2.5 px-4 py-3.5 sm:mx-auto sm:max-w-[58ch] bg-(--card) rounded-[var(--radius-card)] border border-(--border)"
          >
            <Info
              size={13}
              weight="fill"
              className="mt-0.5 shrink-0 text-(--primary)"
            />
            <p
              className="text-xs leading-relaxed text-(--muted-foreground) font-ui"
            >
              {data.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
