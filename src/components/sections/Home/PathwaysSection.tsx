'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

import { CTAButton } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import { Chip, ChipGroup } from '@/components/shared/Chip';
import { Card, CardBody, CardDivider } from '@/components/shared/Card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';
import { PUBLIC_ROUTES } from '@dkc/constants';
import { cn } from '@/lib/utils';

const c = HOMEPAGE.pathways;

/* ── Pathway icon ────────────────────────────────────────────── */

function PathwayIcon({ system, active }: { system: string; active: boolean }) {
  const color = active ? 'var(--signature)' : 'var(--muted-foreground)';

  const icons: Record<string, React.ReactNode> = {
    'core-trade': (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="7" height="10" rx="1.5" stroke={color} strokeWidth="1.4" />
        <rect x="11" y="5" width="7" height="10" rx="1.5" stroke={color} strokeWidth="1.4" />
        <path
          d="M9 10h2M9 8l2 2-2 2"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'brand-expansion': (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.4" />
        <path d="M10 6v4l3 2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    collaborative: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="7" cy="8" r="3" stroke={color} strokeWidth="1.4" />
        <circle cx="13" cy="8" r="3" stroke={color} strokeWidth="1.4" />
        <path
          d="M4 16c0-2.5 2-4 6-4s6 1.5 6 4"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    institutional: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3L18 7v1H2V7L10 3z" stroke={color} strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="4" y="8" width="3" height="7" stroke={color} strokeWidth="1.2" />
        <rect x="8.5" y="8" width="3" height="7" stroke={color} strokeWidth="1.2" />
        <rect x="13" y="8" width="3" height="7" stroke={color} strokeWidth="1.2" />
        <line
          x1="2"
          y1="15"
          x2="18"
          y2="15"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return <>{icons[system] ?? null}</>;
}

/* ── PathwaysSection ─────────────────────────────────────────── */

interface Props {
  activeRole: PlatformRole;
}

export default function PathwaysSection({ activeRole }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8%' });

  const [activeIdx, setActiveIdx] = useState(0);
  const pathway = c.pathways[activeIdx];
  const roleKey = activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : null;

  const handleSelect = useCallback((idx: number) => {
    setActiveIdx(idx);
    if (window.innerWidth < 1024 && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pathways-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, var(--signature-soft) 0%, transparent 60%)',
        }}
      />

      <div className="container relative z-10 flex flex-col gap-12">
        <SectionHeader
          layout="centered"
          size="md"
          eyebrow={roleKey ? `${c.sectionLabel} • Viewing as ${roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}` : c.sectionLabel}
          headline={c.headline}
          description={c.intro}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2" role="tablist" aria-label="Partnership pathways">
              {c.pathways.map((pw, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <motion.button
                    key={pw.system}
                    role="tab"
                    id={`pathway-tab-${pw.system}`}
                    aria-selected={isActive}
                    aria-controls={`pathway-panel-${pw.system}`}
                    onClick={() => handleSelect(idx)}
                    whileHover={!isActive ? { x: 3 } : {}}
                    whileTap={{ scale: 0.985 }}
                    className={cn(
                      "group relative flex min-h-11 w-full items-start gap-3.5 overflow-hidden rounded-xl p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--signature) transition-all duration-320",
                      isActive ? "bg-(--background-elevated) shadow-(--shadow-md) border-(--border)" : "bg-(--background-elevated)/50 border-(--border)/50"
                    )}
                    style={{
                      borderTopWidth: isActive ? '1px' : '1px',
                      borderLeftWidth: isActive ? '1px' : '1px',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="pathway-active-strip"
                        className="absolute inset-y-0 left-0 w-0.5 rounded-r-full bg-(--signature)"
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}

                    <span
                      className={cn(
                        "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg transition-all duration-320 border border-(--border)",
                        isActive ? "bg-(--signature-soft) shadow-(--shadow-sm)" : "bg-(--card)"
                      )}
                    >
                      <PathwayIcon system={pw.system} active={isActive} />
                    </span>

                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span
                        className={cn(
                          "text-sm font-semibold leading-tight transition-colors duration-320",
                          isActive ? "text-(--foreground)" : "text-(--muted-foreground)"
                        )}
                      >
                        {pw.title}
                      </span>
                      <span
                        className={cn(
                          "text-xs leading-snug transition-colors duration-320",
                          isActive ? "text-(--muted-foreground)" : "text-(--muted-foreground)/60"
                        )}
                      >
                        {pw.description}
                      </span>
                    </div>

                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="ml-auto shrink-0 self-center rounded-full px-2 py-0.5 text-[10px] font-semibold bg-(--signature-soft) text-(--signature) border border-(--signature)/20"
                      >
                        {pw.subPaths.length}
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-sm text-(--muted-foreground)"
            >
              {c.supportLine}
            </motion.p>
          </motion.div>

          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ scrollMarginTop: 'calc(var(--header-height) + 1rem)' }}
          >
            <AnimatePresence mode="wait">
              {pathway !== undefined && (
                <motion.div
                  key={pathway.system + (roleKey ?? 'default')}
                  id={`pathway-panel-${pathway.system}`}
                  role="tabpanel"
                  aria-labelledby={`pathway-tab-${pathway.system}`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="focus:outline-none"
                >
                  <Card variant="elevated" padding="none">
                    <div className="flex flex-col gap-5 p-6 sm:p-7">
                      <div className="flex flex-col gap-1.5">
                        <span className="eyebrow">
                          Pathway
                        </span>
                        <h3 className="heading-card font-heading text-(--foreground)">
                          {pathway.title}
                        </h3>
                      </div>

                      <div
                        className="h-0.5 w-10 rounded-full bg-(--signature) opacity-35"
                        aria-hidden="true"
                      />

                      <CardDivider />

                      {roleKey !== null ? (
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={roleKey}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Card variant="accent" padding="sm">
                              <CardBody>
                                <p
                                  className="eyebrow mb-1.5 text-(--signature)"
                                >
                                  For you as a {roleKey}
                                </p>
                                <p className="text-body">{pathway[roleKey].emphasis}</p>
                              </CardBody>
                            </Card>
                          </motion.div>
                        </AnimatePresence>
                      ) : (
                        <p className="text-body text-(--muted-foreground)">
                          {pathway.description}
                        </p>
                      )}

                      <div className="flex flex-col gap-2">
                        <span className="eyebrow text-(--muted-foreground)/60">Models within this pathway</span>
                        <ChipGroup gap="sm" wrap>
                          {pathway.subPaths.map((sp) => (
                            <Chip key={sp} variant="default" size="sm">
                              {sp}
                            </Chip>
                          ))}
                        </ChipGroup>
                      </div>

                      <CardDivider />

                      <div>
                        <Link href={`${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/${pathway.system}`}>
                          <CTAButton variant="primary" size="sm">
                            {roleKey !== null
                              ? pathway[roleKey].cta
                              : `Explore ${pathway.title} Pathways`}
                          </CTAButton>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
