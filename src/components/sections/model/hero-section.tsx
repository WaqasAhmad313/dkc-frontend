'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import {
  ArrowRight,
  CheckCircle,
  SealCheck,
  Package,
  ClipboardText,
  ShieldCheck,
  GlobeHemisphereWest,
  Tag,
  Stack,
  ChartLineUp,
  CaretDown,
} from '@/lib/icons';

/* ── Types ─────────────────────────────────────────────────────── */

type ButtonVariantValue =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive'
  | 'elite'
  | 'depth'
  | 'aurora';

interface Highlight {
  label: string;
  icon: string;
}

interface SideCardData {
  title: string;
  points: { label: string; icon: string }[];
  note: string;
  icon: string;
}

/* ── SideCard ───────────────────────────────────────────────────── */

function SideCard({
  card,
  className,
  defaultOpen = false,
}: {
  card: SideCardData;
  className?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const CardIcon = ICON_MAP[card.icon] ?? ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className={cn(
        'overflow-hidden rounded-xl border border-(--signature)/40 shadow-lg ring-1 ring-(--signature)/10',
        'flex w-full flex-col bg-(--background-elevated)/90 backdrop-blur-xl',
        className,
      )}
    >
      {/* Header — always visible, click to toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2.5 p-4 transition-colors duration-200 hover:bg-(--muted)/40"
      >
        <div className="rounded-lg bg-(--muted) p-1.5">
          <CardIcon size={16} className="text-(--foreground)" />
        </div>
        <h3 className="flex-1 text-left text-[13px] font-bold tracking-tight text-(--foreground)">
          {card.title}
        </h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <CaretDown size={13} className="shrink-0 text-(--muted-foreground)" />
        </motion.div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-4">
              <ul className="flex flex-col gap-2">
                {card.points.map((p) => {
                  const Icon = ICON_MAP[p.icon] ?? Package;
                  return (
                    <li
                      key={p.label}
                      className="flex items-start gap-2.5 text-[11px] font-semibold leading-tight text-(--foreground)"
                    >
                      <Icon size={13} className="mt-0.5 shrink-0 text-(--muted-foreground)" />
                      {p.label}
                    </li>
                  );
                })}
              </ul>
              <p className="border-t border-(--border) pt-2.5 text-[10px] italic leading-snug text-(--muted-foreground)">
                {card.note}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface HeroData {
  sectionLabel: string[];
  headline: string;
  subHeadline: string;
  description: string;
  ctas: { label: string; url: string; variant: string; icon: string }[];
  highlights: Highlight[];
  sideCard: SideCardData;
  media: { image: string; alt: string };
  roles?: {
    buyer?: { headline?: string; description?: string; primaryCta?: any; secondaryCta?: any };
    vendor?: { headline?: string; description?: string; primaryCta?: any; secondaryCta?: any };
  };
}

/* ── Icon Map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  ArrowRight,
  CheckCircle,
  SealCheck,
  Package,
  ClipboardText,
  ShieldCheck,
  GlobeHemisphereWest,
  tag: Tag,
  layers: Stack,
  package: Package,
  scale: ClipboardText,
  shieldCheck: ShieldCheck,
  barChart: ChartLineUp,
};

/* ── HighlightScroller ──────────────────────────────────────────── */

function HighlightScroller({ highlights }: { highlights: Highlight[] }) {
  const duplicated = [...highlights, ...highlights];

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className="flex gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {duplicated.map((item, idx) => {
          const Icon = ICON_MAP[item.icon] ?? Tag;
          return (
            <div
              key={`${item.label}-${idx}`}
              className="flex min-w-40 items-center gap-2.5 rounded-xl border border-(--border) bg-(--muted)/30 px-3.5 py-3"
            >
              <div className="rounded-lg bg-(--background-elevated) p-1.5 shadow-sm">
                <Icon size={15} className="text-(--foreground)" />
              </div>
              <span className="whitespace-nowrap text-[12px] font-bold text-(--muted-foreground)">
                {item.label}
              </span>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-(--background-elevated) to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-(--background-elevated) to-transparent" />
    </div>
  );
}

/* ── HeroSection ────────────────────────────────────────────────── */

export function HeroSection({ data }: { data: HeroData }) {
  return (
    <section className="section-feature section relative w-full overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="h-full flex flex-col gap-6 max-w-[520px]"
          >
            <h1 className="font-display text-[2.5rem] font-bold leading-[1.08] tracking-tighter text-(--foreground) lg:text-5xl xl:text-[64px]">
              {data.headline}
            </h1>

            <div className="flex flex-col gap-3">
              <p className="text-xl font-medium text-(--foreground)">{data.subHeadline}</p>
              <p className="text-[16px] leading-relaxed text-(--muted-foreground) lg:text-[17px]">
                {data.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.ctas.map((cta) => {
                const Icon = ICON_MAP[cta.icon];
                return (
                  <Link key={cta.label} href={cta.url}>
                    <Button
                      variant={cta.variant as ButtonVariantValue}
                      size="lg"
                      iconRight={Icon ? <Icon size={18} /> : undefined}
                      className="font-bold"
                    >
                      {cta.label}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* mt-auto pushes scroller to column bottom — aligns with SideCard on the right */}
            <div className="-mx-3 mt-auto">
              <HighlightScroller highlights={data.highlights} />
            </div>
          </motion.div>

          {/* ── Right: Floating product image + SideCard ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative h-full min-h-[320px] lg:min-h-0 flex items-center justify-center"
          >
            <Image
              src={data.media.image}
              alt={data.media.alt}
              width={720}
              height={720}
              priority
              className="w-full max-w-[400px] lg:max-w-[720px] h-auto object-contain scale-100 sm:scale-[1.1] lg:scale-[1.15] drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            />

            {/* SideCard floats at column bottom-right — collapsed by default, click to expand */}
            <div className="absolute bottom-0 right-0 z-20 hidden lg:block">
              <SideCard card={data.sideCard} className="w-64 xl:w-72" defaultOpen={false} />
            </div>
          </motion.div>

        </div>

        {/* Mobile SideCard — stacked below image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-6 lg:hidden"
        >
          <SideCard card={data.sideCard} className="mx-auto max-w-md" defaultOpen={true} />
        </motion.div>

      </div>
    </section>
  );
}
