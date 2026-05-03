'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';
import {
  User,
  ShieldCheck,
  Stack,
  TrendUp,
  ArrowSquareOut,
} from '@/lib/icons';
import type { ModelPageContent } from '@/data/partnership/models';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

export interface WorkflowSectionProps {
  data: ModelPageContent['workflowSection'];
  role: Role;
  system?: string;
}

type StepData = ModelPageContent['workflowSection']['steps'][number];
type NextUnlock = ModelPageContent['workflowSection']['nextUnlock'];

/* ── Route helpers ──────────────────────────────────────────────── */

const SYSTEM_ROUTE: Record<string, string> = {
  'core-trade':    'core-trade',
  'brand-growth':  'brand-expansion',
  collaborative:   'collaborative',
  institutional:   'institutional',
};

function buildNextHref(nextUnlock: NextUnlock, currentSystem: string): string | null {
  if (!nextUnlock.slug || ('isTerminal' in nextUnlock && nextUnlock.isTerminal)) return null;
  const targetSystem =
    'system' in nextUnlock && nextUnlock.system
      ? (SYSTEM_ROUTE[nextUnlock.system as string] ?? nextUnlock.system)
      : (SYSTEM_ROUTE[currentSystem] ?? currentSystem);
  return `/partnership-paths/${targetSystem}/${nextUnlock.slug}`;
}

/* ── Step icons by position ─────────────────────────────────────── */

const STEP_ICONS = [User, ShieldCheck, Stack, TrendUp] as const;
const STEP_DELAYS = ['', 'delay-100', 'delay-200', 'delay-300'] as const;

/* ── StepRow ────────────────────────────────────────────────────── */

interface StepRowProps {
  step: StepData;
  index: number;
  isLast: boolean;
  visible: boolean;
}

function StepRow({ step, index, isLast, visible }: StepRowProps) {
  const Icon = STEP_ICONS[index] ?? TrendUp;
  const delayClass = STEP_DELAYS[index] ?? 'delay-300';

  return (
    <div
      className={cn(
        'relative flex gap-5 transition-all duration-500',
        visible ? `animate-slide-up ${delayClass}` : 'opacity-0'
      )}
    >
      {/* Left — step indicator + connector line */}
      <div className="relative flex shrink-0 flex-col items-center w-10">
        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-px bg-(--border)"
          />
        )}
        <div
          className="relative z-10 flex shrink-0 items-center justify-center size-10 bg-(--background-elevated) border border-(--border) rounded-full shadow-inner"
        >
          <Icon weight="fill" size={16} className="text-(--foreground)" />
        </div>
      </div>

      {/* Right — step content */}
      <div
        className={cn(
          'flex flex-1 flex-col',
          !isLast && 'pb-8'
        )}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-data text-[10px] font-bold uppercase tracking-widest text-(--muted-foreground)"
          >
            {String(step.step).padStart(2, '0')}
          </span>
          <h3
            className="text-base font-semibold font-heading text-(--foreground)"
          >
            {step.label}
          </h3>
        </div>

        <div
          className="mt-3 p-5 rounded-[var(--radius-card)] bg-(--background-elevated) border border-(--border) shadow-inner"
        >
          <p
            className="text-sm text-(--muted-foreground) leading-relaxed font-ui"
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── NextUnlockCard ─────────────────────────────────────────────── */

interface NextUnlockCardProps {
  nextUnlock: NextUnlock;
  nextHref: string | null;
}

function NextUnlockCard({ nextUnlock, nextHref }: NextUnlockCardProps) {
  return (
    <div
      className="relative overflow-hidden bg-(--card) border border-(--border) rounded-[var(--radius-card)] shadow-inner p-6 mt-10"
    >
      {/* External link icon — absolute top-right */}
      <div
        className="absolute top-4 right-4 bg-(--background-elevated) rounded-[var(--radius-card-sm)] p-2"
      >
        <ArrowSquareOut size={14} className="text-(--foreground)" />
      </div>

      {/* "NEXT PARTNERSHIP" label */}
      <span
        className="block font-label text-[10px] uppercase tracking-widest text-(--muted-foreground)"
      >
        NEXT PARTNERSHIP
      </span>

      {/* Partnership name */}
      <h3
        className="text-xl font-bold font-heading text-(--foreground) mt-2"
      >
        {nextUnlock.name}
      </h3>

      {/* KPI + Retention grid */}
      <div className="grid grid-cols-2 mt-4">
        {/* KPI cell */}
        <div
          className="border-r border-(--border) pr-4"
        >
          <div className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-(--muted-foreground) shrink-0"
            />
            <span
              className="font-label text-[10px] uppercase tracking-widest text-(--muted-foreground)"
            >
              KPI REQUIRED
            </span>
          </div>
          <span
            className="block text-2xl font-bold font-data text-(--foreground) mt-1"
          >
            {nextUnlock.kpiRequired}
          </span>
        </div>

        {/* Retention cell */}
        <div className="pl-4">
          <div className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-(--muted-foreground) shrink-0"
            />
            <span
              className="font-label text-[10px] uppercase tracking-widest text-(--muted-foreground)"
            >
              RETENTION
            </span>
          </div>
          <span
            className="block text-2xl font-bold font-data text-(--foreground) mt-1"
          >
            {nextUnlock.retentionRequired}
          </span>
        </div>
      </div>

      {/* CTA button */}
      {nextHref && (
        <Link href={nextHref} className="block mt-4">
          <Button variant="primary" fullWidth size="md">
            Explore {nextUnlock.name} →
          </Button>
        </Link>
      )}
    </div>
  );
}

/* ── WorkflowSection ────────────────────────────────────────────── */

export default function WorkflowSection({ data, system = 'core-trade' }: WorkflowSectionProps) {
  const isTerminal = 'isTerminal' in data.nextUnlock && data.nextUnlock.isTerminal === true;
  const nextHref = buildNextHref(data.nextUnlock, system);
  const steps = data.steps.slice(0, 4);

  const [visible, setVisible] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label={data.sectionLabel} className="section relative w-full overflow-hidden">
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="container relative z-10">
        <div
          className="flex flex-col gap-10 lg:grid lg:items-start"
          style={{ gridTemplateColumns: '38% 1fr', gap: '4rem' }}
        >
          {/* Left column — sticky */}
          <div className="sticky self-start flex flex-col top-8">
            <SectionHeader
              layout="centered"
              align="left"
              eyebrow={data.sectionLabel}
              headline={data.headline}
              description={data.description}
              className="text-left items-start"
            />

            {/* Next unlock card — hidden when terminal */}
            {!isTerminal && (
              <NextUnlockCard nextUnlock={data.nextUnlock} nextHref={nextHref} />
            )}
          </div>

          {/* Right column — steps (observed for scroll reveal) */}
          <div ref={stepsRef} className="flex flex-col">
            {steps.map((step, idx) => (
              <StepRow
                key={step.step}
                step={step}
                index={idx}
                isLast={idx === steps.length - 1}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
