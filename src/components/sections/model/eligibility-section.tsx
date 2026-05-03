'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import {
  ShoppingCart,
  Storefront,
  Medal,
  Gift,
  Buildings,
  Briefcase,
  HouseLine,
  Armchair,
  PenNib,
  Crown,
  Bank,
  UsersThree,
  GlobeHemisphereWest,
  PresentationChart,
  ArrowRight,
  Sparkle,
} from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { PlatformRole } from '@/store/role.store';

/* ── Icon map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingCart,
  Storefront,
  Medal,
  Gift,
  Buildings,
  Briefcase,
  HouseLine,
  Armchair,
  PenNib,
  Crown,
  Bank,
  UsersThree,
  GlobeHemisphereWest,
  PresentationChart,
  Sparkle,
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── EligibilitySection ─────────────────────────────────────────── */

export function EligibilitySection({
  data,
  activeRole,
}: {
  data: any;
  activeRole: PlatformRole;
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const roleContent =
    activeRole === 'buyer' || activeRole === 'vendor' ? data.roles?.[activeRole] : null;
  const headline = roleContent?.headline ?? data.headline;
  const description = roleContent?.description ?? data.description;

  const allItems: { label: string; icon: string; categoryValue: string }[] =
    data.categories.flatMap((c: any) =>
      (c.items as any[]).map((item: any) => ({ ...item, categoryValue: c.value })),
    );

  const handleToggle = (value: string) =>
    setActiveCategory((prev) => (prev === value ? null : value));

  return (
    <section className="section">
      <div className="container">
        <div className="section-inner">

          <SectionHeader
            headline={headline}
            description={description}
            size="md"
            align="left"
          />

          {/* Category tabs */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {data.categories.map((cat: any) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleToggle(cat.value)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 sm:px-5',
                  activeCategory === cat.value
                    ? 'border-(--primary) bg-(--primary) text-white shadow-sm'
                    : 'border-(--border) bg-(--background-elevated) text-(--muted-foreground) hover:bg-(--muted) hover:text-(--foreground)',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Item grid — chips when no tab selected, detail cards when tab selected */}
          <AnimatePresence mode="wait">
            {!activeCategory ? (
              <motion.div
                key="chips"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE }}
                className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {allItems.map((item) => {
                  const Icon = ICON_MAP[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-3 rounded-xl border border-(--border) bg-(--background-elevated) p-3 transition-colors duration-200 hover:border-(--primary)/30 sm:p-4"
                    >
                      {Icon && (
                        <Icon
                          size={17}
                          weight="light"
                          className="shrink-0 text-(--muted-foreground) transition-colors duration-200 group-hover:text-(--primary)"
                        />
                      )}
                      <span className="min-w-0 truncate text-[12px] font-medium leading-tight text-(--foreground)/65 transition-colors duration-200 group-hover:text-(--foreground)">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {(data.categories.find((c: any) => c.value === activeCategory)?.items ?? []).map(
                  (item: any, idx: number) => {
                    const Icon = ICON_MAP[item.icon];
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.07, duration: 0.35, ease: EASE }}
                        className="flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--background-elevated) p-6"
                      >
                        {/* Icon */}
                        <div className="flex size-11 items-center justify-center rounded-xl bg-(--background) text-(--primary)">
                          {Icon && <Icon size={20} weight="light" />}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-2">
                          <h3 className="font-heading text-[14px] font-semibold leading-snug text-(--foreground)">
                            {item.label}
                          </h3>
                          {item.description && (
                            <p className="font-ui text-[12px] leading-relaxed text-(--muted-foreground)">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Fit points */}
                        {Array.isArray(item.fit) && item.fit.length > 0 && (
                          <ul className="mt-auto flex flex-col gap-1.5 border-t border-(--border) pt-4">
                            {(item.fit as string[]).map((point, fi) => (
                              <li
                                key={fi}
                                className="flex items-start gap-2 text-[11px] leading-snug text-(--muted-foreground)"
                              >
                                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-(--primary)" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    );
                  },
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA strip */}
          <div className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-(--primary) px-6 py-8 sm:px-8 sm:py-10 md:flex-row md:px-10">
            <p className="max-w-sm text-center text-[15px] leading-relaxed text-white md:max-w-md md:text-left">
              {data.helper?.text ?? 'Not sure where your brand fits?'}{' '}
              <span className="font-semibold text-white">
                Take our quick brand fit assessment.
              </span>
            </p>
            <Link href={data.cta.url} className="w-full shrink-0 sm:w-auto">
              <Button
                variant="secondary"
                size="md"
                iconRight={<ArrowRight size={16} />}
                className="w-full sm:w-auto"
              >
                {data.cta.label}
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
