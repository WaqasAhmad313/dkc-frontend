'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  Archive,
  Bank,
  Barcode,
  Book,
  BookOpen,
  Buildings,
  CalendarBlank,
  Camera,
  ChartBar,
  ChartLine,
  ChartPie,
  CheckCircle,
  ClipboardText,
  Cloud,
  Code,
  Cpu,
  CreditCard,
  Cube,
  Database,
  DeviceMobile,
  Eye,
  Factory,
  FileText,
  FilmStrip,
  Folder,
  Gavel,
  Gear,
  GitBranch,
  Globe,
  GraduationCap,
  HandCoins,
  Handshake,
  Layout,
  Leaf,
  Lightbulb,
  LinkIcon,
  ListChecks,
  Lock,
  MapPin,
  MapTrifold,
  Medal,
  Megaphone,
  Monitor,
  MagnifyingGlass,
  Network,
  Newspaper,
  Package,
  Palette,
  PaintBrush,
  Plant,
  PlugsConnected,
  Printer,
  Radio,
  Receipt,
  RocketLaunch,
  Scales,
  Scroll,
  SealCheck,
  ShareNetwork,
  ShieldCheck,
  ShieldWarning,
  ShoppingBag,
  ShoppingCart,
  Basket,
  SlidersHorizontal,
  Sparkle,
  Stack,
  Star,
  Storefront,
  Tag,
  Target,
  Thermometer,
  Ticket,
  TrendUp,
  Truck,
  User,
  UserCheck,
  Users,
  Wallet,
  Warehouse,
  Warning,
  Wrench,
  ArrowClockwise,
  ArrowCounterClockwise,
} from '@/lib/icons';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface CapabilityItem {
  title: string;
  icon: string;
  items: readonly string[];
}

interface PlatformValueRole {
  title: string;
  items: readonly string[];
}

interface ImpactItem {
  title: string;
  description: string;
}

interface CapabilitiesSectionData {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  capabilities: readonly CapabilityItem[];
  platformValue: {
    buyer: PlatformValueRole;
    vendor: PlatformValueRole;
  };
  impact: readonly ImpactItem[];
}

export interface CoreCapabilitiesSectionProps {
  capabilitiesSection: CapabilitiesSectionData;
  role: Role;
}

/* ── Icon map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  Archive,
  Book,
  BookOpen,
  Camera,
  Cloud,
  Code,
  Cpu,
  CreditCard,
  Cube,
  Database,
  Eye,
  Factory,
  Folder,
  Gavel,
  Gear,
  Globe,
  GraduationCap,
  HandCoins,
  Handshake,
  Leaf,
  Lightbulb,
  ListChecks,
  Lock,
  MapPin,
  Medal,
  Megaphone,
  Monitor,
  Network,
  Newspaper,
  Package,
  Palette,
  Printer,
  Radio,
  Receipt,
  Scales,
  Star,
  Tag,
  Target,
  Thermometer,
  Ticket,
  Truck,
  Users,
  Wallet,
  Warehouse,
  Wrench,
  Activity: ChartLine,
  AlertTriangle: Warning,
  ArrowLeftRight: Megaphone,
  Award: Medal,
  BadgeCheck: SealCheck,
  BarChart: ChartBar,
  BarChart2: ChartBar,
  BarChart3: ChartBar,
  Barcode,
  BookOpenCheck: BookOpen,
  Box: Package,
  Boxes: Package,
  Boxes2: Stack,
  Brush: PaintBrush,
  Building: Buildings,
  Building2: Buildings,
  Calculator: CreditCard,
  CalendarClock: CalendarBlank,
  CheckCircle,
  CheckSquare: ListChecks,
  ClipboardCheck: ClipboardText,
  ClipboardList: ClipboardText,
  Cog: Gear,
  Container: Package,
  DollarSign: CreditCard,
  FileBarChart: ChartBar,
  FileCheck: FileText,
  FileSearch: FileText,
  FileSignature: FileText,
  FileText,
  Film: FilmStrip,
  Glasses: Eye,
  HeartHandshake: Handshake,
  IdCard: Target,
  Image: Camera,
  Landmark: Bank,
  Layers: Stack,
  Layout,
  LayoutDashboard: Layout,
  LayoutGrid: Layout,
  LayoutTemplate: Layout,
  Link: LinkIcon,
  Link2: LinkIcon,
  Map: MapTrifold,
  MessageSquare: Megaphone,
  PackageCheck: Package,
  PieChart: ChartPie,
  PlugZap: PlugsConnected,
  Puzzle: PlugsConnected,
  PuzzlePiece: PlugsConnected,
  RefreshCcw: ArrowClockwise,
  Repeat: ArrowClockwise,
  Rocket: RocketLaunch,
  Scale: Scales,
  Scan: Barcode,
  ScanLine: Barcode,
  ScrollText: Scroll,
  Search: MagnifyingGlass,
  Server: Database,
  ServerCog: Database,
  Settings: Gear,
  Share2: ShareNetwork,
  Shield: ShieldCheck,
  ShieldAlert: ShieldWarning,
  ShieldCheck,
  ShoppingBag,
  ShoppingBasket: Basket,
  ShoppingCart,
  Sliders: SlidersHorizontal,
  Sparkles: Sparkle,
  Sprout: Plant,
  Store: Storefront,
  Storefront,
  Tablet: DeviceMobile,
  TabletSmartphone: DeviceMobile,
  TrendingUp: TrendUp,
  Undo2: ArrowCounterClockwise,
  UserCheck,
  UserSquare: User,
  Video: DeviceMobile,
  Workflow: GitBranch,
};

const LOWER_DELAYS = ['', 'delay-100', 'delay-200'] as const;

/* ── CapabilityCard — icon + title only, no items ───────────────── */

interface CapabilityCardProps {
  cap: CapabilityItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

function CapabilityCard({ cap, index, isActive, onActivate }: CapabilityCardProps) {
  const Icon = ICON_MAP[cap.icon] ?? Package;

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onActivate();
      }}
      aria-pressed={isActive}
      className={cn(
        'border-(--border) cursor-pointer rounded-[var(--radius-card)] border p-5 transition-all duration-300',
        isActive
          ? 'bg-(--background-focus) border-(--border) shadow-(--shadow-md) -translate-y-0.5 scale-[1.02] opacity-100'
          : 'bg-(--background-elevated) opacity-60 hover:opacity-100',
      )}
    >
      {/* Top row — icon + index number */}
      <div className="flex items-center justify-between">
        <div
          className={cn(
            'flex size-9 items-center justify-center rounded-[var(--radius-card-sm)] shadow-inner',
            isActive ? 'bg-(--primary)/10' : 'bg-(--muted)',
          )}
        >
          <Icon
            weight="duotone"
            size={17}
            className={isActive ? 'text-(--primary)' : 'text-(--muted-foreground)'}
          />
        </div>
        <span className="font-data text-(--muted-foreground) text-[10px] uppercase tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-heading mt-4 text-base font-semibold leading-snug',
          isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)',
        )}
      >
        {cap.title}
      </h3>
    </div>
  );
}

/* ── CoreCapabilitiesSection ────────────────────────────────────── */

export default function CoreCapabilitiesSection({
  capabilitiesSection,
  role,
}: CoreCapabilitiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lowerVisible, setLowerVisible] = useState(false);
  const lowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lowerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setLowerVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const capabilities = capabilitiesSection.capabilities.slice(0, 4);
  const activeCapability = capabilities[activeIndex] ?? capabilities[0]!;
  const roleKey = role === 'vendor' ? 'vendor' : 'buyer';
  const roleData = capabilitiesSection.platformValue[roleKey];

  return (
    <section
      aria-label={capabilitiesSection.sectionLabel}
      className="section relative w-full overflow-hidden"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="container relative z-10">
        <SectionHeader
          layout="centered"
          eyebrow={capabilitiesSection.sectionLabel}
          headline={capabilitiesSection.headline}
          description={capabilitiesSection.subheadline}
        />

        {/* ── Active Spotlight Grid ──────────────────────────────── */}
        <div className="relative mt-12">
          {/* Capability nav cards */}
          <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((cap, idx) => (
              <CapabilityCard
                key={cap.title}
                cap={cap}
                index={idx}
                isActive={activeIndex === idx}
                onActivate={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Detail panel — remounts on activeIndex change to replay animation */}
          <div className="bg-(--background-elevated) border-(--border) shadow-(--shadow-md) relative z-10 mt-8 rounded-[var(--radius-card)] border p-6">
            <div key={activeIndex} className="animate-slide-up">
              <h3 className="font-heading text-(--foreground) text-lg font-semibold">
                {activeCapability.title}
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                {activeCapability.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="bg-(--primary) mt-1.5 size-1.5 shrink-0 rounded-full"
                    />
                    <span className="text-(--muted-foreground) text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Role value + Impact (scroll-revealed) ──────────────── */}
        <div ref={lowerRef}>
          {/* Role value label */}
          <p className="font-label text-(--muted-foreground) mb-4 mt-10 text-[10px] uppercase tracking-widest">
            {roleData.title}
          </p>

          {/* Role value grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {roleData.items.map((item, idx) => (
              <div
                key={item}
                className={cn(
                  'bg-(--background-elevated) border-(--border) shadow-(--shadow-sm) rounded-[var(--radius-card)] border p-5',
                  lowerVisible ? `animate-slide-up ${LOWER_DELAYS[idx] ?? ''}` : 'opacity-0',
                )}
              >
                <p className="text-(--muted-foreground) text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Impact grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {capabilitiesSection.impact.map((item, idx) => (
              <div
                key={item.title}
                className={cn(
                  'bg-(--background-elevated) border-(--border) shadow-(--shadow-sm) rounded-[var(--radius-card)] border p-5',
                  lowerVisible ? `animate-slide-up ${LOWER_DELAYS[idx] ?? ''}` : 'opacity-0',
                )}
              >
                <h4 className="text-(--foreground) font-heading text-sm font-semibold">
                  {item.title}
                </h4>
                <p className="text-(--muted-foreground) mt-2 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
