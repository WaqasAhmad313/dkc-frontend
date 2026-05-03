'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Compass } from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { PlatformRole } from '@/store/role.store';

/* ── Animation ──────────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const FADE_UP = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: i * 0.05 },
  }),
};

/* ── BrandPathSection ───────────────────────────────────────────── */

export function BrandPathSection({
  data,
  activeRole,
}: {
  data: any;
  activeRole: PlatformRole;
}) {
  const roleContent =
    activeRole === 'buyer' || activeRole === 'vendor' ? data.roles?.[activeRole] : null;
  const headline = roleContent?.headline ?? data.headline;
  const description = roleContent?.description ?? data.description;

  return (
    <section className="section-elevated section overflow-hidden">
      <div className="container">
        <div className="section-inner">
          <SectionHeader
            headline={headline}
            description={description}
            size="md"
            align="left"
          />

          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-x-2">
            {data.steps.map((step: any, idx: number) => (
              <motion.div
                key={step.step}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-6%' }}
                variants={FADE_UP}
                className="flex w-full flex-col"
              >
                <div className="mb-5 flex w-full items-center">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--signature)">
                    <span className="font-label text-xs font-bold text-(--signature-foreground)">{step.step}</span>
                  </div>
                  <div className="ml-3 h-px grow bg-(--signature)/20" />
                </div>
                <div className="pr-4">
                  <h3 className="font-heading mb-2 text-base leading-tight text-(--foreground)">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-(--muted-foreground)">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA column */}
            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-6%' }}
              variants={FADE_UP}
              className={cn(
                'group relative flex w-full flex-col justify-end rounded-xl p-5',
                'bg-(--primary) text-white shadow-sm',
              )}
            >
              <Compass
                size={100}
                className="pointer-events-none absolute -right-6 -top-6 opacity-5 transition-transform duration-500 group-hover:rotate-12"
              />
              <div className="flex flex-col gap-3">
                <Compass size={28} className="text-white/80" />
                <Link
                  href={data.cta.url}
                  className="font-heading group/link flex items-center gap-2 text-base text-white"
                >
                  {data.cta.label}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
                <p className="font-label text-[9px] font-bold uppercase tracking-widest text-white/70">
                  Strategic Path
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
