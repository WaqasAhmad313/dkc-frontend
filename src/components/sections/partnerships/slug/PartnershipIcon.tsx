'use client';

import type { ComponentType } from 'react';
import type { IconWeight } from '@/lib/icons';
import {
  Globe, ShieldCheck, ShieldWarning, CreditCard, Target, ShoppingCart, Package, Tag,
  Truck, Handshake, CheckCircle, Eye, Lock, Leaf, Lightbulb, Sparkle, Star, Medal,
  SealCheck, ChartBar, ChartPie, TrendUp, Wallet, Warehouse, Buildings, Storefront,
  Camera, PaintBrush, MapPin, MapTrifold, Megaphone, FileText, Gavel, BookOpen,
  ArrowUpRight, ArrowsLeftRight, ArrowRight, ShareNetwork, Bank, Users, Lightning,
  HandCoins, Calendar, Barcode, Palette, Cpu, Receipt, Clock, RocketLaunch,
  Archive, Book, Briefcase, Cube, Stack, Scales, DeviceMobile, Basket, PuzzlePiece,
  Network, Newspaper, Printer, Ticket, Thermometer, GraduationCap, Factory, Monitor,
  Code, Database, FilmStrip, Cloud, Radio, ArrowClockwise, ArrowCounterClockwise,
  Eyeglasses, PlugsConnected,
} from '@/lib/icons';

/* ── Icon map: Lucide-style string names → Phosphor components ───── */

const ICON_MAP: Record<string, ComponentType<{ size?: number; weight?: IconWeight; className?: string; style?: React.CSSProperties }>> = {
  // Arrows / navigation
  ArrowLeft: ArrowRight,
  ArrowRight: ArrowRight,
  ArrowUpRight: ArrowUpRight,
  ArrowLeftRight: ArrowsLeftRight,
  RefreshCcw: ArrowClockwise,
  Undo2: ArrowCounterClockwise,
  Share2: ShareNetwork,
  // Charts / analytics
  BarChart: ChartBar,
  BarChart2: ChartBar,
  BarChart3: ChartBar,
  PieChart: ChartPie,
  TrendingUp: TrendUp,
  Activity: TrendUp,
  // Commerce
  ShoppingCart: ShoppingCart,
  ShoppingBag: Basket,
  ShoppingBasket: Basket,
  Package: Package,
  PackageCheck: Package,
  Container: Package,
  Tag: Tag,
  Wallet: Wallet,
  CreditCard: CreditCard,
  DollarSign: CreditCard,
  Receipt: Receipt,
  HandCoins: HandCoins,
  // Buildings / places
  Building: Buildings,
  Building2: Buildings,
  Store: Storefront,
  Warehouse: Warehouse,
  Factory: Factory,
  Landmark: Bank,
  // People / trust
  Users: Users,
  UserCheck: Users,
  UserSquare: Users,
  Shield: ShieldCheck,
  ShieldCheck: ShieldCheck,
  ShieldAlert: ShieldWarning,
  BadgeCheck: SealCheck,
  Award: Medal,
  Handshake: Handshake,
  HeartHandshake: Handshake,
  IdCard: SealCheck,
  // Globe / map
  Globe: Globe,
  Map: MapTrifold,
  MapPin: MapPin,
  Compass: MapTrifold,
  // Tech
  Cpu: Cpu,
  Database: Database,
  Server: Database,
  ServerCog: Database,
  Cloud: Cloud,
  Code: Code,
  Network: Network,
  Monitor: Monitor,
  PlugZap: PlugsConnected,
  Settings: Target,
  Cog: Target,
  Sliders: Target,
  // Logistics
  Truck: Truck,
  Airplane: Globe,
  // Craft / design
  Brush: PaintBrush,
  Palette: Palette,
  Camera: Camera,
  Film: FilmStrip,
  // Content / docs
  FileText: FileText,
  FileBarChart: FileText,
  FileCheck: FileText,
  FileSearch: FileText,
  FileSignature: FileText,
  ScrollText: FileText,
  Book: Book,
  BookOpen: BookOpen,
  BookOpenCheck: BookOpen,
  ClipboardCheck: FileText,
  ClipboardList: FileText,
  ListChecks: FileText,
  Newspaper: Newspaper,
  Archive: Archive,
  Folder: Archive,
  Briefcase: Briefcase,
  // Objects
  Cube: Cube,
  Box: Cube,
  Boxes: Cube,
  Layers: Stack,
  Layout: Stack,
  LayoutDashboard: Stack,
  LayoutGrid: Stack,
  LayoutTemplate: Stack,
  Puzzle: PuzzlePiece,
  Lock: Lock,
  Eye: Eye,
  Glasses: Eyeglasses,
  Scale: Scales,
  Gavel: Gavel,
  // Growth / nature
  Leaf: Leaf,
  Sprout: Leaf,
  // Communication
  Megaphone: Megaphone,
  MessageSquare: Megaphone,
  Radio: Radio,
  // Misc
  Lightbulb: Lightbulb,
  Sparkles: Sparkle,
  Star: Star,
  Rocket: RocketLaunch,
  Target: Target,
  Barcode: Barcode,
  CheckCircle: CheckCircle,
  Calendar: Calendar,
  CalendarClock: Calendar,
  Clock: Clock,
  Printer: Printer,
  Ticket: Ticket,
  Thermometer: Thermometer,
  GraduationCap: GraduationCap,
  Link: ShareNetwork,
  Link2: ShareNetwork,
  Accessibility: Users,
  Scan: Barcode,
  ScanLine: Barcode,
  TabletSmartphone: DeviceMobile,
  Tablet: DeviceMobile,
  Video: Monitor,
  Image: Camera,
  Workflow: PlugsConnected,
  Repeat: ArrowClockwise,
};

/* ── PartnershipIcon — resolves a string icon name to a Phosphor component ── */

export interface PartnershipIconProps {
  name: string;
  size?: number;
  weight?: IconWeight;
  className?: string;
  style?: React.CSSProperties;
}

export function PartnershipIcon({ name, size = 20, weight = 'regular', className, style }: PartnershipIconProps) {
  const Icon = ICON_MAP[name] ?? Target;
  return (
    <Icon
      size={size}
      weight={weight}
      {...(className !== undefined && { className })}
      {...(style !== undefined && { style })}
    />
  );
}
