# Section Building Standards
> Read this before building any new page section.
> Design tokens: `src/styles/globals.css`
> Shared components: `src/components/shared/`
> Last updated: 2026-04-28

---

## 1. What is a section?

A section is a full-width horizontal slice of a page. It has:
- A background that spans 100% viewport width
- A container that constrains content to a max-width
- A vertical padding that creates breathing room
- A single, focused purpose — one message or action per section

A section is NOT a card. It is NOT a component. It is the outermost
layout unit on a page, one level above all components.

---

## 2. The three canonical backgrounds

Every section must use one of these three backgrounds and nothing else.
No other background colours are permitted on full-width sections.

| Class | Token | Hex | When to use |
|-------|-------|-----|-------------|
| `.section-white` | `--background-elevated` | #FFFFFF | Pure white sections — high emphasis, CTAs, hero alternates |
| `.section-cream` | `--background` | #F7F6F4 | Default warm off-white — the most-used section background |
| `.section-dark` / `.section-primary` | `--primary` | #1F2A44 | Dark sections — used sparingly for contrast breaks (1–2 per page max) |

### Background alternation rule
Alternate backgrounds as you move down the page to create visual rhythm.
A recommended pattern:
```
[hero]        → section-white or section-cream
[features]    → section-cream or section-white (alternate from hero)
[social proof]→ section-white
[CTA]         → section-dark (one dark section, usually near bottom)
[contact]     → section-cream
```
Never place two section-dark sections adjacent to each other.
Never place more than two identical backgrounds in a row.

---

## 3. Anatomy of a section

Every section follows this exact HTML/JSX structure:

```tsx
<section className="section-cream section">            {/* 1. Background + vertical padding */}
  <div className="container">                          {/* 2. Max-width constraint */}
    <div className="section-inner">                    {/* 3. Header → content gap */}

      {/* 4. SectionHeader — always first */}
      <SectionHeader
        headline="Your headline here"
        description="One sentence. Optional."
        size="lg"
        align="center"
      />

      {/* 5. Content — cards, grid, form, etc. */}
      <div className="grid-3">
        ...
      </div>

    </div>
  </div>
</section>
```

### Layer breakdown
| Layer | Class | Purpose |
|-------|-------|---------|
| `<section>` | `section-cream section` | Background + `padding-block: --section-y` |
| `<div>` | `container` | Constrain to 80rem, centred, with `--page-px` gutters |
| `<div>` | `section-inner` | Grid gap between SectionHeader and content: `--section-header-gap` |
| SectionHeader | — | Headline + optional eyebrow/description |
| Content area | varies | Cards, grids, forms, lists |

---

## 4. Spacing rules

### Vertical section padding
Use the `section-*` padding classes — never hardcode `py-*` values.

| Class | Token | Mobile → Desktop | When to use |
|-------|-------|-----------------|-------------|
| `.section-compact` | `--section-y-sm` | ~3.5rem → 5rem | Dense supporting sections (stats, logos, mini-features) |
| `.section` | `--section-y` | ~5rem → 7rem | Standard sections — most sections use this |
| `.section-major` | `--section-y-lg` | ~6rem → 8rem | Important sections with more visual weight |
| `.section-hero` | `--section-y-xl` | ~7rem → 9rem | Hero and primary CTA sections only |

You can remove top or bottom padding with modifier classes:
- `.section-top-none` — removes `padding-top`
- `.section-bottom-none` — removes `padding-bottom`

Use these when two adjacent sections visually belong together
(e.g. a stat strip directly below a hero).

### Section header → content gap
The gap between `SectionHeader` and the content below it is controlled by
`.section-inner` which uses `--section-header-gap` (clamp 2.5rem → 4rem).
For dense sections, use `.section-inner-sm` (clamp 2rem → 3rem).

Do NOT add extra `mt-*` or `mb-*` classes inside a section to create
spacing between header and content — use `.section-inner` gap instead.

### Content internal gaps
Use these classes for gaps within the content area:

| Class | Gap | When to use |
|-------|-----|-------------|
| `.grid-2` | clamp 2rem → 4rem | Two-column layouts |
| `.grid-3` | clamp 1.25rem → 2rem | Three-column feature grids |
| `.grid-4` | clamp 1rem → 1.5rem | Four-column dense grids |
| `.stack-sm` | 0.75rem | Tight stacks (icon + label) |
| `.stack-md` | 1rem | Standard stacks |
| `.stack-lg` | 1.5rem | Relaxed stacks |
| `.stack-xl` | clamp 1.25rem → 2rem | Section-level stacks |
| `.section-gap-sm` | clamp 2.5rem → 4rem | Inner section regions |
| `.section-gap-md` | clamp 4rem → 6rem | Major inner sections |

---

## 5. Container widths

| Class | Max-width | When to use |
|-------|----------|-------------|
| `.container` | 80rem (1280px) | Default — most sections |
| `.container-narrow` | 48rem (768px) | Text-heavy, prose sections |
| `.container-wide` | 90rem (1440px) | Wide dashboards, tables, showcase grids |
| `.container-readable` | 42rem | Article / long-form copy |
| `.container-heading` | 52rem | Centred section headlines only |

The container class handles both `max-width` and the horizontal gutters
(`--page-px`) automatically. Never add `px-*` inside a container.

---

## 6. SectionHeader — always the first child

Every section with readable content starts with a `SectionHeader`.
It is never optional when there is a headline. It handles:
- Eyebrow badge (optional, with `badgeVariant`)
- Headline (`heading-section` or `heading-subsection` based on `size`)
- Description (one sentence, 58ch max-width)
- Entry animation (whileInView, once:true)

```tsx
// Standard centred header
<SectionHeader
  headline="Why teams choose DKC"
  description="Everything your compliance team needs in one place."
  size="lg"
/>

// Left-aligned split layout — headline left, description right
<SectionHeader
  layout="split"
  headline="Built for scale"
  eyebrow="Platform"
  badgeVariant="accent"
  description="From 10 to 10,000 employees."
  size="md"
/>

// Small support section — no description needed
<SectionHeader headline="Trusted by 400+ companies" size="sm" />
```

### Size → heading class mapping
| size | Heading class | Use when |
|------|--------------|----------|
| `sm` | `heading-card` | Dense support sections, logo strips, compact stats |
| `md` | `heading-subsection` | Standard feature sections |
| `lg` | `heading-section` | Main page sections, important value props |
| `xl` | `heading-page` | Hero-adjacent sections only, use sparingly |

---

## 7. Section focus discipline

**One section = one message.** A visitor scrolling should never feel two
sections competing for attention simultaneously.

### Rules
1. Each section has exactly one primary action or message.
2. Sections never overlap visually — no negative margins between sections
   except intentional full-bleed elements.
3. Section backgrounds alternate to create a natural "chapter" feeling
   (see section 2). The background change IS the visual separator.
4. For same-background adjacent sections, add a divider:
   ```tsx
   <div className="section-divider" />
   ```
5. All sections use `scroll-margin-top` via `.section-anchor` so sticky
   headers don't overlap when deep-linked.
6. Sections never use `z-index` to create layering effects on desktop.
   Layered elements inside sections use `z-[var(--z-content)]` at most.

### Handling short sections (content shorter than viewport)
When a section's content does not fill the viewport, do NOT:
- Add excessive padding to compensate
- Add decorative background images or patterns to fill space
- Stretch card grids unnaturally

DO use one of these professional approaches:
- **Add a complementary stat strip** — a compact `.section-compact` section
  with 3–5 key metrics directly above or below.
- **Use `.section-fill-center`** — vertically centres content in a defined
  minimum height. Works well for CTA and testimonial sections.
- **Use a background texture** — `.texture-noise` or `.texture-diagonal`
  applied to the section background adds subtle depth without visual noise.
- **Pair with a visual** — for split layouts, fill the empty column with a
  screenshot, illustration, or abstract decorative element.
- **Accept it** — a short section with strong content and correct padding
  looks confident, not empty. Resist the urge to over-fill.

---

## 8. Radius philosophy

DKC-B2B is a professional product. Over-rounding undermines authority.
The scale is deliberately restrained.

### Base scale (defined in globals.css)
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Skeleton lines, small internal elements |
| `--radius-md` | 6px | Close buttons, tooltips, tiny UI |
| `--radius-lg` | 8px | Inputs, buttons (default), tabs, small cards |
| `--radius-xl` | 12px | Cards, modals, popovers — standard containment |
| `--radius-2xl` | 16px | Hero visual panels, CTA panels |
| `--radius-3xl` | 24px | Decorative use only — reserved for large imagery |

### Semantic tokens → which to use when
| Element | Token | Value |
|---------|-------|-------|
| Input / Textarea / Select | `--radius-input` | 8px |
| Button | `--radius-button` | 8px (NOT pill — professional feel) |
| Badge / Chip / Tag | `--radius-badge` / `--radius-chip` | 999px pill (small = ok) |
| Card (default) | `--radius-card` | 12px |
| Card (mobile/small) | `--radius-card-sm` | 8px |
| Modal / Dialog | `--radius-modal` | 12px |
| Popover / Dropdown | `--radius-popover` | 12px |
| Table | `--radius-table` | 8px |
| Section | `--radius-section` | **0 — always flat** |
| Hero visual panel | `--radius-hero` | 16px |
| CTA panel | `--radius-cta` | 16px |
| Tooltip | `--radius-tooltip` | 6px |

### Rules
- Sections and full-width elements are ALWAYS flat (border-radius: 0).
- Never use `rounded-2xl` or `rounded-3xl` on interactive elements.
- Never use pill (999px) on buttons — only on badges, chips, tags.
- Cards use `--radius-xl` (12px). They are "present but not prominent."
- When in doubt, use the smaller radius. Restraint reads as confidence.

---

## 9. Typography inside sections

Use globals.css typography classes. Never write raw `text-*` size classes
for headings — always use the semantic heading classes.

| Element | Class | Notes |
|---------|-------|-------|
| Section headline | `heading-section` | Used via SectionHeader size="lg" |
| Subsection headline | `heading-subsection` | Via SectionHeader size="md" |
| Card title | `heading-card` | Inside feature cards |
| Eyebrow / label | `eyebrow` | Uppercase mono dot-prefix — via SectionHeader eyebrow prop |
| Body copy | `text-base text-(--muted-foreground)` | Section description copy |
| Small body | `text-sm text-(--muted-foreground)` | Card descriptions |
| Data / stats | `font-data` | Metric numbers, tabular data |
| UI labels | `font-label` | System tags, overlines |

### Line length
Constrain reading text to prevent eye fatigue:
- Headlines: `max-w-[30ch]` (SectionHeader handles this automatically)
- Descriptions: `max-w-[58ch]` (SectionHeader handles this automatically)
- Body copy blocks: `.text-measure` (68ch) or `.text-measure-narrow` (58ch)

---

## 10. Section animations

All section entry animations use `whileInView` with `once: true`.
Never auto-play animations without viewport trigger.

### Standard section entry
```tsx
const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Usage:
<motion.div
  variants={SECTION_ENTER}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-6%' }}
>
```

### Staggered card grid entry
```tsx
const GRID_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const CARD_ENTER = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  },
};
```

### Rules
- `SectionHeader` has its own animation — do not wrap it in another.
- Max stagger delay: `0.1s`. Do not go above `0.12s` — later items
  feel abandoned.
- Do not animate individual text spans or words — animate containers.
- Respect `prefers-reduced-motion` (globals.css `@layer base` handles this).

---

## 11. Complete section checklist

Before shipping any new section, verify every item:

### Structure
- [ ] `<section>` uses a canonical background class (section-white / section-cream / section-dark)
- [ ] `<section>` uses a vertical padding class (section / section-compact / section-major / section-hero)
- [ ] Inner content is wrapped in `.container` (or `.container-narrow` / `.container-wide`)
- [ ] Content area is wrapped in `.section-inner` or `.section-inner-sm`
- [ ] `SectionHeader` is the first child inside `.section-inner`
- [ ] Section has an `id` attribute and `.section-anchor` class if it is deep-linkable

### Background alternation
- [ ] This section's background differs from the section directly above it,
      OR a `.section-divider` separates two same-background sections

### Spacing
- [ ] No hardcoded `py-*` values on the `<section>` element
- [ ] No extra `mt-*` between SectionHeader and content (use `.section-inner` gap)
- [ ] No `px-*` inside a `.container` element

### Typography
- [ ] Section headline uses SectionHeader component (not a raw `<h2>`)
- [ ] No hardcoded hex colours anywhere in the section file
- [ ] No hardcoded `text-[#...]` classes — use token classes

### Radius
- [ ] No `rounded-2xl` or `rounded-3xl` on buttons or interactive elements
- [ ] No `rounded-full` on buttons (pill only on badges/chips)
- [ ] Cards use `dkc-card` class (radius enforced via globals.css)
- [ ] Section element itself has no border-radius

### Focus discipline
- [ ] Section has one clear primary action or message
- [ ] No competing CTAs in the same section (max one primary CTA button)

### Globals.css compliance
- [ ] No inline `style={{ color: '...' }}` or `style={{ background: '...' }}` using raw hex
- [ ] All colours referenced via `text-(--token)` or `bg-(--token)` syntax
- [ ] All shadows via `shadow-sm`, `shadow-lg` etc (not `shadow-[var(--shadow-*)]`)
- [ ] All focus rings via `focus-ring` class (not hand-rolled color-mix)

---

## 12. Common section patterns

### Feature grid (3-column)
```tsx
<section className="section-cream section">
  <div className="container">
    <div className="section-inner">
      <SectionHeader headline="Everything you need" size="lg" align="center"
        description="Built for compliance teams who move fast." />
      <div className="grid-3">
        {features.map((f) => (
          <Card key={f.title} variant="default" padding="md">
            <div className="mb-4 text-(--accent)"><f.Icon size={28} /></div>
            <h3 className="heading-card mb-2">{f.title}</h3>
            <p className="text-sm text-(--muted-foreground)">{f.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>
```

### Stats strip (compact, between sections)
```tsx
<section className="section-white section-compact">
  <div className="container">
    <div className="grid-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-1 text-center">
          <span className="font-data text-3xl font-semibold text-(--foreground)">{s.value}</span>
          <span className="text-sm text-(--muted-foreground)">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA section (dark background)
```tsx
<section className="section-dark section-major">
  <div className="container">
    <div className="section-fill-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionHeader
          headline="Ready to get started?"
          description="Join 400+ companies already using DKC."
          size="lg"
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton size="lg">Start Free Trial</CTAButton>
          <Button variant="ghost" size="lg">Talk to Sales</Button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Split hero (text left, visual right)
```tsx
<section className="section-cream section-hero">
  <div className="hero-content hero-content-split container">
    <div className="hero-copy stack-xl">
      <Badge variant="accent" size="sm">New in 2025</Badge>
      <h1 className="heading-hero text-(--foreground)">Your headline here</h1>
      <p className="text-lg text-(--muted-foreground) text-measure-narrow">Description copy.</p>
      <div className="flex flex-wrap gap-4">
        <CTAButton size="lg">Get Started</CTAButton>
        <Button variant="ghost" size="lg">Learn More</Button>
      </div>
    </div>
    <div className="hero-visual">
      {/* screenshot / illustration */}
    </div>
  </div>
</section>
```

---

## 13. Fixing common section violations

When refactoring an existing section, check for these patterns:

| Issue | Current | Fix |
|-------|---------|-----|
| Background | `bg-[#FCF9F3]` hardcoded hex | `section-cream` class |
| Padding | `py-8 md:py-12` hardcoded | `section-compact` class |
| Container | `container mx-auto px-4` manual | `container` class (handles both) |
| Headline colours | `text-[#1A2E26]` hardcoded | `text-(--foreground)` |
| Decorative elements | `text-[#C5A267]` hardcoded | `text-(--accent)` or `text-(--signature)` |
| Card border | `border-[#E5DBC5]` hardcoded | `dkc-card` class (border included) |
| Card radius | `rounded-lg` Tailwind | `dkc-card` enforces `--radius-card` automatically |
| Card hover | `hover:shadow-md` Tailwind | `dkc-card` + `variant="interactive"` or `Card` component |
| Icon colour | `text-[#C5A267]` hardcoded | `text-(--accent)` |
| Card text colour | `text-[#4A554F]` hardcoded | `text-(--muted-foreground)` |
| Missing SectionHeader | Raw `<h2>` with manual styling | Replace with `<SectionHeader>` component |
| No `section-inner` | No gap utility between heading and grid | Wrap in `<div className="section-inner">` |
