'use client';

import { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/shared/Badge';
import { Button, CTAButton } from '@/components/shared/Button';
import { Card, CardBody, CardHeader, CardFooter, CardDivider } from '@/components/shared/Card';
import { Chip } from '@/components/shared/Chip';
import { Progress } from '@/components/shared/Progress';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight, Check } from '@/lib/icons';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';
import { PUBLIC_ROUTES } from '@dkc/constants';

const c = HOMEPAGE.entryJourney;

/* ── Types ───────────────────────────────────────────────────── */

interface EntryJourneySectionProps {
  activeRole: PlatformRole;
  onRoleSelect?: (role: 'buyer' | 'vendor') => void;
}

interface StepMeta {
  tag: string;
  progressLabel: string;
  whyItMatters: string;
}

type StepNumber = 1 | 2 | 3 | 4 | 5;

interface EnrichedStep {
  number: number;
  title: string;
  body: string;
  roleVariant: Record<'buyer' | 'vendor', string> | null;
  bodyText: string;
  meta: StepMeta;
}

/* ── Step metadata ───────────────────────────────────────────── */

const STEP_META: Record<StepNumber, StepMeta> = {
  1: {
    tag: 'Entry State',
    progressLabel: 'Role declaration and intent framing',
    whyItMatters:
      'Role declaration ensures the platform surfaces only pathways, requirements, and environments relevant to your position in the value chain.',
  },
  2: {
    tag: 'Pathway Logic',
    progressLabel: 'Pathway exploration and fit visibility',
    whyItMatters:
      'Pathway selection before onboarding prevents misaligned commitments. Seeing fit before you apply reduces drop-off and unqualified entry.',
  },
  3: {
    tag: 'Qualification',
    progressLabel: 'Qualification and application in motion',
    whyItMatters:
      'A qualification layer creates a trust signal for both sides. It ensures the platform environment is populated only by participants who meet baseline readiness.',
  },
  4: {
    tag: 'Trust Layer',
    progressLabel: 'Verified onboarding and trust progression',
    whyItMatters:
      'Governed onboarding stages reduce avoidable friction in the partnership itself. Participants who move through structured trust stages arrive better prepared.',
  },
  5: {
    tag: 'Placement',
    progressLabel: 'Operational placement environment reached',
    whyItMatters:
      'Placement into a correctly matched environment means the first operational moment is already shaped around your profile and pathway.',
  },
};

const FALLBACK_META: StepMeta = {
  tag: 'Journey',
  progressLabel: 'Structured entry in progress',
  whyItMatters: 'Each stage reduces uncertainty before partnership begins.',
};

function getStepMeta(n: number): StepMeta {
  return STEP_META[n as StepNumber] ?? FALLBACK_META;
}

function resolveBodyText(step: (typeof c.steps)[number], role: PlatformRole): string {
  if (step.roleVariant !== null && (role === 'buyer' || role === 'vendor')) {
    return step.roleVariant[role];
  }
  return step.body;
}

function buildSteps(role: PlatformRole): EnrichedStep[] {
  return c.steps.map((step) => ({
    ...step,
    bodyText: resolveBodyText(step, role),
    meta: getStepMeta(step.number),
  }));
}

const cv = {
  enter: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as number[] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

/* ═══════════════════════════════════════════════════════════════
   ORBITAL DIAGRAM
═══════════════════════════════════════════════════════════════ */

interface OrbitalProps {
  steps: EnrichedStep[];
  activeIndex: number;
  onSelect: (i: number) => void;
}

function OrbitalDiagram({ steps, activeIndex, onSelect }: OrbitalProps) {
  const activeStep = steps[activeIndex];
  if (!activeStep) return null;

  return (
    <div className="relative flex h-56 w-full items-center justify-center sm:h-64">
      {([1, 2, 3] as const).map((ring) => (
        <motion.div
          key={ring}
          animate={{ scale: [1, 1.08 + ring * 0.04, 1], opacity: [0.15, 0.03, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.8 + ring, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            width: 80 + ring * 46,
            height: 80 + ring * 46,
            border: '1px solid var(--border)',
          }}
        />
      ))}

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="relative z-10 rounded-xl px-5 py-4 text-center"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          minWidth: '110px',
        }}
      >
        <div
          className="text-[9px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: 'color-mix(in srgb, var(--foreground) 35%, transparent)' }}
        >
          Active
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.number}
            variants={cv}
            initial="enter"
            animate="visible"
            exit="exit"
          >
            <div
              className="mt-1 text-3xl font-bold leading-none"
              style={{ color: 'var(--signature)', fontFamily: 'var(--font-serif)' }}
            >
              {activeStep.number}
            </div>
            <div
              className="mt-1 text-[10px] font-semibold"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {activeStep.meta.tag}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {steps.map((step, index) => {
        const angle = (index / steps.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 98;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isActive = index === activeIndex;
        const isDone = index < activeIndex;

        return (
          <motion.div
            key={step.number}
            className="absolute"
            initial={false}
            animate={{ x, y }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {isActive &&
              ([1, 2] as const).map((pulse) => (
                <motion.span
                  key={pulse}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  animate={{ scale: [1, 2.4 + pulse * 0.3], opacity: [0.55, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: pulse * 0.38,
                    ease: 'easeOut',
                  }}
                  style={{ width: '36px', height: '36px', background: 'var(--signature)' }}
                />
              ))}
            <motion.button
              type="button"
              onClick={() => onSelect(index)}
              animate={{ scale: isActive ? 1.18 : 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
              style={{
                background: isActive
                  ? 'var(--signature)'
                  : isDone
                    ? 'var(--foreground)'
                    : 'var(--primary)',
                border: isActive
                  ? '2px solid color-mix(in srgb, var(--foreground) 60%, transparent)'
                  : '1px solid var(--border)',
                color: isActive || isDone ? 'var(--background)' : 'var(--primary-foreground)',
                boxShadow: isActive
                  ? 'var(--shadow-md)'
                  : isDone
                    ? 'var(--shadow-sm)'
                    : 'var(--shadow-xs)',
                zIndex: 10,
              }}
              aria-label={`Go to step ${step.number}`}
            >
              {isDone ? <Check size={12} weight="bold" /> : step.number}
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATION CURSOR
═══════════════════════════════════════════════════════════════ */

function Cursor({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      animate={{ x, y }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute z-20"
      style={{ top: 0, left: 0 }}
    >
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path
          d="M3 2l13 9.5L10 13l-2 8L3 2z"
          fill="var(--foreground)"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE COMPONENTS
═══════════════════════════════════════════════════════════════ */

function Step1Scene({
  activeRole,
  onRoleSelect,
  onAdvance,
}: {
  activeRole: PlatformRole;
  onRoleSelect?: ((role: 'buyer' | 'vendor') => void) | undefined;
  onAdvance: () => void;
}) {
  const [highlighted, setHighlighted] = useState<'buyer' | 'vendor'>('buyer');

  const POSITIONS = {
    buyer: { x: 8, y: 52 },
    vendor: { x: 8, y: 112 },
  };

  const [cursorPos, setCursorPos] = useState(POSITIONS.buyer);

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((h) => {
        const next = h === 'buyer' ? 'vendor' : 'buyer';
        setCursorPos(POSITIONS[next]);
        return next;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleRoleClick(role: 'buyer' | 'vendor') {
    onRoleSelect?.(role);
    onAdvance();
  }

  const roles = [
    {
      key: 'buyer' as const,
      title: 'Buyer',
      desc: 'Sourcing · Retail · Institutional',
      body: 'I am looking to source Kashmir-origin craft through structured pathways.',
    },
    {
      key: 'vendor' as const,
      title: 'Vendor',
      desc: 'Artisan · Cooperative · Exporter',
      body: 'I am looking to reach global buyers through verified partnership routes.',
    },
  ];

  const accentColor = 'var(--primary)';

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative overflow-hidden rounded-[var(--radius-card-sm)] p-4"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="mb-2 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'var(--primary)',
              animation: 'pulseSlow 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Platform demo
          </span>
        </div>

        <Cursor x={cursorPos.x} y={cursorPos.y} />

        <div className="pointer-events-none flex select-none flex-col gap-2">
          {roles.map((role) => {
            const isHL = highlighted === role.key;
            return (
              <motion.div
                key={role.key}
                animate={{
                  background: isHL
                    ? 'var(--card)'
                    : 'color-mix(in srgb, var(--card) 55%, transparent)',
                  borderColor: isHL ? 'var(--primary)' : 'var(--border)',
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl px-3.5 py-3"
                style={{
                  border: '1.5px solid var(--border)',
                  boxShadow: isHL ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: isHL ? accentColor : 'var(--muted)',
                    color: isHL ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                    transition: 'all 0.3s',
                  }}
                >
                  {role.title[0]}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="text-sm font-semibold"
                    style={{
                      color: isHL ? 'var(--foreground)' : 'var(--muted-foreground)',
                    }}
                  >
                    {role.title}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
                    {role.desc}
                  </div>
                </div>
                <AnimatePresence>
                  {isHL && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Chip variant="default" size="sm">
                        Selected
                      </Chip>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-2.5 text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
          Choose your role to continue
        </p>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {roles.map((role) => {
            const isSelected = activeRole === role.key;
            return (
              <motion.button
                key={role.key}
                type="button"
                onClick={() => handleRoleClick(role.key)}
                whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col gap-2 rounded-xl p-4 text-left"
                style={{
                  background: isSelected
                    ? 'color-mix(in srgb, var(--primary) 5%, transparent)'
                    : 'var(--card)',
                  border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s',
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-sm font-bold"
                    style={{ color: isSelected ? 'var(--primary)' : 'var(--foreground)' }}
                  >
                    {role.title}
                  </span>
                  {isSelected && (
                    <Check
                      size={14}
                      weight="bold"
                      style={{ color: 'var(--primary)', flexShrink: 0 }}
                    />
                  )}
                </div>
                <span
                  className="text-xs leading-snug"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {role.body}
                </span>
                <span className="text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
                  {role.desc}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Pathway Explorer ────────────────────────────────── */

const PATHWAYS = [
  { key: 'core-trade', label: 'Core Trade', desc: 'Direct structured commerce pathways', count: 4 },
  {
    key: 'brand-expansion',
    label: 'Brand Expansion',
    desc: 'Reach new markets and audiences',
    count: 4,
  },
  {
    key: 'collaborative',
    label: 'Collaborative',
    desc: 'Co-creation and shared systems',
    count: 4,
  },
  {
    key: 'institutional',
    label: 'Institutional',
    desc: 'Formal and governed structures',
    count: 4,
  },
];

function Step2Scene({ activeRole }: { activeRole: PlatformRole }) {
  const [highlighted, setHighlighted] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 8, y: 54 });

  useEffect(() => {
    const id = setInterval(() => {
      setHighlighted((h) => {
        const next = (h + 1) % PATHWAYS.length;
        setCursorPos({ x: 8, y: 54 + next * 64 });
        return next;
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative overflow-hidden rounded-[var(--radius-card-sm)] p-4"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="mb-2 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'var(--primary)',
              animation: 'pulseSlow 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Partnership systems
          </span>
        </div>

        <Cursor x={cursorPos.x} y={cursorPos.y} />

        <div className="pointer-events-none flex select-none flex-col gap-2">
          {PATHWAYS.map((pw, idx) => {
            const isHL = idx === highlighted;
            return (
              <motion.div
                key={pw.key}
                animate={{
                  background: isHL
                    ? 'var(--card)'
                    : 'color-mix(in srgb, var(--card) 55%, transparent)',
                  borderColor: isHL ? 'var(--primary)' : 'var(--border)',
                  y: isHL ? -1 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3 rounded-xl p-3"
                style={{
                  border: '1.5px solid var(--border)',
                  boxShadow: isHL ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    background: isHL
                      ? 'color-mix(in srgb, var(--primary) 12%, transparent)'
                      : 'color-mix(in srgb, var(--primary) 5%, transparent)',
                    border: '1px solid var(--border)',
                    boxShadow: isHL ? 'var(--shadow-xs)' : 'none',
                    color: 'var(--primary)',
                  }}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: isHL ? 'var(--primary)' : 'var(--border)' }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="text-sm font-semibold"
                    style={{
                      color: isHL ? 'var(--foreground)' : 'var(--muted-foreground)',
                    }}
                  >
                    {pw.label}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
                    {pw.desc}
                  </div>
                </div>
                <div
                  className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold"
                  style={{
                    background: isHL
                      ? 'color-mix(in srgb, var(--primary) 8%, transparent)'
                      : 'var(--muted)',
                    color: isHL ? 'var(--primary)' : 'var(--muted-foreground)',
                  }}
                >
                  {pw.count} paths
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div
        className="rounded-xl p-4"
        style={{
          background: 'color-mix(in srgb, var(--primary) 4%, transparent)',
          border: '1px solid color-mix(in srgb, var(--primary) 10%, transparent)',
        }}
      >
        <p className="mb-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
          {activeRole === 'vendor'
            ? 'Review the 4 partnership systems designed around vendor readiness, scale, and structured market access.'
            : 'Review the 4 partnership systems shaped around your sourcing intent and commercial readiness.'}
        </p>
        <Link href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            iconRight={<ArrowRight size={12} weight="bold" />}
          >
            Explore all partnership pathways
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ── Shared: Animated checklist ──────────────────────────────── */

interface Phase {
  label: string;
}

function AnimatedChecklist({ phases, onComplete }: { phases: Phase[]; onComplete?: () => void }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    setDone(new Set());
    setCurrent(null);
  }, [phases]);

  useEffect(() => {
    const next = done.size;
    if (next >= phases.length) {
      onComplete?.();
      return;
    }
    const t = setTimeout(
      () => {
        setCurrent(next);
        setTimeout(() => {
          setDone((d) => new Set([...d, next]));
          setCurrent(null);
        }, 500);
      },
      done.size === 0 ? 700 : 900,
    );
    return () => clearTimeout(t);
  }, [done, phases.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-2">
      {phases.map((phase, idx) => {
        const isDone = done.has(idx);
        const isCurrent = current === idx;

        return (
          <motion.div
            key={phase.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{
              background: isDone
                ? 'color-mix(in srgb, var(--primary) 5%, transparent)'
                : isCurrent
                  ? 'color-mix(in srgb, var(--primary) 3%, transparent)'
                  : 'var(--card)',
              border: `1px solid ${isDone ? 'color-mix(in srgb, var(--primary) 15%, transparent)' : isCurrent ? 'color-mix(in srgb, var(--primary) 12%, transparent)' : 'var(--border)'}`,
              boxShadow: isDone || isCurrent ? 'var(--shadow-xs)' : 'none',
              transition: 'all 0.35s',
            }}
          >
            <motion.div
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              animate={{
                background: isDone
                  ? 'var(--primary)'
                  : isCurrent
                    ? 'var(--accent)'
                    : 'var(--muted)',
                scale: isCurrent ? 1.1 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              {isDone ? (
                <Check size={11} weight="bold" color="var(--primary-foreground)" />
              ) : isCurrent ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
                  className="h-3 w-3 rounded-full border-2 border-t-transparent"
                  style={{ borderColor: 'var(--accent-foreground)' }}
                />
              ) : (
                <span
                  className="text-[9px] font-bold tabular-nums"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {idx + 1}
                </span>
              )}
            </motion.div>

            <span
              className="flex-1 text-sm font-medium"
              style={{
                color: isDone
                  ? 'var(--foreground)'
                  : isCurrent
                    ? 'var(--primary)'
                    : 'var(--muted-foreground)',
              }}
            >
              {phase.label}
            </span>

            <AnimatePresence>
              {isDone && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Chip variant="default" size="sm">
                    Done
                  </Chip>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Step 3: Qualify & Apply ─────────────────────────────────── */

const QUALIFY_PHASES: Phase[] = [
  { label: 'Registration Phase' },
  { label: 'Document Submission Phase' },
  { label: 'Eligibility Review Phase' },
  { label: 'Agreement and Certification Phase' },
  { label: 'Profile Setup Phase' },
];

function Step3Scene() {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-xl p-4"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'var(--primary)',
              animation: 'pulseSlow 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Application phases
          </span>
        </div>
        <AnimatedChecklist phases={QUALIFY_PHASES} />
      </div>

      <div
        className="rounded-xl p-4"
        style={{
          background: 'color-mix(in srgb, var(--primary) 4%, transparent)',
          border: '1px solid color-mix(in srgb, var(--primary) 10%, transparent)',
        }}
      >
        <p
          className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: 'var(--primary)', opacity: 0.7 }}
        >
          What happens next
        </p>
        <p className="mb-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Complete the qualification process to confirm fit and submit your entry application.
          Selecting a pathway before applying ensures relevance for both sides.
        </p>
        <Link href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            iconRight={<ArrowRight size={12} weight="bold" />}
          >
            Proceed with your pathway
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ── Step 4: Verified Onboarding ─────────────────────────────── */

const ONBOARDING_PHASES: Phase[] = [
  { label: 'Profile Setup Phase' },
  { label: 'Partnership-Specific Onboarding Phase' },
  { label: 'Training and Resource Checkup Phase' },
  { label: 'Portal Access Activation Phase' },
  { label: 'Partnership Launch and Support Phase' },
];

function Step4Scene() {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-xl p-4"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'var(--primary)',
              animation: 'pulseSlow 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Onboarding phases
          </span>
        </div>
        <AnimatedChecklist phases={ONBOARDING_PHASES} />
      </div>

      <div
        className="rounded-xl p-4"
        style={{
          background: 'color-mix(in srgb, var(--primary) 4%, transparent)',
          border: '1px solid color-mix(in srgb, var(--primary) 10%, transparent)',
        }}
      >
        <p
          className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest"
          style={{ color: 'var(--primary)', opacity: 0.7 }}
        >
          Structured progression
        </p>
        <p className="mb-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Each onboarding stage reduces friction before live partnership begins. Participants who
          complete this sequence arrive better prepared for operation.
        </p>
        <Link href={PUBLIC_ROUTES.APPLY}>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            iconRight={<ArrowRight size={12} weight="bold" />}
          >
            Start your onboarding
          </Button>
        </Link>
      </div>
    </div>
  );
}

/* ── Step 5: Enter Partnership ───────────────────────────────── */

const LAUNCH_PHASES: Phase[] = [
  { label: 'Partnership Launch and Support Phase' },
  { label: 'KPI and Marketplace Engagement Phase' },
];

function Step5Scene({ activeRole }: { activeRole: PlatformRole }) {
  const [dashVisible, setDashVisible] = useState(false);
  useEffect(() => {
    setDashVisible(false);
  }, []);

  const isVendor = activeRole === 'vendor';
  const stats = isVendor
    ? [
        { label: 'Active Buyer Signals', value: '1,645' },
        { label: 'Global Markets', value: '24' },
        { label: 'Pathways Available', value: '16' },
        { label: 'Partnership Connections', value: '327' },
      ]
    : [
        { label: 'Active Sourcing Windows', value: '12' },
        { label: 'Verified Vendors', value: '1,154' },
        { label: 'Pathways Available', value: '16' },
        { label: 'Partnership Requests', value: '473' },
      ];

  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-xl p-4"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
        }}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: 'var(--primary)',
              animation: 'pulseSlow 2s ease-in-out infinite',
            }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Launch phases
          </span>
        </div>
        <AnimatedChecklist
          phases={LAUNCH_PHASES}
          onComplete={() => setTimeout(() => setDashVisible(true), 700)}
        />
      </div>

      <AnimatePresence>
        {dashVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card variant="elevated" padding="none" className="overflow-hidden">
              <CardHeader className="px-5 py-4">
                <div className="flex w-full items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: 'var(--primary)', opacity: 0.65 }}
                    >
                      Partnership Dashboard
                    </p>
                    <p
                      className="mt-0.5 text-base font-semibold leading-tight"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {isVendor ? 'Vendor Environment Active' : 'Buyer Environment Active'}
                    </p>
                    <p className="mt-1 text-xs" style={{ color: 'var(--muted-foreground)' }}>
                      {isVendor
                        ? 'Your supply profile is visible to qualified global buyers.'
                        : 'Sourcing windows are open across verified supply partners.'}
                    </p>
                  </div>
                  <div
                    className="flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{
                      background: 'color-mix(in srgb, var(--primary) 8%, transparent)',
                      border: '1px solid color-mix(in srgb, var(--primary) 15%, transparent)',
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: 'var(--primary)' }}
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'var(--primary)' }}
                    >
                      Live
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardDivider />

              <CardBody className="p-0">
                <div className="grid grid-cols-2">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.12,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col gap-1.5 p-5"
                      style={{
                        borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                        borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.12 }}
                        className="tabular-nums leading-none"
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                          fontWeight: 700,
                          color: 'var(--primary)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {stat.value}
                      </motion.span>
                      <span
                        className="text-xs leading-snug"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardBody>

              <CardDivider />

              <CardFooter className="px-4 py-3">
                <Link href={PUBLIC_ROUTES.APPLY} className="w-full">
                  <CTAButton variant="primary" size="sm" fullWidth>
                    Enter your partnership environment
                  </CTAButton>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STEP ACTION CARDS
═══════════════════════════════════════════════════════════════ */

const STEP_ACTIONS = [
  {
    overline: 'Getting started',
    body: 'Choosing your role surfaces the right pathways and environments for your position in the value chain.',
    label: 'View partnership pathways',
    href: PUBLIC_ROUTES.PARTNERSHIP_PATHS,
  },
  {
    overline: 'Explore pathways',
    body: '16 structured pathways across 4 systems. Review each to find the commercial model that fits your readiness.',
    label: 'Browse all 16 pathways',
    href: PUBLIC_ROUTES.PARTNERSHIP_PATHS,
  },
  {
    overline: 'Ready to apply',
    body: 'The qualification process confirms readiness before any commitment. Start your application when you are ready.',
    label: 'Begin your application',
    href: PUBLIC_ROUTES.APPLY,
  },
  {
    overline: 'Onboarding open',
    body: 'Structured onboarding prepares participants for live partnership. Complete your profile to proceed through each stage.',
    label: 'Start onboarding now',
    href: PUBLIC_ROUTES.APPLY,
  },
  {
    overline: 'Placement ready',
    body: 'All stages complete. Your profile is verified and ready for placement into the correct partnership environment.',
    label: 'Enter your environment',
    href: PUBLIC_ROUTES.APPLY,
  },
] as const;

function StepActionContent({
  activeIndex,
  activeRole,
}: {
  activeIndex: number;
  activeRole: PlatformRole;
}) {
  const action = STEP_ACTIONS[activeIndex] ?? STEP_ACTIONS[0]!;

  return (
    <>
      <p
        className="text-[9px] font-bold uppercase tracking-[0.2em]"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {action.overline}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
        {action.body}
      </p>
      <Link href={action.href} className="w-full">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconRight={<ArrowRight size={12} weight="bold" />}
        >
          {action.label}
        </Button>
      </Link>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════════════════ */

export default function EntryJourneySection({
  activeRole,
  onRoleSelect,
}: EntryJourneySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8%' });

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const steps = useMemo(() => buildSteps(activeRole), [activeRole]);
  const activeStep = steps[activeIndex] as EnrichedStep | undefined;
  const isLast = activeIndex === steps.length - 1;

  const progressPct = useMemo(
    () => Math.round(((activeIndex + 1) / steps.length) * 100),
    [activeIndex, steps.length],
  );

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    if (window.innerWidth < 1280 && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, []);

  const goNext = (): void => {
    if (!isLast) handleSelect(activeIndex + 1);
  };

  if (!activeStep) return null;

  function renderScene() {
    switch (activeIndex) {
      case 0:
        return (
          <Step1Scene activeRole={activeRole} onRoleSelect={onRoleSelect} onAdvance={goNext} />
        );
      case 1:
        return <Step2Scene activeRole={activeRole} />;
      case 2:
        return <Step3Scene />;
      case 3:
        return <Step4Scene />;
      case 4:
        return <Step5Scene activeRole={activeRole} />;
      default:
        return null;
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="entry-journey-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-12"
        >
          <SectionHeader
            layout="centered"
            size="md"
            eyebrow={c.sectionLabel}
            headline={c.headline}
            description={c.intro}
          />
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[0.34fr_1fr] xl:items-start xl:gap-6">
          {/* ══ LEFT RAIL ═══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="mb-2 flex items-center justify-between">
              <span
                className="text-[var(--text-xs)] font-semibold uppercase tracking-widest"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Journey progress
              </span>
              <span
                className="text-xs font-semibold tabular-nums"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {activeIndex + 1} / {steps.length}
              </span>
            </div>
            <div className="mb-5">
              <Progress value={progressPct} max={100} variant="primary" size="sm" animated />
            </div>

            <div className="flex flex-col">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const isDone = index < activeIndex;
                return (
                  <div key={step.number} className="relative">
                    {index !== steps.length - 1 && (
                      <div
                        className="absolute left-[1.3rem] top-full z-0 h-3 w-px"
                        style={{
                          background: isDone
                            ? 'linear-gradient(to bottom, var(--primary), transparent)'
                            : 'linear-gradient(to bottom, var(--border), transparent)',
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <motion.button
                      type="button"
                      onClick={() => handleSelect(index)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.985 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      aria-pressed={isActive}
                      className="relative z-10 mb-3 w-full overflow-hidden rounded-xl border text-left"
                      style={{
                        borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                        background: isActive
                          ? 'var(--card)'
                          : isDone
                            ? 'var(--background-elevated)'
                            : 'var(--card)',
                        boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-xs)',
                        transition: 'border-color 0.25s, box-shadow 0.25s, background 0.25s',
                      }}
                    >
                      <div className="flex items-center gap-3 px-3.5 py-3">
                        <div
                          className="duration-250 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all"
                          style={{
                            background: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                          }}
                        >
                          {isDone ? <Check size={11} weight="bold" /> : step.number}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className="truncate text-sm font-medium leading-tight"
                            style={{
                              color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                            }}
                          >
                            {step.title}
                          </div>
                          <div
                            className="mt-0.5 text-[10px] uppercase tracking-[0.12em]"
                            style={{ color: 'var(--muted-foreground)' }}
                          >
                            {step.meta.tag}
                          </div>
                        </div>
                        <motion.div
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                          transition={{ duration: 0.2 }}
                          style={{ color: 'var(--primary)', flexShrink: 0 }}
                        >
                          <ArrowRight size={13} weight="bold" />
                        </motion.div>
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="rail-shimmer"
                          className="pointer-events-none absolute inset-y-0 right-0 w-16"
                          style={{
                            background:
                              'linear-gradient(to left, color-mix(in srgb, var(--primary) 6%, transparent), transparent)',
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </motion.button>
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.48 }}
            >
              <Card
                variant={isLast ? 'accent' : 'default'}
                padding="sm"
                className="overflow-hidden"
              >
                <CardBody className="flex flex-col gap-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`hint-${activeIndex}`}
                      variants={cv}
                      initial="enter"
                      animate="visible"
                      exit="exit"
                    >
                      <div
                        className="mb-1 text-[var(--text-xs)] font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {isLast ? 'Journey complete' : 'Suggested next'}
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {isLast
                          ? 'All stages complete. You are ready to enter the partnership environment.'
                          : `Move to ${steps[activeIndex + 1]?.title ?? ''} — ${steps[activeIndex + 1]?.meta.tag ?? ''}`}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`cta-${isLast}`}
                      variants={cv}
                      initial="enter"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-2"
                    >
                      {!isLast ? (
                        <>
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            onClick={goNext}
                            iconRight={<ArrowRight size={13} weight="bold" />}
                          >
                            Continue
                          </Button>
                          <Link href={c.ctas.primary.href} className="w-full">
                            <Button variant="outline" size="sm" fullWidth>
                              {c.ctas.primary.label}
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href={c.ctas.primary.href} className="w-full">
                            <CTAButton variant="primary" size="sm" fullWidth>
                              {c.ctas.primary.label}
                            </CTAButton>
                          </Link>
                          <Link href={c.ctas.secondary.href} className="w-full">
                            <Button variant="outline" size="sm" fullWidth>
                              {c.ctas.secondary.label}
                            </Button>
                          </Link>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT PANEL ═══════════════════════════════════════ */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ scrollMarginTop: 'calc(var(--header-height) + 1rem)' }}
          >
            <Card variant="active" padding="none" className="relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(color-mix(in srgb, var(--foreground) 50%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--foreground) 50%, transparent) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 gap-0 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                {/* ── COL 1: heading/body + animation card ── */}
                <div
                  className="flex flex-col lg:border-r lg:pr-5"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      variants={cv}
                      initial="enter"
                      animate="visible"
                      exit="exit"
                      className="flex flex-col gap-2 pb-4"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-bold"
                          style={{
                            background: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            boxShadow: 'var(--shadow-sm)',
                          }}
                        >
                          {activeStep.number}
                        </div>
                        <Chip variant="accent" size="sm">
                          {activeStep.meta.tag}
                        </Chip>
                      </div>
                      <h3
                        className="heading-card font-heading leading-tight"
                        style={{ color: 'var(--foreground)', maxWidth: '28ch' }}
                      >
                        {activeStep.title}
                      </h3>
                      <p className="text-body" style={{ maxWidth: '44ch' }}>
                        {activeStep.bodyText}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`scene-${activeIndex}`}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Card variant="elevated" padding="md">
                        <CardBody>{renderScene()}</CardBody>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ── COL 2: orbital (top) + action card ── */}
                <div className="flex flex-col pt-5 lg:min-h-full lg:pl-5 lg:pt-0">
                  <div className="flex flex-1 items-center justify-center py-4">
                    <OrbitalDiagram
                      steps={steps}
                      activeIndex={activeIndex}
                      onSelect={handleSelect}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`action-${activeIndex}`}
                      variants={cv}
                      initial="enter"
                      animate="visible"
                      exit="exit"
                    >
                      <Card variant="glass" padding="sm">
                        <CardBody className="flex flex-col gap-3">
                          <StepActionContent activeIndex={activeIndex} activeRole={activeRole} />
                        </CardBody>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
