'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Storefront,
  Users,
  SealCheck,
  Package,
  ShieldCheck,
  ArrowsClockwise,
  Sparkle,
} from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/shared/Badge';
import type { PlatformRole } from '@/store/role.store';

/* ── Types & Constants ─────────────────────────────────────────── */

type OverviewData = {
  sectionLabel: string;
  headline: string;
  description: string;
  problems: string[];
  solutions: string[];
  roles?: {
    buyer?: { headline?: string; description?: string };
    vendor?: { headline?: string; description?: string };
  };
};

const FLOW_STEPS = [
  { title: 'Verified Sourcing', label: 'Trust Layer', icon: SealCheck },
  { title: 'Packaging Fit', label: 'Retail Layer', icon: Package },
  { title: 'Compliance Clarity', label: 'Risk Layer', icon: ShieldCheck },
  { title: 'Repeatable Supply', label: 'Scale Layer', icon: ArrowsClockwise },
];

/* ── OverviewSection ────────────────────────────────────────────── */

export default function OverviewSection({
  data,
  activeRole,
}: {
  data: OverviewData;
  activeRole: PlatformRole;
}) {
  const [activeStep, setActiveStep] = useState(0);

  if (!data) return null;

  const roleKey = activeRole === 'vendor' ? 'vendor' : 'buyer';
  const roleContent = data.roles?.[roleKey];
  const activeSolution = data.solutions[activeStep];
  const activeFlow = FLOW_STEPS[activeStep % FLOW_STEPS.length]!;

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <SectionHeader
                eyebrow={data.sectionLabel}
                badgeVariant="primary"
                headline={data.headline}
                description={data.description}
                size="lg"
                align="left"
                className="mb-8"
              />

              {/* Role Card */}
              <motion.div
                key={String(activeRole)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm lg:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--primary) text-white shadow-lg">
                    {roleKey === 'vendor' ? (
                      <Users size={24} weight="duotone" />
                    ) : (
                      <Storefront size={24} weight="duotone" />
                    )}
                  </div>
                  <div>
                    <Badge variant="outline" size="sm">
                      {roleKey === 'vendor' ? 'Vendor-side readiness' : 'Brand-side clarity'}
                    </Badge>
                    <h3 className="font-heading mt-3 text-2xl font-bold text-(--foreground)">
                      {roleContent?.headline || 'Structural Excellence'}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-(--muted-foreground)">
                      {roleContent?.description || data.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN — Interactive Trade Map */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-sm lg:p-8">
              {/* Header */}
              <div className="mb-8 flex items-center gap-3">
                <Badge variant="primary" size="sm">The Blueprint</Badge>
                <h4 className="font-heading text-xl font-bold text-(--foreground)">Trade readiness map</h4>
              </div>

              {/* Interactive grid — selector LEFT, detail card RIGHT */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* LEFT — selector buttons */}
                <div className="flex flex-col justify-center space-y-2">
                  {data.problems.map((problem, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                        'w-full rounded-xl p-4 text-left text-xs font-bold transition-all duration-200',
                        activeStep === idx
                          ? 'bg-(--primary) text-white shadow-md'
                          : 'border border-white/10 bg-white/5 text-(--muted-foreground) hover:bg-white/10 hover:text-(--foreground)',
                      )}
                    >
                      {problem}
                    </button>
                  ))}
                </div>

                {/* RIGHT — detail card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`overview-${activeStep}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-(--primary) text-white shadow-sm">
                      {React.createElement(activeFlow.icon, {
                        size: 20,
                        weight: 'duotone',
                      })}
                    </div>
                    <h3 className="font-heading mb-2 text-xl font-bold text-(--foreground)">
                      {activeFlow.title}
                    </h3>
                    <Badge variant="outline" size="sm" className="mb-3 self-start">
                      {activeFlow.label}
                    </Badge>
                    <p className="mb-6 text-sm leading-relaxed text-(--muted-foreground)">
                      {activeSolution}
                    </p>
                    <div className="mt-auto flex items-center gap-3 border-t border-white/20 pt-4">
                      <Sparkle size={16} weight="fill" className="text-(--muted-foreground)" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-(--muted-foreground)">
                        STRUCTURED RESPONSE · VERIFIED PATHWAY
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
