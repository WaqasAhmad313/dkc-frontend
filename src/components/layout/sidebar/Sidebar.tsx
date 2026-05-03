'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SquaresFour,
  ChartLine,
  FileText,
  CalendarCheck,
  Package,
  CreditCard,
  ArrowsLeftRight,
  Headset,
  CaretLeft,
  CaretRight,
  SignOut,
  Bell,
} from '@phosphor-icons/react';
import { Avatar } from '@/components/shared/Avatar';
import { Badge } from '@/components/shared/Badge';
import { Tooltip } from '@/components/shared/Tooltip';
import { cn } from '@/lib/utils';
import { USER_ROUTES } from '@dkc/constants';

/* ── Nav Config ─────────────────────────────────────────────── */

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeVariant?: 'accent' | 'danger' | 'success' | 'warning';
}

interface SidebarGroup {
  heading?: string;
  items: SidebarItem[];
}

const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    items: [
      {
        label: 'Dashboard',
        href: USER_ROUTES.DASHBOARD,
        icon: <SquaresFour size={18} weight="duotone" />,
      },
    ],
  },
  {
    heading: 'Partnership',
    items: [
      {
        label: 'My Path',
        href: USER_ROUTES.MY_PATH,
        icon: <ArrowsLeftRight size={18} weight="duotone" />,
      },
      {
        label: 'KPI & Retention',
        href: USER_ROUTES.KPI,
        icon: <ChartLine size={18} weight="duotone" />,
      },
      {
        label: 'Onboarding',
        href: USER_ROUTES.ONBOARDING,
        icon: <Package size={18} weight="duotone" />,
        badge: 3,
        badgeVariant: 'accent',
      },
      {
        label: 'Placement',
        href: USER_ROUTES.PLACEMENT,
        icon: <ArrowsLeftRight size={18} weight="duotone" />,
      },
    ],
  },
  {
    heading: 'Compliance',
    items: [
      {
        label: 'Documents',
        href: USER_ROUTES.DOCUMENTS,
        icon: <FileText size={18} weight="duotone" />,
        badge: 2,
        badgeVariant: 'warning',
      },
      {
        label: 'Meetings',
        href: USER_ROUTES.MEETINGS,
        icon: <CalendarCheck size={18} weight="duotone" />,
      },
    ],
  },
  {
    heading: 'Commercial',
    items: [
      { label: 'Package', href: USER_ROUTES.PACKAGE, icon: <Package size={18} weight="duotone" /> },
      {
        label: 'Billing',
        href: USER_ROUTES.BILLING,
        icon: <CreditCard size={18} weight="duotone" />,
      },
    ],
  },
  {
    heading: 'Help',
    items: [
      { label: 'Support', href: USER_ROUTES.SUPPORT, icon: <Headset size={18} weight="duotone" /> },
    ],
  },
];

/* ── Component ───────────────────────────────────────────────── */

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      className={cn(
        'relative flex h-full flex-col',
        'bg-(--color-surface-card)',
        'border-(--color-border) border-r',
        className,
      )}
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ minWidth: collapsed ? 72 : 260 }}
    >
      {/* Logo area */}
      <div
        className={cn('border-(--color-border) flex items-center gap-3 border-b px-4', 'shrink-0')}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="bg-(--color-primary) flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold text-white">
          DK
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              className="flex flex-col overflow-hidden leading-none"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-(--color-text-primary) whitespace-nowrap text-sm font-bold tracking-tight">
                De Koshur Crafts
              </span>
              <span className="text-(--color-text-muted) whitespace-nowrap text-[10px] font-medium uppercase tracking-widest">
                B2B Connect
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="scrollbar-thin flex-1 overflow-y-auto py-3">
        {SIDEBAR_GROUPS.map((group, gIdx) => (
          <div key={gIdx} className="mb-1">
            {/* Group heading */}
            <AnimatePresence>
              {!collapsed && group.heading && (
                <motion.p
                  className="text-(--color-text-muted) px-4 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {group.heading}
                </motion.p>
              )}
              {collapsed && group.heading && (
                <motion.div
                  className="bg-(--color-border) mx-3 my-2 h-px"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            {/* Items */}
            {group.items.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== USER_ROUTES.DASHBOARD && pathname.startsWith(item.href));

              return collapsed ? (
                <Tooltip key={item.href} content={item.label} position="right" delay={200}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative mx-2 my-0.5 flex items-center justify-center',
                      'h-10 w-10 rounded-md transition-colors duration-150',
                      isActive
                        ? 'bg-(--color-primary) text-white'
                        : 'text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary)',
                    )}
                  >
                    {item.icon}
                    {item.badge !== undefined && (
                      <span className="bg-(--color-accent) absolute right-0.5 top-0.5 h-2 w-2 rounded-full" />
                    )}
                  </Link>
                </Tooltip>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'mx-2 my-0.5 flex items-center gap-3 rounded-md px-3 py-2.5',
                    'text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-(--color-primary) text-white'
                      : 'text-(--color-text-secondary) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary)',
                  )}
                >
                  <span
                    className={cn(
                      'shrink-0',
                      isActive ? 'text-white' : 'text-(--color-text-muted)',
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge !== undefined && (
                    <Badge variant={item.badgeVariant ?? 'accent'} size="sm">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User area */}
      <div className="border-(--color-border) shrink-0 border-t p-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="Notifications" position="right" delay={200}>
              <button className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary) relative flex h-10 w-10 items-center justify-center rounded-md transition-colors">
                <Bell size={18} weight="duotone" />
                <span className="bg-(--color-accent) absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full" />
              </button>
            </Tooltip>
            <Tooltip content="Sign Out" position="right" delay={200}>
              <button className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-danger) flex h-10 w-10 items-center justify-center rounded-md transition-colors">
                <SignOut size={18} weight="duotone" />
              </button>
            </Tooltip>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar size="sm" firstName="Waqas" lastName="Dev" status="online" />
            <div className="min-w-0 flex-1">
              <p className="text-(--color-text-primary) truncate text-sm font-medium">Waqas Dev</p>
              <p className="text-(--color-text-muted) truncate text-xs">Participant</p>
            </div>
            <div className="flex items-center gap-1">
              <Tooltip content="Notifications" position="top" delay={200}>
                <button className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary) relative rounded-md p-1.5 transition-colors">
                  <Bell size={16} weight="duotone" />
                  <span className="bg-(--color-accent) absolute right-1 top-1 h-1.5 w-1.5 rounded-full" />
                </button>
              </Tooltip>
              <Tooltip content="Sign Out" position="top" delay={200}>
                <button className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-danger) rounded-md p-1.5 transition-colors">
                  <SignOut size={16} weight="duotone" />
                </button>
              </Tooltip>
            </div>
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed((v) => !v)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className={cn(
          'absolute -right-3 top-20 z-10',
          'h-6 w-6 rounded-full',
          'bg-(--color-surface-card) border-(--color-border) border',
          'flex items-center justify-center',
          'text-(--color-text-muted) hover:text-(--color-text-primary)',
          'hover:border-(--color-border-strong)',
          'shadow-(--shadow-sm) transition-colors duration-150',
        )}
      >
        <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <CaretLeft size={11} weight="bold" />
        </motion.span>
      </button>
    </motion.aside>
  );
}
