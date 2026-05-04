# DKC Web — Development Guide

This document is the single reference for everyone working in this codebase — developers, contributors, and AI coding assistants. Read it before writing any code.

---

## What This Project Is

This is the **standalone UX/UI prototype** for De Koshur Crafts B2B. Its purpose is to serve as a design and interaction surface where the client team builds out screens, flows, and components. Once a feature is finalized here, the developer extracts the UX patterns, data shapes, and logic and ports them into the production monorepo (`dkc-b2b`).

This project is **not** the production system. Think of it as the design handoff layer — structured enough to extract from cleanly, realistic enough to validate UX decisions against real data shapes.

---

## Running the Project

```bash
# Install dependencies
pnpm install              # preferred
npm install               # also works

# Development server (port 3000)
pnpm dev

# Production build
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
```

### Database (Prisma)

```bash
# Apply pending migrations
pnpm prisma migrate dev --name <description>

# Open visual database browser
pnpm prisma studio

# Seed the database with sample data
pnpm prisma db seed

# Regenerate the Prisma client after schema changes
pnpm prisma generate
```

---

## Project Structure

Every file has one correct place. Do not create files outside these directories without updating this guide.

```
dkc-web-standalone/
│
├── prisma/
│   ├── schema.prisma          ← single source of truth for all data models
│   ├── seed.ts                ← database seed data
│   └── migrations/            ← auto-generated; never edit by hand
│
├── packages/                  ← local shared packages (types, validators, constants, utils, api-client)
│   ├── types/
│   ├── constants/
│   ├── validators/
│   ├── utils/
│   └── api-client/
│
└── src/
    ├── app/                   ← Next.js App Router pages only — no logic here
    │   ├── (public)/          ← unauthenticated public pages
    │   ├── (auth)/            ← login, register, password reset
    │   ├── (dashboard)/       ← protected user-facing pages
    │   └── layout.tsx
    │
    ├── server/                ← all server-side code — nothing outside this folder runs on the server
    │   ├── db.ts              ← Prisma client singleton — the only place it is instantiated
    │   ├── actions/           ← Next.js Server Actions, one file per domain
    │   └── services/          ← business logic called by actions
    │
    ├── components/
    │   ├── shared/            ← reusable UI primitives (Button, Card, Input, Badge…)
    │   ├── sections/          ← page-level section components, grouped by page name
    │   ├── layout/            ← Navbar, Footer, Sidebar, Header
    │   └── ui/                ← micro-elements too small for shared/ (Divider, Dot…)
    │
    ├── content/               ← all visible text and copy — never written inside components
    ├── hooks/                 ← custom React hooks
    ├── lib/                   ← utility functions (cn, formatDate, formatCurrency…)
    ├── store/                 ← Zustand global state stores
    ├── types/                 ← TypeScript interfaces and enums
    └── styles/
        ├── globals.css        ← design tokens and global utility classes
        └── DESIGN_SYSTEM.md   ← full token and component class reference
```

### Width rule

No folder should have more than roughly ten direct children. When a folder grows beyond that, split by domain — not by file type.

---

## Backend — Server-Side Code

### Where it lives

All server-side code goes inside `src/server/`. No other directory is allowed to contain database calls, server actions, or business logic.

```
src/server/
  db.ts
  actions/
    auth.actions.ts
    application.actions.ts
    partnership.actions.ts
    package.actions.ts
    dashboard.actions.ts
  services/
    auth.service.ts
    application.service.ts
    partnership.service.ts
```

### Server Actions

Use Next.js Server Actions for all mutations and data fetches that touch the database. One file per domain. Every action file starts with `'use server'`.

```ts
// src/server/actions/application.actions.ts
'use server';

import { db } from '@/server/db';
import { revalidatePath } from 'next/cache';
import type { CreateApplicationInput } from '@/types';

export async function createApplication(data: CreateApplicationInput) {
  const application = await db.application.create({ data });
  revalidatePath('/dashboard/my-path');
  return application;
}
```

Rules:
- Never import server actions into shared or primitive components — only into page-level section components
- Return plain serializable objects only — no class instances, no Prisma model objects with circular refs
- Throw descriptive errors; the calling component is responsible for catching and displaying them
- Keep actions thin — delegate business logic to services

### Services

Services are plain TypeScript functions that contain business logic. They have no Next.js dependencies. Actions call services; services call `db`.

```ts
// src/server/services/application.service.ts
import { db } from '@/server/db';
import type { ApplicationStatus } from '@prisma/client';

export async function transitionStatus(
  applicationId: string,
  newStatus: ApplicationStatus
) {
  // validation, side effects, etc.
  return db.application.update({
    where: { id: applicationId },
    data: { status: newStatus },
  });
}
```

### Prisma client — one instance only

`src/server/db.ts` is the only place `PrismaClient` is ever instantiated. Import `db` from `@/server/db` everywhere else.

```ts
// src/server/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

---

## Database — Prisma

### The schema is the contract

`prisma/schema.prisma` defines every table and every relationship. If the UI needs a data shape, the Prisma model must exist first. Never define a TypeScript type locally to represent data that belongs in the database.

### Naming conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Model name | PascalCase singular | `SubPartnership` |
| Field name | camelCase | `createdAt`, `subPartnershipId` |
| Relation field | camelCase, describes the relationship | `applications Application[]` |
| Enum name | PascalCase | `ApplicationStatus` |
| Enum value | SCREAMING_SNAKE | `UNDER_REVIEW` |

### Model example

```prisma
model Application {
  id               String            @id @default(cuid())
  userId           String
  user             User              @relation(fields: [userId], references: [id])
  subPartnershipId String
  subPartnership   SubPartnership    @relation(fields: [subPartnershipId], references: [id])
  status           ApplicationStatus @default(DRAFT)
  currentStep      Int               @default(1)
  reviewNotes      String?
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
}

enum ApplicationStatus {
  DRAFT
  SUBMITTED
  UNDER_REVIEW
  APPROVED
  REJECTED
  ONBOARDING
  PLACED
}
```

### Migration rules

- Never edit a migration file after it has been applied — delete and recreate if needed in development
- Migration names describe the change: `add_application_table`, `add_status_to_user`, `rename_org_field`
- Never use `prisma db push` in anything other than throwaway local dev — always use `migrate dev`
- Keep `prisma/seed.ts` current; seed data must match the schema exactly

---

## Frontend — Components

### Check shared/ before building anything

Before writing a new UI element, open `src/components/shared/` and check if it already exists. If it exists, use it — do not build a parallel version inline. If it does not exist, create it in `shared/` first, then use it from there.

**Available shared components:**

| Component | Purpose |
|-----------|---------|
| `Button` | Every clickable action |
| `Card`, `CardHeader`, `CardBody`, `CardFooter` | All content containers |
| `Input`, `Textarea`, `Select` | All form fields — never use raw HTML equivalents |
| `Badge` | Static labels, status markers (non-interactive) |
| `Chip`, `ChipGroup`, `ChipSelector` | Interactive filters, tags, removable selections |
| `Modal`, `ConfirmModal` | All dialogs |
| `Drawer` | Side panels |
| `Tabs` | Tab navigation |
| `Progress`, `StepProgress`, `ProgressStack` | Progress and step indicators |
| `Tooltip`, `IconTooltip` | Hover hints |
| `SectionHeader` | Every section that has a heading — always use this, never build ad-hoc |
| `Skeleton`, `SkeletonCard`, `SkeletonTable`, `SkeletonForm`, etc. | All loading states |
| `Avatar`, `AvatarGroup` | User avatars |

### Creating a new shared component

1. File goes in `src/components/shared/ComponentName.tsx` — PascalCase filename
2. Export the main component and any sub-parts from the same file
3. Accept `variant`, `size`, and `className` props using design tokens
4. Use `cn()` from `@/lib/utils` for class composition
5. No hardcoded color, spacing, radius, or motion values anywhere in the file

### Section components

Each page gets a folder inside `src/components/sections/` named after it. Sections are individual files within that folder.

```
src/components/sections/
  Home/
    HeroSection.tsx
    FeaturesSection.tsx
    CTASection.tsx
  Pricing/
    PricingHero.tsx
    PricingCards.tsx
    PricingFAQ.tsx
  Dashboard/
    MyPathSection.tsx
    KpiSection.tsx
    DocumentsSection.tsx
```

One section per file. Keep sections as Server Components unless they need interactivity (`'use client'`).

### Page file pattern

```tsx
// src/app/(public)/pricing/page.tsx
import type { Metadata } from 'next';
import PricingClient from '@/components/sections/Pricing/PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the partnership plan that fits your business.',
};

export default function PricingPage() {
  return <PricingClient />;
}
```

The page file is a Server Component and holds only the `metadata` export. All interactive content is delegated to a `*Client.tsx` component.

### Section stacking

Sections stack directly inside the client component. Alternate backgrounds — never place the same background class on adjacent sections.

```tsx
'use client';

export default function PricingClient() {
  return (
    <div className="page">
      <div className="page-content">
        <section className="section-hero section-base">
          <div className="container"> ... </div>
        </section>
        <div className="section-divider" />
        <section className="section section-elevated">
          <div className="container"> ... </div>
        </section>
        <section className="section-major section-muted">
          <div className="container"> ... </div>
        </section>
      </div>
    </div>
  );
}
```

---

## Styling — Zero Hardcoded Values

Every visual value must come from the design token system defined in `src/styles/globals.css`. There are no exceptions.

### What is forbidden

```tsx
// Hardcoded colors
style={{ color: '#4caf50' }}
className="text-green-500"
className="bg-white"
className="text-black"

// Hardcoded radii or spacing
style={{ borderRadius: '8px' }}
style={{ padding: '24px' }}

// Hardcoded font sizes
style={{ fontSize: '14px' }}

// Old deleted tokens
var(--color-primary)
var(--color-accent)
var(--color-surface-*)
var(--color-text-*)
var(--gradient-*)
```

### What is required

```tsx
className="text-(--success)"
className="bg-(--background)"
className="text-(--muted-foreground)"
className="rounded-(--radius-card)"
className="border-(--border)"
className="p-6"           ← Tailwind spacing scale
className="text-sm"       ← Tailwind text scale
```

### Core token reference

```
Backgrounds:   --background  --background-elevated  --background-focus
Foregrounds:   --foreground  --muted-foreground  --card-foreground
Brand:         --primary  --primary-foreground  --signature  --signature-foreground
Borders:       --border  --input  --ring
Status:        --success  --warning  --destructive  --info
  (+ -foreground and -soft variants for each)
Radii:         --radius-button  --radius-card  --radius-input  --radius-badge  --radius-modal
Shadows:       --shadow-xs  --shadow-sm  --shadow  --shadow-md  --shadow-lg  --shadow-xl
Motion:        --ease-premium  --duration-fast  --duration-normal  --duration-slow
Layout:        --container  --page-px  --section-y  --header-height
```

Full reference: `src/styles/DESIGN_SYSTEM.md`

### Typography classes

Always use these for headings — never set font sizes manually:

```
.heading-hero         ← hero panels only
.heading-page         ← page titles
.heading-section      ← section headings
.heading-subsection   ← subsections
.heading-card         ← card and widget headings
```

Font role classes:
```
.font-display    ← serif, for hero headings
.font-heading    ← serif, for section headings
.font-ui         ← sans-serif UI text
.font-data       ← monospace, tabular numbers
.font-label      ← monospace, uppercase labels
```

Body text:
```
.text-body       ← fluid base size, muted-foreground color
.eyebrow         ← uppercase label with dot indicator
```

---

## Content — Text Belongs in Content Files

All user-visible strings — headings, descriptions, labels, button text, placeholder text — live in `src/content/`. They are never written inline inside a component.

```
src/content/
  home.content.ts
  pricing.content.ts
  auth.content.ts
  dashboard.content.ts
  partnership-paths.content.ts
```

Pattern:

```ts
// src/content/home.content.ts
export const homeContent = {
  hero: {
    eyebrow: 'Kashmiri Artisan Marketplace',
    headline: 'Source directly from the mountains.',
    description: 'Connect with verified Kashmiri craftspeople through a structured B2B partnership system.',
    primaryCta: 'Explore Partnership Paths',
    secondaryCta: 'How it works',
  },
  features: {
    eyebrow: 'Why DKC',
    headline: 'Built for serious trade relationships.',
    items: [...],
  },
}
```

Components receive text as props — they do not know what the text says.

---

## Forms

- Library: `react-hook-form` v7 with `@hookform/resolvers`
- Validation schemas: always from `packages/validators/` — never write Zod schemas locally
- Fields: always use `Input`, `Textarea`, `Select` from `@/components/shared/Input` — never raw HTML elements
- Error display: inline via the `error` prop on the field component — never in a toast
- Loading state: `loading={isSubmitting}` on the submit `Button`
- Layout: `.form-grid` for single column, `.form-grid-2` for two columns at 768px+

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@dkc/validators';
import type { LoginInput } from '@dkc/validators';
import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({
  resolver: zodResolver(loginSchema),
});
```

---

## Loading States

Use `Skeleton` components from `@/components/shared/Skeleton`. No spinner component exists — never add one without a design decision.

| Export | Use for |
|--------|---------|
| `Skeleton` | Any generic placeholder block |
| `SkeletonText` | Multi-line text blocks |
| `SkeletonCard` | Card with optional image/footer |
| `SkeletonTable` | Data tables |
| `SkeletonForm` | Form fields |
| `SkeletonHero` | Hero sections |
| `SkeletonCardGrid` | Grid of cards |
| `SkeletonList` | List rows |

---

## State Management

- **Server state** (API data): TanStack Query (`useQuery`, `useMutation`) — 60s staleTime, 1 retry, no refetch on window focus
- **Global client state**: Zustand stores in `src/store/`
- **Form state**: `react-hook-form` only — do not use `useState` for form field values unless programmatic control is required

### Role store

The active platform role is stored in `useRoleStore` from `src/store/role.store.ts`.

```ts
import { useRoleStore } from '@/store/role.store';
const { activeRole, setRole } = useRoleStore();
```

Role is **never** put in a URL query parameter (`?role=buyer` is always wrong). Components that vary by role use a keyed Record:

```ts
const ROLE_CONTENT: Record<string, SectionContent> = {
  buyer: { headline: 'Find suppliers', ... },
  vendor: { headline: 'Reach buyers', ... },
}

const content = ROLE_CONTENT[activeRole ?? 'buyer']
```

Never write `if (role === 'buyer') { ... } else if (role === 'vendor') { ... }` chains.

---

## Icons

All icons are imported from `src/lib/icons.ts` only. Never import directly from `@phosphor-icons/react` or any other library inside a component.

If an icon is missing, add it to `src/lib/icons.ts` first using the same library, then import from there.

```ts
// correct
import { ArrowRight, CheckCircle } from '@/lib/icons';

// wrong
import { ArrowRight } from '@phosphor-icons/react';
```

---

## Images

Always use Next.js `<Image>` from `next/image`. Never use a plain `<img>` tag.

```tsx
// Fixed size
<Image src="/images/hero.jpg" alt="Description" width={800} height={600} />

// Fill container — parent must have position: relative and defined dimensions
<div className="relative aspect-video">
  <Image
    src="/images/banner.jpg"
    alt="Description"
    fill
    sizes="(min-width: 1024px) 50vw, 100vw"
    className="object-cover"
  />
</div>
```

---

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Component files | PascalCase | `HeroSection.tsx`, `PricingCard.tsx` |
| Non-component TS files | camelCase | `auth.actions.ts`, `home.content.ts` |
| Folders | kebab-case | `partnership-paths/`, `api-client/` |
| Prisma models | PascalCase singular | `SubPartnership` |
| Prisma enums | PascalCase + SCREAMING values | `ApplicationStatus.UNDER_REVIEW` |
| Zustand stores | camelCase file + `use` prefix export | `role.store.ts` → `useRoleStore` |
| Server actions | verb + noun | `createApplication`, `updateStepData` |
| Custom hooks | `use` prefix | `usePartnershipData`, `useRoleContent` |
| Content files | page name + `.content.ts` | `pricing.content.ts` |

---

## Breakpoints

Standard Tailwind v4 defaults — no custom breakpoints are defined.

```
sm   640px   sm:
md   768px   md:
lg   1024px  lg:
xl   1280px  xl:
2xl  1536px  2xl:
```

Mobile-first. Every layout class starts single-column and expands up. Touch vs. mouse detection uses `(pointer: coarse)` and `(pointer: fine)` — not size breakpoints.

---

## Animation

- Motion library: Framer Motion
- Easing: always `--ease-premium` cubic-bezier
- Duration: always `--duration-fast`, `--duration-normal`, or `--duration-slow`
- Maximum hover translate: `translateY(-4px)`
- Hover transforms only on `pointer: fine` devices
- `prefers-reduced-motion` is handled globally in `globals.css` — do not override it

---

## Extracting to the Production Monorepo

When a feature is complete in this project, port it to `dkc-b2b` using this mapping:

| Artifact here | Destination in `dkc-b2b` |
|---------------|--------------------------|
| `src/components/sections/[Name]/` | `apps/web/src/components/sections/[Name]/` |
| `src/components/shared/` new or improved components | `apps/web/src/components/shared/` |
| `src/content/*.content.ts` | `apps/web/src/content/` |
| `prisma/schema.prisma` models | SQL migration in `apps/api/src/migrations/` |
| `src/server/services/` | NestJS service classes in `apps/api/src/` |
| `packages/types/` new types | `packages/types/src/` in the monorepo |
| `packages/validators/` new schemas | `packages/validators/src/` in the monorepo |

When porting:
- Replace `@/server/db` + Prisma calls with `@dkc/api-client` service calls
- Replace any local type definitions with types from `@dkc/types`
- Remove any prototype shortcuts (hardcoded IDs, mock data, disabled auth)

---

## Environment Variables

Create a `.env` file at the project root. Never commit it. Required variables:

```
DATABASE_URL=         # PostgreSQL connection string for Prisma
NEXTAUTH_SECRET=      # Random string for session signing
NEXTAUTH_URL=         # http://localhost:3000 in development
NEXT_PUBLIC_API_URL=  # Backend API base URL
```

---

## What Belongs Where — Quick Decision Table

| Question | Answer |
|----------|--------|
| New page | `src/app/(group)/route/page.tsx` + client component in `src/components/sections/` |
| New reusable UI element | `src/components/shared/ComponentName.tsx` |
| New section on an existing page | New file inside the page's folder in `src/components/sections/` |
| Visible text or copy | `src/content/[page].content.ts` |
| Database mutation | `src/server/actions/[domain].actions.ts` → `src/server/services/[domain].service.ts` |
| New data model | `prisma/schema.prisma`, then `pnpm prisma migrate dev` |
| Shared utility function | `src/lib/[name].ts` |
| Global client state | `src/store/[name].store.ts` |
| Custom hook | `src/hooks/use[Name].ts` |
| New TypeScript type | `src/types/[domain].types.ts` if local; `packages/types/` if it will cross into the monorepo |
