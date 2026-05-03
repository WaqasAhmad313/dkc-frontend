'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── Types ───────────────────────────────────────────────────────── */

interface StatItem {
  value?: string;
  label?: string;
  sublabel?: string;
}

interface StatsData {
  headline: string;
  description: string;
  items: StatItem[];
}

/* ── Animated counter hook ───────────────────────────────────────── */

function useCountUp(target: number, duration: number = 1800, started: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let rafId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, started]);

  return count;
}

/* ── Value parser ────────────────────────────────────────────────── */

interface ParsedValue {
  numeric: number;
  prefix: string;
  suffix: string;
  hasCommas: boolean;
  hasNumeric: boolean;
  raw: string;
}

function parseValue(value?: string): ParsedValue {
  const raw = value ?? '0';
  const match = raw.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)(.*)$/);
  if (!match)
    return { numeric: 0, prefix: '', suffix: '', hasCommas: false, hasNumeric: false, raw };
  const numeric = parseFloat(match[2]!.replace(/,/g, ''));
  return {
    numeric,
    prefix: match[1] ?? '',
    suffix: match[3] ?? '',
    hasCommas: match[2]!.includes(','),
    hasNumeric: true,
    raw,
  };
}

/* ── StatCard ────────────────────────────────────────────────────── */

interface StatCardProps {
  stat: StatItem;
  index: number;
  isLast: boolean;
}

function StatCard({ stat, index, isLast }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const { numeric, prefix, suffix, hasCommas, hasNumeric, raw } = parseValue(stat.value);
  const animated = useCountUp(numeric, 1600 + index * 100, inView);

  const formattedNumber = hasCommas ? animated.toLocaleString() : String(animated);
  const label = stat.label ?? '';
  const sublabel = stat.sublabel ?? null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-1 flex-col"
    >
      <div
        className={cn(
          'relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden text-center',
          'rounded-2xl border border-white/10 bg-white/5 px-6 py-10',
          'transition-colors duration-300',
          'hover:border-(--primary)/30 hover:bg-white/[0.07]',
        )}
      >
        {/* Value */}
        <div className="flex items-end gap-0.5 leading-none">
          {hasNumeric ? (
            <>
              {prefix ? (
                <span className="font-heading pb-1.5 text-2xl text-(--primary)/70">
                  {prefix}
                </span>
              ) : null}
              <span className="font-heading text-5xl font-bold tabular-nums text-white md:text-6xl">
                {formattedNumber}
              </span>
              {suffix ? (
                <span className="font-heading pb-1.5 text-2xl font-bold text-(--primary)">
                  {suffix}
                </span>
              ) : null}
            </>
          ) : (
            <span className="font-heading text-3xl font-bold text-(--primary) md:text-4xl">
              {raw}
            </span>
          )}
        </div>

        {/* Label — readable sentence case, no uppercase */}
        {label ? (
          <p className="max-w-[10rem] text-sm leading-snug text-white/55">
            {label}
          </p>
        ) : null}

        {sublabel ? (
          <p className="text-xs text-white/30">{sublabel}</p>
        ) : null}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-(--primary)/60 via-(--primary)/20 to-transparent"
        />
      </div>

      {/* Vertical rule between cards — desktop only */}
      {!isLast && (
        <div className="absolute -right-px top-1/4 hidden h-1/2 w-px bg-white/[0.06] lg:block" />
      )}
    </motion.div>
  );
}

/* ── StatsSection ────────────────────────────────────────────────── */

export function StatsSection({ data }: { data: StatsData }) {
  if (!data?.items?.length) return null;

  return (
    <section className="section-feature section w-full">
      <div className="bg-linear-to-r mx-auto mb-10 h-px w-full from-transparent via-white/10 to-transparent" />

      <div className="container">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading heading-subsection text-white">{data.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
            {data.description}
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-nowrap lg:gap-4">
          {data.items.map((stat, idx) => (
            <StatCard
              key={stat.label ?? idx}
              stat={stat}
              index={idx}
              isLast={idx === data.items.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="bg-linear-to-r mx-auto mt-10 h-px w-full from-transparent via-white/10 to-transparent" />
    </section>
  );
}
