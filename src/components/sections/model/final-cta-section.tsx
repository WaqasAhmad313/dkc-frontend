'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SealCheck, ArrowRight, Handshake, GlobeHemisphereWest } from '@/lib/icons';
import type { privateLabelPage } from '@/data/models/privateLabel.content';
import type { PlatformRole } from '@/store/role.store';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

type FinalCTAData = (typeof privateLabelPage)['finalCTA'];

/* ── Animation ──────────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

const TRUST_ICONS = [SealCheck, Handshake, SealCheck, GlobeHemisphereWest];

/* ── FinalCTASection ────────────────────────────────────────────── */

export function FinalCTASection({
  data,
  activeRole,
}: {
  data: FinalCTAData;
  activeRole: PlatformRole;
}) {
  const roleContent =
    activeRole === 'buyer' || activeRole === 'vendor' ? data.roles?.[activeRole] : null;

  const rawHeadline = roleContent?.headline ?? data.headline;
  const description = roleContent?.description ?? data.description;
  const primary = roleContent?.primaryCta ?? data.actions[0]!;
  const secondary =
    (roleContent as any)?.secondaryCta ?? data.actions[1] ?? null;

  const trustMarkers = (data as any).trustMarkers as
    | { value: string; label: string }[]
    | undefined;

  return (
    <section className="section-feature section relative w-full overflow-hidden texture-noise">

      {/* ── Top accent line ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--primary)/40 to-transparent"
      />

      <div className="container relative">
        <div className="flex flex-col items-center gap-12 text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-(--primary)/50" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-(--primary)">
              De Koshur Crafts — Private Label
            </span>
            <div className="h-px w-8 bg-(--primary)/50" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            className="font-heading heading-section max-w-3xl whitespace-pre-line text-white"
            style={{ lineHeight: 1.08 }}
          >
            {rawHeadline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.12 }}
            className="max-w-xl text-[14px] leading-relaxed text-white/50"
          >
            {description}
          </motion.p>

          {/* Trust markers */}
          {trustMarkers && trustMarkers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.18 }}
              className="flex w-full flex-wrap items-center justify-center gap-0 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] px-2 py-1 sm:divide-x"
            >
              {trustMarkers.map((marker, idx) => {
                const Icon = TRUST_ICONS[idx] ?? SealCheck;
                return (
                  <div
                    key={marker.label}
                    className="flex flex-col items-center gap-1 px-6 py-4"
                  >
                    <Icon size={13} weight="fill" className="text-(--primary)/60" />
                    <span className="font-heading text-[22px] font-bold text-white">
                      {marker.value}
                    </span>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/35">
                      {marker.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.24 }}
            className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            {/* Primary */}
            <Link
              href={primary.url}
              className={cn(
                'inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4',
                'bg-(--primary) text-white text-[13px] font-bold tracking-wide',
                'transition-all duration-200 hover:opacity-90 hover:shadow-lg sm:w-auto',
              )}
            >
              {primary.label}
              <ArrowRight size={15} weight="bold" />
            </Link>

            {/* Secondary */}
            {secondary && (
              <Link
                href={secondary.url}
                className={cn(
                  'inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4',
                  'text-[13px] font-semibold text-white/70',
                  'transition-all duration-200 hover:border-white/40 hover:text-white sm:w-auto',
                )}
              >
                {secondary.label}
              </Link>
            )}
          </motion.div>

          {/* Brand tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <SealCheck size={12} weight="fill" className="text-(--primary)/40" />
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/25">
              Verified Luxury Standards
            </p>
            <SealCheck size={12} weight="fill" className="text-(--primary)/40" />
          </motion.div>

        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-(--primary)/25 to-transparent"
      />

    </section>
  );
}
