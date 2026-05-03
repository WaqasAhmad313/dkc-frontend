'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  PlusCircle,
  UserFocus,
  SquaresFour,
  Package,
  SealCheck,
  ClockCountdown,
  ChartLineUp,
  ShieldCheck,
  MagnifyingGlass,
  Gauge,
  ArrowRight,
} from '@/lib/icons';
import { Button } from '@/components/shared/Button';
import type { PlatformRole } from '@/store/role.store';

/* ── Icon map ─────────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  PlusCircle,
  UserFocus,
  SquaresFour,
  Package,
  SealCheck,
  ClockCountdown,
  ChartLineUp,
  MagnifyingGlass,
  Gauge,
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── ProcessKpiSection ────────────────────────────────────────────── */

export function ProcessKpiSection({
  process,
  kpi,
  fastTrack,
  activeRole,
}: {
  process: any;
  kpi: any;
  fastTrack: any;
  activeRole: PlatformRole;
}) {
  const ftRoleContent =
    activeRole === 'buyer' || activeRole === 'vendor'
      ? fastTrack.roles?.[activeRole]
      : null;
  const ftHeadline = ftRoleContent?.headline ?? fastTrack.headline;
  const ftDescription = ftRoleContent?.description ?? fastTrack.description;

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">

          {/* ── Card 1: Entry Path ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: EASE }}
            className="flex flex-col rounded-2xl border border-(--border) bg-(--background-elevated) p-6"
          >
            <h3 className="font-heading mb-6 text-lg font-bold text-(--foreground)">
              {process.headline}
            </h3>

            <div className="flex flex-1 flex-col">
              {process.steps.map((step: any, idx: number) => {
                const Icon = ICON_MAP[step.icon];
                const isLast = idx === process.steps.length - 1;
                return (
                  <div key={idx} className="group flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--background) text-(--foreground) transition-colors group-hover:border-(--signature) group-hover:text-(--primary)">
                        {Icon
                          ? <Icon size={14} weight="light" />
                          : <span className="text-[10px] font-bold">{idx + 1}</span>
                        }
                      </div>
                      {!isLast && (
                        <div className="h-6 w-px bg-(--border)/50" />
                      )}
                    </div>
                    <div className={cn('pb-4 pt-0.5', isLast && 'pb-0')}>
                      <p className="text-[13px] font-semibold leading-tight text-(--foreground) transition-colors group-hover:text-(--primary)">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-(--muted-foreground)">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {process.nextUnlock && (
              <div className="mt-5 border-t border-(--border) pt-4">
                <div className="rounded-xl border border-(--border) bg-(--background) px-4 py-3">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-(--primary)">
                    {process.nextUnlock.label}
                  </span>
                  <p className="mt-1 text-[12px] font-medium leading-snug text-(--foreground)">
                    {process.nextUnlock.name}
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* ── Card 2: KPI & Retention ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, ease: EASE }}
            className="flex flex-col rounded-2xl border border-(--border) bg-(--background-elevated) p-6"
          >
            <h3 className="font-heading mb-6 text-lg font-bold text-(--foreground)">
              {kpi.headline}
            </h3>

            <div className="flex-1">
              <div className="mb-2 flex justify-between border-b border-(--border) pb-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground)/60">
                  KPI Area
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground)/60">
                  Target
                </span>
              </div>
              <div className="divide-y divide-(--border)/30">
                {kpi.metrics.map((metric: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg px-1 py-3 transition-colors hover:bg-(--background)"
                  >
                    <span className="text-[12px] text-(--foreground)">{metric.label}</span>
                    <span className="font-heading text-[12px] font-bold text-(--primary)">
                      {metric.target}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-(--border) pt-4">
              <div className="flex items-start gap-3 rounded-xl border border-(--border) bg-(--background) p-4">
                <ShieldCheck size={17} weight="fill" className="mt-0.5 shrink-0 text-(--primary)" />
                <p className="text-[12px] leading-snug text-(--muted-foreground)">{kpi.note}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Fast Track ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, ease: EASE }}
            className="flex flex-col rounded-2xl border border-(--border) bg-(--background-elevated) p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px w-5 bg-(--primary)" />
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-(--primary)">
                Priority Path
              </span>
            </div>
            <h3 className="font-heading mb-2 text-lg font-bold text-(--foreground)">
              {ftHeadline}
            </h3>
            <p className="mb-6 text-[13px] leading-relaxed text-(--muted-foreground)">
              {ftDescription}
            </p>

            <div className="flex flex-1 flex-col divide-y divide-(--border)/30">
              {fastTrack.steps.map((step: any, idx: number) => {
                const Icon = ICON_MAP[step.icon];
                return (
                  <div key={idx} className="flex items-start gap-3 py-3 first:pt-0">
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] text-(--primary)/60">
                      0{idx + 1}
                    </span>
                    {Icon && (
                      <Icon size={14} weight="light" className="mt-0.5 shrink-0 text-(--foreground)" />
                    )}
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-tight text-(--foreground)">
                        {step.title}
                      </p>
                      {step.description && (
                        <p className="mt-0.5 text-[11px] leading-snug text-(--muted-foreground)">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-(--border) pt-4">
              <Link href={fastTrack.cta.url}>
                <Button
                  variant="primary"
                  size="sm"
                  iconRight={<ArrowRight size={14} />}
                  className="w-full"
                >
                  {fastTrack.cta.label}
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
