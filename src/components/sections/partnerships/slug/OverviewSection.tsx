'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  WarningCircle,
  CheckCircle,
  CaretDown,
} from '@/lib/icons';
import type { ModelPageContent } from '@/data/partnership/models';

export interface OverviewSectionProps {
  data: ModelPageContent['overviewSection'];
  kpiRequired: string;
  tier: number;
}

const DESIGN_PRINCIPLES = [
  'Every friction point maps to a platform resolution',
  'Problems and resolutions are structurally paired',
  'Resolution quality measured at platform level',
  'Diagnostic clarity before commercial commitment',
] as const;

export default function OverviewSection({ data, kpiRequired, tier }: OverviewSectionProps) {
  const [activeAccordion, setActiveAccordion] = useState<'problems' | 'solutions' | null>('problems');

  const statCards = [
    { label: 'Challenges', value: data.problems.length.toString().padStart(2, '0'), numeric: true },
    { label: 'Solutions',  value: data.solutions.length.toString().padStart(2, '0'), numeric: true },
    { label: 'KPI Required', value: kpiRequired, numeric: true },
    { label: 'Tier', value: `Tier ${tier}`, numeric: false },
  ];

  return (
    <section className="section section-elevated w-full">
      <div className="container flex flex-col gap-12">

        {/* Row 1 — Two equal columns */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

          {/* Left — headline + description */}
          <div>
            <h2
              className="text-4xl font-bold leading-tight text-(--foreground) font-heading"
            >
              {data.headline}
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed text-(--muted-foreground)"
            >
              {data.description}
            </p>
          </div>

          {/* Right — 2×2 stat cards */}
          <div className="grid h-full grid-cols-2 gap-3">
            {statCards.map(({ label, value, numeric }) => (
              <div
                key={label}
                className="p-4 bg-(--card) border border-(--border) rounded-[var(--radius-card)] shadow-(--shadow-sm)"
              >
                <p
                  className="uppercase tracking-widest text-[10px] text-(--muted-foreground) font-label"
                >
                  {label}
                </p>
                {numeric ? (
                  <p
                    className="mt-2 text-3xl font-bold text-(--foreground) font-data"
                  >
                    {value}
                  </p>
                ) : (
                  <p
                    className="mt-2 text-xl font-semibold text-(--foreground) font-heading"
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Dark sticky left + white accordion right */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_3fr]">

          {/* Left — dark sticky panel */}
          <div
            className="sticky top-4 bg-(--background-elevated) rounded-[var(--radius-card)] p-8"
          >
            <p
              className="text-xs uppercase tracking-widest text-(--muted-foreground) font-label"
            >
              Diagnostic View
            </p>
            <h3
              className="mt-3 text-2xl font-bold text-(--foreground) font-heading"
            >
              From friction to structure
            </h3>
            <p
              className="mt-4 text-sm leading-relaxed text-(--muted-foreground)"
            >
              Each trade friction maps to a platform resolution layer, converting operational uncertainty into structured outcomes.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {DESIGN_PRINCIPLES.map((text) => (
                <div key={text} className="bg-(--card) border border-(--border) rounded-[var(--radius-card-sm)] flex items-start gap-3 p-3 shadow-(--shadow-sm)">
                  <CheckCircle
                    weight="fill"
                    size={15}
                    className="mt-0.5 shrink-0 text-(--primary)"
                  />
                  <span className="text-sm text-(--foreground) font-ui">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">

            {/* Accordion 1 — Problems */}
            <div
              className="bg-(--card) border border-(--border) rounded-[var(--radius-card)] overflow-hidden shadow-(--shadow-sm)"
            >
              <button
                type="button"
                onClick={() => setActiveAccordion(activeAccordion === 'problems' ? null : 'problems')}
                className="flex w-full items-center gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) transition-colors duration-200"
              >
                <div
                  className="shrink-0 p-2 bg-(--background-elevated) rounded-[var(--radius-card-sm)] shadow-inner"
                >
                  <WarningCircle weight="fill" size={16} className="text-(--destructive)" />
                </div>
                <span
                  className="flex-1 text-lg font-semibold text-(--foreground) font-heading"
                >
                  Trade Friction Signals
                </span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={cn(
                    'text-(--muted-foreground) transition-transform duration-300',
                    activeAccordion === 'problems' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </button>
              {activeAccordion === 'problems' && (
                <div className="flex flex-col gap-2 px-4 pb-4">
                  {data.problems.map((problem, idx) => (
                    <div
                      key={problem}
                      className="flex items-start gap-4 p-4 bg-(--card) border border-(--border) rounded-[var(--radius-card)] shadow-xs"
                    >
                      <span
                        className="shrink-0 text-xs font-semibold size-8 bg-(--background-focus) text-(--foreground) rounded-[var(--radius-card-sm)] flex items-center justify-center font-data"
                      >
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <p
                        className="text-sm leading-relaxed text-(--muted-foreground) font-ui"
                      >
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion 2 — Solutions */}
            <div
              className="bg-(--card) border border-(--border) rounded-[var(--radius-card)] overflow-hidden shadow-(--shadow-sm)"
            >
              <button
                type="button"
                onClick={() => setActiveAccordion(activeAccordion === 'solutions' ? null : 'solutions')}
                className="flex w-full items-center gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) transition-colors duration-200"
              >
                <div
                  className="shrink-0 p-2 bg-(--background-elevated) rounded-[var(--radius-card-sm)] shadow-inner"
                >
                  <CheckCircle weight="fill" size={16} className="text-(--success)" />
                </div>
                <span
                  className="flex-1 text-lg font-semibold text-(--foreground) font-heading"
                >
                  Structured Resolution Layer
                </span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={cn(
                    'text-(--muted-foreground) transition-transform duration-300',
                    activeAccordion === 'solutions' ? 'rotate-180' : 'rotate-0'
                  )}
                />
              </button>
              {activeAccordion === 'solutions' && (
                <div className="flex flex-col gap-2 px-4 pb-4">
                  {data.solutions.map((solution, idx) => (
                    <div
                      key={solution}
                      className="flex items-start gap-4 p-4 bg-(--card) border border-(--border) border-l-2 border-l-(--primary)/40 rounded-[var(--radius-card)] shadow-xs"
                    >
                      <span
                        className="shrink-0 text-xs font-semibold size-8 bg-(--primary) text-(--primary-foreground) rounded-[var(--radius-card-sm)] flex items-center justify-center font-data"
                      >
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <p
                        className="text-sm leading-relaxed text-(--muted-foreground) font-ui"
                      >
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
