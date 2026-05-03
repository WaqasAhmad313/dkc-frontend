'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Tabs } from '@/components/shared/Tabs';
import { SealCheck } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

interface ComparisonPlatform {
  readonly id: string;
  readonly name: string;
  readonly highlight: boolean;
  readonly values: readonly string[];
}

interface ComparisonTab {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly parameters: readonly string[];
  readonly platforms: readonly ComparisonPlatform[];
}

interface ComparisonSectionData {
  readonly sectionLabel: string;
  readonly headline: string;
  readonly subheadline: string;
  readonly defaultTab: string;
  readonly tabs: readonly ComparisonTab[];
}

export interface ComparisonSectionProps {
  data: ComparisonSectionData;
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

/* ── ComparisonTable ────────────────────────────────────────────── */

function ComparisonTable({ tab }: { tab: ComparisonTab }) {
  return (
    <div className="overflow-x-auto">
      <table
        className="w-full border-collapse text-left"
        style={{ minWidth: `${200 + tab.platforms.length * 180}px` }}
      >
        {/* Column header row */}
        <thead>
          <tr className="border-(--border) border-b-2">
            {/* Empty corner cell */}
            <th
              scope="col"
              className="bg-(--card) text-(--muted-foreground) font-label sticky left-0 z-10 py-3 pr-4 text-[11px] font-bold uppercase tracking-widest"
              style={{
                width: '200px',
                minWidth: '200px',
              }}
            >
              Feature
            </th>

            {tab.platforms.map((platform) => (
              <th
                key={platform.id}
                scope="col"
                className={cn(
                  'font-ui px-4 py-3 text-center text-[13px] font-bold',
                  platform.highlight
                    ? 'bg-(--primary)/6 text-(--primary) border-t-(--primary) border-t-2'
                    : 'bg-(--card) text-(--muted-foreground) border-t-2 border-t-transparent',
                )}
                style={{
                  minWidth: '160px',
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  {platform.highlight && (
                    <SealCheck weight="fill" size={14} className="text-(--primary)" />
                  )}
                  <span>{platform.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Data rows */}
        <tbody>
          {tab.parameters.map((param, rowIdx) => {
            const isEven = rowIdx % 2 === 0;
            return (
              <tr
                key={param}
                className={cn('border-(--border) border-b', !isEven && 'bg-(--primary)/2')}
              >
                {/* Row header — sticky */}
                <th
                  scope="row"
                  className={cn(
                    'font-ui sticky left-0 z-10 py-3 pr-4 text-[12px] font-semibold',
                    isEven ? 'bg-(--card)' : 'bg-(--background-elevated)',
                    'text-(--foreground)',
                  )}
                  style={{
                    width: '200px',
                    minWidth: '200px',
                  }}
                >
                  {param}
                </th>

                {/* Platform value cells */}
                {tab.platforms.map((platform) => (
                  <td
                    key={platform.id}
                    className={cn(
                      'px-4 py-3 text-center text-[12px] leading-snug',
                      platform.highlight
                        ? isEven
                          ? 'bg-(--primary)/4'
                          : 'bg-(--primary)/6'
                        : 'transparent',
                      platform.highlight
                        ? 'text-(--foreground) font-medium'
                        : 'text-(--muted-foreground) font-normal',
                    )}
                  >
                    {platform.values[rowIdx]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ── ComparisonSection ──────────────────────────────────────────── */

export default function ComparisonSection({ data }: ComparisonSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(data.defaultTab);
  const tabs = data.tabs.map((t) => ({ key: t.id, label: t.label }));
  const activeTabData = data.tabs.find((t) => t.id === activeTab) ?? data.tabs[0]!;

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
            description={data.subheadline}
          />

          {/* Comparison card */}
          <div className="border-(--border) bg-(--card) shadow-(--shadow-md) overflow-hidden rounded-[var(--radius-card)] border">
            {/* Tab bar */}
            <div className="border-(--border) border-b px-4 pt-4">
              <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />
            </div>

            {/* Tab description */}
            <div className="bg-(--primary)/4 border-(--border) border-b px-4 py-2.5">
              <p className="text-(--muted-foreground) text-[12px] italic">
                {activeTabData.description}
              </p>
            </div>

            {/* Table — animated on tab switch */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <ComparisonTable tab={activeTabData} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
