'use client';

import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────────
   SECTION DIVIDER — De Koshur Crafts B2B Connect
   ─────────────────────────────────────────────────────────────────
   Four variants, each matching a specific transition in the homepage
   section color guide (dekoshur-section-color-guide.txt):

   'line'
     A single 1px rule. Use between two same-color sections where
     the background doesn't change but content needs visual breathing
     room — e.g. between two white sections if the rhythm ever shifts.
     Respects the current background, renders in --color-border.

   'fade'
     A full-width gradient bar that fades from one surface color to
     another. Use at light → light transitions (sections 02→03,
     04→05, 07→08) where a hard edge would feel abrupt but color
     contrast is low.

   'accent'
     A centered saffron/emerald rule with optional eyebrow text.
     Use at any light section break where you want a visible branded
     punctuation mark without a full dark band. The rule uses
     --gradient-accent (saffron).

   'landmark'
     A full-width dark emerald band with four principle slots.
     Matches section 09a (Proof Band) exactly — it IS the proof band,
     not just a divider between it and neighboring sections. Use once,
     between 09a position and 09b.

   USAGE IN HomeClient.tsx:
   ─────────────────────────────────────────────────────────────────
   Between § 01 Hero (dark) → § 02 Entry Journey (white):
     No divider needed — the color contrast is the transition.

   Between § 02 Entry Journey (white) → § 03 Two Markets (linen):
     <SectionDivider variant="fade" from="card" to="subtle" />

   Between § 03 Two Markets (linen) → § 04 Pathways (white):
     <SectionDivider variant="fade" from="subtle" to="card" />

   Between § 04 Pathways (white) → § 05 Why It Works (cream):
     <SectionDivider variant="accent" />

   Between § 05 Why It Works (cream) → § 06 Placement (dark):
     No divider — the hard dark/light contrast is intentional.

   Between § 06 Placement (dark) → § 07 Finder (warm white):
     No divider — same reason.

   Between § 07 Finder (warm white) → § 08 Signals (white):
     <SectionDivider variant="fade" from="base" to="card" />

   Between § 08 Signals (white) → § 09a Proof Band (deep emerald):
     No divider — hard contrast is intentional.

   Between § 09a Proof Band → § 09b Positioning (cream):
     No divider — hard contrast is intentional.

   Between § 09b Positioning (cream) → § 09c Final CTA (near-black):
     No divider — hard contrast is intentional.
   ─────────────────────────────────────────────────────────────────
*/

/* ── Types ──────────────────────────────────────────────────── */

type DividerVariant = 'line' | 'fade' | 'accent' | 'landmark';

/*
 * Surface tokens available as fade endpoints.
 * These map 1:1 to globals.css --color-surface-* values.
 */
type SurfaceToken = 'base' | 'subtle' | 'card' | 'warm' | 'dark' | 'darker';

interface SectionDividerProps {
  variant?: DividerVariant | undefined;
  /** fade variant: starting surface (top of the gradient) */
  from?: SurfaceToken | undefined;
  /** fade variant: ending surface (bottom of the gradient) */
  to?: SurfaceToken | undefined;
  /** accent variant: optional eyebrow text centered above the rule */
  label?: string | undefined;
  /** landmark variant: up to 4 principle statements */
  statements?: string[] | undefined;
  className?: string | undefined;
}

/* ── Surface → CSS var map ───────────────────────────────────── */

/*
 * Tailwind v4 CSS var shorthand does not work in arbitrary gradient
 * values in class strings. We use inline styles for dynamic gradients,
 * and pass the var() reference directly. The map keeps the API clean.
 */
const surfaceVars: Record<SurfaceToken, string> = {
  base: 'var(--color-surface-base)',
  subtle: 'var(--color-surface-subtle)',
  card: 'var(--color-surface-card)',
  warm: 'var(--color-surface-warm)',
  dark: 'var(--color-surface-dark)',
  darker: 'var(--color-surface-darker)',
};

/* ── SectionDivider ──────────────────────────────────────────── */

export function SectionDivider({
  variant = 'line',
  from = 'card',
  to = 'subtle',
  label,
  statements,
  className,
}: SectionDividerProps) {
  if (variant === 'line') {
    return <LineDivider className={className} />;
  }

  if (variant === 'fade') {
    return <FadeDivider from={from} to={to} className={className} />;
  }

  if (variant === 'accent') {
    return <AccentDivider label={label} className={className} />;
  }

  // landmark
  return <LandmarkDivider statements={statements} className={className} />;
}

/* ── LineDivider ─────────────────────────────────────────────── */
/*
 * A single 1px horizontal rule using --color-border.
 * Appropriate between two sections of the same surface color where
 * the layout needs a clear structural break.
 */
function LineDivider({ className }: { className?: string | undefined }) {
  return (
    <div aria-hidden="true" className={cn('w-full', 'h-px', 'bg-(--color-border)', className)} />
  );
}

/* ── FadeDivider ─────────────────────────────────────────────── */
/*
 * A 64px tall gradient band that blends from one surface color to
 * another. Invisible to the eye as a "component" — it just makes the
 * transition feel organic. The height (64px / h-16) is chosen to
 * match the approximate visual overlap when sections scroll past.
 *
 * Does NOT use a Tailwind class for the gradient because the values
 * are dynamic (from/to props). Inline style is the correct approach.
 */
function FadeDivider({
  from,
  to,
  className,
}: {
  from: SurfaceToken;
  to: SurfaceToken;
  className?: string | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('h-16 w-full shrink-0', className)}
      style={{
        background: `linear-gradient(to bottom, ${surfaceVars[from]} 0%, ${surfaceVars[to]} 100%)`,
      }}
    />
  );
}

/* ── AccentDivider ───────────────────────────────────────────── */
/*
 * A centered saffron gradient rule 40px wide with a decorative dot.
 * Optional label appears above it as an overline/eyebrow string.
 *
 * Use between two light sections (e.g. white → cream) where a subtle
 * brand moment is appropriate. Not a structural section divider —
 * more like punctuation.
 *
 * The rule itself uses --gradient-accent (saffron) inline.
 * The dot uses bg-(--color-accent) via Tailwind v4 shorthand.
 */
function AccentDivider({
  label,
  className,
}: {
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('flex w-full flex-col items-center gap-2', 'py-2', className)}
    >
      {/* Optional overline label */}
      {label !== undefined && (
        <span
          className={cn(
            'text-(--color-text-muted)',
            'text-[10px] font-semibold uppercase tracking-[0.12em]',
          )}
        >
          {label}
        </span>
      )}

      {/* Saffron rule with center dot */}
      <div className="max-w-30 relative flex w-full items-center">
        {/* Left arm */}
        <div className="h-px flex-1" style={{ background: 'var(--gradient-accent)' }} />

        {/* Center dot */}
        <span
          aria-hidden="true"
          className={cn('mx-2 size-1.5 shrink-0 rounded-full', 'bg-(--color-accent)')}
        />

        {/* Right arm — reversed gradient so saffron meets at the dot */}
        <div
          className="h-px flex-1"
          style={{
            background: 'linear-gradient(to left, var(--color-surface-base), var(--color-accent))',
          }}
        />
      </div>
    </div>
  );
}

/* ── LandmarkDivider ─────────────────────────────────────────── */
/*
 * The Proof Band from section 09a — a full-width deep emerald strip
 * with up to 4 statement slots. This is a structural homepage section
 * in itself, not purely decorative.
 *
 * Background: --color-surface-darker (#082D22, deep emerald)
 * Index numbers: --color-accent (saffron)
 * Statement text: --color-text-inverse (white)
 * Dividers between statements: rgba(255,255,255,0.12)
 *   → semi-transparent white overlay — visual effect, not brand color.
 *
 * Defaults to the four principle statements from closingContent.proof
 * in homepage_content.ts if none are passed.
 */
const DEFAULT_STATEMENTS = [
  'Role-aware partnership entry',
  'Trust-led qualification architecture',
  'Structured onboarding and routing',
  'Pathway-based commercial progression',
];

function LandmarkDivider({
  statements = DEFAULT_STATEMENTS,
  className,
}: {
  statements?: string[] | undefined;
  className?: string | undefined;
}) {
  const items = statements.slice(0, 4);

  return (
    <div
      aria-label="Platform principles"
      className={cn(
        'w-full',
        'bg-(--color-surface-darker)',
        'px-6 py-10',
        /*
         * The dot grid pattern from globals.css — subtle white dots on
         * the deep emerald background. Uses bg-dot-grid-dark utility.
         */
        'bg-dot-grid-dark',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto',
          'max-w-7xl',
          'grid gap-0',
          items.length === 1 && 'grid-cols-1',
          items.length === 2 && 'grid-cols-1 sm:grid-cols-2',
          items.length === 3 && 'grid-cols-1 sm:grid-cols-3',
          items.length === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        )}
      >
        {items.map((statement, idx) => (
          <div
            key={idx}
            className={cn(
              'flex items-start gap-4',
              'px-6 py-4',
              /*
               * Vertical divider between columns on sm+.
               * First column has no left border.
               * rgba(255,255,255,0.12) — translucent white rule on dark bg.
               * No CSS var for this; it is a structural overlay, not a color.
               */
              idx !== 0 && 'sm:border-(--color-border-dark) sm:border-l',
            )}
          >
            {/* Index number — saffron */}
            <span
              aria-hidden="true"
              className={cn(
                'shrink-0',
                'font-serif',
                'text-base font-semibold',
                'text-(--color-accent)',
                'tabular-nums',
                'mt-0.5 leading-none',
              )}
            >
              {String(idx + 1).padStart(2, '0')}
            </span>

            {/* Statement text — white */}
            <p className={cn('text-(--color-text-inverse)', 'text-sm font-medium leading-snug')}>
              {statement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Re-export default for convenience ───────────────────────── */

export default SectionDivider;
