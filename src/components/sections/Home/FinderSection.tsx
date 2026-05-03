'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/shared/Badge';
import { CTAButton } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import { Card, CardBody, CardDivider, CardFooter } from '@/components/shared/Card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';
import { PUBLIC_ROUTES } from '@dkc/constants';

const c = HOMEPAGE.finder;
const paths = HOMEPAGE.pathways.pathways;

/* ── Recommendation logic ────────────────────────────────────── */

const BUYER_PATHWAY_MAP = [0, 1, 2, 3] as const;
const VENDOR_PATHWAY_MAP = [0, 1, 2, 3] as const;

function getRecommendation(
  role: 'buyer' | 'vendor' | null,
  objective: number | null,
): (typeof paths)[number] | null {
  if (role === null || objective === null) return null;
  const map = role === 'buyer' ? BUYER_PATHWAY_MAP : VENDOR_PATHWAY_MAP;
  const pathIdx = map[objective as 0 | 1 | 2 | 3];
  if (pathIdx === undefined) return null;
  return paths[pathIdx] ?? null;
}

/* ── RoleToggle ──────────────────────────────────────────────── */

interface RoleToggleProps {
  role: 'buyer' | 'vendor' | null;
  onSelect: (r: 'buyer' | 'vendor') => void;
}

function RoleToggle({ role, onSelect }: RoleToggleProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {(['buyer', 'vendor'] as const).map((item) => {
        const isActive = role === item;
        return (
          <motion.button
            key={item}
            type="button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as number[] }}
            onClick={() => onSelect(item)}
            aria-pressed={isActive}
            className="focus-visible:ring-(--primary) flex min-h-11 flex-col gap-3 rounded-xl p-5 text-left focus:outline-none focus-visible:ring-2"
            style={{
              background: isActive
                ? 'color-mix(in srgb, var(--primary) 6%, transparent)'
                : 'var(--card)',
              border: isActive ? '2px solid var(--primary)' : '1px solid var(--border)',
              boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-xs)',
              transition: `all var(--duration-normal)`,
            }}
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-[var(--text-xl)] font-heading font-semibold leading-tight transition-colors duration-200"
                style={{
                  color: isActive ? 'var(--primary)' : 'var(--foreground)',
                }}
              >
                {item === 'buyer' ? 'Buyer' : 'Vendor'}
              </span>
              <span
                className="text-xs leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {item === 'buyer'
                  ? 'Sourcing · Retail · Institutional'
                  : 'Artisan · Cooperative · Exporter'}
              </span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── ObjectiveList ───────────────────────────────────────────── */

interface ObjectiveListProps {
  role: 'buyer' | 'vendor' | null;
  objective: number | null;
  onSelect: (i: number) => void;
  inView: boolean;
}

function ObjectiveList({ role, objective, onSelect, inView }: ObjectiveListProps) {
  const options = role !== null ? c.prompts.options[role] : null;

  if (options === null) {
    return (
      <div
        className="rounded-xl p-4 text-center text-sm"
        style={{
          background: 'var(--background-elevated)',
          border: '1px solid var(--border)',
          color: 'var(--muted-foreground)',
        }}
      >
        Select your role to unlock objectives
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={role}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] as number[] }}
        className="flex flex-col gap-1.5"
      >
        {options.map((option, index) => {
          const isSelected = objective === index;
          return (
            <motion.button
              key={option}
              type="button"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.38,
                delay: 0.08 + index * 0.05,
                ease: [0.22, 1, 0.36, 1] as number[],
              }}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(index)}
              aria-pressed={isSelected}
              className="focus-visible:ring-(--primary) flex min-h-11 w-full items-center gap-3 rounded-lg px-4 py-3 text-left focus:outline-none focus-visible:ring-2"
              style={{
                background: isSelected
                  ? 'color-mix(in srgb, var(--primary) 6%, transparent)'
                  : 'var(--card)',
                border: `1px solid ${isSelected ? 'var(--primary)' : 'var(--border)'}`,
                boxShadow: isSelected ? 'var(--shadow-xs)' : 'none',
                transition: `all var(--duration-fast)`,
              }}
            >
              <span
                className="flex shrink-0 items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: '16px',
                  height: '16px',
                  border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border)',
                  background: isSelected ? 'var(--primary)' : 'transparent',
                  boxShadow: isSelected ? 'var(--shadow-xs)' : 'none',
                }}
                aria-hidden="true"
              >
                {isSelected && (
                  <span
                    className="rounded-full"
                    style={{ width: '6px', height: '6px', background: 'var(--primary-foreground)' }}
                  />
                )}
              </span>

              <span
                className="text-left text-sm leading-snug transition-colors duration-200"
                style={{
                  color: isSelected ? 'var(--foreground)' : 'var(--muted-foreground)',
                  fontWeight: isSelected ? 500 : 400,
                }}
              >
                {option}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

/* ── ResultShell ─────────────────────────────────────────────── */

interface ResultShellProps {
  role: 'buyer' | 'vendor' | null;
  objective: number | null;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

function ResultShell({ role, objective, scrollRef }: ResultShellProps) {
  const recommendation = getRecommendation(role, objective);
  const isReady = recommendation !== null;
  const key = `${role ?? 'none'}-${objective ?? 'none'}`;

  return (
    <div
      ref={scrollRef}
      className="relative flex items-center justify-center"
      style={{
        scrollMarginTop: 'calc(var(--header-height, 64px) + 1rem)',
        minHeight: 'clamp(280px, 50vw, 360px)',
      }}
    >
      {/* Depth layer 3 */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`d3-${key}`}
          className="absolute inset-x-8 -top-3 bottom-3 rounded-[var(--radius-card)]"
          initial={{ x: 8, opacity: 0.3 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -8, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'color-mix(in srgb, var(--primary) 4%, transparent)',
            border: '1px solid color-mix(in srgb, var(--primary) 8%, transparent)',
          }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Depth layer 2 */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`d2-${key}`}
          className="absolute inset-x-4 -top-1.5 bottom-1.5 rounded-[var(--radius-card)]"
          initial={{ x: 5, opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -5, opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--background-elevated)',
            border: '1px solid var(--border)',
          }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Main result card */}
      <Card
        variant="elevated"
        padding="none"
        className="relative z-10 flex w-full flex-col overflow-hidden"
      >
        {/* Top accent stripe */}
        <div
          className="h-0.5 w-full shrink-0 transition-all duration-300"
          style={{
            background: isReady ? 'var(--primary)' : 'var(--border)',
          }}
          aria-hidden="true"
        />

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          {!isReady ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
              <div className="relative size-20" aria-hidden="true">
                {[40, 30, 20, 12].map((r, i) => (
                  <motion.span
                    key={r}
                    animate={{ scale: [1, 1.06 + i * 0.03, 1], opacity: [0.3, 0.08, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid"
                    style={{
                      width: `${r * 2}px`,
                      height: `${r * 2}px`,
                      borderColor:
                        i === 0
                          ? 'color-mix(in srgb, var(--primary) 20%, transparent)'
                          : 'color-mix(in srgb, var(--primary) 10%, transparent)',
                    }}
                  />
                ))}
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    background: 'color-mix(in srgb, var(--primary) 20%, transparent)',
                  }}
                />
              </div>

              <p className="text-[var(--text-sm)] text-(--muted-foreground)">
                {role === null
                  ? 'Select your role to begin'
                  : 'Select your objective to see your path'}
              </p>
              <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                Your recommended pathway will appear here
              </p>
            </div>
          ) : (
            <motion.div
              key={recommendation.system}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] as number[] }}
              className="flex flex-1 flex-col gap-4"
            >
              <span className="eyebrow">Recommended pathway</span>

              <h3
                className="text-[var(--text-2xl)] font-heading font-semibold"
                style={{ color: 'var(--foreground)' }}
              >
                {recommendation.title}
              </h3>

              <Card variant="accent" padding="sm">
                <CardBody>
                  <p className="eyebrow mb-1.5" style={{ color: 'var(--primary)' }}>
                    Why this fits
                  </p>
                  <p className="text-[var(--text-sm)]" style={{ color: 'var(--muted-foreground)' }}>
                    {role !== null ? recommendation[role].emphasis : recommendation.description}
                  </p>
                </CardBody>
              </Card>

              <div className="flex flex-wrap gap-1.5">
                {recommendation.subPaths.map((sp) => (
                  <Chip key={sp} variant="default" size="sm">
                    {sp}
                  </Chip>
                ))}
              </div>

              <Card variant="interactive" padding="sm" className="mt-auto">
                <CardBody className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="eyebrow" style={{ color: 'var(--primary)' }}>
                      Recommended next move
                    </p>
                    <p
                      className="mt-1 text-sm font-medium sm:truncate"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {role !== null ? recommendation[role].cta : c.cta.label}
                    </p>
                  </div>

                  <Link href={c.cta.href} className="shrink-0 sm:ml-3">
                    <CTAButton variant="elite" size="sm" fullWidth>
                      {c.cta.label}
                    </CTAButton>
                  </Link>
                </CardBody>
              </Card>
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
}

/* ── FinderSection ───────────────────────────────────────────── */

interface Props {
  activeRole: PlatformRole;
}

export default function FinderSection({ activeRole }: Props) {
  const ref = useRef<HTMLElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6%' });

  const [selectedRole, setSelectedRole] = useState<'buyer' | 'vendor' | null>(
    activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : 'buyer',
  );
  const [selectedObjective, setSelectedObjective] = useState<number | null>(0);

  useEffect(() => {
    if (activeRole === 'buyer' || activeRole === 'vendor') {
      if (selectedRole !== activeRole) {
        setSelectedRole(activeRole);
        setSelectedObjective(0);
      }
    }
  }, [activeRole]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleRoleSelect(role: 'buyer' | 'vendor') {
    setSelectedRole(role);
    setSelectedObjective(0);
  }

  const handleObjectiveSelect = useCallback((i: number) => {
    setSelectedObjective((prev) => (prev === i ? null : i));
    if (window.innerWidth < 1024 && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="finder-heading"
      className="section relative overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col gap-10 sm:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as number[] }}
        >
          <SectionHeader
            layout="centered"
            size="md"
            eyebrow={c.sectionLabel}
            headline={c.headline}
            description={c.intro}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as number[] }}
        >
          <Card variant="elevated" padding="none" className="overflow-hidden">
            <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT — selector panel */}
              <div
                className="flex flex-col gap-4 p-5 sm:p-6 lg:border-r lg:p-7"
                style={{ borderColor: 'var(--border)' }}
              >
                {/* Step 01 — Role */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex size-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-xs)',
                        color: 'var(--primary)',
                      }}
                    >
                      01
                    </span>
                    <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                      {c.prompts.role}
                    </p>
                  </div>
                  <RoleToggle role={selectedRole} onSelect={handleRoleSelect} />
                </div>

                <CardDivider />

                {/* Step 02 — Objective */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex size-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-xs)',
                        color:
                          selectedRole !== null ? 'var(--primary)' : 'var(--muted-foreground)',
                        opacity: selectedRole !== null ? 1 : 0.5,
                        transition: `opacity var(--duration-normal)`,
                      }}
                    >
                      02
                    </span>
                    <p
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{
                        color:
                          selectedRole !== null ? 'var(--foreground)' : 'var(--muted-foreground)',
                      }}
                    >
                      {c.prompts.objective}
                    </p>
                  </div>

                  <ObjectiveList
                    role={selectedRole}
                    objective={selectedObjective}
                    onSelect={handleObjectiveSelect}
                    inView={inView}
                  />
                </div>
              </div>

              {/* RIGHT — result shell */}
              <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <ResultShell
                  role={selectedRole}
                  objective={selectedObjective}
                  scrollRef={resultRef}
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
