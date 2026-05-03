'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import { Chip } from '@/components/shared/Chip';
import { Card, CardHeader, CardBody, CardFooter } from '@/components/shared/Card';
import { SkeletonCard } from '@/components/shared/Skeleton';
import { Tabs } from '@/components/shared/Tabs';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';
import { PUBLIC_ROUTES } from '@dkc/constants';
import { cn } from '@/lib/utils';

const c = HOMEPAGE.signals;

type SignalRole = 'buyer' | 'vendor' | 'both';

/* ── Signal config ───────────────────────────────────────────── */

function getSignalCfg(role: SignalRole) {
  if (role === 'buyer')
    return {
      dotClass: 'bg-(--signature)',
      glowClass: 'shadow-(--signature)',
      chipVariant: 'primary' as const,
      roleLabel: 'Buyer',
    };
  if (role === 'vendor')
    return {
      dotClass: 'bg-(--secondary)',
      glowClass: 'shadow-(--secondary)',
      chipVariant: 'default' as const,
      roleLabel: 'Vendor',
    };
  return {
    dotClass: 'bg-(--secondary)',
    glowClass: 'shadow-(--secondary)',
    chipVariant: 'default' as const,
    roleLabel: 'Both',
  };
}

/* ── Filter by active role (no UI toggle) ────────────────────── */

function matchesRole(cardRole: SignalRole, activeRole: PlatformRole): boolean {
  if (cardRole === 'both') return true;
  if (activeRole === 'vendor') return cardRole === 'vendor';
  return cardRole === 'buyer'; // default for buyer / null / other
}

/* ── SignalCard ──────────────────────────────────────────────── */

interface SignalCardProps {
  id: string;
  label: string;
  role: SignalRole;
  description: string;
  index: number;
  inView: boolean;
}

function SignalCard({ id, label, role, description, index, inView }: SignalCardProps) {
  const cfg = getSignalCfg(role);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.42,
        delay: 0.04 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card variant="interactive" padding="md" className="flex h-full flex-col gap-4 border-(--border)">
        <CardHeader>
          <div className="flex min-w-0 flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "size-1.5 shrink-0 rounded-full animate-pulse",
                  cfg.dotClass,
                  cfg.glowClass
                )}
                aria-hidden="true"
              />
              <span className="eyebrow font-data">
                Active
              </span>
            </div>
            <h3 className="heading-card font-heading text-(--foreground)">
              {label}
            </h3>
          </div>
          <Chip variant={cfg.chipVariant} size="sm">
            {cfg.roleLabel}
          </Chip>
        </CardHeader>

        <CardBody>
          <p className="text-sm text-(--muted-foreground)">{description}</p>
        </CardBody>

        <CardFooter>
          <Link href={`${PUBLIC_ROUTES.BOOK_CONSULTATION}?signal=${id}`} className="w-full">
            <Button variant="outline" size="sm" className="w-full">
              Request information
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

/* ── SignalsSection ──────────────────────────────────────────── */

interface Props {
  activeRole: PlatformRole;
}

export default function SignalsSection({ activeRole }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const [activeTab, setActiveTab] = useState<string>(c.tabs[0]!.key);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const currentTab = c.tabs.find((t) => t.key === activeTab) ?? c.tabs[0]!;
  const visibleCards = currentTab.cards.filter((card) => matchesRole(card.role, activeRole));
  const tabItems = c.tabs.map((t) => ({ key: t.key, label: t.label }));

  return (
    <section
      ref={ref}
      aria-labelledby="signals-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col gap-10">
        <SectionHeader
          layout="centered"
          size="md"
          eyebrow={c.sectionLabel}
          headline={c.headline}
          description={c.intro}
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tabs tabs={tabItems} activeTab={activeTab} onChange={setActiveTab} variant="pill">
            {() => (
              <div className="pt-7">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="skeleton"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      aria-busy="true"
                      aria-label="Loading signals"
                    >
                      {Array.from({ length: 3 }).map((_, i) => (
                        <SkeletonCard key={i} lines={3} hasFooter />
                      ))}
                    </motion.div>
                  ) : visibleCards.length > 0 ? (
                    <motion.div
                      key={`${activeTab}-${activeRole ?? 'default'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {visibleCards.map((card, idx) => (
                        <SignalCard
                          key={card.id}
                          id={card.id}
                          label={card.label}
                          role={card.role}
                          description={card.description}
                          index={idx}
                          inView={inView}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <Card
                        variant="default"
                        padding="lg"
                        className="flex flex-col items-center gap-4 text-center bg-(--background-elevated) border border-(--border)"
                      >
                        <span
                          className="text-2xl opacity-40 text-(--muted-foreground)"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <p className="text-sm text-(--muted-foreground) max-w-[40ch]">
                          {activeRole === 'vendor' ? c.emptyState.vendor : c.emptyState.buyer}
                        </p>
                        <Link href={PUBLIC_ROUTES.BOOK_CONSULTATION}>
                          <Button variant="outline" size="sm">
                            Book a consultation
                          </Button>
                        </Link>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Tabs>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-sm lg:text-center text-(--muted-foreground) max-w-[65ch] mx-auto"
        >
          {c.closingLine}
        </motion.p>
      </div>
    </section>
  );
}
