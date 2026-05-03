# Partnership Slug Page — Content Structure & UI Guide

> This file defines two things for every section:
> 1. **Content structure** — exact fields, word budgets, compression rules
> 2. **UI/Layout structure** — how the section is built visually at a premium level
>
> Use this file to compress content files AND to rebuild section components.
> Comparison, Pricing, and Assessment sections are NOT compressed — kept as-is.

---

## Global Rules

### Content Rules
- Every string field has a hard word budget — do not exceed it
- Descriptions are one sentence. Never two.
- No filler words: "we believe", "our platform helps", "designed to"
- No passive voice: "is provided by" → "provides"
- Every word earns its place or gets cut

### UI Rules
- Every section uses one of three layout patterns (see below)
- Dark sections use two-source radial glow system
- All dark sections get .dot-grid-dark texture
- Cards on dark: var(--elevation-2) bg + var(--shadow-inset-top)
- Featured cards on dark: var(--elevation-3)
- Hover: translateY(-2px) + border one level stronger
- All transitions: var(--transition-base)
- Zero hardcoded values — everything from globals.css

### Three Layout Patterns

**Pattern 1 — Immersive Full**
Content and heading unified. No separate header block.
Used for: Hero, CoreCapabilities, Qualification

**Pattern 2 — Editorial Split**
Left 38%: eyebrow + headline + description (sticky)
Right 62%: content — cards, steps, lists
Used for: Workflow, ModelDifference, Technology

**Pattern 3 — Centered Command**
Centered header block max-width 640px
Content spans full width below with var(--section-gap-md) gap
Used for: Overview, Pricing, FAQ, FinalCTA, Comparison

---

## Section Backgrounds (Fixed — No Deviations)

```
§01 HeroSection             → section-ground   (#060D1A)
§02 OverviewSection         → section-card     (#FFFFFF)
§03 WorkflowSection         → section-deep     (#112340)
§04 ModelDifferenceSection  → section-base     (#F4F7FA)
§05 CoreCapabilitiesSection → section-abyss    (#0C1A30)
§06 QualificationSection    → section-card     (#FFFFFF)
§07 PricingSection          → section-dark     (#162D50)
§08 ComparisonSection       → section-base     (#F4F7FA)
§09 TechnologySection       → section-abyss    (#0C1A30)
§10 FaqSection              → section-card     (#FFFFFF)
§11 FinalCtaSection         → section-ground   (#060D1A)
```

---

---

## §01 — HeroSection

**Background:** section-ground | **Layout:** Immersive Full | **Role:** Split

### Content Structure

```
sectionLabel
  Budget: 4–6 words
  Format: "System · Model Name"
  Example: "Core Trade · Dropshipping"

shared.badge
  Budget: 2–4 words
  Format: Short trust signal
  Example: "GI Certified Platform"

shared.statusChip
  Budget: 2–3 words
  Format: Availability signal
  Example: "Now Accepting"

roles.buyer.headline
  Budget: 6–10 words
  Format: Outcome-first. What they GET not what we DO.
  Example: "Source Authentic Kashmir Crafts Without Holding Inventory"
  Rule: Start with a verb or outcome noun. Never start with "We" or "Our"

roles.buyer.description
  Budget: 20–30 words
  Format: One sentence. Problem + solution in one breath.
  Example: "Connect directly with GI-certified artisans, set your terms,
            and let the platform handle fulfilment, compliance, and payments."
  Rule: No second sentence. No filler.

roles.buyer.primaryCta.label    → 3–5 words
roles.buyer.secondaryCta.label  → 3–5 words

roles.vendor.headline
  Budget: 6–10 words
  Format: Same rules as buyer headline — vendor outcome first

roles.vendor.description
  Budget: 20–30 words
  Format: Same rules as buyer description

roles.vendor.primaryCta.label    → 3–5 words
roles.vendor.secondaryCta.label  → 3–5 words
```

**Total words on screen at once:** 60–80

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-ground background]                            │
│  [dot-grid-dark texture — full section]                 │
│  [primary radial glow — top right 60% 0%]               │
│  [secondary radial glow — bottom left 0.7 opacity]      │
│                                                         │
│  ┌──────── Left Column (55%) ────────────────────┐      │
│  │                                               │      │
│  │  [eyebrow-dark] sectionLabel                  │      │
│  │                                               │      │
│  │  [text-5xl serif text-d1 leading-tight]       │      │
│  │  headline (role-aware — crossfades on switch) │      │
│  │                                               │      │
│  │  [text-lg text-d3 leading-relaxed mt-6]       │      │
│  │  description (role-aware)                     │      │
│  │                                               │      │
│  │  [mt-10 flex gap-4]                           │      │
│  │  [btn dark primary lg] primaryCta             │      │
│  │  [btn dark ghost lg] secondaryCta             │      │
│  │                                               │      │
│  └───────────────────────────────────────────────┘      │
│                                                         │
│  ┌──────── Right Column (45%) ────────────────────┐     │
│  │                                                │     │
│  │  ┌─── Glass Info Panel ───────────────────┐   │     │
│  │  │  glass-dark card-on-dark               │   │     │
│  │  │  border: color-border-d3               │   │     │
│  │  │  shadow: shadow-inset-top              │   │     │
│  │  │                                        │   │     │
│  │  │  [badge-on-dark-accent] shared.badge   │   │     │
│  │  │  [badge-on-dark] shared.statusChip     │   │     │
│  │  │                                        │   │     │
│  │  │  ── divider-on-dark ──                 │   │     │
│  │  │                                        │   │     │
│  │  │  [text-xs text-d4] KPI Required        │   │     │
│  │  │  [text-sm text-d2] meta.kpiRequired    │   │     │
│  │  │                                        │   │     │
│  │  │  [text-xs text-d4] Retention           │   │     │
│  │  │  [text-sm text-d2] meta.retentionReq   │   │     │
│  │  │                                        │   │     │
│  │  │  [text-xs text-d4] Tier                │   │     │
│  │  │  [text-sm text-d2] meta.tier           │   │     │
│  │  │                                        │   │     │
│  │  │  ── divider-on-dark ──                 │   │     │
│  │  │                                        │   │     │
│  │  │  [Role switcher pill — full width]     │   │     │
│  │  └────────────────────────────────────────┘   │     │
│  │                                                │     │
│  └────────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Role switch: headline + description crossfade 200ms ease-out
- Role switcher pill: slides active indicator
- Primary CTA: translateY(-1px) on hover + shadow-accent-sm
- Ghost CTA: elevation-2 bg on hover

---

## §02 — OverviewSection

**Background:** section-card | **Layout:** Centered Command | **Role:** Universal

### Content Structure

```
sectionLabel
  Budget: 3–5 words
  Example: "The Model Explained"

headline
  Budget: 5–8 words
  Format: What this model IS in plain terms
  Example: "How Dropshipping Works on DKC"
  Rule: Factual not promotional

description
  Budget: 25–35 words
  Format: One paragraph. Problem → solution in one breath.
  Rule: No second sentence. No bullet points hidden as sentences.

problems[]   — exactly 4 items
  Each item budget: 4–7 words
  Format: Fragment not full sentence
  Example: "No verified artisan network"
  Rule: Starts with noun or adjective. Never "The" or "Our"

solutions[]  — exactly 4 items
  Each item budget: 4–7 words
  Format: Direct answer to matching problem
  Example: "500+ GI-certified artisans ready"
  Rule: Must directly answer the problem at same index
         Problem[0] ↔ Solution[0] must be a logical pair
```

**Total words on screen:** 120–150

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-card background]                              │
│  [section-y padding]                                    │
│                                                         │
│  ┌──── Centered Header — max-width 640px ─────────┐    │
│  │  [eyebrow-on-light] sectionLabel               │    │
│  │  [text-4xl serif text-l1 leading-tight mt-3]   │    │
│  │  headline                                      │    │
│  │  [text-lg text-l3 leading-relaxed mt-4]        │    │
│  │  description                                   │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│  [section-gap-md gap]                                   │
│                                                         │
│  ┌──── Two Column Grid — equal width ─────────────┐    │
│  │                                                │    │
│  │  ┌── Problems Column ──┐  ┌── Solutions ──┐   │    │
│  │  │                     │  │               │   │    │
│  │  │  [text-sm text-l3   │  │               │   │    │
│  │  │   uppercase tracked]│  │               │   │    │
│  │  │  "CHALLENGES"       │  │  "SOLUTIONS"  │   │    │
│  │  │                     │  │               │   │    │
│  │  │  [4 cards stacked]  │  │ [4 cards]     │   │    │
│  │  │  card light raised  │  │ card light    │   │    │
│  │  │  interactive        │  │ raised inter  │   │    │
│  │  │                     │  │               │   │    │
│  │  │  Active card:       │  │ Active card:  │   │    │
│  │  │  border-accent-left │  │ border left   │   │    │
│  │  │  color-border-l4    │  │ color-primary │   │    │
│  │  │  elevation up       │  │               │   │    │
│  │  │                     │  │               │   │    │
│  │  │  [progress dots]    │  │               │   │    │
│  │  │  4 dots, active=    │  │               │   │    │
│  │  │  color-primary      │  │               │   │    │
│  │  └─────────────────────┘  └───────────────┘   │    │
│  │                                                │    │
│  │  ── Connector line or VS indicator center ──   │    │
│  │                                                │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Cards auto-cycle every 3 seconds
- Hover any card → makes it active immediately
- Pause auto-cycle on hover, resume on leave
- Active problem[n] and solution[n] always in sync
- Smooth 200ms crossfade between active states

---

## §03 — WorkflowSection

**Background:** section-deep | **Layout:** Editorial Split | **Role:** Universal

### Content Structure

```
sectionLabel
  Budget: 3–5 words
  Example: "How It Works"

headline
  Budget: 5–8 words
  Example: "Your Path Through Dropshipping"

description
  Budget: 20–28 words
  Format: One sentence explaining what completing this model achieves
  Rule: End-state focused. "Complete these steps to unlock..."

steps[]   — 4 items maximum (cut from 5–6)
  step.label
    Budget: 2–4 words
    Format: Action verb + object
    Example: "Submit Application"

  step.description
    Budget: 15–20 words
    Format: One sentence. What happens at this step.
    Rule: Passive not active — "Your application is reviewed..."
          not "We review your application..."

nextUnlock
  label         2–4 words     e.g. "Next Model"
  name          model name
  kpiRequired   value string
  retentionReq  value string
```

**Total words on screen:** 150–180
**Rule: 4 steps maximum. If the model has 5+ steps in the data, merge two adjacent steps.**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-deep background + dot-grid-dark]              │
│  [gradient-radial-glow decorative]                      │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Left 38% — sticky header ──────────────────┐      │
│  │                                              │      │
│  │  [eyebrow-on-dark] sectionLabel              │      │
│  │                                              │      │
│  │  [text-5xl serif text-d1 leading-tight mt-4] │      │
│  │  headline                                    │      │
│  │                                              │      │
│  │  [text-lg text-d3 leading-relaxed mt-6]      │      │
│  │  description                                 │      │
│  │                                              │      │
│  │  [mt-12]                                     │      │
│  │  ┌── NextUnlock Card ───────────────────┐   │      │
│  │  │  card-on-dark elevation-3            │   │      │
│  │  │  shadow-inset-top                    │   │      │
│  │  │  border-accent-top (color-border-d4) │   │      │
│  │  │                                      │   │      │
│  │  │  [text-xs eyebrow-on-dark] Next      │   │      │
│  │  │  [text-base text-d1 font-semibold]   │   │      │
│  │  │  nextUnlock.name                     │   │      │
│  │  │                                      │   │      │
│  │  │  KPI: [value] · Retention: [value]   │   │      │
│  │  └──────────────────────────────────────┘   │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
│  ┌── Right 62% — step timeline ─────────────────┐      │
│  │                                              │      │
│  │  [4 step cards — vertical stack]             │      │
│  │                                              │      │
│  │  ┌── Step Card ──────────────────────────┐  │      │
│  │  │  card-on-dark elevation-2             │  │      │
│  │  │  shadow-inset-top                     │  │      │
│  │  │  Left edge: step number circle        │  │      │
│  │  │  [elevation-4 circle, text-d1]        │  │      │
│  │  │                                       │  │      │
│  │  │  [text-base text-d1 font-semibold]    │  │      │
│  │  │  step.label                           │  │      │
│  │  │                                       │  │      │
│  │  │  [text-sm text-d3 leading-relaxed]    │  │      │
│  │  │  step.description                     │  │      │
│  │  └───────────────────────────────────────┘  │      │
│  │                                              │      │
│  │  [Connector line between cards]              │      │
│  │  1px solid color-border-d2                   │      │
│  │  centered on step number circles             │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Steps reveal sequentially on scroll (staggered fade-in)
- Connector line draws downward as steps appear
- Step cards: hover → elevation-3 + translateY(-2px)
- NextUnlock card: static, no hover — it's informational

---

## §04 — ModelDifferenceSection

**Background:** section-base | **Layout:** Editorial Split | **Role:** Split

### Content Structure

```
sectionLabel
  Budget: 3–5 words
  Example: "What Makes This Different"

headline
  Budget: 5–8 words
  Example: "Built Exclusively for Dropshipping Partners"

exclusivityNote
  Budget: 10–15 words
  Format: One line. The single most important differentiator.
  Example: "GI authentication on every unit — not available on any other platform."

sharedFeatures[]   — exactly 4 items
  icon              Lucide icon name
  title             2–4 words
  description       10–14 words — one punchy sentence, no padding

roles.buyer
  headline          3–5 words    e.g. "What Buyers Receive"
  features[]        4 items
    title           2–4 words
    description     10–14 words

roles.vendor
  headline          3–5 words    e.g. "What Vendors Receive"
  features[]        4 items
    title           2–4 words
    description     10–14 words
```

**Total words per role view:** 250–300
**Rule: Descriptions are hard-capped at 14 words. Count them.**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-base background]                              │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Left 38% — sticky header ──────────────────┐      │
│  │                                              │      │
│  │  [eyebrow-on-light] sectionLabel             │      │
│  │                                              │      │
│  │  [text-4xl serif text-l1 leading-tight mt-3] │      │
│  │  headline                                    │      │
│  │                                              │      │
│  │  [mt-4 p-4 rounded border-l-2]              │      │
│  │  [border-color-border-l4 bg-surface-subtle] │      │
│  │  [text-sm text-l2 italic]                   │      │
│  │  exclusivityNote                            │      │
│  │                                              │      │
│  │  [mt-8]                                      │      │
│  │  [Role toggle — two tabs]                    │      │
│  │  Buyer | Vendor                              │      │
│  │  Active tab: bg-surface-ground text-d1       │      │
│  │  Inactive: bg-transparent text-l3            │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
│  ┌── Right 62% — feature grids ─────────────────┐      │
│  │                                              │      │
│  │  [text-xs eyebrow-on-light mb-4]             │      │
│  │  "Shared Platform Features"                  │      │
│  │                                              │      │
│  │  [2×2 grid — shared features]                │      │
│  │  ┌── Feature Card ──────────────────────┐   │      │
│  │  │  card light raised interactive       │   │      │
│  │  │  [icon — color-primary]              │   │      │
│  │  │  [text-base text-l1 font-semibold]   │   │      │
│  │  │  title                               │   │      │
│  │  │  [text-sm text-l3 mt-2]              │   │      │
│  │  │  description                         │   │      │
│  │  └──────────────────────────────────────┘   │      │
│  │                                              │      │
│  │  [divider-on-light mt-8 mb-8]                │      │
│  │                                              │      │
│  │  [text-xs eyebrow-on-light mb-4]             │      │
│  │  roles.[activeRole].headline                 │      │
│  │                                              │      │
│  │  [2×2 grid — role features — crossfades]     │      │
│  │  Same card structure as shared features      │      │
│  │  Active role cards: border-color-border-l3   │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Role toggle: smooth crossfade 200ms on role feature grid
- Feature cards: translateY(-2px) on hover
- Shared features: always visible, no role dependency

---

## §05 — CoreCapabilitiesSection

**Background:** section-abyss | **Layout:** Immersive Full | **Role:** Split (benefits)

### Content Structure

```
sectionLabel
  Budget: 3–5 words
  Example: "Platform Capabilities"

headline
  Budget: 5–8 words
  Example: "Everything You Need to Trade Successfully"

description
  Budget: 20–28 words
  Format: One sentence. The scope of what this section covers.

capabilitiesSection.sections[]  — keep all 6 categories
  title             2–4 words
  icon              Lucide icon name
  items[]           4 items
    each item       4–8 words — fragment not sentence

platformAdvantageSection
  roles.buyer
    headline        3–5 words
    items[]         4 items
      title         2–4 words
      description   12–16 words — one sentence

  roles.vendor
    headline        3–5 words
    items[]         4 items
      title         2–4 words
      description   12–16 words

  industryImpact
    headline        3–5 words
    items[]         4 items
      title         2–4 words
      description   12–16 words
```

**Total words on screen:** 300–360
**Note: This is the largest section — justified by Immersive Full layout and accordion interaction**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-abyss + dot-grid-dark]                        │
│  [dual radial glow system]                              │
│  [section-y-lg padding]                                 │
│                                                         │
│  ┌── Integrated Header ──────────────────────────┐     │
│  │  centered, max-width 720px                    │     │
│  │  [eyebrow-on-dark] sectionLabel               │     │
│  │  [text-5xl serif text-d1 leading-tight mt-4]  │     │
│  │  headline                                     │     │
│  │  [text-lg text-d3 mt-4] description           │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-md]                                       │
│                                                         │
│  ┌── Capabilities Accordion Grid (3 col) ────────┐     │
│  │                                               │     │
│  │  ┌── Capability Card ─────────────────────┐  │     │
│  │  │  card-on-dark elevation-2              │  │     │
│  │  │  shadow-inset-top                      │  │     │
│  │  │  cursor pointer                        │  │     │
│  │  │                                        │  │     │
│  │  │  [flex justify-between items-center]   │  │     │
│  │  │  [icon elevation-3 rounded p-2]        │  │     │
│  │  │  [text-base text-d1 font-semibold]     │  │     │
│  │  │  category.title                        │  │     │
│  │  │  [chevron icon — rotates on open]      │  │     │
│  │  │                                        │  │     │
│  │  │  [Expanded — smooth height animation]  │  │     │
│  │  │  [divider-on-dark mt-3 mb-3]           │  │     │
│  │  │  [4 items as text-sm text-d3 list]     │  │     │
│  │  │  [bullet: color-border-d4 dot]         │  │     │
│  │  └────────────────────────────────────────┘  │     │
│  │                                               │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-md]                                       │
│                                                         │
│  ┌── Role Benefits Panel (2 col) ────────────────┐     │
│  │                                               │     │
│  │  ┌── Buyer Column ──────┐ ┌── Vendor ──────┐ │     │
│  │  │  card-on-dark el-2   │ │  card-on-dark  │ │     │
│  │  │  shadow-inset-top    │ │                │ │     │
│  │  │                      │ │                │ │     │
│  │  │  [eyebrow-on-dark]   │ │  [eyebrow]     │ │     │
│  │  │  buyer headline      │ │  vendor hdln   │ │     │
│  │  │                      │ │                │ │     │
│  │  │  [4 benefit items]   │ │  [4 items]     │ │     │
│  │  │  icon + title        │ │                │ │     │
│  │  │  description         │ │                │ │     │
│  │  └──────────────────────┘ └────────────────┘ │     │
│  │                                               │     │
│  │  Role switching: active column elevates       │     │
│  │  Inactive column: opacity 0.5                 │     │
│  │                                               │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-md]                                       │
│                                                         │
│  ┌── Industry Impact Strip (4 col) ──────────────┐     │
│  │  [border-top color-border-d2 pt-12]           │     │
│  │  [eyebrow-on-dark mb-8 centered]              │     │
│  │  industryImpact.headline                      │     │
│  │                                               │     │
│  │  4 stat/impact items horizontal               │     │
│  │  [text-2xl text-d1 font-bold] title           │     │
│  │  [text-sm text-d3] description                │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Capability cards: one open at a time (accordion)
- Height animation: 250ms ease-out
- Chevron rotates 180° when open
- Role panel: active column full opacity, inactive 50%
- Role switch: opacity crossfade 200ms

---

## §06 — QualificationSection

**Background:** section-card | **Layout:** Immersive Full | **Role:** Runtime filtered

### Content Structure

```
— Keep all existing assessment content unchanged —
— Do not compress questions, thresholds, or resultContent —

sectionLabel        3–5 words
headline            5–8 words
description         20–28 words

introCard
  title             3–5 words
  description       20–28 words
  meta              keep as-is (question count info)
  primaryCta.label  3–5 words

requirements[]      keep all items, compress only notes
  label             2–4 words — keep as-is
  value             keep as-is
  note              8–12 words maximum (trim if longer)
```

**Note: Assessment questions, thresholds, specialRules, resultContent — untouched**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-card background]                              │
│  [section-y-lg padding]                                 │
│                                                         │
│  ┌── Phase 1: Requirements Overview ─────────────┐     │
│  │  centered header max-width 640px              │     │
│  │  [eyebrow-on-light] sectionLabel              │     │
│  │  [text-4xl serif text-l1] headline            │     │
│  │  [text-lg text-l3] description                │     │
│  │                                               │     │
│  │  [Requirements grid — 2 or 3 col]             │     │
│  │  ┌── Requirement Card ─────────────────────┐  │     │
│  │  │  card light raised                      │  │     │
│  │  │  [text-xs text-l4 uppercase tracked]    │  │     │
│  │  │  label                                  │  │     │
│  │  │  [text-2xl text-l1 font-bold mt-2]      │  │     │
│  │  │  value                                  │  │     │
│  │  │  [text-xs text-l4 mt-2]                 │  │     │
│  │  │  note                                   │  │     │
│  │  └─────────────────────────────────────────┘  │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-md]                                       │
│                                                         │
│  ┌── Visual Connector ───────────────────────────┐     │
│  │  centered arrow or step indicator             │     │
│  │  "Ready to check your eligibility?"           │     │
│  │  [text-sm text-l3]                            │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  ┌── Phase 2: Assessment Widget ─────────────────┐     │
│  │  max-width 640px centered                     │     │
│  │                                               │     │
│  │  INTRO STATE:                                 │     │
│  │  ┌── Intro Card ───────────────────────────┐  │     │
│  │  │  card light floating                    │  │     │
│  │  │  shadow-card-lift                       │  │     │
│  │  │  [icon large centered — color-primary]  │  │     │
│  │  │  [text-xl text-l1 font-semibold]        │  │     │
│  │  │  introCard.title                        │  │     │
│  │  │  [text-base text-l3 mt-3]               │  │     │
│  │  │  introCard.description                  │  │     │
│  │  │  [text-xs text-l4 mt-4]                 │  │     │
│  │  │  introCard.meta                         │  │     │
│  │  │  [btn light primary lg mt-6 full-width] │  │     │
│  │  │  introCard.primaryCta.label             │  │     │
│  │  └─────────────────────────────────────────┘  │     │
│  │                                               │     │
│  │  QUIZ STATE:                                  │     │
│  │  Progress bar + question number               │     │
│  │  Question text                                │     │
│  │  Answer option cards                          │     │
│  │  Back / Next navigation                       │     │
│  │                                               │     │
│  │  RESULT STATE:                                │     │
│  │  Score display                                │     │
│  │  Strengths + Development areas                │     │
│  │  Next steps                                   │     │
│  │  Retake CTA                                   │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Three phases: intro → quiz → result
- Phase transitions: slide 300ms ease-spring
- Progress bar: smooth width transition
- Answer selection: card elevation increases on select
- Result reveal: staggered fade-in per section

---

## §07 — PricingSection

**Background:** section-dark | **Layout:** Centered Command | **Role:** Universal

### Content Structure

```
— Keep all 3 packages unchanged —
— Keep freeOffer, range, billingPeriod unchanged —

sectionLabel        3–5 words
headline            4–7 words
description         15–20 words
note                15–20 words — trim if longer

freeOffer
  title             3–5 words
  description       15–20 words — trim if longer
  badge             2–4 words
  note              10–15 words — trim if longer

packages[]   — keep all 3, compress only
  name              keep as-is
  price             keep as-is
  features[]        4 items max — 4–7 words each
                    if more than 4, keep top 4 most important
```

**Note: Pricing structure, prices, billingPeriod, recommended flag — all untouched**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-dark + dot-grid-dark]                         │
│  [gradient-radial-glow subtle]                          │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Centered Header — max-width 640px ──────────┐     │
│  │  [eyebrow-on-dark] sectionLabel               │     │
│  │  [text-5xl serif text-d1 leading-tight mt-4]  │     │
│  │  headline                                     │     │
│  │  [text-lg text-d3 mt-4] description           │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-sm]                                       │
│                                                         │
│  ┌── Free Offer Banner ───────────────────────────┐    │
│  │  card-on-dark elevation-2 shadow-inset-top     │    │
│  │  border-accent-left (color-border-d4)          │    │
│  │  [flex items-center justify-between]           │    │
│  │  [text-base text-d1] freeOffer.title           │    │
│  │  [text-sm text-d3] freeOffer.description       │    │
│  │  [badge-on-dark-accent] freeOffer.badge        │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│  [section-gap-sm]                                       │
│                                                         │
│  ┌── 3 Pricing Cards (equal width grid) ─────────┐     │
│  │                                               │     │
│  │  ┌── Standard Card ───┐ ┌── Recommended ─┐   │     │
│  │  │  card-on-dark el-2 │ │  card-on-dark  │   │     │
│  │  │  shadow-inset-top  │ │  elevation-4   │   │     │
│  │  │                    │ │  shadow-inset  │   │     │
│  │  │  [name text-d2]    │ │  border-top    │   │     │
│  │  │  [price text-d1    │ │  color-d5      │   │     │
│  │  │   text-3xl bold]   │ │                │   │     │
│  │  │  [period text-d4]  │ │  [badge "Best" │   │     │
│  │  │                    │ │   badge-on-    │   │     │
│  │  │  [divider-on-dark] │ │   dark-accent] │   │     │
│  │  │                    │ │                │   │     │
│  │  │  [4 features list] │ │  Same struct   │   │     │
│  │  │  check icon text   │ │  but elevated  │   │     │
│  │  │  text-d3 text-sm   │ │                │   │     │
│  │  │                    │ │                │   │     │
│  │  │  [btn dark ghost]  │ │  [btn dark     │   │     │
│  │  │  "Get Started"     │ │   primary]     │   │     │
│  │  └────────────────────┘ └────────────────┘   │     │
│  │                                               │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [text-xs text-d4 centered mt-6] note                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Recommended card: slightly larger scale (scale-105)
- All cards: translateY(-2px) on hover
- CTA buttons: full width inside card

---

## §08 — ComparisonSection *(Optional)*

**Background:** section-base | **Layout:** Centered Command | **Role:** Universal

### Content Structure

```
— Keep all comparison data unchanged —
— No compression on rows or columns —

sectionLabel        3–5 words
headline            5–8 words
description         15–20 words — trim if longer
```

**Note: models[], rows[], all comparison data — untouched**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-base background]                              │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Centered Header — max-width 640px ──────────┐     │
│  │  [eyebrow-on-light] sectionLabel              │     │
│  │  [text-4xl serif text-l1] headline            │     │
│  │  [text-lg text-l3 mt-4] description           │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-sm]                                       │
│                                                         │
│  ┌── Comparison Table ────────────────────────────┐    │
│  │  card light floating shadow-card-lift          │    │
│  │  overflow hidden                               │    │
│  │                                                │    │
│  │  Table header row:                             │    │
│  │  [sticky top] bg-surface-subtle               │    │
│  │  First col: "Feature" label                   │    │
│  │  DKC col: bg-surface-ground text-d1 (dark)    │    │
│  │  Competitor cols: bg-surface-card text-l2     │    │
│  │                                                │    │
│  │  Table rows:                                   │    │
│  │  Alternating: surface-card / surface-base      │    │
│  │  DKC column: always slightly elevated          │    │
│  │  bg: rgba(primary-rgb, 0.04)                  │    │
│  │                                                │    │
│  │  Values:                                       │    │
│  │  true  → SealCheck icon color-success          │    │
│  │  false → X icon color-danger-light             │    │
│  │  string → text-sm text-l2                      │    │
│  │                                                │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Table header sticky on scroll
- DKC column always highlighted
- Row hover: subtle surface-subtle background
- Mobile: horizontal scroll with sticky first column

---

## §09 — TechnologySection

**Background:** section-abyss | **Layout:** Editorial Split | **Role:** Universal

### Content Structure

```
sectionLabel        3–5 words
headline            5–8 words
description         20–25 words

technologySection.features[]   — keep all 8 items
  icon              keep as-is
  title             2–4 words — trim if longer
  description       10–14 words — hard cap, trim if longer

technologySection.support     keep as-is

apiIntegrationSection (collapsed block)
  headline          3–5 words
  description       15–20 words — trim if longer
  features[]        keep all items
    title           2–4 words — trim if longer
    description     10–14 words — hard cap
  support           keep as-is
```

**Total words on screen:** 300–360 (API block collapsed by default)

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-abyss + dot-grid-dark]                        │
│  [gradient-radial-glow]                                 │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Left 38% — sticky header ──────────────────┐      │
│  │                                              │      │
│  │  [eyebrow-on-dark] sectionLabel              │      │
│  │  [text-5xl serif text-d1 mt-4] headline      │      │
│  │  [text-lg text-d3 mt-6] description          │      │
│  │                                              │      │
│  │  [mt-10]                                     │      │
│  │  [text-xs text-d4] support text              │      │
│  │                                              │      │
│  │  [mt-8]                                      │      │
│  │  ┌── API Toggle ───────────────────────┐    │      │
│  │  │  card-on-dark elevation-2           │    │      │
│  │  │  cursor pointer                     │    │      │
│  │  │  [flex items-center gap-3]          │    │      │
│  │  │  [icon text-d3]                     │    │      │
│  │  │  [text-sm text-d2] "API Integration"│    │      │
│  │  │  [chevron — rotates on open]        │    │      │
│  │  └─────────────────────────────────────┘    │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
│  ┌── Right 62% — feature grid ──────────────────┐      │
│  │                                              │      │
│  │  [4×2 grid — 8 technology features]          │      │
│  │                                              │      │
│  │  ┌── Feature Card ─────────────────────┐    │      │
│  │  │  card-on-dark elevation-2           │    │      │
│  │  │  shadow-inset-top                   │    │      │
│  │  │                                     │    │      │
│  │  │  [icon — elevation-3 rounded p-2]   │    │      │
│  │  │  [text-base text-d1 font-semibold   │    │      │
│  │  │   mt-3]                             │    │      │
│  │  │  feature.title                      │    │      │
│  │  │  [text-sm text-d3 mt-2]             │    │      │
│  │  │  feature.description                │    │      │
│  │  └─────────────────────────────────────┘    │      │
│  │                                              │      │
│  │  [API Section — animated expand below grid]  │      │
│  │  Triggered by toggle in left column          │      │
│  │  [border-top color-border-d2 mt-8 pt-8]      │      │
│  │  [eyebrow-on-dark] "API Integration"         │      │
│  │  [text-lg text-d2 mt-2] api.description      │      │
│  │  [3 col grid of API feature cards]           │      │
│  │  Same card structure as technology features  │      │
│  │                                              │      │
│  └──────────────────────────────────────────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- API toggle in left column controls expand/collapse in right column
- Expand animation: height 300ms ease-out
- Feature cards: translateY(-2px) on hover
- API feature cards: same hover treatment

---

## §10 — FaqSection

**Background:** section-card | **Layout:** Centered Command | **Role:** Universal

### Content Structure

```
sectionLabel        3–5 words
headline            4–7 words

items[]   — 5 items maximum (trim to 5 if more)
  question          8–14 words — model-specific, not generic
  answer            25–40 words — direct answer, no padding
                    Rule: First sentence answers the question.
                          Second sentence (if needed) adds context.
                          Never a third sentence.
```

**Total words on screen:** 200–250

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-card background]                              │
│  [section-y padding]                                    │
│                                                         │
│  ┌── Centered Header — max-width 640px ──────────┐     │
│  │  [eyebrow-on-light] sectionLabel              │     │
│  │  [text-4xl serif text-l1] headline            │     │
│  └───────────────────────────────────────────────┘     │
│                                                         │
│  [section-gap-sm]                                       │
│                                                         │
│  ┌── Accordion — max-width 720px centered ────────┐    │
│  │                                                │    │
│  │  ┌── FAQ Item ──────────────────────────────┐  │    │
│  │  │  border-bottom: color-border-l2          │  │    │
│  │  │  py-5                                    │  │    │
│  │  │                                          │  │    │
│  │  │  [flex justify-between items-center]     │  │    │
│  │  │  CLOSED:                                 │  │    │
│  │  │  [text-base text-l1 font-medium]         │  │    │
│  │  │  question                                │  │    │
│  │  │  [plus icon text-l3 — rotates to minus]  │  │    │
│  │  │                                          │  │    │
│  │  │  OPEN:                                   │  │    │
│  │  │  [border-left-2 color-border-l4 pl-4]   │  │    │
│  │  │  [text-base text-l2 leading-relaxed]     │  │    │
│  │  │  answer                                  │  │    │
│  │  │                                          │  │    │
│  │  │  Yes/No answers:                         │  │    │
│  │  │  "Yes" → text-success font-medium        │  │    │
│  │  │  "No" → text-danger font-medium          │  │    │
│  │  └──────────────────────────────────────────┘  │    │
│  │                                                │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- One item open at a time
- Height animation: 200ms ease-out
- Plus icon: rotate 45° to X when open
- Open item: left border appears with fade-in

---

## §11 — FinalCtaSection

**Background:** section-ground | **Layout:** Centered Command | **Role:** Split

### Content Structure

```
sectionLabel        3–5 words

shared.headline
  Budget: 6–10 words
  Format: Emotional, outcome-focused, present tense
  Example: "Your Kashmir Trade Journey Starts Here"
  Rule: No brand mentions. No feature mentions.
        Pure outcome and emotion.

shared.description
  Budget: 20–28 words
  Format: The WHY — why act now, not what you get
  Rule: One sentence maximum. Urgency without pressure.

roles.buyer
  headline          5–8 words
  supportingPoints[]  3 items
    each item       6–10 words — specific benefit or assurance
  primaryCta.label  3–5 words
  secondaryCta.label 3–5 words

roles.vendor
  headline          5–8 words
  supportingPoints[]  3 items
    each item       6–10 words
  primaryCta.label  3–5 words
  secondaryCta.label 3–5 words
```

**Total words per role view:** 120–150
**Rule: Shortest section on the page. Every word converts or it gets cut.**

### UI Structure

```
┌─────────────────────────────────────────────────────────┐
│  [section-ground background]                            │
│  [dot-grid-dark texture]                                │
│  [primary radial glow — rising from bottom center]      │
│  [secondary radial glow — top right, 0.7 opacity]       │
│  [section-y-xl padding]                                 │
│                                                         │
│  ┌── Single centered column — max-width 640px ────┐    │
│  │                                                │    │
│  │  [eyebrow-on-dark centered] sectionLabel       │    │
│  │                                                │    │
│  │  [text-5xl serif text-d1 leading-tight         │    │
│  │   text-center mt-4]                            │    │
│  │  shared.headline                               │    │
│  │                                                │    │
│  │  [text-lg text-d3 text-center                  │    │
│  │   leading-relaxed mt-6]                        │    │
│  │  shared.description                            │    │
│  │                                                │    │
│  │  [divider-on-dark mt-10 mb-10]                 │    │
│  │                                                │    │
│  │  [text-base text-d2 font-semibold text-center] │    │
│  │  roles.[activeRole].headline (role-aware)      │    │
│  │                                                │    │
│  │  [mt-6 flex flex-col gap-3]                    │    │
│  │  3 supporting points                           │    │
│  │  [check icon text-d3] + [text-sm text-d3]      │    │
│  │                                                │    │
│  │  [mt-10 flex gap-4 justify-center]             │    │
│  │  [btn dark primary lg] primaryCta              │    │
│  │  [btn dark ghost lg] secondaryCta              │    │
│  │                                                │    │
│  │  [mt-8 text-xs text-d4 text-center]            │    │
│  │  Role switcher — "Switch to [other role] view" │    │
│  │                                                │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction:**
- Role switch: headline + points crossfade 200ms
- Primary CTA: translateY(-2px) + shadow-accent-sm
- Ghost CTA: elevation-2 bg on hover
- Role switcher: text link, no button styling

---

## Summary Table

| Section | Background | Layout | Role | Max Words | Compress? |
|---|---|---|---|---|---|
| §01 Hero | section-ground | Immersive Full | Split | 80 | Yes |
| §02 Overview | section-card | Centered Command | Universal | 150 | Yes |
| §03 Workflow | section-deep | Editorial Split | Universal | 180 | Yes (4 steps max) |
| §04 ModelDifference | section-base | Editorial Split | Split | 300 | Yes (14w descriptions) |
| §05 CoreCapabilities | section-abyss | Immersive Full | Split | 360 | Yes (16w descriptions) |
| §06 Qualification | section-card | Immersive Full | Runtime | — | NO |
| §07 Pricing | section-dark | Centered Command | Universal | — | NO |
| §08 Comparison | section-base | Centered Command | Universal | — | NO |
| §09 Technology | section-abyss | Editorial Split | Universal | 360 | Yes (14w descriptions) |
| §10 FAQ | section-card | Centered Command | Universal | 250 | Yes (5 items, 40w answers) |
| §11 FinalCTA | section-ground | Centered Command | Split | 150 | Yes |

---

## Compression Checklist Per Content File

When compressing each of the 16 model files:

- [ ] Hero description ≤ 30 words per role
- [ ] Overview description ≤ 35 words
- [ ] Overview problems/solutions ≤ 7 words each
- [ ] Workflow max 4 steps
- [ ] Workflow step descriptions ≤ 20 words each
- [ ] ModelDifference descriptions ≤ 14 words each
- [ ] Capabilities items ≤ 8 words each
- [ ] PlatformAdvantage descriptions ≤ 16 words each
- [ ] Technology feature descriptions ≤ 14 words each
- [ ] API feature descriptions ≤ 14 words each
- [ ] FAQ trimmed to 5 items
- [ ] FAQ answers ≤ 40 words each
- [ ] FinalCTA shared description ≤ 28 words
- [ ] FinalCTA supporting points ≤ 10 words each
- [ ] Pricing/Assessment/Comparison — untouched

---

_End of CONTENT_STRUCTURE_GUIDE.md_
