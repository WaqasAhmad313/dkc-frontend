'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';
import { UsersThree, Handshake, CheckCircle } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface RoleBenefitsSectionProps {
  data: PartnershipSystemData['roleBenefitsSection'];
}

type AudienceData = PartnershipSystemData['roleBenefitsSection']['audiences'][number];

/* ── Helpers ────────────────────────────────────────────────────── */

function parseItem(text: string): { prefix: string | null; body: string } {
  const colonIdx = text.indexOf(':');
  if (colonIdx > 0 && colonIdx < 32) {
    return {
      prefix: text.slice(0, colonIdx).trim(),
      body: text.slice(colonIdx + 1).trim(),
    };
  }
  return { prefix: null, body: text };
}

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ITEM_ENTER = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── BenefitItem ────────────────────────────────────────────────── */

function BenefitItem({
  text,
  index,
  isBuyer,
  isHovered,
}: {
  text: string;
  index: number;
  isBuyer: boolean;
  isHovered: boolean;
}) {
  const { prefix, body } = parseItem(text);

  return (
    <motion.div
      variants={ITEM_ENTER}
      custom={index}
      className={cn(
        'flex items-start gap-3 border px-3 py-2.5 transition-colors duration-150 rounded-[var(--radius-card-sm)]',
        isHovered ? 'bg-(--background-elevated) border-(--border)' : 'bg-transparent border-transparent'
      )}
    >
      <CheckCircle
        weight="fill"
        size={13}
        className={cn(
          'mt-[2px] shrink-0',
          isBuyer ? 'text-(--foreground)' : 'text-(--signature)'
        )}
      />
      <p className="text-[13px] leading-relaxed text-(--muted-foreground)">
        {prefix && (
          <span className="font-semibold text-(--foreground)">
            {prefix}:{' '}
          </span>
        )}
        {body}
      </p>
    </motion.div>
  );
}

/* ── AudienceCard ───────────────────────────────────────────────── */

function AudienceCard({ audience }: { audience: AudienceData }) {
  const [hovered, setHovered] = useState(false);
  const isBuyer = audience.id === 'buyers';

  const Icon = isBuyer ? UsersThree : Handshake;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        y: hovered ? -3 : 0,
      }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'bg-(--card) border-(--border) rounded-[var(--radius-card)] flex flex-1 flex-col gap-5 overflow-hidden border',
        'border-t-[3px]',
        isBuyer ? 'border-t-(--border)' : 'border-t-(--signature)'
      )}
    >
      {/* Card header */}
      <div className="flex items-center justify-between gap-3 px-5 pt-5">
        <div className="flex items-center gap-3">
          <div
            className="bg-(--background-focus) rounded-[var(--radius-card-sm)] flex size-10 shrink-0 items-center justify-center shadow-inner"
          >
            <Icon
              weight="fill"
              size={18}
              className={isBuyer ? 'text-(--foreground)' : 'text-(--signature)'}
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <h3
              className="font-heading text-(--foreground) text-base font-bold"
            >
              {audience.title}
            </h3>
            <span
              className="font-label text-(--muted-foreground) text-[11px] font-semibold"
            >
              {audience.items.length} advantages
            </span>
          </div>
        </div>

        {/* Role identity pill */}
        <span
          className={cn(
            'font-label bg-(--muted) border-(--border) shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest',
            isBuyer ? 'text-(--foreground)' : 'text-(--signature)'
          )}
        >
          {isBuyer ? 'Buyer' : 'Vendor'}
        </span>
      </div>

      {/* Divider */}
      <div className="bg-(--border) h-px mx-5" aria-hidden="true" />

      {/* Benefit items */}
      <motion.div
        className="flex flex-col gap-2 px-5 pb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-4%' }}
      >
        {audience.items.map((item, idx) => (
          <BenefitItem
            key={item}
            text={item}
            index={idx}
            isBuyer={isBuyer}
            isHovered={hovered}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ── RoleBenefitsSection ────────────────────────────────────────── */

export function RoleBenefitsSection({ data }: RoleBenefitsSectionProps) {
  return (
    <section
      aria-label={data.sectionLabel}
      className="relative w-full overflow-hidden section"
    >
      {/* Background texture */}
      <div className="texture-noise pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.audiences.map((audience) => (
              <AudienceCard key={audience.id} audience={audience} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
