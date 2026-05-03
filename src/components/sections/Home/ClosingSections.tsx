'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Button, CTAButton } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import { ArrowRight } from '@/lib/icons';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';

const { network, whyPartnership, finalCta } = HOMEPAGE.closing;

/* ── Animation helpers ───────────────────────────────────────── */

function fadeUp(delay: number, inView: boolean) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as number[] },
  };
}

function fadeIn(delay: number, inView: boolean) {
  return {
    initial: { opacity: 0 },
    animate: inView ? { opacity: 1 } : {},
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  };
}

/* ═══════════════════════════════════════════════════════════════
   SECTION DIVIDERS
═══════════════════════════════════════════════════════════════ */

function DividerArchDown() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 Q720 80 1440 0 L1440 0 L0 0 Z" fill="var(--background-elevated)" />
      </svg>
    </div>
  );
}

function DividerWaveUp() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 80 Q360 18 720 48 Q1080 78 1440 22 L1440 80 Z"
          fill="var(--background-elevated)"
        />
        <path
          d="M0 80 Q360 18 720 48 Q1080 78 1440 22"
          stroke="var(--primary)"
          strokeWidth="1"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
}

function DividerSharpCut() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L1440 0 L1440 24 L0 72 Z" fill="var(--background-elevated)" />
        <line
          x1="0"
          y1="72"
          x2="1440"
          y2="24"
          stroke="color-mix(in srgb, var(--foreground) 40%, transparent)"
          strokeWidth="1.5"
          strokeOpacity="1"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9a — NETWORK BAND
═══════════════════════════════════════════════════════════════ */

interface NetworkBandProps {
  activeRole: PlatformRole;
}

function useCountUp(target: number, active: boolean, delay = 0): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let start: number | null = null;
    const dur = 1100;
    let raf: number;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start - delay * 1000;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(elapsed / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(e * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, delay]); // eslint-disable-line react-hooks/exhaustive-deps
  return count;
}

const RING_R = 36;
const RING_C = 2 * Math.PI * RING_R;

function RingStatCard({
  label,
  value,
  maxVal,
  isTop,
  rowActive,
  index,
}: {
  label: string;
  value: number;
  maxVal: number;
  isTop: boolean;
  rowActive: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const count = useCountUp(value, rowActive, index * 0.12);
  const pct = value / maxVal;
  const offset = RING_C * (1 - pct);

  const ringColor = isTop
    ? 'var(--signature)'
    : 'color-mix(in srgb, var(--foreground) 70%, transparent)';
  const trackColor = 'color-mix(in srgb, var(--foreground) 8%, transparent)';

  return (
    <motion.div
      whileHover={{ y: -3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center gap-2.5 rounded-2xl p-4"
      style={{
        background: isTop
          ? 'color-mix(in srgb, var(--foreground) 10%, transparent)'
          : hovered
            ? 'color-mix(in srgb, var(--foreground) 8%, transparent)'
            : 'color-mix(in srgb, var(--foreground) 4%, transparent)',
        border: `1px solid ${isTop ? 'color-mix(in srgb, var(--foreground) 28%, transparent)' : hovered ? 'color-mix(in srgb, var(--foreground) 18%, transparent)' : 'color-mix(in srgb, var(--foreground) 8%, transparent)'}`,
        transition: 'all 0.25s',
      }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 88, height: 88 }}>
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
        >
          <circle cx="44" cy="44" r={RING_R} stroke={trackColor} strokeWidth="5" fill="none" />
          <motion.circle
            cx="44"
            cy="44"
            r={RING_R}
            stroke={ringColor}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={RING_C}
            initial={{ strokeDashoffset: RING_C }}
            animate={rowActive ? { strokeDashoffset: offset } : { strokeDashoffset: RING_C }}
            transition={{ duration: 1.1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          <span
            className="font-bold tabular-nums leading-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: count >= 1000 ? '1.05rem' : '1.25rem',
              letterSpacing: '-0.03em',
              color: isTop ? 'var(--signature)' : 'var(--foreground)',
            }}
          >
            {count >= 1000
              ? `${(count / 1000).toFixed(count >= 1000 ? 1 : 0)}k`
              : count.toLocaleString()}
          </span>
        </div>
      </div>

      <span
        className="text-center text-[10px] font-medium leading-snug"
        style={{
          color: isTop
            ? 'color-mix(in srgb, var(--foreground) 90%, transparent)'
            : 'var(--muted-foreground)',
          maxWidth: '9ch',
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function NetworkBand({ activeRole }: NetworkBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const side = activeRole === 'vendor' ? 'vendor' : 'buyer';
  const stats = network.stats[side];
  const maxVal = Math.max(...stats.map((s) => parseInt(s.value)));
  const total = stats.reduce((s, x) => s + parseInt(x.value), 0);
  const topStat = stats.find((s) => parseInt(s.value) === maxVal)!;

  const totalCount = useCountUp(total, inView, 0);

  return (
    <div ref={ref} className="section relative overflow-hidden">
      <DividerArchDown />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, color-mix(in srgb, var(--primary) 18%, transparent) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, var(--foreground) 90%, transparent) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container relative z-10 flex flex-col gap-10 pt-8">
        <motion.div
          {...fadeUp(0, inView)}
          className="flex flex-col gap-4 lg:items-center lg:text-center"
        >
          <Badge variant="accent" size="md" dot>
            {network.sectionLabel}
          </Badge>
          <h2
            className="heading-subsection font-heading"
            style={{ color: 'var(--foreground)', maxWidth: '30ch' }}
          >
            {network.headline}
          </h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            {network.description}
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1, inView)}>
          <div
            className="overflow-hidden rounded-[var(--radius-card)]"
            style={{
              background:
                'linear-gradient(158deg, color-mix(in srgb, var(--foreground) 7%, transparent) 0%, color-mix(in srgb, var(--foreground) 3%, transparent) 100%)',
              border: '1px solid var(--border)',
              boxShadow: '0 1px 0 color-mix(in srgb, var(--foreground) 8%, transparent) inset, var(--shadow-xl)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr]">
              {/* ── LEFT: summary panel ── */}
              <div
                className="flex flex-col gap-6 p-6 sm:p-7 lg:border-r"
                style={{ borderColor: 'var(--border)' }}
              >
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--signature)', fontFamily: 'var(--font-mono)' }}
                >
                  {side === 'buyer' ? 'Global Demand' : 'Kashmir Supply'}
                </p>

                <div>
                  <span
                    className="block font-bold tabular-nums leading-none"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2.4rem,5vw,3.2rem)',
                      color: 'var(--foreground)',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {totalCount.toLocaleString()}
                  </span>
                  <span className="mt-1 block text-xs" style={{ color: 'var(--muted-foreground)' }}>
                    total participants
                  </span>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px rounded-full"
                  style={{
                    background: 'color-mix(in srgb, var(--foreground) 45%, transparent)',
                    transformOrigin: 'left center',
                    width: '2.5rem',
                  }}
                />

                <div className="flex flex-col gap-3">
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: 'color-mix(in srgb, var(--foreground) 30%, transparent)' }}
                    >
                      Largest segment
                    </p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: 'var(--signature)' }}>
                      {topStat.label}
                    </p>
                    <p
                      className="text-xs tabular-nums"
                      style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
                    >
                      {parseInt(topStat.value).toLocaleString()} participants
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: 'color-mix(in srgb, var(--foreground) 30%, transparent)' }}
                    >
                      Categories
                    </p>
                    <p className="mt-0.5 text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                      {stats.length} segments
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: 'color-mix(in srgb, var(--foreground) 30%, transparent)' }}
                    >
                      Avg per segment
                    </p>
                    <p
                      className="mt-0.5 text-sm font-semibold tabular-nums"
                      style={{ color: 'var(--foreground)', fontFamily: 'var(--font-mono)' }}
                    >
                      {Math.round(total / stats.length).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: all stat cards in 5×2 grid ── */}
              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {stats.map((stat, i) => {
                    const val = parseInt(stat.value);
                    const isTop = val === maxVal;
                    return (
                      <RingStatCard
                        key={stat.label}
                        label={stat.label}
                        value={val}
                        maxVal={maxVal}
                        isTop={isTop}
                        rowActive={inView}
                        index={i}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <DividerWaveUp />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9b — WHY PARTNERSHIP
═══════════════════════════════════════════════════════════════ */

function WhyPartnership() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });
  const items = whyPartnership.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [inView, paused, items.length]);

  const item = items[active]!;

  const VISIBLE = 5;
  const half = Math.floor(VISIBLE / 2);
  const window = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (active - half + i + items.length) % items.length;
    return { idx, offset: i - half };
  });

  return (
    <div
      ref={ref}
      className="section section-elevated relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container relative z-10 flex flex-col gap-10">
        {/* Header */}
        <motion.div
          {...fadeUp(0, inView)}
          className="flex flex-col gap-4 lg:items-center lg:text-center"
        >
          <Badge variant="primary" size="md" dot>
            {whyPartnership.sectionLabel}
          </Badge>
          <h2
            className="heading-subsection font-heading"
            style={{ color: 'var(--foreground)', maxWidth: '30ch' }}
          >
            {whyPartnership.headline}
          </h2>
          <p className="text-body" style={{ maxWidth: '65ch' }}>
            {whyPartnership.description}
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1, inView)}
          className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:gap-8"
        >
          {/* ── LEFT: animated rolling list ── */}
          <div className="xl:w-70 w-full shrink-0 lg:w-60">
            <p
              className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', opacity: 0.65 }}
            >
              {active + 1} of {items.length} barriers
            </p>

            <div className="relative">
              {/* Vertical wire */}
              <div
                className="absolute left-4 top-0 h-full w-px"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--primary) 18%, transparent) 20%, color-mix(in srgb, var(--primary) 18%, transparent) 80%, transparent)',
                }}
                aria-hidden="true"
              />

              {/* Focus masks */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8"
                style={{
                  background: 'linear-gradient(to bottom, var(--background-elevated), transparent)',
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8"
                style={{
                  background: 'linear-gradient(to top, var(--background-elevated), transparent)',
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1 py-2">
                {window.map(({ idx, offset }) => {
                  const it = items[idx]!;
                  const isCenter = offset === 0;
                  const absOff = Math.abs(offset);
                  const opacity = absOff === 0 ? 1 : absOff === 1 ? 0.55 : 0.22;
                  const scale = absOff === 0 ? 1 : absOff === 1 ? 0.97 : 0.94;

                  return (
                    <motion.button
                      key={`${idx}-${offset}`}
                      type="button"
                      onClick={() => setActive(idx)}
                      className="relative flex items-center gap-3 rounded-xl px-1 py-2.5 text-left"
                      animate={{ opacity, scale }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ opacity: Math.max(opacity, 0.75) }}
                      style={{
                        background: isCenter
                          ? 'color-mix(in srgb, var(--primary) 6%, transparent)'
                          : 'transparent',
                      }}
                    >
                      {/* Node */}
                      <div className="relative z-10 shrink-0">
                        {isCenter && (
                          <motion.div
                            animate={{ scale: [1, 1.7, 1], opacity: [0.35, 0, 0.35] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-full"
                            style={{ background: 'var(--primary)' }}
                          />
                        )}
                        <div
                          className="relative flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold"
                          style={{
                            background: isCenter
                              ? 'var(--primary)'
                              : idx < active
                                ? 'color-mix(in srgb, var(--primary) 12%, transparent)'
                                : 'color-mix(in srgb, var(--primary) 6%, transparent)',
                            border: isCenter
                              ? '2px solid color-mix(in srgb, var(--primary) 45%, transparent)'
                              : '1px solid color-mix(in srgb, var(--primary) 15%, transparent)',
                            color: isCenter
                              ? 'var(--primary-foreground)'
                              : 'color-mix(in srgb, var(--primary) 50%, transparent)',
                            boxShadow: isCenter
                              ? '0 0 12px color-mix(in srgb, var(--primary) 25%, transparent)'
                              : 'none',
                            fontFamily: 'var(--font-mono)',
                            transition: 'all 0.3s',
                          }}
                        >
                          {idx < active ? (
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                              <path
                                d="M1.5 4.5l2 2 4-4"
                                stroke="color-mix(in srgb, var(--primary) 50%, transparent)"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            idx + 1
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <span
                        className="text-[12px] font-medium leading-tight"
                        style={{
                          color: isCenter ? 'var(--foreground)' : 'var(--muted-foreground)',
                          fontWeight: isCenter ? 600 : 400,
                          transition: 'all 0.3s',
                        }}
                      >
                        {it.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Dot nav */}
            <div className="mt-4 flex items-center gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '16px' : '5px',
                    height: '5px',
                    background:
                      i === active
                        ? 'var(--primary)'
                        : i < active
                          ? 'color-mix(in srgb, var(--primary) 30%, transparent)'
                          : 'color-mix(in srgb, var(--primary) 12%, transparent)',
                  }}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: two cards stacked vertically ── */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {/* Counter + rule */}
            <div className="flex items-center gap-3">
              <span
                className="text-[10px] font-bold tabular-nums"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', opacity: 0.65 }}
              >
                {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
              <motion.div
                className="h-px flex-1 rounded-full"
                style={{
                  background: 'linear-gradient(to right, var(--primary), transparent)',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                key={active}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                {/* Challenge card */}
                <div
                  className="relative overflow-hidden rounded-[var(--radius-card)] p-5"
                  style={{
                    background:
                      'linear-gradient(135deg, color-mix(in srgb, var(--destructive) 7%, transparent) 0%, color-mix(in srgb, var(--destructive) 2%, transparent) 100%)',
                    border: '1px solid color-mix(in srgb, var(--destructive) 18%, transparent)',
                    boxShadow:
                      '0 1px 0 color-mix(in srgb, var(--foreground) 7%, transparent) inset, 0 4px 16px color-mix(in srgb, var(--destructive) 6%, transparent)',
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, color-mix(in srgb, var(--destructive) 10%, transparent) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg"
                          style={{
                            background: 'color-mix(in srgb, var(--destructive) 10%, transparent)',
                            border:
                              '1px solid color-mix(in srgb, var(--destructive) 18%, transparent)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M6 2.5v4M6 8.5h.01"
                              stroke="var(--destructive)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: 'var(--destructive)', opacity: 0.85 }}
                        >
                          The Challenge
                        </span>
                      </div>
                      <span
                        className="shrink-0 text-[9px] font-semibold tabular-nums"
                        style={{
                          color: 'color-mix(in srgb, var(--destructive) 40%, transparent)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {String(active + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className="text-[var(--text-xl)] font-heading font-semibold leading-snug"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[var(--text-sm)] leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.challenge}
                    </p>
                  </div>
                </div>

                {/* Bridge connector */}
                <div className="flex items-center gap-3 px-1">
                  <motion.div
                    className="h-px flex-1 rounded-full"
                    style={{
                      background:
                        'linear-gradient(to right, color-mix(in srgb, var(--destructive) 30%, transparent), var(--primary), color-mix(in srgb, var(--primary) 30%, transparent))',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: 'var(--primary)',
                      boxShadow: '0 0 8px color-mix(in srgb, var(--primary) 30%, transparent)',
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1 4h6M5 2l2 2-2 2"
                        stroke="var(--primary-foreground)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="h-px flex-1 rounded-full"
                    style={{
                      background:
                        'linear-gradient(to right, color-mix(in srgb, var(--primary) 30%, transparent), transparent)',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Solution card */}
                <div
                  className="relative overflow-hidden rounded-[var(--radius-card)] p-5"
                  style={{
                    background:
                      'linear-gradient(135deg, color-mix(in srgb, var(--primary) 9%, transparent) 0%, color-mix(in srgb, var(--primary) 3%, transparent) 100%)',
                    border: '1px solid color-mix(in srgb, var(--primary) 16%, transparent)',
                    boxShadow:
                      '0 1px 0 color-mix(in srgb, var(--foreground) 7%, transparent) inset, 0 4px 16px color-mix(in srgb, var(--primary) 5%, transparent)',
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg"
                          style={{
                            background: 'color-mix(in srgb, var(--primary) 9%, transparent)',
                            border: '1px solid color-mix(in srgb, var(--primary) 16%, transparent)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 6l3 3 5-5"
                              stroke="var(--primary)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: 'var(--primary)', opacity: 0.8 }}
                        >
                          The Solution
                        </span>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: 'var(--primary)' }}
                      />
                    </div>

                    <h3
                      className="text-[var(--text-xl)] font-heading font-semibold leading-snug"
                      style={{ color: 'var(--foreground)' }}
                    >
                      Structured Resolution
                    </h3>

                    <p
                      className="text-[var(--text-sm)] leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Progress strip */}
                <div className="flex items-center gap-2 pt-1">
                  <div
                    className="relative h-0.5 flex-1 overflow-hidden rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--primary) 10%, transparent)' }}
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ background: 'var(--primary)' }}
                      animate={{ width: `${((active + 1) / items.length) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span
                    className="shrink-0 text-[9px] tabular-nums"
                    style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }}
                  >
                    {active + 1} / {items.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9c — FINAL CTA
═══════════════════════════════════════════════════════════════ */

interface FinalCtaProps {
  activeRole: PlatformRole;
}

function FinalCta({ activeRole }: FinalCtaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });

  const roleKey = activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : 'default';
  const ctaList = finalCta.ctas[roleKey];

  return (
    <div ref={ref} className="relative overflow-hidden">
      <DividerSharpCut />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 70%, color-mix(in srgb, var(--primary) 40%, transparent) 0%, transparent 72%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 38% 35% at 80% 15%, color-mix(in srgb, var(--foreground) 4%, transparent) 0%, transparent 65%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, var(--foreground) 85%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div
        className="container-narrow relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          paddingTop: 'clamp(7rem, 12vh, 9rem)',
          paddingBottom: 'clamp(6rem, 10vh, 8rem)',
          gap: '1.75rem',
        }}
      >
        <motion.div {...fadeUp(0, inView)}>
          <Badge variant="accent" size="md" dot>
            {finalCta.sectionLabel}
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] as number[] }}
          className="heading-hero font-display"
          style={{
            color: 'var(--foreground)',
            letterSpacing: '-0.03em',
            lineHeight: '0.9',
            textShadow: '0 2px 40px color-mix(in srgb, var(--primary) 50%, transparent)',
          }}
        >
          {finalCta.headline}
        </motion.h2>

        <motion.p
          {...fadeUp(0.16, inView)}
          className="text-body"
          style={{ maxWidth: '42ch' }}
        >
          {finalCta.subheading}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          style={{
            height: '1px',
            width: '3rem',
            borderRadius: 'var(--radius-badge)',
            background: 'color-mix(in srgb, var(--foreground) 55%, transparent)',
            transformOrigin: 'center',
            boxShadow: '0 0 10px 0 color-mix(in srgb, var(--foreground) 20%, transparent)',
          }}
        />

        <motion.div
          {...fadeUp(0.32, inView)}
          className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link href={ctaList[0].href} className="w-full sm:w-auto">
            <CTAButton variant="depth" size="lg" fullWidth>
              {ctaList[0].label}
            </CTAButton>
          </Link>

          <Link href={ctaList[1].href} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" fullWidth>
              {ctaList[1].label}
            </Button>
          </Link>
        </motion.div>

        <motion.div {...fadeUp(0.4, inView)}>
          <Link href={ctaList[2].href}>
            <Button variant="ghost" size="sm">
              {ctaList[2].label}
            </Button>
          </Link>
        </motion.div>

        <motion.p
          {...fadeIn(0.52, inView)}
          style={{
            color: 'var(--muted-foreground)',
            fontSize: 'var(--text-xs)',
            maxWidth: '44ch',
            letterSpacing: '0.02em',
            lineHeight: 1.65,
            opacity: 0.7,
          }}
        >
          {finalCta.supportLine}
        </motion.p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════ */

interface Props {
  activeRole: PlatformRole;
}

export default function ClosingSection({ activeRole }: Props) {
  return (
    <>
      <NetworkBand activeRole={activeRole} />
      <WhyPartnership />
      <FinalCta activeRole={activeRole} />
    </>
  );
}
