'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  Stack,
  LinkIcon,
  FileText,
  ShieldCheck,
  ChartBar,
  Cube,
  ChartPie,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Network,
  Gear,
  Code,
  Monitor,
  Lock,
  Globe,
  Truck,
  Package,
  Sparkle,
  Target,
  Wallet,
  BookOpen,
  Lightbulb,
  ArrowClockwise,
  PlugsConnected,
  Radio,
  Factory,
  Buildings,
  Handshake,
  Certificate,
  ChartLine,
  Warning,
  Scales,
  Leaf,
  Megaphone,
  Users,
  VideoCamera,
  SlidersHorizontal,
  Archive,
  CheckCircle,
  Info,
  Wrench,
  PuzzlePiece,
  GearSix,
  Basket,
  Tag,
  Storefront,
  SealCheck,
  Receipt,
  CreditCard,
  Calendar,
  Barcode,
  ClipboardText,
  MapPin,
  Newspaper,
  Printer,
  Thermometer,
  Ticket,
  Medal,
  Star,
  Scroll,
  FilmStrip,
  DeviceMobile,
  ListChecks,
  CaretDown,
} from '@/lib/icons';
import type { ModelPageContent } from '@/data/partnership/models';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

export interface TechnologySectionProps {
  data: ModelPageContent['technologySection'];
  apiData: ModelPageContent['apiIntegrationSection'];
}

type SupportField = ModelPageContent['apiIntegrationSection']['support'];

/* ── Merged icon map ────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  Layers: Stack,
  Link: LinkIcon,
  Link2: LinkIcon,
  FileText,
  Shield: ShieldCheck,
  ShieldCheck,
  BarChart: ChartBar,
  BarChart2: ChartBar,
  BarChart3: ChartBar,
  Cube,
  PieChart: ChartPie,
  Cloud,
  Cpu,
  Database,
  Server: Database,
  ServerCog: Database,
  GitBranch,
  Network,
  Cog: Gear,
  Settings: GearSix,
  Code,
  Monitor,
  Lock,
  Globe,
  Truck,
  Package,
  Sparkles: Sparkle,
  Target,
  Wallet,
  BookOpen,
  Lightbulb,
  RefreshCcw: ArrowClockwise,
  Repeat: ArrowClockwise,
  PlugZap: PlugsConnected,
  Radio,
  Factory,
  Building: Buildings,
  Building2: Buildings,
  Handshake,
  Award: Certificate,
  Activity: ChartLine,
  AlertTriangle: Warning,
  Scale: Scales,
  Leaf,
  Megaphone,
  Users,
  Video: VideoCamera,
  Sliders: SlidersHorizontal,
  Archive,
  CheckCircle,
  TrendingUp: ChartLine,
  Workflow: GitBranch,
  Puzzle: PuzzlePiece,
  LayoutDashboard: Monitor,
  Wrench,
  PackageCheck: Package,
  ShieldAlert: ShieldCheck,
  PuzzlePiece,
  ShoppingBasket: Basket,
  Tag,
  Store: Storefront,
  SealCheck,
  BadgeCheck: SealCheck,
  Receipt,
  CreditCard,
  Calendar,
  Barcode,
  Scan: Barcode,
  ScanLine: Barcode,
  ClipboardCheck: ClipboardText,
  ClipboardList: ClipboardText,
  ClipboardText,
  MapPin,
  Newspaper,
  Printer,
  Thermometer,
  Ticket,
  Award2: Medal,
  Medal,
  Star,
  Scroll,
  Film: FilmStrip,
  FilmStrip,
  Tablet: DeviceMobile,
  TabletSmartphone: DeviceMobile,
  DeviceMobile,
  ListChecks,
  DollarSign: CreditCard,
  IdCard: Target,
  Stack,
  GearSix,
};

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const ITEM_ENTER = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, delay: 0.04 + i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const API_ITEM_ENTER = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.04 + i * 0.05, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── FeatureCard ────────────────────────────────────────────────── */

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  variant: 'primary' | 'accent';
}

function FeatureCard({ icon, title, description, index, variant }: FeatureProps) {
  const Icon = ICON_MAP[icon] ?? Cpu;
  const isPrimary = variant === 'primary';

  return (
    <motion.div
      variants={isPrimary ? ITEM_ENTER : API_ITEM_ENTER}
      custom={index}
      className="border-(--border) hover:border-(--primary) bg-(--card) group flex items-start gap-3.5 rounded-[var(--radius-card)] border p-4 shadow-inner transition-all duration-200"
    >
      <div className="bg-(--background-focus) flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] transition-all duration-200 group-hover:scale-105">
        <Icon
          weight="duotone"
          size={16}
          className={isPrimary ? 'text-(--foreground)' : 'text-(--primary)'}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-(--foreground) font-heading text-[13px] font-semibold leading-snug">
          {title}
        </span>
        <p className="text-(--muted-foreground) font-ui text-[12px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── SupportCallout ─────────────────────────────────────────────── */

function SupportCallout({ support, isPrimary }: { support: SupportField; isPrimary: boolean }) {
  const colorClass = isPrimary ? 'text-(--foreground)' : 'text-(--primary)';

  if (typeof support === 'string') {
    return (
      <div className="bg-(--card) border-(--border) flex items-start gap-3 rounded-[var(--radius-card)] border px-4 py-3.5">
        <Info size={14} weight="fill" className={cn('mt-0.5 shrink-0', colorClass)} />
        <p className="text-(--muted-foreground) font-ui text-sm leading-relaxed">{support}</p>
      </div>
    );
  }

  return (
    <div className="bg-(--card) border-(--border) flex flex-col gap-2.5 rounded-[var(--radius-card)] border px-4 py-4">
      <div className="flex items-start gap-3">
        <PlugsConnected weight="duotone" size={16} className={cn('mt-0.5 shrink-0', colorClass)} />
        <p className="text-(--muted-foreground) font-ui text-sm leading-relaxed">
          {support.description}
        </p>
      </div>
      <p className="text-(--muted-foreground) font-ui pl-[28px] text-xs italic">{support.note}</p>
    </div>
  );
}

/* ── TechnologySection ──────────────────────────────────────────── */

export default function TechnologySection({ data, apiData }: TechnologySectionProps) {
  const [apiExpanded, setApiExpanded] = useState(false);

  return (
    <section
      aria-label={data.sectionLabel}
      className="section relative w-full overflow-hidden"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col gap-10"
          variants={SECTION_ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="split"
            eyebrow={data.sectionLabel}
            headline={data.headline}
            description={data.description}
          />

          {/* Tech feature grid — 2 cols */}
          <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            {data.features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={idx}
                variant="primary"
              />
            ))}
          </motion.div>

          {/* Tech support footer */}
          <div className="bg-(--card) border-(--border) flex items-start gap-3 rounded-[var(--radius-card)] border px-4 py-3.5">
            <Info size={14} weight="fill" className="text-(--foreground) mt-0.5 shrink-0" />
            <p className="text-(--muted-foreground) font-ui text-sm leading-relaxed">
              {data.support}
            </p>
          </div>

          {/* ── API Integration — collapsible ─────────────────────── */}
          <div className="border-(--border) overflow-hidden rounded-[var(--radius-card)] border shadow-inner">
            {/* Trigger */}
            <button
              type="button"
              onClick={() => setApiExpanded((v) => !v)}
              aria-expanded={apiExpanded}
              className={cn(
                'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2',
                apiExpanded ? 'bg-(--background-elevated)' : 'bg-(--card)',
              )}
            >
              <div className="flex items-center gap-3">
                <div className="bg-(--background-focus) flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)]">
                  <PlugsConnected weight="duotone" size={15} className="text-(--primary)" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-(--foreground) font-heading text-[13px] font-bold">
                    {apiData.sectionLabel}
                  </span>
                  <span className="text-(--muted-foreground) text-[11px]">
                    {apiExpanded ? 'Click to collapse' : apiData.description.slice(0, 72) + '…'}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: apiExpanded ? 180 : 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <CaretDown
                  weight="bold"
                  size={14}
                  className={apiExpanded ? 'text-(--primary)' : 'text-(--muted-foreground)'}
                />
              </motion.div>
            </button>

            {/* Expandable API content */}
            <AnimatePresence initial={false}>
              {apiExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-(--border) flex flex-col gap-6 border-t p-5">
                    {/* API headline */}
                    <p className="text-(--muted-foreground) max-w-[58ch] text-lg">
                      {apiData.description}
                    </p>

                    {/* API feature grid */}
                    <motion.div
                      className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.04 } },
                      }}
                    >
                      {apiData.features.map((feature, idx) => (
                        <FeatureCard
                          key={feature.title}
                          icon={feature.icon}
                          title={feature.title}
                          description={feature.description}
                          index={idx}
                          variant="accent"
                        />
                      ))}
                    </motion.div>

                    {/* API support */}
                    <SupportCallout support={apiData.support} isPrimary={false} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
