'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CheckCircle, Lightning, ArrowDown } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface ProcessSectionProps {
  data: PartnershipSystemData['processSection'];
}

type FlowData = PartnershipSystemData['processSection']['flows'][number];

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STEP_ENTER = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.08 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── FlowColumn ─────────────────────────────────────────────────── */

interface FlowColumnProps {
  flow: FlowData;
  isStandard: boolean;
}

function FlowColumn({ flow, isStandard }: FlowColumnProps) {
  const accent = isStandard ? 'var(--primary)' : 'var(--secondary)';
  const accentBg = isStandard
    ? 'bg-(--primary)/10'
    : 'bg-(--secondary)/10';
  const accentBorder = isStandard ? 'border-(--primary)' : 'border-(--secondary)';
  const accentLight = isStandard
    ? 'bg-(--primary)/5'
    : 'bg-(--secondary)/5';

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flow.steps.length);
    }, 900);
    return () => clearInterval(interval);
  }, [flow.steps.length]);

  return (
    <motion.div
      className="flex flex-1 flex-col gap-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-4%' }}
    >
      {/* Column header */}
      <div
        className={cn(
          'mb-6 flex flex-col gap-3 border p-4 rounded-[var(--radius-card)]',
          'border-l-[3px]',
          accentBg,
          accentBorder
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className="font-ui text-(--foreground) text-sm font-bold"
          >
            {flow.title}
          </span>
          {isStandard ? (
            <span
              className="font-label bg-(--primary)/10 border-(--primary)/20 text-(--primary) flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
            >
              <CheckCircle weight="fill" size={10} className="shrink-0" />
              Default
            </span>
          ) : (
            <span
              className="font-label bg-(--secondary)/10 border-(--secondary)/20 text-(--secondary) flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
            >
              <Lightning weight="fill" size={10} className="shrink-0" />
              Accelerated
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-(--muted-foreground) text-[11px]">
            {flow.steps.length} steps
          </span>
          <span
            className="bg-(--border) h-1 w-1 rounded-full"
            aria-hidden="true"
          />
          <span className="text-(--muted-foreground) text-[11px]">
            {isStandard ? 'No upfront fee' : 'Fee after evaluation only'}
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col">
        {flow.steps.map((step, idx) => {
          const isLast = idx === flow.steps.length - 1;
          const isFocused = activeStep === idx;

          return (
            <motion.div
              key={step}
              variants={STEP_ENTER}
              custom={idx}
              className="flex items-stretch gap-3"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{
                    borderColor: isFocused ? accent : 'var(--border)',
                    background: isFocused ? 'var(--background-elevated)' : 'var(--card)',
                    color: isFocused ? accent : 'var(--muted-foreground)',
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-data relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold tabular-nums"
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.div>

                {!isLast && (
                  <div
                    className="bg-(--border) my-1 w-px flex-1 min-h-[20px]"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-0 pb-4 pt-[4px]">
                <motion.div
                  animate={{
                    background: isFocused ? 'var(--background-elevated)' : 'transparent',
                    borderColor: isFocused ? accent : 'var(--border)',
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[var(--radius-card-sm)] flex items-center gap-2 border px-3 py-2.5"
                >
                  {isFocused ? (
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <CheckCircle
                        weight="fill"
                        size={13}
                        className="shrink-0"
                        style={{ color: accent }}
                      />
                    </motion.span>
                  ) : (
                    <span
                      className="bg-(--border) size-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                  )}

                  <motion.span
                    animate={{
                      color: isFocused
                        ? 'var(--foreground)'
                        : 'var(--muted-foreground)',
                      fontWeight: isFocused ? 600 : 500,
                    }}
                    transition={{ duration: 0.25 }}
                    className="font-ui text-[13px] leading-snug"
                  >
                    {step}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── ProcessSection ─────────────────────────────────────────────── */

export function ProcessSection({ data }: ProcessSectionProps) {
  const standardFlow = data.flows.find((f) => f.id === 'standard');
  const fastTrackFlow = data.flows.find((f) => f.id === 'fast-track');

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
            description={data.description}
          />

          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
              {standardFlow && <FlowColumn flow={standardFlow} isStandard />}

              <div className="flex items-center gap-3 sm:hidden" aria-hidden="true">
                <div className="bg-(--border) h-px flex-1" />
                <span
                  className="font-label text-(--muted-foreground) text-[10px] font-semibold uppercase tracking-widest"
                >
                  or
                </span>
                <div className="bg-(--border) h-px flex-1" />
              </div>

              {fastTrackFlow && <FlowColumn flow={fastTrackFlow} isStandard={false} />}
            </div>
          </div>

          <div className="mx-auto flex max-w-xl flex-col items-center gap-2 text-center">
            <div
              className="bg-(--border) h-px w-12"
              aria-hidden="true"
            />
            <p className="text-sm text-(--muted-foreground)">
              Both paths lead to the same destination. Fast-Track reduces waiting time it does not
              replace evaluation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
