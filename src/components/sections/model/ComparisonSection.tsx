'use client';

import React, { useState } from 'react';
import { CheckCircle, Minus, ArrowsLeftRight } from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Tabs } from '@/components/shared/Tabs';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────────── */

type ComparisonPlatform = {
  id: string;
  name: string;
  highlight?: boolean;
  values: string[];
};

type ComparisonTab = {
  id: string;
  label: string;
  description?: string;
  parameters: string[];
  platforms: ComparisonPlatform[];
};

type ComparisonData = {
  sectionLabel: string;
  headline: string;
  subheadline?: string;
  defaultTab?: string;
  tabs: ComparisonTab[];
};

/* ── Desktop Table ─────────────────────────────────────────────────── */

function DesktopTable({ tab }: { tab: ComparisonTab }) {
  const { parameters, platforms } = tab;

  return (
    <div className="max-h-[520px] overflow-auto rounded-2xl border border-(--border) bg-(--background)/60 shadow-sm backdrop-blur-sm">
      <table className="min-w-[1100px] w-full border-separate border-spacing-0 text-left">
        {/* ── Header row ── */}
        <thead className="sticky top-0 z-20">
          <tr>
            {/* Parameter header */}
            <th className="sticky left-0 z-30 w-[200px] min-w-[200px] border-b border-r border-(--border) bg-(--background) p-4 text-[10px] font-semibold uppercase tracking-widest text-(--muted-foreground)/50">
              Parameter
            </th>

            {/* Platform headers */}
            {platforms.map((platform) => (
              <th
                key={platform.id}
                className={cn(
                  'min-w-[210px] border-b border-r border-(--border) p-4 align-bottom last:border-r-0',
                  platform.highlight
                    ? 'bg-(--primary)'
                    : 'bg-(--background)',
                )}
              >
                <p className={cn(
                  'text-[13px] font-bold leading-snug',
                  platform.highlight ? 'text-white' : 'text-(--foreground)',
                )}>
                  {platform.name}
                </p>
              </th>
            ))}
          </tr>
        </thead>

        {/* ── Body rows ── */}
        <tbody>
          {parameters.map((param, rowIdx) => (
            <tr key={rowIdx} className="group">
              {/* Parameter label cell */}
              <th className="sticky left-0 z-10 w-[200px] min-w-[200px] border-b border-r border-(--border)/50 bg-(--background) p-4 align-middle transition-colors group-hover:bg-(--muted)">
                <span className="text-[12px] font-semibold leading-snug text-(--foreground)">
                  {param}
                </span>
              </th>

              {/* Value cells */}
              {platforms.map((platform) => (
                <td
                  key={platform.id}
                  className={cn(
                    'min-w-[210px] border-b border-r border-(--border)/40 p-4 align-top text-[12px] leading-relaxed last:border-r-0',
                    platform.highlight
                      ? 'bg-(--primary)/[0.04] text-(--foreground)'
                      : 'bg-(--background-elevated) text-(--muted-foreground) group-hover:bg-(--muted)/50',
                  )}
                >
                  <div className="flex items-start gap-2.5">
                    {platform.highlight ? (
                      <CheckCircle
                        size={13}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-(--primary)"
                      />
                    ) : (
                      <Minus
                        size={13}
                        className="mt-0.5 shrink-0 text-(--muted-foreground)/30"
                      />
                    )}
                    <span className={platform.highlight ? 'font-medium' : ''}>
                      {platform.values[rowIdx] ?? '—'}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Mobile View ───────────────────────────────────────────────────── */

function MobileView({ tab }: { tab: ComparisonTab }) {
  const { parameters, platforms } = tab;
  const dkc = platforms.find((p) => p.highlight) ?? platforms[0]!;
  const others = platforms.filter((p) => !p.highlight);
  const [activeIdx, setActiveIdx] = useState(0);
  const competitor = others[activeIdx];

  return (
    <div className="flex flex-col gap-5">
      {/* Competitor switcher */}
      {others.length > 1 && (
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto rounded-xl border border-(--border) bg-(--background) p-1">
          {others.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={cn(
                'shrink-0 rounded-lg px-3 py-2 text-[11px] font-semibold transition-all duration-200',
                activeIdx === i
                  ? 'bg-(--background)/60 text-(--foreground) shadow-sm'
                  : 'text-(--muted-foreground) hover:text-(--foreground)',
              )}
            >
              vs {p.name.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      )}

      {/* Row cards */}
      <div className="flex flex-col gap-3">
        {parameters.map((param, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-(--border) bg-(--background)/60 backdrop-blur-sm"
          >
            {/* Parameter label */}
            <div className="flex items-center gap-2 border-b border-(--border) bg-(--background) px-4 py-2.5">
              <span className="font-mono text-[9px] font-bold text-(--muted-foreground)/40">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-[11px] font-semibold text-(--foreground)">{param}</span>
            </div>

            {/* Side-by-side values */}
            <div className="grid grid-cols-2 divide-x divide-(--border)">
              {/* DKC */}
              <div className="bg-(--primary)/[0.04] p-4">
                <div className="mb-2 flex items-center gap-1.5">
                  <CheckCircle size={10} weight="fill" className="text-(--primary)" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-(--primary)/70">
                    DKC Model
                  </span>
                </div>
                <p className="text-[12px] font-semibold leading-snug text-(--foreground)">
                  {dkc.values[idx] ?? '—'}
                </p>
              </div>

              {/* Competitor */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-(--muted-foreground)/40">
                    {competitor?.name ?? 'Competitor'}
                  </span>
                </div>
                <p className="text-[12px] leading-snug text-(--muted-foreground)">
                  {competitor?.values[idx] ?? '—'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ComparisonSection ─────────────────────────────────────────────── */

export default function ComparisonSection({ data }: { data: ComparisonData }) {
  if (!data) return null;

  const validTabs = (data.tabs ?? []).filter(
    (t) =>
      Array.isArray(t.parameters) &&
      t.parameters.length > 0 &&
      Array.isArray(t.platforms) &&
      t.platforms.length > 0,
  );

  if (validTabs.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="section-inner">

          <SectionHeader
            eyebrow={data.sectionLabel}
            badgeVariant="primary"
            headline={data.headline}
            description={data.subheadline}
            size="lg"
            align="left"
          />

          <Tabs
            tabs={validTabs.map((t) => ({
              key: t.id,
              label: t.label,
              icon: <ArrowsLeftRight size={14} />,
            }))}
            defaultTab={data.defaultTab ?? validTabs[0]?.id}
            variant="segment"
          >
            {(activeTabId) => {
              const activeTab = validTabs.find((t) => t.id === activeTabId) ?? validTabs[0]!;
              return (
                <div className="mt-6">
                  <div className="hidden md:block">
                    <DesktopTable tab={activeTab} />
                  </div>
                  <div className="md:hidden">
                    <MobileView tab={activeTab} />
                  </div>
                </div>
              );
            }}
          </Tabs>

          {/* ── Footer legend ── */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12px] text-(--muted-foreground)">
              Scroll right to view all platforms on smaller screens.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-(--muted-foreground)">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} weight="fill" className="text-(--primary)" />
                DKC Private Label
              </span>
              <span className="flex items-center gap-1.5">
                <Minus size={12} className="opacity-40" />
                Competitor
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
