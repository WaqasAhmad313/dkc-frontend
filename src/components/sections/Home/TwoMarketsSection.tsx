'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import { Card, CardHeader, CardBody, CardFooter, CardDivider } from '@/components/shared/Card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOMEPAGE } from '@/content/homepage.content';
import { PUBLIC_ROUTES } from '@dkc/constants';
import { cn } from '@/lib/utils';

const c = HOMEPAGE.twoMarkets;

type ActiveSide = 'demand' | 'core' | 'supply';

function fadeUp(delay: number, inView: boolean) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function resolveLabel(active: ActiveSide): string {
  if (active === 'demand')
    return 'Qualified global demand entering structured evaluation and pathway routing.';
  if (active === 'supply')
    return 'Origin-rich Kashmir supply entering protected and credible market access.';
  return 'The partnership layer aligns both sides before any serious trade begins.';
}

const DEMAND_FLOW = ['Premium Retailers', 'Institutional Buyers', 'Private Label Brands'];
const SUPPLY_FLOW = ['Master Artisans', 'Export Businesses', 'GI Certified Vendors'];

/* ── SidePanel ───────────────────────────────────────────────── */

interface SidePanelProps {
  side: 'demand' | 'supply';
  active: ActiveSide;
  onActivate: (v: ActiveSide) => void;
  inView: boolean;
  delay: number;
}

function SidePanel({ side, active, onActivate, inView, delay }: SidePanelProps) {
  const isDemand = side === 'demand';
  const column = isDemand ? c.columns.demand : c.columns.supply;
  const items = isDemand ? c.columns.demand.participants : c.columns.supply.participants;
  const isActive = active === side;

  return (
    <motion.div {...fadeUp(delay, inView)} className="h-full">
      <Card
        variant="interactive"
        padding="none"
        className={cn(
          'duration-320 relative h-full transition-all',
          isActive ? 'bg-signature-soft) border-signature)' : 'border-border)',
        )}
        onMouseEnter={() => onActivate(side)}
        onFocus={() => onActivate(side)}
        onClick={() => onActivate(side)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Top accent stripe */}
        <div
          className={cn(
            'duration-320 bg-signature) absolute inset-x-0 top-0 h-0.5 rounded-t-[var(--radius-card)] transition-opacity',
            isActive ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden="true"
        />

        <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
          <CardHeader>
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  'eyebrow duration-320 transition-colors',
                  isActive ? 'text-(--signature)' : 'text-(--muted-foreground)',
                )}
              >
                {isDemand ? 'Demand Side' : 'Supply Side'}
              </span>
              <h3 className="heading-card font-heading text-(--foreground)">{column.title}</h3>
            </div>
          </CardHeader>

          <CardDivider />

          <CardBody className="flex flex-1 flex-col gap-4">
            <p className="text-(--muted-foreground) max-w-[30ch] text-sm">{column.body}</p>

            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="bg-(--signature) h-1.5 w-1.5 shrink-0 rounded-full opacity-60"
                    aria-hidden="true"
                  />
                  <span className="text-(--muted-foreground) text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardBody>

          <CardFooter>
            <div
              className={cn(
                'duration-320 flex items-center gap-1.5 text-xs font-medium transition-colors',
                isActive ? 'text-(--signature)' : 'text-(--muted-foreground)',
              )}
            >
              {isActive ? 'Relationship flow active' : 'Tap to activate flow'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2.5 7h9M8 4l3.5 3L8 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}

/* ── FlowList ────────────────────────────────────────────────── */

interface FlowListProps {
  side: 'demand' | 'supply';
  glow: boolean;
  align: 'left' | 'right';
}

function FlowList({ side, glow, align }: FlowListProps) {
  const items = side === 'demand' ? DEMAND_FLOW : SUPPLY_FLOW;

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          'font-data text-[10px] font-semibold uppercase tracking-widest',
          align === 'right' ? 'text-right' : '',
          side === 'demand' ? 'text-(--signature)' : 'text-(--signature)',
        )}
      >
        {side === 'demand' ? 'Global demand' : 'Kashmir supply'}
      </div>
      {items.map((item, i) => (
        <motion.div
          key={item}
          animate={{
            x: glow ? (align === 'right' ? [0, -6, 0] : [0, 6, 0]) : 0,
            opacity: glow ? [0.65, 1, 0.65] : 0.7,
          }}
          transition={{ repeat: Infinity, duration: 2.6 + i * 0.35, ease: 'easeInOut' }}
          className={cn(
            'border-(--border) bg-(--background-elevated) flex items-center gap-2 rounded-lg border px-2.5 py-2',
            align === 'right' ? 'justify-end' : '',
          )}
        >
          {align === 'right' && (
            <span className="text-(--foreground) text-xs font-medium">{item}</span>
          )}
          <div className="bg-(--signature) h-1.5 w-1.5 shrink-0 rounded-full" />
          {align === 'left' && (
            <span className="text-(--foreground) text-xs font-medium">{item}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ── CoreViz ─────────────────────────────────────────────────── */

interface CoreVizProps {
  leftGlow: boolean;
  rightGlow: boolean;
}

function CoreViz({ leftGlow, rightGlow }: CoreVizProps) {
  return (
    <div className="relative flex h-36 w-36 shrink-0 items-center justify-center sm:h-44 sm:w-44 lg:h-52 lg:w-52">
      {([1, 2, 3] as const).map((ring) => (
        <motion.div
          key={ring}
          animate={{ scale: [1, 1.09 + ring * 0.04, 1], opacity: [0.22, 0.06, 0.22] }}
          transition={{ repeat: Infinity, duration: 3 + ring * 0.5, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            width: 60 + ring * 24,
            height: 60 + ring * 24,
            border: `1px solid ${ring === 1 ? 'var(--signature)' : 'var(--border)'}`,
            opacity: ring === 1 ? 0.28 : 0.15,
          }}
        />
      ))}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 224 224"
        fill="none"
        aria-hidden="true"
      >
        {/* DEMAND → CENTER (left side, 3 lines) */}
        {[
          { d: 'M4 70 C40 70, 70 90, 112 112', delay: 0 },
          { d: 'M4 112 C40 112, 70 112, 112 112', delay: 0.4 },
          { d: 'M4 154 C40 154, 70 134, 112 112', delay: 0.8 },
        ].map(({ d, delay }, i) => (
          <motion.path
            key={`demand-${i}`}
            d={d}
            stroke="var(--foreground)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="5 8"
            animate={{
              pathLength: leftGlow ? [0.1, 1, 0.1] : [0.05, 0.5, 0.05],
              opacity: leftGlow ? [0.15, 0.7, 0.15] : 0.1,
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.4,
              delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* SUPPLY → CENTER (right side, 3 lines) */}
        {[
          { d: 'M220 70 C184 70, 154 90, 112 112', delay: 0.2 },
          { d: 'M220 112 C184 112, 154 112, 112 112', delay: 0.6 },
          { d: 'M220 154 C184 154, 154 134, 112 112', delay: 1.0 },
        ].map(({ d, delay }, i) => (
          <motion.path
            key={`supply-${i}`}
            d={d}
            stroke="var(--signature)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="5 8"
            animate={{
              pathLength: rightGlow ? [0.1, 1, 0.1] : [0.05, 0.5, 0.05],
              opacity: rightGlow ? [0.15, 0.75, 0.15] : 0.12,
            }}
            transition={{
              repeat: Infinity,
              duration: 3.2 + i * 0.4,
              delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="bg-(--background-elevated) border-(--border) shadow-(--shadow-lg) relative z-10 max-w-[120px] rounded-xl border px-3 py-3 text-center backdrop-blur-md"
      >
        <div className="eyebrow text-(--signature)">Core engine</div>
        <div className="text-(--foreground) mt-1 text-sm font-semibold leading-tight">
          Fit + Trust + Routing
        </div>
        <div className="text-(--muted-foreground) mt-1 text-[10px] leading-snug">
          Structured progression.
        </div>
      </motion.div>
    </div>
  );
}

/* ── CenterBridge ────────────────────────────────────────────── */

interface CenterBridgeProps {
  active: ActiveSide;
  leftGlow: boolean;
  rightGlow: boolean;
}

function CenterBridge({ active, leftGlow, rightGlow }: CenterBridgeProps) {
  const label = resolveLabel(active);

  return (
    <Card
      variant="default"
      padding="none"
      className="border-(--border) relative h-full overflow-hidden"
    >
      <div className="relative flex h-full flex-col gap-4 p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="eyebrow text-(--signature)">Interactive bridge system</span>
            <h3 className="heading-card font-heading text-(--foreground) mt-1">
              {c.columns.core.title}
            </h3>
          </div>
          <Chip variant="default" size="sm">
            Live map
          </Chip>
        </div>

        <CardDivider />

        <div className="flex flex-1 items-center justify-between gap-3">
          <div className="hidden flex-1 sm:block">
            <FlowList side="demand" glow={leftGlow} align="left" />
          </div>

          <div className="mx-auto flex shrink-0 items-center justify-center">
            <CoreViz leftGlow={leftGlow} rightGlow={rightGlow} />
          </div>

          <div className="hidden flex-1 sm:block">
            <FlowList side="supply" glow={rightGlow} align="right" />
          </div>
        </div>

        <div className="flex gap-2 sm:hidden">
          <div className="bg-(--background-elevated) border-(--border) flex flex-1 items-center gap-1.5 rounded-lg border px-2.5 py-2">
            <div className="bg-(--signature) h-1.5 w-1.5 shrink-0 rounded-full" />
            <span className="text-(--muted-foreground) text-[11px] font-medium">Global demand</span>
          </div>
          <div className="bg-(--signature-soft) border-(--signature) flex flex-1 items-center justify-end gap-1.5 rounded-lg border px-2.5 py-2">
            <span className="text-(--muted-foreground) text-[11px] font-medium">
              Kashmir supply
            </span>
            <div className="bg-(--signature) h-1.5 w-1.5 shrink-0 rounded-full" />
          </div>
        </div>

        <div className="bg-(--background-elevated) border-(--border) rounded-xl border p-3.5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"
                  stroke="var(--signature)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-(--muted-foreground) mb-1.5">Active relationship state</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="text-muted-foreground) text-sm leading-relaxed"
                >
                  {label}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {c.columns.core.functions.map((fn) => (
            <Chip key={fn} variant="default" size="sm" className="text-signature">
              {fn}
            </Chip>
          ))}
        </div>
      </div>
    </Card>
  );
}

/* ── TwoMarketsSection ───────────────────────────────────────── */

export default function TwoMarketsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });
  const [active, setActive] = useState<ActiveSide>('core');

  const leftGlow = active === 'demand' || active === 'core';
  const rightGlow = active === 'supply' || active === 'core';

  return (
    <section
      ref={ref}
      aria-labelledby="two-markets-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col gap-10 sm:gap-12 lg:gap-14">
        <SectionHeader
          layout="centered"
          size="md"
          eyebrow={c.sectionLabel}
          headline={c.headline}
          description={c.intro}
          className="mb-12"
        />

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:gap-5 xl:gap-6">
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp(0.18, inView)} className="h-full">
              <CenterBridge active={active} leftGlow={leftGlow} rightGlow={rightGlow} />
            </motion.div>
          </div>

          <div className="lg:order-0 order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:contents">
            <div className="lg:order-1">
              <SidePanel
                side="demand"
                active={active}
                onActivate={setActive}
                inView={inView}
                delay={0.1}
              />
            </div>
            <div className="lg:order-3">
              <SidePanel
                side="supply"
                active={active}
                onActivate={setActive}
                inView={inView}
                delay={0.26}
              />
            </div>
          </div>
        </div>

        <motion.p
          {...fadeUp(0.34, inView)}
          className="font-heading text-muted-foreground) mx-auto max-w-[52ch] text-center italic"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', letterSpacing: '-0.01em' }}
        >
          {c.closingLine}
        </motion.p>

        <motion.div {...fadeUp(0.4, inView)} className="flex justify-center">
          <Link href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}>
            <Button variant="outline" size="md">
              Explore Partnership Pathways
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
