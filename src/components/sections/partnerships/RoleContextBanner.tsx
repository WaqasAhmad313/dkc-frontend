'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { Chip, ChipGroup } from '@/components/shared/Chip';
import { roleContextBanner } from '@/content/partnership.content';

/* ── Types ──────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface RoleContextBannerProps {
  role: Role;
  onRoleSwitch: () => void;
}

/* ── Static per-role UI data ────────────────────────────────────── */

const ROLE_TAGS: Record<Role, readonly string[]> = {
  buyer: ['Sourcing', 'Procurement', 'Market Access', 'Biz Growth'],
  vendor: ['Supply', 'Export', 'Market Entry', 'Commercial Growth'],
};

const SMART_SUMMARY: Record<Role, { decisionLens: string; nextFocus: string }> = {
  buyer: {
    decisionLens: 'Sourcing fit & commercial risk tolerance',
    nextFocus: 'Filter by buyer type, then review entry requirements',
  },
  vendor: {
    decisionLens: 'Readiness level & production capacity',
    nextFocus: 'Filter by vendor type, then check progression speed',
  },
};

/* ── Role tint config ───────────────────────────────────────────── */

const TINT: Record<
  Role,
  {
    sectionBg: string;
    sectionBorder: string;
    blockBg: string;
    dotColor: string;
    chipVariant: 'success' | 'default';
    labelColor: string;
  }
> = {
  buyer: {
    sectionBg: 'bg-(--primary)/6',
    sectionBorder: 'border-(--primary)/14',
    blockBg: 'bg-(--primary)/4',
    dotColor: 'var(--primary)',
    chipVariant: 'success',
    labelColor: 'text-(--primary)',
  },
  vendor: {
    sectionBg: 'bg-(--secondary)/6',
    sectionBorder: 'border-(--secondary)/18',
    blockBg: 'bg-(--secondary)/4',
    dotColor: 'var(--secondary)',
    chipVariant: 'default',
    labelColor: 'text-(--secondary)',
  },
};

/* ── Sub-components ─────────────────────────────────────────────── */

/* Active dot indicator */
function ActiveDot({ color }: { color: string }) {
  return (
    <span className="relative flex size-2 shrink-0">
      <span
        className="absolute inline-flex size-full animate-ping rounded-full opacity-60"
        style={{
          backgroundColor: color,
        }}
        aria-hidden="true"
      />
      <span
        className="relative inline-flex size-2 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
    </span>
  );
}

/* Overline label — shared across both blocks */
function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-label text-[10px] font-semibold uppercase tracking-wider text-(--muted-foreground)">
      {children}
    </span>
  );
}

/* Summary row — label + value pair */
function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-(--muted-foreground)">
        {label}
      </span>
      <span
        className="text-sm font-medium leading-snug text-(--foreground)"
      >
        {value}
      </span>
    </div>
  );
}

/* ── Block 1 — Role Context ─────────────────────────────────────── */

function RoleContextBlock({ role }: { role: Role }) {
  const content = roleContextBanner[role];
  const tint = TINT[role];
  const tags = ROLE_TAGS[role];

  return (
    <div className={cn('flex flex-col gap-3 rounded-[var(--radius-card-sm)] p-4', tint.blockBg)}>
      {/* Title row */}
      <div className="flex flex-wrap items-center gap-2">
        <ActiveDot color={tint.dotColor} />
        <span
          className={cn('text-sm font-semibold leading-none', tint.labelColor)}
        >
          {content.title}
        </span>
        <Chip variant={tint.chipVariant} size="sm">
          Current Lens
        </Chip>
      </div>

      {/* Description */}
      <p className="text-sm text-(--muted-foreground) max-w-[52ch]">
        {content.body}
      </p>

      {/* Tags */}
      <ChipGroup gap="sm" wrap>
        {tags.map((tag) => (
          <Chip key={tag} variant="default" size="sm">
            {tag}
          </Chip>
        ))}
      </ChipGroup>
    </div>
  );
}

/* ── Block 2 — Smart Summary ────────────────────────────────────── */

function SmartSummaryBlock({ role }: { role: Role }) {
  const tint = TINT[role];
  const summary = SMART_SUMMARY[role];

  return (
    <div className={cn('flex flex-col gap-3 rounded-[var(--radius-card-sm)] p-4', tint.blockBg)}>
      <BlockLabel>Smart Summary</BlockLabel>

      {/* Divider */}
      <div
        className="h-px w-full bg-(--border)"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3">
        <SummaryRow label="Decision Lens" value={summary.decisionLens} />
        <SummaryRow label="Next Focus" value={summary.nextFocus} />
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────── */

export function RoleContextBanner({ role, onRoleSwitch }: RoleContextBannerProps) {
  const content = roleContextBanner[role];
  const tint = TINT[role];

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn('w-full border-b', tint.sectionBg, tint.sectionBorder)}
    >
      <div className="container py-4">
        {/*
         * Desktop: [left blocks] [right action]
         * Mobile:  stack vertically, action below
         */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          {/* ── LEFT: two blocks ────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex-1">
            <RoleContextBlock role={role} />
            <SmartSummaryBlock role={role} />
          </div>

          {/* ── RIGHT: switch action card ────────────────────────── */}
          <div
            className={cn('flex shrink-0 flex-col justify-between gap-4 rounded-[var(--radius-card-sm)] p-4 lg:w-56', tint.blockBg)}
          >
            {/* Top — label + description */}
            <div className="flex flex-col gap-1.5">
              <BlockLabel>Viewing As</BlockLabel>
              <p
                className={cn('text-sm font-semibold leading-snug', tint.labelColor)}
              >
                {content.title}
              </p>
              <p className="text-xs text-(--muted-foreground)">
                {role === 'buyer'
                  ? 'Not a buyer? Switch to see vendor supply paths.'
                  : 'Not a vendor? Switch to see buyer sourcing paths.'}
              </p>
            </div>

            {/* Bottom — action */}
            <Button variant="outline" size="sm" fullWidth onClick={onRoleSwitch}>
              {content.switchLabel}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
