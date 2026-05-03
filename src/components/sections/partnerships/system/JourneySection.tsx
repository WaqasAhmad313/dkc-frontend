'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';
import {
  CheckCircle,
  CaretRight,
  RocketLaunch,
  GitBranch,
  Lightning,
  Target,
  ArrowRight,
} from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface JourneySectionProps {
  data: PartnershipSystemData['journeySection'];
}

type PhaseData = PartnershipSystemData['journeySection']['phases'][number];

/* ── Constants ──────────────────────────────────────────────────── */

const AUTO_ADVANCE_MS = 2600;

/* ── Phase icons by index ───────────────────────────────────────── */

const PHASE_ICONS = [RocketLaunch, GitBranch, Lightning, Target, ArrowRight];

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── PhaseCard ──────────────────────────────────────────────────── */

interface PhaseCardProps {
  phase: PhaseData;
  index: number;
  total: number;
  isFocused: boolean;
  onClick: () => void;
}

function PhaseCard({ phase, index, isFocused, onClick }: PhaseCardProps) {
  const Icon = PHASE_ICONS[index] ?? CaretRight;

  const hasItems = 'items' in phase && Array.isArray(phase.items) && phase.items.length > 0;
  const hasDescription = 'description' in phase && !!phase.description;
  const hasNote = 'note' in phase && !!phase.note;

  return (
    <motion.div
      onClick={onClick}
      animate={{
        borderColor: 'var(--border)',
        boxShadow: isFocused
          ? 'var(--shadow-md)'
          : 'var(--shadow-sm)',
        y: isFocused ? -3 : 0,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'bg-(--card) rounded-[var(--radius-card)] flex h-full cursor-pointer flex-col gap-3 border p-5 transition-colors duration-200',
        'border-l-[3px]',
        isFocused ? 'border-l-(--foreground)' : 'border-l-(--border)'
      )}
      tabIndex={0}
      onFocus={onClick}
    >
      {/* Top row — icon + phase number */}
      <div className="flex items-start justify-between gap-2">
        <motion.div
          animate={{
            background: isFocused ? 'var(--background-focus)' : 'var(--background-elevated)',
          }}
          transition={{ duration: 0.25 }}
          className="rounded-[var(--radius-card-sm)] flex size-9 shrink-0 items-center justify-center shadow-inner"
        >
          <Icon
            weight={isFocused ? 'fill' : 'duotone'}
            size={16}
            className={cn(
              'transition-colors duration-200',
              isFocused ? 'text-(--foreground)' : 'text-(--muted-foreground)'
            )}
          />
        </motion.div>

        <span
          className={cn(
            'font-data text-[10px] font-semibold tabular-nums transition-colors duration-200',
            isFocused ? 'text-(--foreground)' : 'text-(--muted-foreground)'
          )}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Phase title */}
      <motion.h3
        animate={{
          color: isFocused ? 'var(--foreground)' : 'var(--muted-foreground)',
        }}
        transition={{ duration: 0.25 }}
        className="font-heading text-sm font-bold leading-snug"
      >
        {phase.title}
      </motion.h3>

      {/* Description */}
      {hasDescription && (
        <p className="text-(--muted-foreground) text-[12px] leading-relaxed">
          {(phase as { description: string } & PhaseData).description}
        </p>
      )}

      {/* Items list */}
      {hasItems && (
        <div className="flex flex-col gap-1.5">
          {(phase as { items: readonly string[] } & PhaseData).items.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle
                weight={isFocused ? 'fill' : 'regular'}
                size={12}
                className={cn(
                  'mt-[2px] shrink-0 transition-colors duration-200',
                  isFocused ? 'text-(--foreground)' : 'text-(--muted-foreground)'
                )}
              />
              <span
                className="text-(--muted-foreground) text-[12px] leading-relaxed"
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Note */}
      {hasNote && (
        <p
          className="text-(--muted-foreground) text-[11px] italic leading-relaxed"
        >
          {(phase as { note: string } & PhaseData).note}
        </p>
      )}

      {/* Progress bar */}
      <div className="mt-auto pt-2">
        <div
          className="bg-(--border) h-0.5 w-full overflow-hidden rounded-full"
        >
          <motion.div
            className="bg-(--foreground) h-full rounded-full"
            animate={{ width: isFocused ? '100%' : '0%' }}
            transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── JourneySection ─────────────────────────────────────────────── */

export function JourneySection({ data }: JourneySectionProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phases = data.phases;
  const total = phases.length;

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFocusedIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
  }, [total]);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  function handleSelect(idx: number) {
    setFocusedIndex(idx);
    setUserInteracted(true);
    startCycle();
  }

  return (
    <section
      aria-label={data.sectionLabel}
      className="relative w-full overflow-hidden section"
    >
      {/* Background texture */}
      <div className="texture-noise pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="container relative">
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

          {/* Desktop: 2×2 grid */}
          <motion.div
            className="mx-auto hidden w-full max-w-2xl sm:grid sm:grid-cols-2 sm:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            {phases.map((phase, idx) => (
              <PhaseCard
                key={phase.title}
                phase={phase}
                index={idx}
                total={total}
                isFocused={focusedIndex === idx}
                onClick={() => handleSelect(idx)}
              />
            ))}
          </motion.div>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-3 sm:hidden">
            {phases.map((phase, idx) => {
              const Icon = PHASE_ICONS[idx] ?? CaretRight;
              const isFocused = focusedIndex === idx;
              const hasItems =
                'items' in phase && Array.isArray(phase.items) && phase.items.length > 0;
              const hasDescription = 'description' in phase && !!phase.description;

              return (
                <motion.div
                  key={phase.title}
                  onClick={() => handleSelect(idx)}
                  animate={{
                    borderColor: 'var(--border)',
                    background: isFocused ? 'var(--background-focus)' : 'var(--background-elevated)',
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    'bg-(--card) rounded-[var(--radius-card)] flex cursor-pointer flex-col gap-3 border p-4',
                    'border-l-[3px]',
                    isFocused ? 'border-l-(--foreground)' : 'border-l-(--border)',
                    isFocused ? 'shadow-(--shadow-md)' : 'shadow-(--shadow-sm)'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'rounded-[var(--radius-card-sm)] flex size-8 shrink-0 items-center justify-center shadow-inner',
                        isFocused ? 'bg-(--background-focus)' : 'bg-(--background-elevated)'
                      )}
                    >
                      <Icon
                        weight={isFocused ? 'fill' : 'duotone'}
                        size={14}
                        className={isFocused ? 'text-(--foreground)' : 'text-(--muted-foreground)'}
                      />
                    </div>
                    <h3
                      className="font-heading text-(--foreground) text-sm font-bold"
                    >
                      {phase.title}
                    </h3>
                    <span
                      className={cn(
                        'font-data ml-auto text-[10px] font-semibold',
                        isFocused ? 'text-(--foreground)' : 'text-(--muted-foreground)'
                      )}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {hasDescription && (
                    <p
                      className="text-(--muted-foreground) text-[12px] leading-relaxed"
                    >
                      {(phase as { description: string } & PhaseData).description}
                    </p>
                  )}

                  {hasItems && (
                    <div className="flex flex-col gap-1.5">
                      {(phase as { items: readonly string[] } & PhaseData).items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle
                            weight="fill"
                            size={12}
                            className="mt-[2px] shrink-0 text-(--foreground)"
                          />
                          <span
                            className="text-(--muted-foreground) text-[12px] leading-relaxed"
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div
                    className="bg-(--border) h-0.5 w-full overflow-hidden rounded-full"
                  >
                    <motion.div
                      className="bg-(--foreground) h-full rounded-full"
                      animate={{ width: isFocused ? '100%' : '0%' }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="mx-auto flex w-full max-w-2xl items-center justify-center gap-1.5">
            {phases.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-label={`Focus phase ${idx + 1}`}
                className="focus:outline-none"
                style={{
                  width: focusedIndex === idx ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '999px',
                  background:
                    focusedIndex === idx ? 'var(--foreground)' : 'var(--border)',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
