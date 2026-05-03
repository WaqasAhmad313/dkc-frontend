'use client';

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── Types ── */

type TabsVariant = 'underline' | 'pill' | 'segment';

interface Tab {
  key: string;
  label: string;
  icon?: React.ReactNode | undefined;
  badge?: string | number | undefined;
  disabled?: boolean | undefined;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string | undefined;
  activeTab?: string | undefined;
  onChange?: ((key: string) => void) | undefined;
  variant?: TabsVariant | undefined;
  fullWidth?: boolean | undefined;
  children?: ((activeTab: string) => React.ReactNode) | undefined;
  className?: string | undefined;
}

/* ── Tabs ── */

export function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledTab,
  onChange,
  variant = 'underline',
  fullWidth = false,
  children,
  className,
}: TabsProps) {
  const id = useId();
  const isControlled = controlledTab !== undefined;
  const [internalTab, setInternalTab] = useState(defaultTab ?? tabs[0]?.key ?? '');
  const activeTab = isControlled ? controlledTab : internalTab;

  function handleChange(key: string) {
    if (!isControlled) setInternalTab(key);
    onChange?.(key);
  }

  const barProps: TabBarProps = { tabs, activeTab, onChange: handleChange, fullWidth, id };

  return (
    <div className={cn('flex flex-col', className)}>
      {variant === 'underline' && <UnderlineTabs {...barProps} />}
      {variant === 'pill' && <PillTabs {...barProps} />}
      {variant === 'segment' && <SegmentTabs {...barProps} />}

      {/* Tab panel */}
      {children !== undefined && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`${id}-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${activeTab}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="focus:outline-none"
          >
            {children(activeTab)}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

/* ── Shared bar props ── */

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (key: string) => void;
  fullWidth: boolean;
  id: string;
}

/* ── Shared focus ring ── */

const focusRing =
  'focus:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]';

/* ── Badge pill ── */

function TabBadge({ badge, isActive }: { badge: string | number; isActive: boolean }) {
  return (
    <span
      className={cn(
        'ml-1 rounded-full px-1.5 py-0.5 text-xs font-semibold',
        isActive
          ? 'bg-(--primary) text-(--primary-foreground)'
          : 'bg-(--muted) text-(--muted-foreground)',
      )}
    >
      {badge}
    </span>
  );
}

/* ── Underline Variant ── */

function UnderlineTabs({ tabs, activeTab, onChange, fullWidth, id }: TabBarProps) {
  return (
    <div className="border-(--border) relative flex border-b" role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            role="tab"
            id={`${id}-tab-${tab.key}`}
            aria-selected={isActive}
            aria-controls={`${id}-panel-${tab.key}`}
            aria-disabled={tab.disabled === true}
            disabled={tab.disabled === true}
            onClick={() => tab.disabled !== true && onChange(tab.key)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-3 text-sm font-medium',
              'select-none transition-colors duration-150',
              focusRing,
              fullWidth && 'flex-1 justify-center',
              isActive
                ? 'text-(--foreground)'
                : 'text-(--muted-foreground) hover:text-(--foreground)',
              tab.disabled === true && 'cursor-not-allowed opacity-40',
            )}
          >
            {tab.icon !== undefined && (
              <span className="shrink-0" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            {tab.label}
            {tab.badge !== undefined && <TabBadge badge={tab.badge} isActive={isActive} />}

            {/* Animated underline indicator */}
            {isActive && (
              <motion.span
                layoutId={`${id}-underline`}
                className="bg-(--primary) absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ── Pill Variant ── */

function PillTabs({ tabs, activeTab, onChange, fullWidth, id }: TabBarProps) {
  return (
    <div
      className="border-(--border) bg-(--background-elevated) flex gap-1 rounded-[var(--radius-tabs)] border p-1"
      style={{ boxShadow: 'var(--shadow-xs)' }}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            role="tab"
            id={`${id}-tab-${tab.key}`}
            aria-selected={isActive}
            aria-controls={`${id}-panel-${tab.key}`}
            aria-disabled={tab.disabled === true}
            disabled={tab.disabled === true}
            onClick={() => tab.disabled !== true && onChange(tab.key)}
            className={cn(
              'relative flex items-center gap-2 rounded-[var(--radius-tabs)] px-4 py-2 text-sm font-medium',
              'select-none transition-colors duration-150',
              focusRing,
              fullWidth && 'flex-1 justify-center',
              isActive
                ? 'text-(--foreground)'
                : 'text-(--muted-foreground) hover:text-(--foreground)',
              tab.disabled === true && 'cursor-not-allowed opacity-40',
            )}
          >
            {/* Sliding active pill background */}
            {isActive && (
              <motion.span
                layoutId={`${id}-pill`}
                className="bg-(--card) absolute inset-0 rounded-[var(--radius-tabs)]"
                style={{ boxShadow: 'var(--shadow-sm)' }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon !== undefined && (
                <span className="shrink-0" aria-hidden="true">
                  {tab.icon}
                </span>
              )}
              {tab.label}
              {tab.badge !== undefined && <TabBadge badge={tab.badge} isActive={isActive} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Segment Variant ── */

function SegmentTabs({ tabs, activeTab, onChange, fullWidth, id }: TabBarProps) {
  return (
    <div
      className="border-(--border) bg-(--background-elevated) flex overflow-hidden rounded-[var(--radius-tabs)] border"
      style={{ boxShadow: 'var(--shadow-xs)' }}
      role="tablist"
    >
      {tabs.map((tab, idx) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            role="tab"
            id={`${id}-tab-${tab.key}`}
            aria-selected={isActive}
            aria-controls={`${id}-panel-${tab.key}`}
            aria-disabled={tab.disabled === true}
            disabled={tab.disabled === true}
            onClick={() => tab.disabled !== true && onChange(tab.key)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium',
              'select-none transition-colors duration-150',
              focusRing,
              'focus-visible:z-10',
              fullWidth && 'flex-1 justify-center',
              idx !== 0 && 'border-(--border) border-l',
              isActive
                ? 'bg-(--primary) text-(--primary-foreground)'
                : 'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted) bg-transparent',
              tab.disabled === true && 'cursor-not-allowed opacity-40',
            )}
          >
            {tab.icon !== undefined && (
              <span className="shrink-0" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
