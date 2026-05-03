'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Tag } from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';
import type { PlatformRole } from '@/store/role.store';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── FastTrackPricingSection (Pricing only) ───────────────────────── */

export function FastTrackPricingSection({
  pricing,
  activeRole,
}: {
  pricing: any;
  activeRole: PlatformRole;
}) {
  const pricingRoleContent =
    activeRole === 'buyer' || activeRole === 'vendor'
      ? pricing.roles?.[activeRole]
      : null;
  const headline = pricingRoleContent?.headline ?? pricing.headline;
  const description = pricingRoleContent?.description ?? pricing.description;

  return (
    <section className="section-elevated section">
      <div className="container">
        <div className="section-inner">

          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              headline={headline}
              description={description}
              size="md"
              align="left"
            />
            {pricing.range && (
              <p className="shrink-0 pb-1 text-[12px] text-(--muted-foreground)">
                Typical range: <span className="font-semibold text-(--foreground)">{pricing.range}</span>
              </p>
            )}
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.plans.map((plan: any, idx: number) => {
              const isCustom = plan.price === 'Custom';
              const visibleFeatures = Array.isArray(plan.features)
                ? plan.features.slice(0, 6)
                : [];
              const hiddenCount = Array.isArray(plan.features)
                ? Math.max(0, plan.features.length - 6)
                : 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, ease: EASE }}
                  className={cn(
                    'flex flex-col rounded-2xl border p-6 transition-all duration-200',
                    plan.recommended
                      ? 'relative z-10 scale-[1.03] border-(--primary)/60 bg-(--background-elevated) shadow-lg ring-1 ring-(--primary)/20'
                      : 'border-(--border) bg-(--background-elevated) hover:-translate-y-1 hover:border-(--primary)/40 hover:shadow-md',
                  )}
                >
                  {/* Header */}
                  <div className="mb-5">
                    {plan.eyebrow && (
                      <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-(--muted-foreground)/50">
                        {plan.eyebrow}
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-2">
                      <span className={cn(
                        'text-[14px] leading-snug text-(--foreground)',
                        plan.recommended ? 'font-bold' : 'font-semibold',
                      )}>
                        {plan.name}
                      </span>
                      {plan.recommended && (
                        <span className="shrink-0 rounded-full bg-(--primary)/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-(--primary)">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5 border-b border-(--border) pb-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-3xl font-bold text-(--primary)">
                        {plan.price}
                      </span>
                      {plan.billingPeriod && !isCustom && (
                        <span className="text-[11px] text-(--muted-foreground)">
                          / {plan.billingPeriod}
                        </span>
                      )}
                    </div>
                    {isCustom && (
                      <p className="mt-1 text-[11px] text-(--muted-foreground)">
                        Based on scope &amp; production
                      </p>
                    )}
                  </div>

                  {/* Plan description */}
                  {plan.description && (
                    <p className="mb-4 text-[12px] leading-snug text-(--muted-foreground)">
                      {plan.description}
                    </p>
                  )}

                  {/* Features */}
                  {visibleFeatures.length > 0 && (
                    <ul className="mb-5 flex flex-col gap-2.5">
                      {visibleFeatures.map((feature: string, fi: number) => (
                        <li key={fi} className="flex items-start gap-2 text-[12px] leading-snug text-(--muted-foreground)">
                          <CheckCircle
                            size={13}
                            weight="fill"
                            className="mt-0.5 shrink-0 text-(--primary)"
                          />
                          {feature}
                        </li>
                      ))}
                      {hiddenCount > 0 && (
                        <li className="text-[11px] text-(--muted-foreground)">
                          +{hiddenCount} more
                        </li>
                      )}
                    </ul>
                  )}

                  {/* CTA */}
                  {plan.cta?.url && (
                    <Link
                      href={plan.cta.url}
                      className={cn(
                        'mt-auto block w-full rounded-full py-2.5 text-center text-[12px] font-semibold transition-all duration-200',
                        plan.recommended
                          ? 'bg-(--primary) text-white hover:opacity-90'
                          : 'border border-(--border) text-(--foreground) hover:border-(--primary) hover:bg-(--primary) hover:text-white',
                      )}
                    >
                      {activeRole === 'vendor'
                        ? (plan.cta.vendorLabel ?? plan.cta.label)
                        : plan.cta.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Note callout */}
          {pricing.note && (
            <div className="flex items-start gap-4 rounded-2xl border border-(--border) bg-(--background) p-5">
              <Tag size={17} weight="fill" className="mt-0.5 shrink-0 text-(--primary)" />
              <p className="text-[13px] italic leading-relaxed text-(--muted-foreground)">
                {pricing.note}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
