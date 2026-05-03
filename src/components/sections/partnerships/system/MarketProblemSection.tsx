'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { WarningCircle, CheckCircle } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface MarketProblemSectionProps {
  data: PartnershipSystemData['marketProblemSection'];
  role: Role;
}

/* ── Constants ──────────────────────────────────────────────────── */

const CYCLE_MS = 2800;

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── ItemRow ────────────────────────────────────────────────────── */

interface ItemRowProps {
  text: string;
  index: number;
  isActive: boolean;
  side: 'problem' | 'solution';
  onClick: () => void;
}

function ItemRow({ text, index, isActive, side, onClick }: ItemRowProps) {
  const isProblem = side === 'problem';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'relative w-full px-4 py-3.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--border)',
        'rounded-[var(--radius-card-sm)] border',
        isActive
          ? isProblem
            ? 'border-(--destructive) bg-(--destructive)/10'
            : 'border-(--success) bg-(--success)/10'
          : 'border-(--border) bg-transparent'
      )}
    >
      {/* Animated left bar */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            key={index + '-bar'}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute inset-y-2 left-0 w-0.75 origin-top rounded-full',
              isProblem ? 'bg-(--destructive)' : 'bg-(--success)'
            )}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="flex items-start gap-3">
        <span
          className={cn(
            'mt-0.5 shrink-0 transition-colors duration-200',
            isActive
              ? isProblem
                ? 'text-(--destructive)'
                : 'text-(--success)'
              : 'text-(--muted-foreground)'
          )}
        >
          {isProblem ? (
            <WarningCircle weight={isActive ? 'fill' : 'regular'} size={15} />
          ) : (
            <CheckCircle weight={isActive ? 'fill' : 'regular'} size={15} />
          )}
        </span>

        <p
          className={cn(
            'text-sm leading-relaxed transition-colors duration-200',
            isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'
          )}
        >
          {text}
        </p>
      </div>
    </button>
  );
}

/* ── ProgressDots ───────────────────────────────────────────────── */

function ProgressDots({
  total,
  active,
  onSelect,
}: {
  total: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Go to pair ${i + 1}`}
          className="focus:outline-none"
          style={{
            width: i === active ? '20px' : '6px',
            height: '6px',
            borderRadius: '999px',
            background: i === active ? 'var(--foreground)' : 'var(--border)',
            transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      ))}
    </div>
  );
}

/* ── MarketProblemSection ───────────────────────────────────────── */

export function MarketProblemSection({ data, role }: MarketProblemSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = data.problems.length;

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, CYCLE_MS);
  }, [total]);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  function handleSelect(i: number) {
    setActiveIndex(i);
    startCycle();
  }

  return (
    <section
      aria-label={data.sectionLabel}
      className="relative w-full overflow-hidden section"
    >
      {/* Background texture */}
      <div className="texture-noise pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

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
          />

          {/* Role description — animated */}
          <AnimatePresence mode="wait">
            <motion.p
              key={role}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-(--muted-foreground) -mt-6 max-w-[52ch] self-center text-center"
            >
              {data.roles[role].description}
            </motion.p>
          </AnimatePresence>

          {/* Two cards */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Trade Friction card */}
              <div
                className="bg-(--background-elevated) border-(--border) rounded-[var(--radius-card)] flex flex-col gap-3 border p-4 shadow-inner"
              >
                <div className="mb-1 flex items-center gap-2">
                  <WarningCircle weight="fill" size={14} className="text-(--destructive)" />
                  <span
                    className="font-label text-(--destructive) text-[11px] font-semibold uppercase tracking-widest"
                  >
                    Trade Friction
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {data.problems.map((problem, idx) => (
                    <ItemRow
                      key={problem}
                      text={problem}
                      index={idx}
                      isActive={activeIndex === idx}
                      side="problem"
                      onClick={() => handleSelect(idx)}
                    />
                  ))}
                </div>
              </div>

              {/* Platform Response card */}
              <div
                className="bg-(--background-elevated) border-(--border) rounded-[var(--radius-card)] flex flex-col gap-3 border p-4 shadow-inner"
              >
                <div className="mb-1 flex items-center gap-2">
                  <CheckCircle weight="fill" size={14} className="text-(--success)" />
                  <span
                    className="font-label text-(--success) text-[11px] font-semibold uppercase tracking-widest"
                  >
                    Platform Response
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {data.solutions.map((solution, idx) => (
                    <ItemRow
                      key={solution}
                      text={solution}
                      index={idx}
                      isActive={activeIndex === idx}
                      side="solution"
                      onClick={() => handleSelect(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="mx-auto w-full max-w-3xl">
            <ProgressDots total={total} active={activeIndex} onSelect={handleSelect} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
