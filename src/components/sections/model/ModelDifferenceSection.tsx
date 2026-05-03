'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Globe,
  Tag,
  ShieldCheck,
  Truck,
  ShoppingCart,
  CheckCircle,
  TrendUp,
  ChartBar,
  Storefront,
  Factory,
  CurrencyDollar,
  Medal,
  Sparkle,
  ArrowRight,
  IdentificationCard,
} from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/shared/Badge';
import type { PlatformRole } from '@/store/role.store';

/* ── Types & Icon Mapping ─────────────────────────────────────── */

type Feature = { icon: string; title: string; description: string };

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Tag,
  ShieldCheck,
  Truck,
  ShoppingCart,
  CheckCircle,
  Factory,
  TrendingUp: TrendUp,
  BarChart3: ChartBar,
  Store: Storefront,
  DollarSign: CurrencyDollar,
  Award: Medal,
};

/* ── ModelDifferenceSection ─────────────────────────────────────── */

export default function ModelDifferenceSection({
  data,
  activeRole,
}: {
  data: any;
  activeRole: PlatformRole;
}) {
  const [activeRoleFeature, setActiveRoleFeature] = useState(0);

  if (!data) return null;

  const currentRole = activeRole === 'vendor' ? 'vendor' : 'buyer';
  const roleContent = data.roles[currentRole];
  const selectedRoleFeature = roleContent.features[activeRoleFeature];

  return (
    <section className="section-elevated section">
      <div className="container">
        <div className="section-inner">
          <SectionHeader
            eyebrow={data.sectionLabel}
            badgeVariant="primary"
            headline={data.headline}
            description={data.exclusivityNote}
            size="lg"
            align="left"
          />

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* LEFT — Role-Aware Mechanics */}
            <div className="bg-white/10 flex flex-col rounded-2xl border border-white/10 p-8 shadow-sm lg:col-span-8 lg:p-10">
              {/* Header */}
              <div className="mb-10 flex items-center justify-between gap-6">
                <div>
                  <Badge variant="outline" size="sm" className="mb-2">Live Business Mechanics</Badge>
                  <h2 className="font-heading text-3xl font-bold text-(--foreground)">
                    What {currentRole === 'buyer' ? 'Brands' : 'Suppliers'} Get
                  </h2>
                </div>
                <Badge variant="primary" size="sm">
                  {currentRole === 'buyer' ? (
                    <IdentificationCard size={12} />
                  ) : (
                    <Factory size={12} />
                  )}
                  {currentRole} Access
                </Badge>
              </div>

              {/* Metric cards */}
              <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="bg-(--primary) flex flex-col justify-center rounded-xl p-6 text-white">
                  <p className="mb-1 text-5xl font-bold tracking-tighter">4x</p>
                  <p className="text-[11px] leading-snug opacity-70">
                    Average efficiency gain in trade routes.
                  </p>
                </div>
                <div className="border-(--border) bg-(--background)/60 flex flex-col justify-center rounded-xl border p-6 backdrop-blur-sm">
                  <Badge variant="primary" size="sm" className="mb-3 self-start">Outcome</Badge>
                  <h4 className="font-heading text-(--foreground) text-xl font-bold leading-tight">
                    {currentRole === 'buyer'
                      ? 'Launch with less sourcing chaos'
                      : 'Move toward repeatable supply'}
                  </h4>
                </div>
              </div>

              {/* Interactive feature list — same grid as metric cards above (lg:grid-cols-2) */}
              <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
                {/* LEFT — selector buttons */}
                <div className="flex flex-col justify-center space-y-2">
                  {roleContent.features.map((feature: Feature, idx: number) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveRoleFeature(idx)}
                      className={cn(
                        'w-full rounded-xl p-4 text-left text-xs font-bold transition-all duration-200',
                        activeRoleFeature === idx
                          ? 'bg-(--primary) text-white shadow-md'
                          : 'border-(--border)/60 bg-(--background)/60 hover:bg-(--background) text-(--foreground) border',
                      )}
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>

                {/* RIGHT — detail card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentRole}-${activeRoleFeature}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="border-(--border) bg-(--background)/60 flex h-full flex-col rounded-xl border p-6 backdrop-blur-sm"
                  >
                    <div className="bg-(--primary) mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm">
                      {React.createElement(ICON_MAP[selectedRoleFeature.icon] ?? ShoppingCart, {
                        size: 20,
                        weight: 'duotone',
                      })}
                    </div>
                    <h3 className="font-heading text-(--foreground) mb-3 text-xl font-bold">
                      {selectedRoleFeature.title}
                    </h3>
                    <p className="text-(--muted-foreground) mb-6 text-sm leading-relaxed">
                      {selectedRoleFeature.description}
                    </p>
                    <div className="border-(--border) mt-auto flex items-center gap-3 border-t pt-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-(--muted-foreground)">
                        STRATEGIC ADVANTAGE · GROWING SCALE
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT — Shared Foundation */}
            <div className="bg-white/10 flex flex-col rounded-2xl border border-white/10 p-8 lg:col-span-4 lg:p-10">
              <Badge variant="outline" size="sm" className="mb-8 self-start">The Shared Foundation</Badge>

              <div className="flex flex-1 flex-col justify-between gap-8">
                {data.sharedFeatures.map((feature: Feature, idx: number) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-(--foreground)">
                      {React.createElement(ICON_MAP[feature.icon] ?? Globe, { size: 18 })}
                    </div>
                    <div>
                      <h4 className="font-heading mb-1 text-base font-bold text-(--foreground)">
                        {feature.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-(--muted-foreground)">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
