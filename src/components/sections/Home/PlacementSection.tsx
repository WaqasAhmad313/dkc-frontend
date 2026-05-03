// 'use client';

// import { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import Link from 'next/link';

// import { Badge } from '@/components/shared/Badge';
// import { CTAButton } from '@/components/shared/Button';
// import { Chip, ChipGroup } from '@/components/shared/Chip';
// import { Card, CardHeader, CardBody, CardFooter, CardDividerSkeu } from '@/components/shared/Card';
// import { Progress } from '@/components/shared/Progress';
// import { HOMEPAGE } from '@/content/homepage.content';

// const c = HOMEPAGE.placement;

// type Stage = (typeof c.stages)[number];

// /* ── Node positions ──────────────────────────────────────────────
//  * cx/cy are percentages within the route map container.
//  * Horizontal range: 12%–88% so the 148px node cards (74px half-width)
//  * never clip the container edges regardless of viewport width.
//  * Vertical positions match the SVG wave path Y values.
//  */
// const NODE_POSITIONS: Array<{ cx: string; cy: string }> = [
//   { cx: '12%', cy: '52%' },
//   { cx: '30%', cy: '22%' },
//   { cx: '50%', cy: '76%' },
//   { cx: '70%', cy: '22%' },
//   { cx: '88%', cy: '52%' },
// ];

// /* ── SVG wave path ───────────────────────────────────────────────
//  * Viewbox 1200×300. Node Xs at 12%/30%/50%/70%/88% of 1200:
//  *   144, 360, 600, 840, 1056  —  Ys: 156, 66, 228, 66, 156
//  */
// const ROUTE_PATH =
//   'M144 156 C240 156, 278 66, 360 66 S520 228, 600 228 S680 66, 840 66 S960 156, 1056 156';

// /* ── StageSelector ───────────────────────────────────────────── */

// interface StageSelectorProps {
//   stages: readonly Stage[];
//   activeIndex: number;
//   onSelect: (i: number) => void;
// }

// function StageSelector({ stages, activeIndex, onSelect }: StageSelectorProps) {
//   return (
//     <ChipGroup wrap gap="md" className="justify-start">
//       {stages.map((stage, index) => (
//         <Chip
//           key={stage.number}
//           variant={index === activeIndex ? 'primary' : 'default'}
//           size="md"
//           active={index === activeIndex}
//           onClick={() => onSelect(index)}
//         >
//           {stage.number}. {stage.title}
//         </Chip>
//       ))}
//     </ChipGroup>
//   );
// }

// /* ── RouteMap — md+ wave layout ─────────────────────────────── */

// interface RouteMapProps {
//   stages: readonly Stage[];
//   activeIndex: number;
//   onSelect: (i: number) => void;
// }

// function RouteMap({ stages, activeIndex, onSelect }: RouteMapProps) {
//   return (
//     <div className="lg:h-70 relative h-60 w-full overflow-visible">
//       <svg
//         className="absolute inset-0 h-full w-full"
//         viewBox="0 0 1200 300"
//         fill="none"
//         aria-hidden="true"
//         preserveAspectRatio="none"
//       >
//         <path d={ROUTE_PATH} stroke="var(--color-border-strong)" strokeWidth="2" opacity="0.4" />
//         <motion.path
//           d={ROUTE_PATH}
//           stroke="var(--color-accent)"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeDasharray="10 16"
//           animate={{ pathLength: [0.12, 1, 0.12] }}
//           transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
//         />
//       </svg>

//       {stages.map((stage, index) => {
//         const pos = NODE_POSITIONS[index];
//         if (!pos) return null;
//         const isActive = index === activeIndex;
//         const isPast = index < activeIndex;

//         return (
//           <motion.button
//             key={stage.number}
//             type="button"
//             onClick={() => onSelect(index)}
//             animate={{ scale: isActive ? 1.06 : 1 }}
//             transition={{ type: 'spring', stiffness: 280, damping: 22 }}
//             aria-pressed={isActive}
//             className="focus-visible:ring-(--color-accent) absolute text-left focus:outline-none focus-visible:ring-2"
//             style={{
//               left: pos.cx,
//               top: pos.cy,
//               transform: 'translate(-50%, -50%)',
//               width: 'clamp(120px, 13vw, 148px)',
//               zIndex: isActive ? 10 : 5,
//               background: isActive
//                 ? 'linear-gradient(158deg, rgba(var(--color-accent-rgb),0.12) 0%, rgba(var(--color-accent-rgb),0.05) 100%)'
//                 : isPast
//                   ? 'var(--skeu-bg-card)'
//                   : 'var(--color-surface-card)',
//               borderTop: isActive
//                 ? '1px solid rgba(var(--color-accent-rgb),0.5)'
//                 : '1px solid rgba(255,255,255,0.9)',
//               borderLeft: isActive
//                 ? '1px solid rgba(var(--color-accent-rgb),0.3)'
//                 : '1px solid rgba(255,255,255,0.75)',
//               borderRight: isActive
//                 ? '1px solid rgba(var(--color-accent-rgb),0.15)'
//                 : '1px solid var(--color-border)',
//               borderBottom: isActive
//                 ? '2px solid var(--color-accent-muted)'
//                 : '2px solid var(--color-border-strong)',
//               borderRadius: 'var(--radius-xl)',
//               boxShadow: isActive ? 'var(--skeu-shadow-card-hover)' : 'var(--skeu-shadow-card)',
//               padding: '0.5rem 0.625rem',
//               transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
//             }}
//           >
//             <div className="mb-1 flex items-center justify-between">
//               <span
//                 className="text-[9px] font-bold tabular-nums"
//                 style={{
//                   color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
//                   fontFamily: 'var(--font-mono)',
//                   letterSpacing: '0.1em',
//                 }}
//               >
//                 {String(stage.number).padStart(2, '0')}
//               </span>
//               <svg
//                 width="10"
//                 height="10"
//                 viewBox="0 0 12 12"
//                 fill="none"
//                 aria-hidden="true"
//                 style={{
//                   color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
//                   opacity: 0.7,
//                 }}
//               >
//                 <path
//                   d="M2 6h8M7 3l3 3-3 3"
//                   stroke="currentColor"
//                   strokeWidth="1.4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//             <div
//               className="text-[11px] font-semibold leading-snug"
//               style={{
//                 color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
//               }}
//             >
//               {stage.title}
//             </div>
//           </motion.button>
//         );
//       })}
//     </div>
//   );
// }

// /* ── MobileStageList — xs/sm vertical stepper ───────────────── */

// interface MobileStageListProps {
//   stages: readonly Stage[];
//   activeIndex: number;
//   onSelect: (i: number) => void;
// }

// function MobileStageList({ stages, activeIndex, onSelect }: MobileStageListProps) {
//   return (
//     <div className="flex flex-col">
//       {stages.map((stage, index) => {
//         const isActive = index === activeIndex;
//         const isLast = index === stages.length - 1;

//         return (
//           <div key={stage.number} className="flex gap-3">
//             {/* Left: step indicator + connector */}
//             <div className="flex flex-col items-center">
//               <button
//                 type="button"
//                 onClick={() => onSelect(index)}
//                 aria-pressed={isActive}
//                 className="focus-visible:ring-(--color-accent) relative z-10 flex size-9 shrink-0 items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2"
//                 style={{
//                   background: isActive
//                     ? 'linear-gradient(158deg, rgba(var(--color-accent-rgb),0.12) 0%, rgba(var(--color-accent-rgb),0.05) 100%)'
//                     : 'var(--color-surface-card)',
//                   borderTop: isActive
//                     ? '1px solid rgba(var(--color-accent-rgb),0.5)'
//                     : '1px solid rgba(255,255,255,0.9)',
//                   borderLeft: isActive
//                     ? '1px solid rgba(var(--color-accent-rgb),0.3)'
//                     : '1px solid rgba(255,255,255,0.75)',
//                   borderRight: isActive
//                     ? '1px solid rgba(var(--color-accent-rgb),0.15)'
//                     : '1px solid var(--color-border)',
//                   borderBottom: isActive
//                     ? '2px solid var(--color-accent-muted)'
//                     : '2px solid var(--color-border-strong)',
//                   boxShadow: isActive ? 'var(--skeu-shadow-card-hover)' : 'var(--skeu-shadow-card)',
//                 }}
//               >
//                 <span
//                   className={isActive ? 'stat-extrude' : 'stat-deboss'}
//                   style={{
//                     fontFamily: 'var(--font-serif)',
//                     fontSize: '0.85rem',
//                     fontWeight: 700,
//                     lineHeight: 1,
//                     color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
//                   }}
//                 >
//                   {stage.number}
//                 </span>
//               </button>

//               {!isLast && (
//                 <div
//                   className="mt-1 w-px flex-1"
//                   style={{
//                     background: isActive
//                       ? 'linear-gradient(to bottom, var(--color-accent), var(--color-border))'
//                       : 'var(--color-border)',
//                     minHeight: '1.5rem',
//                   }}
//                   aria-hidden="true"
//                 />
//               )}
//             </div>

//             {/* Right: title + body */}
//             <div className="flex flex-col gap-1 pb-5 pt-1.5">
//               <button
//                 type="button"
//                 onClick={() => onSelect(index)}
//                 className="text-left text-sm font-semibold leading-snug focus:outline-none"
//                 style={{
//                   color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
//                 }}
//               >
//                 {stage.title}
//               </button>
//               {isActive && (
//                 <motion.p
//                   initial={{ opacity: 0, y: 4 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.25 }}
//                   className="body-sm"
//                   style={{ maxWidth: '42ch', color: 'var(--color-text-secondary)' }}
//                 >
//                   {stage.body}
//                 </motion.p>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* ── CheckpointCard ──────────────────────────────────────────── */

// interface CheckpointCardProps {
//   stage: Stage;
//   activeIndex: number;
//   total: number;
// }

// function CheckpointCard({ stage, activeIndex, total }: CheckpointCardProps) {
//   return (
//     <Card variant="skeu-warm" padding="md" className="flex h-full flex-col">
//       <CardHeader>
//         <p className="label-overline">Selected route checkpoint</p>
//       </CardHeader>

//       <CardDividerSkeu />

//       <CardBody className="flex flex-1 flex-col gap-4 pt-4">
//         {/* Large embossed step number + title */}
//         <div className="flex items-start gap-4">
//           {/*
//            * Embossed step number — matches the reference images (1, 2, 3 physical numbers).
//            * stat-extrude from globals.css: --skeu-text-shadow-extrude gives the
//            * extruded 3D block look — stacked offset shadows = depth layers.
//            * Large, saffron, physically present.
//            */}
//           <span
//             className="stat-extrude shrink-0 select-none leading-none"
//             aria-hidden="true"
//             style={{
//               fontFamily: 'var(--font-serif)',
//               fontSize: 'clamp(3rem, 5vw, 4rem)',
//               letterSpacing: '-0.04em',
//               color: 'var(--color-accent)',
//               lineHeight: 1,
//             }}
//           >
//             {String(stage.number).padStart(2, '0')}
//           </span>

//           <div className="flex flex-col gap-1 pt-1">
//             <h3 className="heading-3" style={{ color: 'var(--color-text-primary)' }}>
//               {stage.title}
//             </h3>
//             <p
//               className="body-base"
//               style={{ maxWidth: '44ch', color: 'var(--color-text-secondary)' }}
//             >
//               {stage.body}
//             </p>
//           </div>
//         </div>
//       </CardBody>

//       <CardDividerSkeu />

//       {/*
//        * Progress bar — Progress component from shared components.
//        * variant="accent" (saffron fill) with value scaled to active step.
//        * showValue displays the x/total fraction alongside.
//        */}
//       <CardFooter className="flex-col items-start gap-2">
//         <div className="flex w-full items-center justify-between">
//           <p className="label-overline" style={{ color: 'var(--color-text-muted)' }}>
//             Journey progress
//           </p>
//           <span
//             className="text-xs font-semibold tabular-nums"
//             style={{ color: 'var(--color-accent-muted)' }}
//           >
//             {activeIndex + 1} / {total}
//           </span>
//         </div>
//         <Progress value={activeIndex + 1} max={total} variant="accent" size="sm" animated />
//       </CardFooter>
//     </Card>
//   );
// }

// /* ── CtaCard ─────────────────────────────────────────────────── */

// interface CtaCardProps {
//   href: string;
//   label: string;
//   closingLine: string;
// }

// function CtaCard({ href, label, closingLine }: CtaCardProps) {
//   return (
//     <Card variant="skeu" padding="md" className="flex h-full flex-col justify-between">
//       {/* Saffron accent rule — skeuomorphic raised bar */}
//       <div
//         aria-hidden="true"
//         style={{
//           height: '2px',
//           width: '2.5rem',
//           borderRadius: 'var(--radius-full)',
//           background: 'var(--gradient-accent)',
//           boxShadow: '0 1px 6px 0 rgba(232,137,12,0.4)',
//           marginBottom: '1rem',
//         }}
//       />

//       <CardBody className="flex-1">
//         <p
//           style={{
//             fontFamily: 'var(--font-serif)',
//             fontStyle: 'italic',
//             fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
//             lineHeight: 1.65,
//             color: 'var(--color-text-secondary)',
//           }}
//         >
//           {closingLine}
//         </p>
//       </CardBody>

//       <CardFooter>
//         <Link href={href} className="w-full">
//           <CTAButton variant="skeu-primary" size="md" fullWidth>
//             {label}
//           </CTAButton>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

// /* ── PlacementSection ────────────────────────────────────────── */

// export default function PlacementSection() {
//   const ref = useRef<HTMLElement>(null);
//   const inView = useInView(ref, { once: true, margin: '-8%' });
//   const [activeIndex, setActiveIndex] = useState<number>(2);

//   const activeStage: Stage | undefined = c.stages[activeIndex];

//   return (
//     <section
//       ref={ref}
//       aria-labelledby="placement-heading"
//       className="section-subtle relative overflow-hidden"
//     >
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{ background: 'var(--gradient-mesh)', opacity: 0.45 }}
//         aria-hidden="true"
//       />

//       <div className="container-platform section-py relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] as number[] }}
//           className="flex max-w-2xl flex-col gap-4"
//         >
//           <Badge variant="primary" size="md" dot>
//             {c.sectionLabel}
//           </Badge>
//           <h2 id="placement-heading" className="heading-1" style={{ maxWidth: '22ch' }}>
//             {c.headline}
//           </h2>
//           <p className="body-lead" style={{ maxWidth: '52ch' }}>
//             {c.intro}
//           </p>
//         </motion.div>

//         {/* Main card */}
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] as number[] }}
//         >
//           <Card variant="skeu" padding="none" className="overflow-visible">
//             {/* Subtle inner grid texture */}
//             <div
//               className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.025]"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)',
//                 backgroundSize: '32px 32px',
//               }}
//               aria-hidden="true"
//             />

//             <div className="relative z-10 flex flex-col gap-6 p-4 sm:gap-7 sm:p-6 lg:p-8">
//               {/* Stage selector chips */}
//               <div className="flex flex-col gap-2">
//                 <p className="label-overline" style={{ color: 'var(--color-text-muted)' }}>
//                   Select a stage
//                 </p>
//                 <StageSelector
//                   stages={c.stages}
//                   activeIndex={activeIndex}
//                   onSelect={setActiveIndex}
//                 />
//               </div>

//               {/* Wave map md+ / vertical stepper below md */}
//               <div className="overflow-visible">
//                 <div className="hidden md:block">
//                   <RouteMap stages={c.stages} activeIndex={activeIndex} onSelect={setActiveIndex} />
//                 </div>
//                 <div className="md:hidden">
//                   <MobileStageList
//                     stages={c.stages}
//                     activeIndex={activeIndex}
//                     onSelect={setActiveIndex}
//                   />
//                 </div>
//               </div>

//               {/* Bottom row: checkpoint + CTA */}
//               <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_280px]">
//                 {activeStage !== undefined && (
//                   <CheckpointCard
//                     stage={activeStage}
//                     activeIndex={activeIndex}
//                     total={c.stages.length}
//                   />
//                 )}
//                 <CtaCard href={c.cta.href} label={c.cta.label} closingLine={c.closingLine} />
//               </div>
//             </div>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/shared/Badge';
import { CTAButton } from '@/components/shared/Button';
import { Chip, ChipGroup } from '@/components/shared/Chip';
import { Card, CardHeader, CardBody, CardFooter, CardDivider } from '@/components/shared/Card';
import { Progress } from '@/components/shared/Progress';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HOMEPAGE } from '@/content/homepage.content';
import { cn } from '@/lib/utils';

const c = HOMEPAGE.placement;

type Stage = (typeof c.stages)[number];

/* ── Node positions ────────────────────────────────────────────── */
const NODE_POSITIONS: Array<{ cx: string; cy: string }> = [
  { cx: '12%', cy: '52%' },
  { cx: '30%', cy: '22%' },
  { cx: '50%', cy: '76%' },
  { cx: '70%', cy: '22%' },
  { cx: '88%', cy: '52%' },
];

const ROUTE_PATH =
  'M144 156 C240 156, 278 66, 360 66 S520 228, 600 228 S680 66, 840 66 S960 156, 1056 156';

/* ── StageSelector ───────────────────────────────────────────── */

interface StageSelectorProps {
  stages: readonly Stage[];
  activeIndex: number;
  onSelect: (i: number) => void;
}

function StageSelector({ stages, activeIndex, onSelect }: StageSelectorProps) {
  return (
    <ChipGroup wrap gap="md" className="justify-start">
      {stages.map((stage, index) => (
        <Chip
          key={stage.number}
          variant={index === activeIndex ? 'primary' : 'default'}
          size="md"
          active={index === activeIndex}
          onClick={() => onSelect(index)}
        >
          {stage.number}. {stage.title}
        </Chip>
      ))}
    </ChipGroup>
  );
}

/* ── RouteMap — md+ wave layout ─────────────────────────────── */

interface RouteMapProps {
  stages: readonly Stage[];
  activeIndex: number;
  onSelect: (i: number) => void;
}

function RouteMap({ stages, activeIndex, onSelect }: RouteMapProps) {
  return (
    <div className="lg:h-70 relative h-60 w-full overflow-visible">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 300"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path d={ROUTE_PATH} stroke="var(--border)" strokeWidth="2" opacity="0.4" />

        <motion.path
          d={ROUTE_PATH}
          stroke="var(--signature)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 14"
          animate={{
            pathLength: [0, 1, 1, 1],
            opacity: [1, 1, 1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            times: [0, 0.4, 0.8, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>

      {stages.map((stage, index) => {
        const pos = NODE_POSITIONS[index];
        if (!pos) return null;
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;

        return (
          <motion.button
            key={stage.number}
            type="button"
            onClick={() => onSelect(index)}
            animate={{ scale: isActive ? 1.06 : 1 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            aria-pressed={isActive}
            className={cn(
              'absolute text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--signature) transition-all duration-320',
              'rounded-[var(--radius-xl)] p-2',
            )}
            style={{
              left: pos.cx,
              top: pos.cy,
              transform: 'translate(-50%, -50%)',
              width: 'clamp(120px, 13vw, 148px)',
              zIndex: isActive ? 10 : 5,
              background: isActive
                ? 'var(--signature-soft)'
                : isPast
                  ? 'var(--background-elevated)'
                  : 'var(--card)',
              border: isActive
                ? '1px solid var(--signature)'
                : '1px solid var(--border)',
              boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
            }}
          >
            <div className="mb-1 flex items-center justify-between">
              <span
                className={cn(
                  'text-[9px] font-bold tabular-nums font-data tracking-widest',
                  isActive ? 'text-(--signature)' : 'text-(--muted-foreground)'
                )}
              >
                {String(stage.number).padStart(2, '0')}
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={cn(
                  'opacity-70',
                  isActive ? 'text-(--signature)' : 'text-(--muted-foreground)'
                )}
              >
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={cn(
                'text-[11px] font-semibold leading-snug',
                isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'
              )}
            >
              {stage.title}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── MobileStageList — xs/sm vertical stepper ───────────────── */

interface MobileStageListProps {
  stages: readonly Stage[];
  activeIndex: number;
  onSelect: (i: number) => void;
}

function MobileStageList({ stages, activeIndex, onSelect }: MobileStageListProps) {
  return (
    <div className="flex flex-col">
      {stages.map((stage, index) => {
        const isActive = index === activeIndex;
        const isLast = index === stages.length - 1;

        return (
          <div key={stage.number} className="flex gap-3">
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-pressed={isActive}
                className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-(--signature) transition-all duration-320"
                style={{
                  background: isActive ? 'var(--signature-soft)' : 'var(--card)',
                  border: isActive ? '1px solid var(--signature)' : '1px solid var(--border)',
                  boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                }}
              >
                <span
                  className={cn(
                    'font-heading text-sm font-bold leading-none',
                    isActive ? 'text-(--signature)' : 'text-(--muted-foreground)'
                  )}
                >
                  {stage.number}
                </span>
              </button>

              {!isLast && (
                <div
                  className="mt-1 w-px flex-1"
                  style={{
                    background: isActive
                      ? 'linear-gradient(to bottom, var(--signature), var(--border))'
                      : 'var(--border)',
                    minHeight: '1.5rem',
                  }}
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="flex flex-col gap-1 pb-5 pt-1.5">
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={cn(
                  'text-left text-sm font-semibold leading-snug focus:outline-none transition-colors duration-320',
                  isActive ? 'text-(--foreground)' : 'text-(--muted-foreground)'
                )}
              >
                {stage.title}
              </button>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm text-(--muted-foreground) max-w-[42ch]"
                >
                  {stage.body}
                </motion.p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── CheckpointCard ──────────────────────────────────────────── */

interface CheckpointCardProps {
  stage: Stage;
  activeIndex: number;
  total: number;
}

function CheckpointCard({ stage, activeIndex, total }: CheckpointCardProps) {
  return (
    <Card variant="default" padding="md" className="flex h-full flex-col">
      <CardHeader>
        <span className="eyebrow">Selected route checkpoint</span>
      </CardHeader>

      <CardDivider />

      <CardBody className="flex flex-1 flex-col gap-4 pt-4">
        <div className="flex items-start gap-4">
          <span
            className="shrink-0 select-none leading-none font-heading text-(--signature)"
            aria-hidden="true"
            style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', letterSpacing: '-0.04em' }}
          >
            {String(stage.number).padStart(2, '0')}
          </span>

          <div className="flex flex-col gap-1 pt-1">
            <h3 className="heading-card font-heading text-(--foreground)">
              {stage.title}
            </h3>
            <p className="text-body max-w-[44ch]">
              {stage.body}
            </p>
          </div>
        </div>
      </CardBody>

      <CardDivider />

      <CardFooter className="flex-col items-start gap-2">
        <div className="flex w-full items-center justify-between">
          <span className="eyebrow text-(--muted-foreground)">Journey progress</span>
          <span className="font-data text-xs font-semibold tabular-nums text-(--signature)">
            {activeIndex + 1} / {total}
          </span>
        </div>
        <Progress value={activeIndex + 1} max={total} variant="primary" size="sm" animated />
      </CardFooter>
    </Card>
  );
}

/* ── CtaCard ─────────────────────────────────────────────────── */

interface CtaCardProps {
  href: string;
  label: string;
  closingLine: string;
}

function CtaCard({ href, label, closingLine }: CtaCardProps) {
  return (
    <Card variant="elevated" padding="md" className="flex h-full flex-col justify-between">
      <div
        aria-hidden="true"
        className="h-0.5 w-10 rounded-full bg-(--signature) opacity-50 mb-4"
      />

      <CardBody className="flex-1">
        <p className="font-editorial italic text-(--muted-foreground) leading-relaxed">
          {closingLine}
        </p>
      </CardBody>

      <CardFooter>
        <Link href={href} className="w-full">
          <CTAButton variant="primary" size="md" className="w-full">
            {label}
          </CTAButton>
        </Link>
      </CardFooter>
    </Card>
  );
}

/* ── PlacementSection ────────────────────────────────────────── */

export default function PlacementSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const activeStage: Stage | undefined = c.stages[activeIndex];

  return (
    <section
      ref={ref}
      aria-labelledby="placement-heading"
      className="section section-elevated relative overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col gap-12">
        <SectionHeader
          layout="centered"
          align="left"
          size="md"
          eyebrow={c.sectionLabel}
          headline={c.headline}
          description={c.intro}
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card variant="elevated" padding="none" className="overflow-visible">
            <div className="relative z-10 flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-3">
                <span className="eyebrow text-(--muted-foreground)">Select a stage</span>
                <StageSelector
                  stages={c.stages}
                  activeIndex={activeIndex}
                  onSelect={setActiveIndex}
                />
              </div>

              <div className="overflow-visible">
                <div className="hidden md:block">
                  <RouteMap stages={c.stages} activeIndex={activeIndex} onSelect={setActiveIndex} />
                </div>
                <div className="md:hidden">
                  <MobileStageList
                    stages={c.stages}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_280px]">
                {activeStage !== undefined && (
                  <CheckpointCard
                    stage={activeStage}
                    activeIndex={activeIndex}
                    total={c.stages.length}
                  />
                )}
                <CtaCard href={c.cta.href} label={c.cta.label} closingLine={c.closingLine} />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
