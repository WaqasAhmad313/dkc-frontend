'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CardDivider } from '@/components/shared/Card';
import {
  Package,
  Truck,
  Globe,
  Storefront,
  ArrowRight,
  Tag,
  Buildings,
  Warehouse,
  Gavel,
  Camera,
  Cpu,
  Bank,
  PaintBrush,
  BookOpen,
  GitBranch,
} from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface TradeModelsSectionProps {
  data: PartnershipSystemData['tradeModelsSection'];
  role: Role;
}

type CardData = PartnershipSystemData['tradeModelsSection']['cards'][number];

/* ── Icon map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  Package,
  Truck,
  Globe,
  Store: Storefront,
  Tag,
  Buildings,
  Warehouse,
  Gavel,
  Camera,
  Cpu,
  Bank,
  PaintBrush,
  BookOpen,
  Frame: Tag,
  Box: Package,
  PenTool: PaintBrush,
  Presentation: Bank,
  TreeStructure: GitBranch,
};

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
      delay: 0.08 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── ModelCard ──────────────────────────────────────────────────── */

interface ModelCardProps {
  card: CardData;
  index: number;
  role: Role;
}

function ModelCard({ card, index, role }: ModelCardProps) {
  const Icon = ICON_MAP[card.icon] ?? Package;

  return (
    <motion.div
      variants={CARD_ENTER}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={card.href}
        className={cn(
          'bg-(--background-elevated) border-(--border) shadow-(--shadow-sm) rounded-[var(--radius-card)] group flex h-full flex-col gap-4 border p-5',
          'transition-all duration-200',
          'focus-visible:ring-(--primary)/40 focus:outline-none focus-visible:ring-2',
          'hover:border-(--primary) hover:bg-(--card) hover:shadow-(--shadow-md)'
        )}
      >
        {/* Top row — icon well + index badge */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="bg-(--primary)/10 rounded-[var(--radius-card-sm)] flex size-11 shrink-0 items-center justify-center transition-all duration-200 shadow-inner"
          >
            <Icon
              weight="duotone"
              size={20}
              className="text-(--primary) transition-all duration-200 group-hover:scale-110"
            />
          </div>

          <span
            className="font-data bg-(--card) border-(--border) text-(--muted-foreground) rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest tabular-nums"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3
          className="heading-card font-heading group-hover:text-(--primary) transition-colors duration-150"
        >
          {card.title}
        </h3>

        {/* Role description */}
        <p className="text-sm text-(--muted-foreground) flex-1 leading-relaxed">
          {card.roles[role]}
        </p>

        <CardDivider />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span
            className="font-ui text-(--muted-foreground) text-[13px] font-semibold transition-colors duration-150"
          >
            <span className="group-hover:text-(--primary)">Explore model</span>
          </span>
          <span
            className="border-(--border) text-(--muted-foreground) group-hover:text-(--primary) group-hover:border-(--primary) flex size-8 items-center justify-center rounded-full border transition-all duration-150"
          >
            <ArrowRight
              weight="bold"
              size={13}
              className="transition-all duration-150 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── TradeModelsSection ─────────────────────────────────────────── */

export function TradeModelsSection({ data, role }: TradeModelsSectionProps) {
  return (
    <section aria-label={data.sectionLabel} className="section section-elevated w-full">
      <div className="container">
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

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            {data.cards.map((card, idx) => (
              <ModelCard key={card.id} card={card} index={idx} role={role} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
