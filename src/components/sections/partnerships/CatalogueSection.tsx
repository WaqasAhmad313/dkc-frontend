'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';
import { Chip, ChipGroup } from '@/components/shared/Chip';
import { Badge } from '@/components/shared/Badge';
import { Card, CardDivider } from '@/components/shared/Card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import {
  catalogueSection,
  subPartnershipCards,
  filterBuyerPartnerships,
  filterVendorPartnerships,
  sortBuyerPartnerships,
  sortVendorPartnerships,
  getComparisonCards,
} from '@/content/partnership.content';
import type {
  BuyerFilterState,
  VendorFilterState,
  PartnershipCard,
  PathwayId,
} from '@/content/partnership.content';

/* ── Types ──────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface CatalogueSectionProps {
  role: Role;
  buyerState: BuyerFilterState;
  vendorState: VendorFilterState;
  onBuyerChange: (state: BuyerFilterState) => void;
  onVendorChange: (state: VendorFilterState) => void;
}

/* ── Constants ──────────────────────────────────────────────────── */

/* Pathway ordering — always rendered in this sequence */
const PATHWAY_ORDER: PathwayId[] = [
  'core-trade',
  'brand-expansion',
  'collaborative',
  'institutional',
];

const PATHWAY_LABEL: Record<PathwayId, string> = {
  'core-trade': 'Core Trade',
  'brand-expansion': 'Brand Expansion',
  collaborative: 'Collaborative',
  institutional: 'Institutional',
};

const PATHWAY_CHIP: Record<PathwayId, 'success' | 'accent' | 'default' | 'primary'> = {
  'core-trade': 'success',
  'brand-expansion': 'accent',
  collaborative: 'default',
  institutional: 'primary',
};

/**
 * Pathway accent colors — used for the top border stripe on cards
 * and the pathway group heading underline.
 */
const PATHWAY_COLOR: Record<PathwayId, string> = {
  'core-trade': 'var(--primary)',
  'brand-expansion': 'var(--secondary)',
  collaborative: 'var(--border)',
  institutional: 'var(--signature)',
};

const ENTRY_BADGE: Record<string, 'success' | 'warning' | 'error'> = {
  low: 'success',
  moderate: 'warning',
  advanced: 'error',
};

const RISK_LABEL: Record<string, string> = {
  low: 'Low',
  balanced: 'Balanced',
  high: 'High',
};

const SPEED_LABEL: Record<string, string> = {
  fast: 'Fast',
  steady: 'Steady',
  'long-term': 'Long-Term',
};

/* ── Helpers ─────────────────────────────────────────────────────── */

function countActiveFilters(state: BuyerFilterState | VendorFilterState): number {
  const { sortBy: _s, ...rest } = state as Record<string, unknown>;
  return Object.values(rest).filter(Boolean).length;
}

function getVisibleCards(
  role: Role,
  buyer: BuyerFilterState,
  vendor: VendorFilterState,
): PartnershipCard[] {
  if (role === 'buyer') {
    return sortBuyerPartnerships(filterBuyerPartnerships(subPartnershipCards, buyer), buyer.sortBy);
  }
  return sortVendorPartnerships(
    filterVendorPartnerships(subPartnershipCards, vendor),
    vendor.sortBy,
  );
}

/**
 * Group visible cards by pathway, preserving PATHWAY_ORDER.
 * Empty pathway groups are omitted.
 */
function groupByPathway(
  cards: PartnershipCard[],
): { pathway: PathwayId; cards: PartnershipCard[] }[] {
  return PATHWAY_ORDER.map((pathway) => ({
    pathway,
    cards: cards.filter((c) => c.pathway === pathway),
  })).filter((g) => g.cards.length > 0);
}

/* ── FilterBar ───────────────────────────────────────────────────── */

interface FilterBarProps {
  role: Role;
  buyerState: BuyerFilterState;
  vendorState: VendorFilterState;
  onBuyerChange: (s: BuyerFilterState) => void;
  onVendorChange: (s: VendorFilterState) => void;
  matchCount: number;
  totalCount: number;
  activeCount: number;
}

function FilterBar({
  role,
  buyerState,
  vendorState,
  onBuyerChange,
  onVendorChange,
  matchCount,
  totalCount,
  activeCount,
}: FilterBarProps) {
  const content = catalogueSection[role];

  function getVal(id: string): string {
    const s =
      role === 'buyer'
        ? (buyerState as Record<string, string | undefined>)
        : (vendorState as Record<string, string | undefined>);
    return s[id] ?? '';
  }

  function handleChange(id: string, value: string) {
    const next = value === '' ? undefined : value;
    if (role === 'buyer') {
      onBuyerChange({ ...buyerState, [id]: next } as BuyerFilterState);
    } else {
      onVendorChange({ ...vendorState, [id]: next } as VendorFilterState);
    }
  }

  function handleSort(value: string) {
    if (role === 'buyer') {
      onBuyerChange({
        ...buyerState,
        sortBy: value as 'recommended' | 'low-risk' | 'scale-potential' | 'institutional',
      });
    } else {
      onVendorChange({
        ...vendorState,
        sortBy: value as 'recommended' | 'easy-entry' | 'scale-potential' | 'institutional',
      });
    }
  }

  function handleClear() {
    role === 'buyer' ? onBuyerChange({}) : onVendorChange({});
  }

  const activeSortValue = role === 'buyer' ? buyerState.sortBy : vendorState.sortBy;
  const allMatch = matchCount === totalCount;
  const noMatch = matchCount === 0;

  return (
    <div
      className="rounded-[var(--radius-card-sm)] border border-(--border) bg-(--card) p-4 shadow-(--shadow-sm) sm:p-5"
    >
      {/* Dropdowns + match pill */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.filters.map((filter) => {
            const val = getVal(filter.id);
            const hasVal = val !== '';
            return (
              <div key={filter.id} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={filter.id}
                    className="font-label text-[11px] font-semibold uppercase tracking-wide text-(--foreground)"
                  >
                    {filter.label}
                  </label>
                  {hasVal && (
                    <button
                      type="button"
                      onClick={() => handleChange(filter.id, '')}
                      className="text-[10px] font-medium text-(--muted-foreground) transition-colors duration-150 hover:text-(--destructive)"
                      aria-label={`Clear ${filter.label}`}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="relative">
                  <select
                    id={filter.id}
                    value={val}
                    onChange={(e) => handleChange(filter.id, e.target.value)}
                    className={cn(
                      'input-base input-sm w-full cursor-pointer appearance-none pr-7 bg-(--background)',
                      hasVal && 'border-(--primary) text-(--primary) font-medium',
                    )}
                  >
                    <option value="">{filter.helpText}</option>
                    {filter.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <span
                    className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={cn(hasVal ? 'text-(--primary)' : 'text-(--muted-foreground)')}
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live match count pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={matchCount}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'flex shrink-0 items-center gap-1.5 self-start rounded-full border px-3 py-1.5',
              'text-xs font-semibold tabular-nums sm:self-auto',
              noMatch
                ? 'border-(--destructive)/25 bg-(--destructive-soft) text-(--destructive)'
                : !allMatch
                  ? 'border-(--primary)/30 bg-(--primary)/10 text-(--primary)'
                  : 'border-(--border) bg-(--muted) text-(--muted-foreground)',
            )}
          >
            <span
              className={cn(
                'size-1.5 rounded-full',
                noMatch
                  ? 'bg-(--destructive)'
                  : !allMatch
                    ? 'bg-(--primary)'
                    : 'bg-(--muted-foreground)',
              )}
              aria-hidden="true"
            />
            {matchCount} / {totalCount}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div
        className="my-3.5 h-px bg-(--border)"
        aria-hidden="true"
      />

      {/* Sort row — wrap so all chips are always visible, no scroll */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-label text-xs text-(--muted-foreground) shrink-0"
          >
            Sort
          </span>
          {/* wrap=true — no overflow scroll, all chips always visible */}
          <ChipGroup wrap gap="sm">
            {content.sort.options.map((opt) => {
              const isActive = (activeSortValue ?? 'recommended') === opt.value;
              return (
                <Chip
                  key={opt.value}
                  variant={isActive ? 'primary' : 'default'}
                  size="sm"
                  active={isActive}
                  onClick={() => handleSort(opt.value)}
                >
                  {opt.label}
                </Chip>
              );
            })}
          </ChipGroup>
        </div>

        <AnimatePresence>
          {activeCount > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.14 }}
              className="flex shrink-0 items-center gap-2"
            >
              <span className="text-xs text-(--muted-foreground)">
                {activeCount} filter{activeCount > 1 ? 's' : ''} active
              </span>
              <Button
                variant="ghost"
                size="xs"
                onClick={handleClear}
                className="text-(--muted-foreground) hover:text-(--destructive)"
              >
                Clear all
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Smart context strip */}
      <AnimatePresence>
        {activeCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'mt-3 overflow-hidden rounded-[var(--radius-card-sm)] border px-3.5 py-2.5',
              'text-xs font-medium leading-relaxed',
              noMatch
                ? 'border-(--destructive)/25 bg-(--destructive-soft) text-(--destructive)'
                : 'border-(--primary)/12 bg-(--primary)/5 text-(--muted-foreground)',
            )}
          >
            {noMatch
              ? 'No paths match this combination — try clearing one filter.'
              : `Showing ${matchCount} of ${totalCount} paths based on your filters.`}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── PartnershipCardItem ─────────────────────────────────────────── */

interface PartnershipCardItemProps {
  card: PartnershipCard;
  role: Role;
  isSelected: boolean;
  selectionDisabled: boolean;
  onToggleCompare: (slug: string) => void;
  animDelay: number;
}

function PartnershipCardItem({
  card,
  role,
  isSelected,
  selectionDisabled,
  onToggleCompare,
  animDelay,
}: PartnershipCardItemProps) {
  const content = role === 'buyer' ? card.buyer : card.vendor;
  const entryVariant = ENTRY_BADGE[card.metadata.entryRequirement] ?? 'default';
  const canToggle = isSelected || !selectionDisabled;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, delay: animDelay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Card variant="elevated" padding="none" className="flex h-full flex-col overflow-hidden">
        {/* Pathway accent stripe — top border */}
        <div
          className="h-1 w-full shrink-0"
          style={{ background: PATHWAY_COLOR[card.pathway] }}
          aria-hidden="true"
        />

        <div className="flex flex-1 flex-col gap-3 p-4">
          {/* Top row: entry badge only — pathway shown in group header */}
          <div className="flex items-center justify-between gap-2">
            <Badge variant={entryVariant} size="sm">
              {card.metadata.entryRequirement === 'low'
                ? 'Low Entry'
                : card.metadata.entryRequirement === 'moderate'
                  ? 'Moderate'
                  : 'Advanced'}
            </Badge>
            {/* Package label — compact mono text */}
            <span
              className="font-label text-[10px] font-semibold uppercase tracking-wider text-(--muted-foreground)"
            >
              {content.package}
            </span>
          </div>

          {/* Headline + truncated description */}
          <div className="flex flex-col gap-1">
            <h3
              className="font-heading text-sm font-semibold leading-snug text-(--foreground)"
            >
              {content.headline}
            </h3>
            <p
              className="line-clamp-2 text-xs leading-relaxed text-(--muted-foreground)"
            >
              {content.description}
            </p>
          </div>

          {/* Compact meta strip — risk · speed in one line */}
          <div
            className="flex items-center gap-2 rounded-[var(--radius-card-sm)] bg-(--muted) px-3 py-2"
          >
            <span
              className="font-label text-[10px] font-semibold uppercase tracking-wide text-(--muted-foreground)"
            >
              Risk
            </span>
            <span
              className="text-[11px] font-medium text-(--foreground)"
            >
              {RISK_LABEL[card.metadata.riskLevel]}
            </span>
            <span
              className="mx-1 text-[10px] text-(--border)"
              aria-hidden="true"
            >
              ·
            </span>
            <span
              className="font-label text-[10px] font-semibold uppercase tracking-wide text-(--muted-foreground)"
            >
              Speed
            </span>
            <span
              className="text-[11px] font-medium text-(--foreground)"
            >
              {SPEED_LABEL[card.metadata.progressionSpeed]}
            </span>
          </div>

          <CardDivider />

          {/* Key requirement — single compact line */}
          <p
            className="line-clamp-2 text-xs leading-relaxed text-(--foreground)"
          >
            <span className="font-semibold text-(--foreground)">
              Entry:{' '}
            </span>
            {content.keyRequirement}
          </p>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-2 pt-1">
            <Link href={`/apply?path=${card.slug}`}>
              <Button variant="primary" size="sm">
                {content.ctaLabel}
              </Button>
            </Link>

            {/* Compare toggle */}
            <button
              type="button"
              disabled={!canToggle}
              onClick={() => onToggleCompare(card.slug)}
              className={cn(
                'flex items-center gap-1 rounded-full px-2.5 py-1.5',
                'border text-[11px] font-medium transition-all duration-150 focus:outline-none',
                isSelected
                  ? 'border-(--primary)/40 bg-(--primary)/10 text-(--primary)'
                  : canToggle
                    ? 'border-(--border) text-(--muted-foreground) hover:border-(--primary)/30 hover:text-(--primary)'
                    : 'border-(--border) text-(--muted-foreground) cursor-not-allowed opacity-35',
              )}
              aria-pressed={isSelected}
              aria-label={isSelected ? 'Remove from comparison' : 'Add to comparison'}
            >
              <span aria-hidden="true" className="text-xs">
                {isSelected ? '✓' : '+'}
              </span>
              {isSelected ? 'Added' : 'Compare'}
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/* ── PathwayGroup — heading + cards for one pathway ─────────────── */

interface PathwayGroupProps {
  pathway: PathwayId;
  cards: PartnershipCard[];
  role: Role;
  selectedSlugs: string[];
  selectionLimit: number;
  onToggleCompare: (slug: string) => void;
  groupIndex: number;
}

function PathwayGroup({
  pathway,
  cards,
  role,
  selectedSlugs,
  selectionLimit,
  onToggleCompare,
  groupIndex,
}: PathwayGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, delay: groupIndex * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Pathway group heading */}
      <div className="flex items-center gap-3">
        {/* Color swatch */}
        <span
          className="block h-4 w-1 shrink-0 rounded-full"
          style={{ background: PATHWAY_COLOR[pathway] }}
          aria-hidden="true"
        />
        <div className="flex items-center gap-2.5">
          <h3
            className="font-ui text-sm font-semibold text-(--foreground)"
          >
            {PATHWAY_LABEL[pathway]}
          </h3>
          <Chip variant={PATHWAY_CHIP[pathway]} size="sm">
            {cards.length} path{cards.length !== 1 ? 's' : ''}
          </Chip>
        </div>
        {/* Separator line */}
        <div
          className="h-px flex-1 bg-(--border)"
          aria-hidden="true"
        />
      </div>

      {/* Cards — responsive grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {cards.map((card, idx) => (
            <PartnershipCardItem
              key={card.slug}
              card={card}
              role={role}
              isSelected={selectedSlugs.includes(card.slug)}
              selectionDisabled={
                selectedSlugs.length >= selectionLimit && !selectedSlugs.includes(card.slug)
              }
              onToggleCompare={onToggleCompare}
              animDelay={Math.min(idx * 0.05, 0.2)}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ── ComparisonPanel ─────────────────────────────────────────────── */

interface ComparisonPanelProps {
  role: Role;
  selectedSlugs: string[];
  onClear: () => void;
  onRemove: (slug: string) => void;
}

function ComparisonPanel({ role, selectedSlugs, onClear, onRemove }: ComparisonPanelProps) {
  const content = catalogueSection[role].comparison;
  const cards = getComparisonCards(selectedSlugs, role);
  const hasCards = cards.length >= 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[var(--radius-card)] border border-(--border) bg-(--card) shadow-(--shadow-lg)"
    >
      {/* Panel header */}
      <div
        className="flex flex-col gap-3 border-b border-(--border) px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-col gap-0.5">
          <span className="font-label text-xs uppercase tracking-wider text-(--muted-foreground)">
            Side-by-side comparison
          </span>
          <p className="font-heading text-xl font-bold text-(--foreground)">{content.panelHeadline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Removable chips for selected paths */}
          {cards.map((c) => (
            <Chip
              key={c.slug}
              variant={PATHWAY_CHIP[c.pathway]}
              size="sm"
              removable
              onRemove={() => onRemove(c.slug)}
            >
              {c.label}
            </Chip>
          ))}
          <Button
            variant="ghost"
            size="xs"
            onClick={onClear}
            className="text-(--muted-foreground) hover:text-(--destructive)"
          >
            {content.clearLabel}
          </Button>
        </div>
      </div>

      {/* Waiting state — fewer than 2 selected */}
      {!hasCards && (
        <div className="flex flex-col items-center gap-2 px-5 py-10 text-center">
          <p className="text-sm text-(--foreground) max-w-[40ch]">{content.panelIntro}</p>
          <p className="text-xs text-(--muted-foreground)">
            {content.helperText}
          </p>
        </div>
      )}

      {/* Comparison — card-column layout, not a raw table */}
      {hasCards && (
        <div className="p-5">
          {/* Column headers */}
          <div
            className={cn(
              'grid gap-3 border-b border-(--border) pb-4',
              cards.length === 2 ? 'grid-cols-[120px_1fr_1fr]' : 'grid-cols-[120px_1fr_1fr_1fr]',
            )}
          >
            {/* Empty cell above field labels */}
            <div />
            {cards.map((c) => (
              <div key={c.slug} className="flex flex-col gap-1.5">
                <Chip variant={PATHWAY_CHIP[c.pathway]} size="sm">
                  {PATHWAY_LABEL[c.pathway]}
                </Chip>
                <span
                  className="font-heading text-sm font-semibold leading-snug text-(--foreground)"
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Field rows */}
          <div
            className="flex flex-col divide-y divide-(--border)"
          >
            {content.compareFields.map((field) => (
              <div
                key={field}
                className={cn(
                  'grid items-start gap-3 py-3',
                  cards.length === 2
                    ? 'grid-cols-[120px_1fr_1fr]'
                    : 'grid-cols-[120px_1fr_1fr_1fr]',
                )}
              >
                {/* Field label */}
                <span
                  className="mt-0.5 font-label text-[10px] font-semibold uppercase leading-tight tracking-wider text-(--muted-foreground)"
                >
                  {field}
                </span>

                {/* Values per card */}
                {cards.map((c) => {
                  const row = c.rows.find((r) => r.label === field);
                  const val = row?.value ?? '—';

                  /*
                   * Visual treatment per field:
                   *   Entry Requirement / Risk Level → badge-like pill
                   *   Progression                   → chip
                   *   everything else               → plain text
                   */
                  const isBadgeField = field === 'Entry Requirement' || field === 'Risk Level';
                  const isChipField = field === 'Progression';

                  return (
                    <div key={c.slug}>
                      {isBadgeField ? (
                        <span
                          className={cn(
                            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
                            val === 'Low' && 'bg-(--success-soft) text-(--success)',
                            val === 'Moderate' && 'bg-(--warning-soft) text-(--warning)',
                            val === 'High' && 'bg-(--destructive-soft) text-(--destructive)',
                            val === 'Balanced' &&
                              'bg-(--muted) text-(--muted-foreground)',
                            !['Low', 'Moderate', 'High', 'Balanced'].includes(val) &&
                              'bg-(--muted) text-(--muted-foreground)',
                          )}
                        >
                          {val}
                        </span>
                      ) : isChipField ? (
                        <Chip variant="default" size="sm">
                          {val}
                        </Chip>
                      ) : (
                        <span
                          className="text-sm leading-snug text-(--foreground)"
                        >
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Helper text at bottom */}
          <p className="mt-4 text-xs leading-relaxed text-(--muted-foreground)">
            {content.helperText}
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ── EmptyState ──────────────────────────────────────────────────── */

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-dashed border-(--border) py-16 text-center"
    >
      <div
        className="flex size-12 items-center justify-center rounded-full bg-(--muted)"
        aria-hidden="true"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-(--muted-foreground)"
        >
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M13.5 13.5L16.5 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-(--foreground)">
          No paths match your current filters
        </p>
        <p className="text-xs text-(--muted-foreground)">Try relaxing one or more filters to see results.</p>
      </div>
      <Button variant="outline" size="sm" onClick={onClear}>
        Clear all filters
      </Button>
    </motion.div>
  );
}

/* ── CatalogueSection (main) ─────────────────────────────────────── */

export function CatalogueSection({
  role,
  buyerState,
  vendorState,
  onBuyerChange,
  onVendorChange,
}: CatalogueSectionProps) {
  const content = catalogueSection[role];
  const totalCount = subPartnershipCards.length;
  const comparisonCfg = content.comparison;

  /* ── Compare state ────────────────────────────────────────────── */
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const comparisonRef = useRef<HTMLDivElement | null>(null);

  const toggleCompare = useCallback(
    (slug: string) => {
      setSelectedSlugs((prev) => {
        if (prev.includes(slug)) return prev.filter((s) => s !== slug);
        if (prev.length >= comparisonCfg.selectionLimit) return prev;
        const next = [...prev, slug];
        if (next.length >= 2 && window.innerWidth < 1024) {
          setTimeout(
            () => comparisonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
            80,
          );
        }
        return next;
      });
    },
    [comparisonCfg.selectionLimit],
  );

  const clearComparison = useCallback(() => setSelectedSlugs([]), []);
  const removeFromCompare = useCallback(
    (slug: string) => setSelectedSlugs((prev) => prev.filter((s) => s !== slug)),
    [],
  );

  /* ── Derived data ─────────────────────────────────────────────── */
  const visibleCards = useMemo(
    () => getVisibleCards(role, buyerState, vendorState),
    [role, buyerState, vendorState],
  );

  const grouped = useMemo(() => groupByPathway(visibleCards), [visibleCards]);

  const activeCount = useMemo(
    () => countActiveFilters(role === 'buyer' ? buyerState : vendorState),
    [role, buyerState, vendorState],
  );

  return (
    <section aria-label="Partnership Catalogue" className="section w-full">
      <div className="container">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-6%' }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <SectionHeader
            layout="split"
            eyebrow={content.sectionLabel}
            headline={content.headline}
            description={content.intro}
          />

          {/* Filter bar */}
          <FilterBar
            role={role}
            buyerState={buyerState}
            vendorState={vendorState}
            onBuyerChange={onBuyerChange}
            onVendorChange={onVendorChange}
            matchCount={visibleCards.length}
            totalCount={totalCount}
            activeCount={activeCount}
          />

          {/* Compare selection banner */}
          <AnimatePresence>
            {selectedSlugs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="flex flex-col gap-2 rounded-[var(--radius-card-sm)] border border-(--primary) bg-(--primary)/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-(--primary) size-2 rounded-full" aria-hidden="true" />
                    <span
                      className="text-sm font-medium text-(--primary)"
                    >
                      {selectedSlugs.length} of {comparisonCfg.selectionLimit} paths selected
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedSlugs.length >= 2 && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() =>
                          comparisonRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          })
                        }
                      >
                        {comparisonCfg.triggerLabel}
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={clearComparison}
                      className="text-(--muted-foreground) hover:text-(--destructive)"
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card grid — grouped by pathway */}
          {visibleCards.length === 0 ? (
            <EmptyState
              onClear={() => (role === 'buyer' ? onBuyerChange({}) : onVendorChange({}))}
            />
          ) : (
            <motion.div className="flex flex-col gap-10" layout>
              <AnimatePresence mode="popLayout">
                {grouped.map((group, gIdx) => (
                  <PathwayGroup
                    key={group.pathway}
                    pathway={group.pathway}
                    cards={group.cards}
                    role={role}
                    selectedSlugs={selectedSlugs}
                    selectionLimit={comparisonCfg.selectionLimit}
                    onToggleCompare={toggleCompare}
                    groupIndex={gIdx}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Comparison panel */}
          <AnimatePresence>
            {selectedSlugs.length >= 1 && (
              <div ref={comparisonRef} className="scroll-mt-24">
                <ComparisonPanel
                  role={role}
                  selectedSlugs={selectedSlugs}
                  onClear={clearComparison}
                  onRemove={removeFromCompare}
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
