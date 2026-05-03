'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CardDivider } from '@/components/shared/Card';
import { CheckCircle, Lightning, ArrowRight, ShieldCheck, GitBranch, Sparkle } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';
type ActivePath = 'standard' | 'fasttrack';

interface EligibilitySectionProps {
  data: PartnershipSystemData['eligibilitySection'];
  role: Role;
}

/* ── Helpers ────────────────────────────────────────────────────── */

function extractKpi(text?: string): string {
  const m = text?.match(/KPI\s*([\d\.\-]+\+?)/i);
  return m && m[1] ? m[1] + (m[1].includes('+') ? '' : '+') : '6+';
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

/* ── FeatureRow ─────────────────────────────────────────────────── */

function FeatureRow({ text, accent }: { text: string; accent: 'emerald' | 'saffron' }) {
  return (
    <div className="flex items-start gap-2.5">
      {accent === 'emerald' ? (
        <CheckCircle
          weight="fill"
          size={14}
          className="mt-[2px] shrink-0 text-(--success)"
        />
      ) : (
        <Lightning
          weight="fill"
          size={14}
          className="mt-[2px] shrink-0 text-(--secondary)"
        />
      )}
      <p className="text-sm leading-relaxed text-(--muted-foreground)">
        {text}
      </p>
    </div>
  );
}

/* ── KpiBlock ───────────────────────────────────────────────────── */

function KpiBlock({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="bg-(--background-elevated) border-(--border) rounded-[var(--radius-input)] flex flex-col gap-0.5 border px-3 py-2"
    >
      <span
        className="font-label text-(--muted-foreground) text-[10px] font-semibold uppercase tracking-widest"
      >
        {label}
      </span>
      <span
        className="font-data text-(--primary) text-sm font-bold tabular-nums"
      >
        {value}
      </span>
    </div>
  );
}

/* ── PathCard ───────────────────────────────────────────────────── */

interface PathCardProps {
  path: ActivePath;
  data: PartnershipSystemData['eligibilitySection'];
  role: Role;
  isActive: boolean;
  onActivate: () => void;
}

function PathCard({ path, data, role, isActive, onActivate }: PathCardProps) {
  const isStandard = path === 'standard';
  const accentBorder = isStandard ? 'border-(--primary)' : 'border-(--secondary)';
  const accentBg = isStandard ? 'bg-(--primary)/5' : 'bg-(--secondary)/5';

  const reqText = isStandard
    ? role === 'buyer'
      ? 'buyers' in data.standardPath
        ? data.standardPath.buyers
        : undefined
      : 'vendors' in data.standardPath
        ? data.standardPath.vendors
        : undefined
    : undefined;

  const kpiValue = extractKpi(reqText);

  return (
    <motion.div
      whileHover={{ y: isActive ? 0 : -2 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        'relative flex flex-col gap-0 border',
        'overflow-hidden transition-all duration-200 focus:outline-none',
        'rounded-[var(--radius-card)]',
        isActive ? cn(accentBorder, accentBg, 'shadow-(--shadow-md) border-t-[3px]') : 'border-(--border) bg-(--card) shadow-(--shadow-sm) opacity-70 border-t-[1px]',
      )}
    >
      {/* Card header */}
      <div className="flex flex-col gap-2 p-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              'flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] shadow-(--shadow-sm)',
              isStandard ? 'bg-(--primary)/10' : 'bg-(--secondary)/10',
            )}
          >
            {isStandard ? (
              <GitBranch weight="fill" size={16} className="text-(--primary)" />
            ) : (
              <Sparkle weight="fill" size={16} className="text-(--secondary)" />
            )}
          </div>

          <span
            className={cn(
              'font-label rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest',
              isStandard ? 'bg-(--success-soft) border-(--success)/20 text-(--success)' : 'bg-(--warning-soft) border-(--warning)/25 text-(--warning)',
            )}
          >
            {isStandard ? 'No upfront fee' : 'Fee after eval'}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <h3
            className="font-heading text-(--foreground) text-base font-bold leading-snug"
          >
            {isStandard ? data.standardPath.title : data.fastTrackPath.title}
          </h3>
          <p className="text-(--muted-foreground) text-[12px] leading-relaxed">
            {isStandard
              ? 'Steady, verified progression through KPI and retention milestones.'
              : data.fastTrackPath.description}
          </p>
        </div>
      </div>

      <div className="px-5">
        <CardDivider />
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 pt-4">
        {isStandard && (
          <div className="grid grid-cols-2 gap-2">
            <KpiBlock label="Min KPI" value={kpiValue} />
            <KpiBlock label="Path" value="Progressive" />
          </div>
        )}

        {isStandard && reqText && (
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.22 }}
              className="bg-(--primary)/5 border-(--primary) rounded-[var(--radius-input)] flex items-start gap-2.5 border border-l-[3px] px-3 py-2.5"
            >
              <ShieldCheck
                weight="fill"
                size={13}
                className="mt-[2px] shrink-0 text-(--primary)"
              />
              <p
                className="text-(--foreground) text-[12px] leading-relaxed"
              >
                {reqText}
              </p>
            </motion.div>
          </AnimatePresence>
        )}

        {isStandard && 'note' in data.standardPath && data.standardPath.note && (
          <p
            className="text-(--muted-foreground) text-[11px] italic leading-relaxed"
          >
            {data.standardPath.note}
          </p>
        )}

        {!isStandard && (
          <div className="flex flex-col gap-2">
            {data.fastTrackPath.points.map((point) => (
              <FeatureRow key={point} text={point} accent="saffron" />
            ))}
          </div>
        )}

        {!isStandard && 'note' in data.fastTrackPath && data.fastTrackPath.note && (
          <p
            className="text-(--muted-foreground) text-[11px] italic leading-relaxed"
          >
            {data.fastTrackPath.note}
          </p>
        )}
      </div>

      <div className="px-5">
        <CardDivider />
      </div>

      {/* CTA */}
      <div className="p-5 pt-4">
        {isStandard ? (
          <Link
            href={
              'cta' in data.standardPath && data.standardPath.cta
                ? data.standardPath.cta.href
                : '/registration'
            }
          >
            <Button
              variant="primary"
              size="sm"
              fullWidth
              iconRight={<ArrowRight weight="bold" size={13} />}
            >
              {'cta' in data.standardPath && data.standardPath.cta
                ? data.standardPath.cta.label
                : 'Apply — Standard Path'}
            </Button>
          </Link>
        ) : (
          <Link href={data.fastTrackPath.cta.href} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              iconRight={<ArrowRight weight="bold" size={13} />}
            >
              {data.fastTrackPath.cta.label}
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

/* ── EligibilitySection ─────────────────────────────────────────── */

export function EligibilitySection({ data, role }: EligibilitySectionProps) {
  const [activePath, setActivePath] = useState<ActivePath>('standard');

  return (
    <section aria-label={data.sectionLabel} className="section section-elevated w-full">
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
          />

          {/* Role description — animated on role switch */}
          <AnimatePresence mode="wait">
            <motion.p
              key={role}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="text-(--muted-foreground) text-lg -mt-6 max-w-[52ch] self-center text-center"
            >
              {data.roles[role]}
            </motion.p>
          </AnimatePresence>

          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PathCard
                path="standard"
                data={data}
                role={role}
                isActive={activePath === 'standard'}
                onActivate={() => setActivePath('standard')}
              />
              <PathCard
                path="fasttrack"
                data={data}
                role={role}
                isActive={activePath === 'fasttrack'}
                onActivate={() => setActivePath('fasttrack')}
              />
            </div>

            <motion.p
              key={activePath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.24 }}
              className="font-ui text-(--muted-foreground) mt-4 text-center text-[12px]"
            >
              {activePath === 'standard'
                ? 'Standard path is open to all partners — no evaluation required to begin.'
                : 'Fast-Track requires KHCRF evaluation. Fee only applies after a successful result.'}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
