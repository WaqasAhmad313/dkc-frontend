'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  MagnifyingGlass,
  CaretRight,
  X,
  CheckCircle,
  Warning,
  Info,
} from '@phosphor-icons/react';
import { Avatar } from '@/components/shared/Avatar';
import { Badge } from '@/components/shared/Badge';
import { cn } from '@/lib/utils';

/* ── Types ──────────────────────────────────────────────────── */

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface DashboardHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

/* ── Mock notifications ──────────────────────────────────────── */

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Application Approved',
    message: 'Your Dropshipping application has been approved.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'warning',
    title: 'Document Required',
    message: 'Please upload your business registration certificate.',
    time: '1 day ago',
    read: false,
  },
  {
    id: '3',
    type: 'info',
    title: 'KPI Review Scheduled',
    message: 'Your quarterly KPI review is scheduled for next week.',
    time: '3 days ago',
    read: true,
  },
];

const notifIcons = {
  success: <CheckCircle size={16} weight="fill" className="text-(--color-success)" />,
  warning: <Warning size={16} weight="fill" className="text-(--color-warning)" />,
  info: <Info size={16} weight="fill" className="text-(--color-info)" />,
};

/* ── Component ───────────────────────────────────────────────── */

export function DashboardHeader({ title, breadcrumbs, className }: DashboardHeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const unread = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <header
      className={cn(
        'flex items-center justify-between gap-4 px-6',
        'border-(--color-border) bg-(--color-surface-card) border-b',
        'shrink-0',
        className,
      )}
      style={{ height: 'var(--header-height)' }}
    >
      {/* Left — title and breadcrumbs */}
      <div className="flex min-w-0 flex-col justify-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-0.5 flex items-center gap-1">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1">
                {idx > 0 && (
                  <CaretRight size={11} className="text-(--color-text-subtle) shrink-0" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-(--color-text-muted) hover:text-(--color-accent) text-xs transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-(--color-text-muted) text-xs">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
        <h1 className="heading-4 truncate">{title}</h1>
      </div>

      {/* Right — actions */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Search */}
        <AnimatePresence mode="wait">
          {searchOpen ? (
            <motion.div
              key="search-input"
              className="bg-(--color-surface-subtle) border-(--color-border) flex items-center gap-2 rounded-md border px-3"
              initial={{ width: 36, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              exit={{ width: 36, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <MagnifyingGlass size={15} className="text-(--color-text-muted) shrink-0" />
              <input
                autoFocus
                placeholder="Search dashboard..."
                className="text-(--color-text-primary) placeholder:text-(--color-text-subtle) min-w-0 flex-1 bg-transparent py-2 text-sm outline-none"
                onBlur={() => setSearchOpen(false)}
              />
              <button onClick={() => setSearchOpen(false)}>
                <X
                  size={14}
                  className="text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors"
                />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="search-btn"
              onClick={() => setSearchOpen(true)}
              className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary) flex h-9 w-9 items-center justify-center rounded-md transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MagnifyingGlass size={17} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="text-(--color-text-muted) hover:bg-(--color-surface-subtle) hover:text-(--color-text-primary) relative flex h-9 w-9 items-center justify-center rounded-md transition-colors"
            aria-label="Notifications"
          >
            <Bell size={17} weight="duotone" />
            {unread > 0 && (
              <motion.span
                className="bg-(--color-accent) absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-bold text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                {unread}
              </motion.span>
            )}
          </button>

          {/* Notification panel */}
          <AnimatePresence>
            {notifOpen && (
              <motion.div
                className="card-elevated absolute right-0 top-full mt-2 w-80 overflow-hidden"
                style={{ padding: 0 }}
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.18, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {/* Panel header */}
                <div className="border-(--color-border) flex items-center justify-between border-b px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-(--color-text-primary) text-sm font-semibold">
                      Notifications
                    </span>
                    {unread > 0 && (
                      <Badge variant="accent" size="sm">
                        {unread} new
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={() => setNotifOpen(false)}
                    className="text-(--color-text-muted) hover:text-(--color-accent) text-xs font-medium transition-colors"
                  >
                    Mark all read
                  </button>
                </div>

                {/* Notification list */}
                <div className="scrollbar-thin max-h-72 overflow-y-auto">
                  {MOCK_NOTIFICATIONS.map((notif) => (
                    <div
                      key={notif.id}
                      className={cn(
                        'border-(--color-border) flex gap-3 border-b px-4 py-3 last:border-0',
                        'hover:bg-(--color-surface-subtle) cursor-pointer transition-colors',
                        !notif.read && 'bg-blue-50/30',
                      )}
                    >
                      <span className="mt-0.5 shrink-0">{notifIcons[notif.type]}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-(--color-text-primary) truncate text-sm font-medium">
                            {notif.title}
                          </p>
                          {!notif.read && (
                            <span className="bg-(--color-accent) mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                          )}
                        </div>
                        <p className="text-(--color-text-muted) mt-0.5 line-clamp-2 text-xs">
                          {notif.message}
                        </p>
                        <p className="text-(--color-text-subtle) mt-1 text-[10px]">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Panel footer */}
                <div className="border-(--color-border) border-t px-4 py-2.5">
                  <button className="text-(--color-accent) w-full text-center text-xs font-medium hover:underline">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User avatar */}
        <div className="border-(--color-border) flex items-center gap-2.5 border-l pl-2">
          <Avatar size="sm" firstName="Waqas" lastName="Dev" status="online" />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-(--color-text-primary) text-sm font-medium">Waqas Dev</span>
            <span className="text-(--color-text-muted) text-xs">Participant</span>
          </div>
        </div>
      </div>
    </header>
  );
}
