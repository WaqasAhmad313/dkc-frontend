'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { Badge } from '@/components/shared/Badge';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ShieldCheck, Handshake, MapPin, GitBranch, Lock, TrendUp } from '@/lib/icons';
import { HOMEPAGE } from '@/content/homepage.content';
import { cn } from '@/lib/utils';

const c = HOMEPAGE.whyItWorks;

// ── Icon map ──────────────────────────────────────────────────────────────────

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  'verified-entry': <ShieldCheck weight="duotone" size={20} />,
  'commercial-fit': <Handshake weight="duotone" size={20} />,
  'origin-authenticity': <MapPin weight="duotone" size={20} />,
  traceability: <GitBranch weight="duotone" size={20} />,
  'protected-onboarding': <Lock weight="duotone" size={20} />,
  'partnership-growth': <TrendUp weight="duotone" size={20} />,
};

// ── Principle pills ──────────────────────────────────────────────────────────
const PRINCIPLES = [
  'Participant quality before access',
  'Pathway fit before commitment',
  'Standards before scale',
  'Governance before progression',
] as const;

// ── PillarCard ────────────────────────────────────────────────────────────────

interface PillarCardProps {
  id: string;
  title: string;
  body: string;
  index: number;
  inView: boolean;
}

function PillarCard({ id, title, body, index, inView }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.48,
        delay: 0.1 + index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        "flex flex-col gap-4 rounded-2xl p-5 sm:p-6 transition-all duration-320",
        "bg-(--card) border border-(--border) shadow-(--shadow-md)",
        "hover:shadow-(--shadow-lg) hover:border-(--border)"
      )}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--signature-soft) border border-(--signature)/20 text-(--signature)"
        aria-hidden="true"
      >
        {PILLAR_ICONS[id]}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold leading-snug text-(--foreground)">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-(--muted-foreground)">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

// ── WhyItWorksSection ─────────────────────────────────────────────────────────

export default function WhyItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  const allPillars = [...c.leftPillars, ...c.rightPillars];

  return (
    <section
      ref={ref}
      aria-labelledby="why-it-works-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div className="container relative z-10">
        <SectionHeader
          layout="centered"
          size="md"
          eyebrow={c.sectionLabel}
          headline={c.headline}
          description={c.intro}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl lg:sticky lg:top-28 bg-gradient-to-b from-(--card) to-(--muted) border border-(--border) shadow-(--shadow-lg)"
          >
            <div className="flex flex-col gap-6 p-6 sm:p-7 lg:p-8">
              <div
                className="h-0.5 w-12 rounded-full bg-(--signature) opacity-35"
                aria-hidden="true"
              />

              <h3 className="heading-card font-heading leading-tight text-(--foreground) max-w-[20ch]">
                The system works because it enforces structure before scale
              </h3>

              <p className="font-heading italic text-sm text-(--muted-foreground) leading-relaxed max-w-[34ch]">
                {c.closingLine}
              </p>

              <div className="flex flex-col gap-2.5">
                {PRINCIPLES.map((principle, i) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.42,
                      delay: 0.2 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 bg-(--signature-soft) border border-(--signature)/10"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--signature)"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-(--foreground)">
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {allPillars.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                id={pillar.id}
                title={pillar.title}
                body={pillar.body}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
