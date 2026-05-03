# DKC-B2B Design System Reference

> This file is read by Claude Code before writing any UI code.
> Token source of truth: `apps/web/src/styles/globals.css`
> Component source: `apps/web/src/components/shared/`

---

## 1. Token System

### 1.1 Theme Structure

Default theme is **dark/black**. Light theme available via `.light` class.

```
:root, .black, .dark  → dark theme (default)
.light                → light theme
```

### 1.2 Color Tokens

**Backgrounds:**
| Token | Dark value | Light value |
|-------|-----------|-------------|
| `--background` | `#0a0a0a` | `#ffffff` |
| `--background-elevated` | `#0f0f10` | `#fafafa` |
| `--background-focus` | `#111112` | `#f5f5f5` |

**Surfaces:**
| Token | Purpose |
|-------|---------|
| `--card` / `--card-foreground` | Card surface |
| `--popover` / `--popover-foreground` | Popover/dropdown/drawer surface |

**Brand:**
| Token | Purpose |
|-------|---------|
| `--primary` / `--primary-foreground` | Primary action color |
| `--secondary` / `--secondary-foreground` | Secondary surface |
| `--muted` / `--muted-foreground` | Muted/disabled/subtle |
| `--accent` / `--accent-foreground` | Soft highlight/selected |
| `--signature` / `--signature-foreground` / `--signature-soft` | Brand accent (blue) |

**State:**
| Token | Purpose |
|-------|---------|
| `--success` / `--success-foreground` / `--success-soft` | Green states |
| `--warning` / `--warning-foreground` / `--warning-soft` | Amber states |
| `--destructive` / `--destructive-foreground` / `--destructive-soft` | Red/error states |
| `--info` / `--info-foreground` / `--info-soft` | Cyan/teal info states |

**UI:**
| Token | Purpose |
|-------|---------|
| `--border` | Default border |
| `--input` | Input border |
| `--ring` | Focus ring base |

**Charts:** `--chart-1` through `--chart-5`

**Sidebar:** `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`

### 1.3 Shadow Tokens

```
--shadow-2xs  --shadow-xs  --shadow-sm  --shadow
--shadow-md   --shadow-lg  --shadow-xl  --shadow-2xl
```

Always reference via `var(--shadow-*)`. Never write shadow values inline.

### 1.4 Radius Tokens

**Scale:**

```
--radius-sm   calc(--radius - 4px)
--radius-md   calc(--radius - 2px)
--radius-lg   var(--radius)          ← base = 0.625rem
--radius-xl   calc(--radius + 4px)
--radius-2xl  calc(--radius + 12px)
--radius-3xl  calc(--radius + 22px)
```

**Semantic (always prefer these over scale):**

```
--radius-button   → 999px          (all buttons)
--radius-input    → --radius-lg    (inputs, selects, textareas)
--radius-badge    → 999px          (badges, chips, pills)
--radius-chip     → 999px
--radius-pill     → 999px
--radius-card     → --radius-2xl   (cards)
--radius-card-sm  → --radius-xl    (small cards, mobile)
--radius-popover  → --radius-2xl   (popovers, toasts)
--radius-modal    → --radius-3xl   (modals, drawers)
--radius-table    → --radius-2xl   (tables)
--radius-hero     → --radius-3xl   (hero/CTA panels)
--radius-cta      → --radius-3xl
--radius-section  → 0              (sections are flat)
```

**Usage in Tailwind:**

```tsx
className = 'rounded-[var(--radius-card)]';
className = 'rounded-[var(--radius-modal)]';
```

### 1.5 Motion Tokens

```
--ease-premium: cubic-bezier(0.22, 1, 0.36, 1)
--duration-fast:   180ms
--duration-normal: 320ms
--duration-slow:   700ms
--stagger-fast:    60ms
--stagger-normal:  90ms
--reveal-distance: 26px
```

**Framer Motion ease array:** `[0.22, 1, 0.36, 1]`

### 1.6 Typography Tokens

**Font stacks:**

```
--font-sans  → Inter (via --font-body Next.js var)
--font-serif → Playfair Display (via --font-heading Next.js var)
--font-mono  → JetBrains Mono (via --font-mono-var Next.js var)
```

**Fixed scale:**

```
--text-xs: 0.75rem    --text-sm: 0.875rem   --text-base: 1rem
--text-md: 1.125rem   --text-lg: 1.25rem    --text-xl: 1.563rem
--text-2xl: 1.953rem  --text-3xl: 2.441rem  --text-4xl: 3.052rem  --text-5xl: 3.815rem
```

**Fluid scale:**

```
--fluid-xl:  clamp(1.55rem, 1.35rem + 1vw, 2rem)
--fluid-lg:  clamp(1.25rem, 1.12rem + 0.65vw, 1.6rem)
--fluid-md:  clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)
--fluid-base: clamp(1rem, 0.96rem + 0.22vw, 1.125rem)
--fluid-sm:  clamp(0.82rem, 0.8rem + 0.15vw, 0.90rem)
--fluid-xs:  clamp(0.72rem, 0.7rem + 0.10vw, 0.78rem)
```

**Line height:**

```
--leading-tight: 0.95    --leading-heading: 1.05   --leading-body: 1.75
--fluid-line-tight: 0.92 --fluid-line-heading: 1.04 --fluid-line-body: 1.72
```

**Letter spacing:**

```
--tracking-display: -0.07em   --tracking-heading: -0.055em
--tracking-tight: -0.035em    --tracking-wide: 0.16em
```

### 1.7 Layout Tokens

```
--container:         80rem (1280px)
--container-narrow:  48rem (768px)
--container-wide:    90rem (1440px)
--page-px:           clamp(1.25rem, 3vw, 2rem)
--page-px-wide:      clamp(1.25rem, 4vw, 3rem)
--section-y-sm:      clamp(3.5rem, 6vw, 5rem)
--section-y:         clamp(5rem, 8vw, 7rem)
--section-y-lg:      clamp(6rem, 10vw, 8rem)
--section-y-xl:      clamp(7rem, 12vw, 9rem)
--header-height:     4.5rem (4rem on mobile)
--hero-y:            clamp(6rem, 12vw, 10rem)
```

### 1.8 Z-Index Tokens

```
--z-base: 0       --z-content: 10    --z-sticky: 30
--z-header: 40    --z-dropdown: 50   --z-popover: 60
--z-overlay: 70   --z-modal: 80      --z-toast: 90
--z-command: 100
```

**Usage in Tailwind:**

```tsx
className = 'z-[var(--z-modal)]';
className = 'z-[var(--z-header)]';
```

---

## 2. Typography Classes

### 2.1 Heading Classes

```tsx
<h1 className="heading-hero font-display">Hero heading</h1>
<h2 className="heading-page font-heading">Page heading</h2>
<h2 className="heading-section font-heading">Section heading</h2>
<h3 className="heading-subsection font-heading">Sub-heading</h3>
```

### 2.2 Font Role Classes

```tsx
<p className="font-ui">UI text — Inter</p>
<p className="font-editorial">Editorial text — Playfair</p>
<p className="font-display">Display heading — Playfair, tight tracking</p>
<p className="font-heading">Section heading — Playfair, heading tracking</p>
<p className="font-data">Data / numbers — JetBrains Mono, tabular</p>
<span className="font-label">LABEL TEXT — JetBrains Mono, uppercase</span>
```

### 2.3 Eyebrow

```tsx
<span className="eyebrow">Partnership Systems</span>
```

Renders with a small dot indicator before the text. For section labels, Badge eyebrows, category markers.

### 2.4 Body Text

```tsx
<p className="text-body">Body text — fluid size, muted-foreground</p>
<p className="text-fluid-base">Fluid base — same size, inherits color</p>
```

---

## 3. Layout Classes

### 3.1 Page Shell

```tsx
<div className="page">
  {' '}
  {/* min-h-screen, background, overflow-x:clip */}
  <div className="page-content">
    {' '}
    {/* z-content */}
    ...
  </div>
</div>
```

### 3.2 Sections

```tsx
{
  /* Standard section */
}
<section className="section section-base">
  <div className="container">...</div>
</section>;

{
  /* Major narrative section */
}
<section className="section-major section-elevated">
  <div className="container">...</div>
</section>;

{
  /* Hero section */
}
<section className="section-hero hero section-base">
  <div className="hero-content hero-content-split">
    <div className="hero-copy">...</div>
    <div className="hero-visual">...</div>
  </div>
</section>;

{
  /* Compact metric band */
}
<section className="section-compact section-muted">
  <div className="container">...</div>
</section>;
```

**Section background rule:** Never use the same background for two adjacent sections. Rhythm: `section-base → section-elevated → section-base → section-muted` etc.

### 3.3 Containers

```tsx
<div className="container">...</div>           {/* 80rem, centered */}
<div className="container-narrow">...</div>    {/* 48rem, centered */}
<div className="container-wide">...</div>      {/* 90rem, centered */}
<div className="container-fluid">...</div>     {/* full width + padding */}
<div className="container-readable">...</div>  {/* 42rem, prose width */}
```

### 3.4 Grids

```tsx
<div className="grid-2">...</div>   {/* 1→2 cols at 768px */}
<div className="grid-3">...</div>   {/* 1→2→3 cols at 768/1024px */}
<div className="grid-4">...</div>   {/* 1→2→4 cols at 768/1024px */}
```

### 3.5 Stacks

```tsx
<div className="stack-sm">...</div>   {/* gap: 0.75rem */}
<div className="stack-md">...</div>   {/* gap: 1rem */}
<div className="stack-lg">...</div>   {/* gap: 1.5rem */}
<div className="stack-xl">...</div>   {/* gap: clamp(1.25rem, 3vw, 2rem) */}
```

### 3.6 Section Dividers

```tsx
<div className="section-divider" />           {/* container-width */}
<div className="section-divider-soft" />      {/* 55% opacity */}
<div className="section-divider-full" />      {/* full width */}
```

---

## 4. Component APIs

### 4.1 Button

```tsx
import { Button, CTAButton, ButtonGroup } from '@/components/shared/Button';

// Standard
<Button variant="primary" size="md">Label</Button>

// With icons
<Button variant="elite" size="lg" iconRight={<ArrowRight />}>Start</Button>
<Button variant="outline" size="sm" iconLeft={<Plus />} iconOnly aria-label="Add" />

// Loading
<Button variant="primary" loading loadingText="Saving...">Save</Button>

// CTA (with auto arrow)
<CTAButton variant="depth" size="xl">Start Partnership</CTAButton>
<CTAButton variant="elite" size="lg" arrow={false}>Learn More</CTAButton>

// Group
<ButtonGroup>
  <Button variant="outline" size="sm">Option A</Button>
  <Button variant="outline" size="sm">Option B</Button>
</ButtonGroup>
```

**Variant → use case mapping:**

```
primary      → main action per section (one per section max)
secondary    → supporting action
accent       → soft selected/filter state
outline      → quiet bordered action
ghost        → lowest weight, nav links, tertiary
link         → inline text action
destructive  → irreversible/dangerous only
elite        → premium section CTA (shine effect)
depth        → hero/final CTA (strongest)
aurora       → restrained pulse CTA (use sparingly)
```

### 4.2 Card

```tsx
import { Card, CardHeader, CardBody, CardFooter, CardDivider, CardImage, CardBadge, StatCard } from '@/components/shared/Card';

// Basic
<Card variant="default" padding="md">
  <CardHeader>
    <h3>Title</h3>
    <Badge variant="success">Active</Badge>
  </CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>
    <Button variant="ghost" size="sm">Cancel</Button>
    <Button variant="primary" size="sm">Confirm</Button>
  </CardFooter>
</Card>

// Interactive (hoverable)
<Card variant="interactive" padding="lg" className="group">
  <CardImage src={img} alt="Product" />
  <CardBody>Content</CardBody>
  <CardBadge position="top-right"><Badge variant="success">New</Badge></CardBadge>
</Card>

// Stat card
<StatCard
  label="Total Orders"
  value="1,284"
  delta="+12%"
  deltaDirection="up"
  description="vs last month"
  variant="default"
/>
```

### 4.3 Badge

```tsx
import { Badge, BadgeGroup } from '@/components/shared/Badge';

// Static label
<Badge variant="success">Verified</Badge>
<Badge variant="error" dot>Blocked</Badge>
<Badge variant="info" dot pulse>Live</Badge>

// With icon
<Badge variant="primary" icon={<Star size={12} />}>Featured</Badge>

// Removable
<Badge variant="accent" removable onRemove={() => remove(id)}>Tag</Badge>

// Interactive
<Badge variant="default" interactive onClick={handleClick}>Filter</Badge>

// Group
<BadgeGroup gap="sm" align="start">
  <Badge variant="success">Active</Badge>
  <Badge variant="warning">Pending</Badge>
</BadgeGroup>
```

**Pulse rule:** Only use `pulse` for genuinely live/real-time states (websocket connection, live order tracking). Not for static status.

### 4.4 Chip / ChipSelector

```tsx
import { Chip, ChipGroup, ChipSelector } from '@/components/shared/Chip';

// Interactive filter chip
<Chip variant="default" active={isActive} onClick={toggle}>Wholesale</Chip>

// Removable tag
<Chip variant="accent" removable onRemove={remove}>Kashmir Region</Chip>

// Multi-select filter group
<ChipSelector
  options={[
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'consignment', label: 'Consignment', icon: <Package size={12} /> },
    { value: 'dropship', label: 'Dropshipping', disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
  variant="default"
  size="md"
  multiple
/>
```

### 4.5 Input / Textarea / Select

```tsx
import { Input, Textarea, Select } from '@/components/shared/Input';

// Input
<Input
  label="Business Name"
  hint="As registered with your trade authority"
  error={errors.name?.message}
  size="md"
  variant="default"
  iconLeft={<Buildings size={16} />}
  {...register('name')}
/>

// Textarea with count
<Textarea
  label="Product Description"
  size="md"
  showCount
  maxLength={500}
  autoResize
  {...register('description')}
/>

// Select
<Select
  label="Partnership Type"
  placeholder="Select a type..."
  options={[
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'consignment', label: 'Consignment' },
  ]}
  error={errors.type?.message}
  {...register('type')}
/>
```

**Variant → surface:**

```
default  → var(--background)
filled   → var(--background-elevated)
elevated → var(--card) + shadow-sm
ghost    → transparent, border only on focus
```

### 4.6 Modal / ConfirmModal

```tsx
import { Modal, ConfirmModal } from '@/components/shared/Modal';

// Standard modal
<Modal
  open={isOpen}
  onClose={close}
  title="Review Application"
  description="Check all fields before submitting."
  size="md"
  variant="default"
  footer={
    <div className="flex justify-end gap-3">
      <Button variant="ghost" size="sm" onClick={close}>Cancel</Button>
      <Button variant="primary" size="sm" onClick={submit}>Submit</Button>
    </div>
  }
>
  {/* body content */}
</Modal>

// Confirmation dialog
<ConfirmModal
  open={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={handleDelete}
  title="Delete Partnership?"
  description="This cannot be undone."
  confirmLabel="Delete"
  destructive
  loading={isDeleting}
/>
```

### 4.7 Drawer

```tsx
import { Drawer } from '@/components/shared/Drawer';

<Drawer
  open={isOpen}
  onClose={close}
  title="Filter Results"
  description="Refine by category and region"
  position="right"
  size="md"
  surface="default"
  footer={
    <div className="flex justify-between">
      <Button variant="ghost" size="sm" onClick={clearFilters}>
        Clear all
      </Button>
      <Button variant="primary" size="sm" onClick={applyFilters}>
        Apply
      </Button>
    </div>
  }
>
  {/* filter content */}
</Drawer>;
```

### 4.8 Tabs

```tsx
import { Tabs } from '@/components/shared/Tabs';

<Tabs
  variant="underline"
  tabs={[
    { key: 'overview', label: 'Overview' },
    { key: 'orders', label: 'Orders', badge: 12 },
    { key: 'disputes', label: 'Disputes', icon: <Warning size={14} /> },
    { key: 'settings', label: 'Settings', disabled: true },
  ]}
  defaultTab="overview"
  onChange={setActiveTab}
>
  {(tab) => (
    <div className="pt-6">
      {tab === 'overview' && <OverviewPanel />}
      {tab === 'orders' && <OrdersPanel />}
    </div>
  )}
</Tabs>;
```

**Variant guide:**

- `underline` → default, content-heavy sections
- `pill` → compact navigation, filter headers
- `segment` → binary/ternary toggle (2–4 options max)

### 4.9 Progress

```tsx
import { Progress, StepProgress, ProgressStack } from '@/components/shared/Progress';

// Bar
<Progress value={65} variant="success" size="md" label="Profile completion" showValue />

// With optional shine (active loading only)
<Progress value={progress} variant="primary" shine animated />

// Step indicator (onboarding)
<StepProgress
  steps={['Account', 'Organization', 'Documents', 'Review']}
  current={2}
/>

// Segmented stack
<ProgressStack
  segments={[
    { value: 45, variant: 'success', label: 'Approved' },
    { value: 30, variant: 'warning', label: 'Pending' },
    { value: 25, variant: 'error', label: 'Rejected' },
  ]}
  showLegend
/>
```

### 4.10 Tooltip / IconTooltip

```tsx
import { Tooltip, IconTooltip } from '@/components/shared/Tooltip';

// Wrap any element
<Tooltip content="Click to copy tracking ID" position="top" variant="default">
  <button>Copy</button>
</Tooltip>

// Info icon with tooltip
<IconTooltip
  content="Vendors must complete KYC before this field becomes active"
  variant="info"
  position="right"
/>
```

### 4.11 Avatar / AvatarGroup

```tsx
import { Avatar, AvatarGroup } from '@/components/shared/Avatar';

<Avatar firstName="Tariq" lastName="Bhat" size="md" status="online" />
<Avatar src={profileUrl} size="lg" ring showName />

<AvatarGroup
  size="sm"
  max={4}
  avatars={[
    { firstName: 'Tariq', lastName: 'Bhat' },
    { firstName: 'Aisha', lastName: 'Khan', status: 'online' },
    { src: '/avatar.jpg' },
  ]}
/>
```

### 4.12 SectionHeader

```tsx
import { SectionHeader } from '@/components/shared/SectionHeader';

// Centered — for FAQ, Pricing, CTA, Overview sections
<SectionHeader
  layout="centered"
  size="md"
  eyebrow="How It Works"
  headline="Three steps to your first order"
  description="From application to first delivery in under 30 days."
/>

// Split — for Features, Process, Workflow sections
<SectionHeader
  layout="split"
  size="lg"
  eyebrow="Partnership Systems"
  headline="16 pathways into the Kashmir craft market"
  description="Each pathway is designed for a specific trade relationship..."
/>

// Small — for sub-section headers within a page
<SectionHeader layout="centered" size="sm" headline="Frequently Asked" />
```

**Size guide:**

```
sm → sub-section, card-level headings
md → standard section (default)
lg → major narrative sections
xl → hero-level (use with section-hero only)
```

### 4.13 Skeleton

```tsx
import {
  Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard,
  SkeletonStatCard, SkeletonListItem, SkeletonTable, SkeletonForm,
  SkeletonProfile, SkeletonHero, SkeletonSectionHeader,
  SkeletonCardGrid, SkeletonList, SkeletonCTA
} from '@/components/shared/Skeleton';

// Primitives
<Skeleton className="h-4 w-32 rounded-[var(--radius-sm)]" />
<SkeletonText lines={3} lastLineShort />
<SkeletonAvatar size="md" />

// Components
<SkeletonCard hasImage lines={3} hasFooter />
<SkeletonStatCard />
<SkeletonTable rows={5} cols={4} />
<SkeletonForm fields={4} />
<SkeletonProfile />

// Section-level
<SkeletonHero />
<SkeletonSectionHeader />
<SkeletonCardGrid count={3} cols={3} />
<SkeletonList rows={5} hasAvatar hasAction />
<SkeletonCTA />
```

---

## 5. Pattern Library

### 5.1 Standard Section

```tsx
<section className="section section-base">
  <div className="container">
    <SectionHeader
      layout="centered"
      size="md"
      eyebrow="Section Label"
      headline="Section Headline"
      description="Supporting description text."
      className="mb-12"
    />
    <div className="grid-3">
      <Card variant="default" padding="lg">
        ...
      </Card>
      <Card variant="default" padding="lg">
        ...
      </Card>
      <Card variant="default" padding="lg">
        ...
      </Card>
    </div>
  </div>
</section>
```

### 5.2 Hero Section

```tsx
<section className="section-hero hero section-base">
  <div className="hero-content hero-content-split">
    <div className="hero-copy stack-lg">
      <SectionHeader layout="centered" align="left" size="xl" eyebrow="..." headline="..." />
      <p className="text-body">...</p>
      <div className="flex flex-wrap gap-3">
        <CTAButton variant="depth" size="xl">
          Start Partnership
        </CTAButton>
        <Button variant="ghost" size="xl">
          Learn More
        </Button>
      </div>
    </div>
    <div className="hero-visual">
      <StatCard label="Active Partners" value="1,284" delta="+12%" />
    </div>
  </div>
</section>
```

### 5.3 Split Section (Editorial)

```tsx
<section className="section-major section-elevated">
  <div className="container">
    <SectionHeader
      layout="split"
      size="lg"
      eyebrow="How It Works"
      headline="Three steps to your first order"
      description="..."
      className="mb-10"
    />
    <div className="grid-2 mt-12">
      {steps.map((step, idx) => (
        <Card key={idx} variant="default" padding="lg">
          ...
        </Card>
      ))}
    </div>
  </div>
</section>
```

### 5.4 CTA Section

```tsx
<section className="section section-primary">
  <div className="container-narrow stack-lg text-center">
    <SectionHeader
      layout="centered"
      size="lg"
      eyebrow="Get Started"
      headline="Ready to reach global buyers?"
    />
    <div className="flex flex-wrap justify-center gap-4">
      <CTAButton variant="depth" size="xl">
        Start Your Application
      </CTAButton>
      <Button variant="outline" size="xl">
        Talk to Sales
      </Button>
    </div>
  </div>
</section>
```

### 5.5 Confirmation Dialog

```tsx
<ConfirmModal
  open={showDelete}
  onClose={() => setShowDelete(false)}
  onConfirm={handleDelete}
  title="Remove Partnership?"
  description="This will remove the partnership and notify the vendor. This cannot be undone."
  confirmLabel="Remove"
  cancelLabel="Keep"
  destructive
  loading={isRemoving}
/>
```

### 5.6 Form Page Pattern

```tsx
<section className="section section-base">
  <div className="container-narrow">
    <SectionHeader
      layout="centered"
      size="md"
      eyebrow="Apply"
      headline="Start Your Application"
      className="mb-10"
    />
    <Card variant="elevated" padding="xl">
      <form className="stack-lg">
        <div className="form-grid-2">
          <Input
            label="First Name"
            required
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            required
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>
        <Input
          label="Business Email"
          type="email"
          required
          {...register('email')}
          error={errors.email?.message}
        />
        <Select
          label="Partnership Type"
          options={partnershipOptions}
          required
          {...register('type')}
        />
        <Textarea
          label="Tell us about your business"
          showCount
          maxLength={500}
          {...register('about')}
        />
        <div className="flex justify-end gap-3">
          <Button variant="ghost" size="md" type="button">
            Save Draft
          </Button>
          <Button variant="primary" size="md" type="submit" loading={isSubmitting}>
            Submit Application
          </Button>
        </div>
      </form>
    </Card>
  </div>
</section>
```

---

## 6. Migration Reference — Old → New

### 6.1 Token Migration

| Old (DELETED)            | New                                    |
| ------------------------ | -------------------------------------- |
| `--color-primary`        | `--primary`                            |
| `--color-accent`         | `--accent` or `--signature`            |
| `--color-secondary`      | `--secondary`                          |
| `--color-danger`         | `--destructive`                        |
| `--color-success`        | `--success`                            |
| `--color-warning`        | `--warning`                            |
| `--color-info`           | `--info`                               |
| `--color-text-primary`   | `--foreground`                         |
| `--color-text-secondary` | `--foreground` or `--muted-foreground` |
| `--color-text-muted`     | `--muted-foreground`                   |
| `--color-text-inverse`   | `--primary-foreground`                 |
| `--color-border`         | `--border`                             |
| `--color-border-subtle`  | `--border`                             |
| `--color-surface-card`   | `--card`                               |
| `--color-surface-base`   | `--background`                         |
| `--color-surface-subtle` | `--background-elevated`                |
| `--color-surface-muted`  | `--muted`                              |
| `--color-surface-darker` | `--background`                         |
| `--color-danger-bg`      | `--destructive-soft`                   |
| `--color-success-bg`     | `--success-soft`                       |
| `--color-warning-bg`     | `--warning-soft`                       |
| `--color-info-bg`        | `--info-soft`                          |
| `--gradient-primary`     | Remove — no gradients                  |
| `--gradient-accent`      | Remove — no gradients                  |
| `--skeu-shadow-*`        | `var(--shadow-sm/md/lg)`               |
| `--radius-component`     | `--radius-card`                        |
| `--radius-dialog`        | `--radius-modal`                       |
| `--radius-tooltip`       | `--radius-md`                          |

### 6.2 Component Variant Migration

| Old variant                            | New variant                                             |
| -------------------------------------- | ------------------------------------------------------- |
| `variant="skeu-accent"`                | `variant="depth"` (hero) or `variant="elite"` (section) |
| `variant="skeu-primary"`               | `variant="primary"`                                     |
| `variant="skeu-ghost-dark"`            | `variant="ghost"`                                       |
| `variant="outline-primary"`            | `variant="outline"`                                     |
| `variant="outline-dark"`               | `variant="outline"`                                     |
| `variant="ghost-dark"`                 | `variant="ghost"`                                       |
| `variant="glass-dark"`                 | `variant="glass"` (Card) or `variant="ghost"` (Button)  |
| `variant="on-saffron"`                 | `variant="primary"`                                     |
| `variant="accent"` (Button old)        | `variant="elite"`                                       |
| `variant="danger"`                     | `variant="error"`                                       |
| `variant="verified"`                   | `variant="success"`                                     |
| `variant="chip-verified"`              | `variant="success"`                                     |
| `variant="interactive-accent"` (Card)  | `variant="interactive"`                                 |
| `variant="interactive-saffron"` (Card) | `variant="interactive"`                                 |
| `variant="dark"` (Card)                | `variant="default"` or `variant="active"`               |
| `variant="skeu"` (Card)                | `variant="elevated"`                                    |

### 6.3 Class Migration

| Old class                | New class                                               |
| ------------------------ | ------------------------------------------------------- |
| `section-dark`           | `section-base` (on dark backgrounds) or `section-muted` |
| `section-darker`         | `section-base`                                          |
| `section-warm`           | `section-elevated`                                      |
| `section-saffron`        | Remove — no accent sections                             |
| `text-on-dark-primary`   | `text-(--foreground)`                                   |
| `text-on-dark-secondary` | `text-(--muted-foreground)`                             |
| `text-on-dark-muted`     | `text-(--muted-foreground)`                             |
| `text-on-dark-accent`    | `text-(--signature)`                                    |
| `eyebrow-on-dark`        | `eyebrow` (no variant needed)                           |
| `badge-on-dark`          | Remove `surface` prop                                   |
| `badge-on-dark-accent`   | Remove `surface` prop, use `variant="accent"`           |
| `card-on-dark`           | `dkc-card` or `Card variant="default"`                  |
| `divider-on-dark`        | `bg-(--border)` or `border-(--border)`                  |
| `card-skeu`              | `Card variant="elevated"`                               |
| `card-skeu-warm`         | `Card variant="default"`                                |
| `card-skeu-dark`         | `Card variant="active"`                                 |
| `card-stat`              | `StatCard` component or `Card variant="stat"`           |
| `container-platform`     | `container`                                             |
| `z-500`                  | `z-[var(--z-modal)]`                                    |
| `z-700`                  | `z-[var(--z-popover)]`                                  |

### 6.4 Prop Migration

| Old prop                           | New approach                             |
| ---------------------------------- | ---------------------------------------- |
| `surface="dark"` on Badge          | Remove — no surface prop                 |
| `surface="light"` on Badge         | Remove — no surface prop                 |
| `surface="dark"` on Chip           | Remove — no surface prop                 |
| `surface="dark"` on Tabs           | Remove — no surface prop                 |
| `surface="dark"` on Progress       | Remove — no surface prop                 |
| `context="dark"` on SectionHeader  | Remove — no context prop                 |
| `context="light"` on SectionHeader | Remove — no context prop                 |
| `href={partnershipHref(role)}`     | `href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}` |

---

## 7. Dos and Don'ts

### Do

```tsx
// ✅ Use semantic tokens
className="bg-(--card) text-(--foreground) border border-(--border)"

// ✅ Use semantic radius
className="rounded-[var(--radius-card)]"

// ✅ Use z-index tokens
className="z-[var(--z-modal)]"

// ✅ Use shadow tokens via style
style={{ boxShadow: 'var(--shadow-lg)' }}

// ✅ Use motion tokens
transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}

// ✅ Use section classes
<section className="section section-elevated">

// ✅ Use container classes
<div className="container">

// ✅ Use SectionHeader for all heading blocks
<SectionHeader layout="centered" size="md" eyebrow="..." headline="..." />

// ✅ Use heading classes
<h2 className="heading-section font-heading text-(--foreground)">

// ✅ Use layout tokens
className="hero-content hero-content-split"
```

### Don't

```tsx
// ❌ Hardcoded colors
className="bg-[#0d4f3c]"
style={{ color: '#e8890c' }}

// ❌ Old tokens
className="bg-(--color-primary)"
style={{ background: 'var(--color-surface-card)' }}

// ❌ Hardcoded rgba
style={{ background: 'rgba(13,79,60,0.65)' }}

// ❌ Tailwind color classes
className="bg-emerald-900 text-amber-400"

// ❌ Old variants
<Button variant="skeu-accent" />
<Badge surface="dark" />
<SectionHeader context="dark" />

// ❌ Role in URL
href={`${base}?role=buyer`}

// ❌ Inline style mutation on hover
onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)' }}

// ❌ Custom heading instead of SectionHeader
<div>
  <span className="text-xs uppercase">Label</span>
  <h2 className="text-4xl">Headline</h2>
  <p>Description</p>
</div>

// ❌ Hardcoded spring animation
transition={{ type: 'spring', stiffness: 380 }}
```

---

## 8. File Locations

```
apps/web/src/
  styles/
    globals.css              ← token source of truth
    DESIGN_SYSTEM.md         ← this file
  components/
    shared/
      Avatar.tsx
      Badge.tsx
      Button.tsx
      Card.tsx
      Chip.tsx
      Drawer.tsx
      Input.tsx
      Modal.tsx
      Navbar.tsx
      Progress.tsx
      SectionHeader.tsx
      Skeleton.tsx
      Tabs.tsx
      Tooltip.tsx
    sections/                ← page section components
  content/                   ← content files (no JSX)
  store/
    role.store.ts            ← useRoleStore
  lib/
    icons.ts                 ← all icons imported from here
    utils.ts                 ← cn() utility
```
