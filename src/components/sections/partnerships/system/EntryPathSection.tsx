'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';
import { CheckCircle, Lightning, ArrowRight, GitBranch, Sparkle } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

interface EntryPathSectionProps {
  data: PartnershipSystemData['entryPathSection'];
}

type OptionData = PartnershipSystemData['entryPathSection']['options'][number];

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CARD_ENTER = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      delay: 0.1 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ITEM_ENTER = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.26,
      delay: i * 0.055,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── PathCard ───────────────────────────────────────────────────── */

function PathCard({ option, index }: { option: OptionData; index: number }) {
  const isStandard = option.id === 'standard';
  const topBorder = isStandard ? 'border-t-(--border)' : 'border-t-(--signature)';
  const Icon = isStandard ? GitBranch : Sparkle;

  return (
    <motion.div
      variants={CARD_ENTER}
      custom={index}
      className={cn(
        'bg-(--card) border-(--border) shadow-(--shadow-sm) flex flex-1 flex-col gap-5 overflow-hidden rounded-[var(--radius-card)] border',
        'border-t-2',
        topBorder,
      )}
    >
      {/* Card header */}
      <div className="flex flex-col gap-3 p-5 pb-0">
        <div className="flex items-start justify-between gap-2">
          <div
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] shadow-inner',
              isStandard ? 'bg-(--muted)' : 'bg-(--signature)/10',
            )}
          >
            <Icon
              weight="fill"
              size={18}
              className={isStandard ? 'text-(--foreground)' : 'text-(--signature)'}
            />
          </div>

          <span
            className={cn(
              'font-label flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest',
              isStandard
                ? 'bg-(--muted) border-(--border) text-(--muted-foreground)'
                : 'bg-(--signature)/10 border-(--signature)/20 text-(--signature)',
            )}
          >
            {isStandard ? (
              <>No upfront fee</>
            ) : (
              <>
                <Lightning weight="fill" size={9} className="shrink-0" />
                Fee after eval
              </>
            )}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <h3 className="font-heading text-(--foreground) text-base font-bold leading-snug">
            {option.title}
          </h3>
          <p className="text-(--muted-foreground) text-[12px]">{option.subtitle}</p>
        </div>

        <div className="bg-(--border) h-px w-full" aria-hidden="true" />
      </div>

      {/* Features list */}
      <motion.div
        className="flex flex-col gap-2 px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-4%' }}
      >
        {option.features.map((feature, idx) => (
          <motion.div
            key={feature}
            variants={ITEM_ENTER}
            custom={idx}
            className="flex items-start gap-2.5"
          >
            <CheckCircle weight="fill" size={13} className="text-(--signature) mt-[2px] shrink-0" />
            <span className="text-(--foreground) text-[13px] leading-relaxed">{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Note */}
      <div className="px-5">
        <p className="text-(--muted-foreground) text-[11px] italic leading-relaxed">
          {option.note}
        </p>
      </div>

      {/* CTA */}
      <div className="border-(--border) mt-auto flex flex-col gap-3 border-t p-5">
        <Link
          href={option.cta.href}
          target={option.id === 'lateral-entry' ? '_blank' : undefined}
          rel={option.id === 'lateral-entry' ? 'noopener noreferrer' : undefined}
        >
          <Button
            variant={isStandard ? 'outline' : 'elite'}
            size="md"
            fullWidth
            iconRight={<ArrowRight weight="bold" size={14} />}
          >
            {option.cta.label}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

/* ── EntryPathSection ───────────────────────────────────────────── */

export function EntryPathSection({ data }: EntryPathSectionProps) {
  return (
    <section
      aria-label={data.sectionLabel}
      className="section relative w-full overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="texture-noise pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div className="container relative">
        <motion.div
          className="flex flex-col gap-10"
          variants={SECTION_ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="centered"
            eyebrow={data.sectionLabel}
            headline={data.headline}
            description={data.description}
          />

          <div className="mx-auto w-full max-w-3xl">
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-4%' }}
            >
              {data.options.map((option, idx) => (
                <PathCard key={option.id} option={option} index={idx} />
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-(--muted-foreground) mt-6 text-center text-[12px]"
            >
              Both paths lead to the same destination. Standard takes longer. Fast-Track requires
              evaluation. Neither is mandatory over the other.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
