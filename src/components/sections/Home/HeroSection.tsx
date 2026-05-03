'use client';

import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import { Chip } from '@/components/shared/Chip';
import { ShieldCheck, MapPin, GitBranch, CheckCircle, ArrowRight } from '@/lib/icons';
import { HOMEPAGE } from '@/content/homepage.content';
import type { PlatformRole } from '@/store/role.store';

const { shared, roles } = HOMEPAGE.hero;

// ---------------------------------------------------------------------------
// Hex helper
// ---------------------------------------------------------------------------

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
}

// ---------------------------------------------------------------------------
// EcosystemDiagram
// SVG internal colors (blue=demand, gold=supply, purple=core) are
// visualization-specific and intentionally left as-is.
// ---------------------------------------------------------------------------

function EcosystemDiagram() {
  const demandLabels = [
    { y: 126, label: 'Premium Retailer' },
    { y: 233, label: 'Trade Distributor' },
    { y: 340, label: 'Institutional Buyer' },
    { y: 447, label: 'Luxury Boutique' },
    { y: 554, label: 'Online Commerce' },
  ];
  const supplyLabels = [
    { y: 126, label: 'Master Artisan' },
    { y: 233, label: 'Craft Workshop' },
    { y: 340, label: 'Export Business' },
    { y: 447, label: 'Cooperative' },
    { y: 554, label: 'GI Certified Artisan' },
  ];
  const stageLabels = [
    { angle: -90, label: 'Verify' },
    { angle: 0, label: 'Qualify' },
    { angle: 90, label: 'Onboard' },
    { angle: 180, label: 'Place' },
  ];
  const coreX = 295,
    coreY = 340,
    outerR = 88;

  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 50%, color-mix(in srgb, var(--signature) 5%, transparent) 0%, transparent 70%)',
        }}
      />
      <svg
        viewBox="0 0 590 690"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{ maxWidth: '590px', maxHeight: '690px' }}
      >
        <defs>
          <linearGradient id="hero-dGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a4070" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1e3260" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="hero-sGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c4418" stopOpacity="0.80" />
            <stop offset="100%" stopColor="#7a5e28" stopOpacity="1.00" />
          </linearGradient>
          <linearGradient id="hero-cGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1a38" />
            <stop offset="100%" stopColor="#0e0c20" />
          </linearGradient>
          <filter id="hero-fGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-fGold" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* DEMAND BAND */}
        <rect x="10" y="10" width="158" height="670" rx="14" fill="url(#hero-dGrad)" stroke="rgba(74,114,200,0.35)" strokeWidth="1.2" />
        <rect x="10" y="10" width="158" height="36" rx="14" fill="rgba(74,114,200,0.25)" />
        <rect x="10" y="32" width="158" height="14" fill="rgba(74,114,200,0.25)" />
        <text x="89" y="28" textAnchor="middle" dominantBaseline="central" fill="rgba(180,200,240,0.90)" fontSize="9.5" letterSpacing="0.18em" fontFamily="Inter,sans-serif" fontWeight="600">GLOBAL DEMAND</text>
        {demandLabels.map(({ y, label }, i) => {
          const r = i === 0 ? 20 : i === 2 ? 17 : 14;
          const cx = 89;
          const isTop = i === 0;
          return (
            <g key={label}>
              <polygon points={hexPoints(cx, y - 22, r)} fill="rgba(42,64,112,0.80)" stroke={isTop ? 'rgba(110,150,240,0.90)' : 'rgba(90,130,224,0.65)'} strokeWidth={isTop ? 1.8 : 1.2} filter="url(#hero-fGlow)" />
              <rect x={cx - 56} y={y - 8} width="112" height="20" rx="4" fill="rgba(18,28,58,0.90)" stroke="rgba(90,130,224,0.40)" strokeWidth="0.9" />
              <text x={cx} y={y + 2} textAnchor="middle" dominantBaseline="central" fill="rgba(200,218,255,0.95)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.02em">{label}</text>
            </g>
          );
        })}
        {demandLabels.slice(0, -1).map(({ y }, i) => (
          <line key={i} x1="89" y1={y + 10} x2="89" y2={demandLabels[i + 1]!.y - 38} stroke="rgba(90,130,224,0.22)" strokeWidth="1" strokeDasharray="3 6" />
        ))}

        {/* SUPPLY BAND */}
        <rect x="422" y="10" width="158" height="670" rx="14" fill="url(#hero-sGrad)" stroke="rgba(184,134,11,0.40)" strokeWidth="1.2" />
        <rect x="422" y="10" width="158" height="36" rx="14" fill="rgba(184,134,11,0.20)" />
        <rect x="422" y="32" width="158" height="14" fill="rgba(184,134,11,0.20)" />
        <text x="501" y="28" textAnchor="middle" dominantBaseline="central" fill="rgba(220,185,100,0.92)" fontSize="9.5" letterSpacing="0.16em" fontFamily="Inter,sans-serif" fontWeight="600">KASHMIR SUPPLY</text>
        {supplyLabels.map(({ y, label }, i) => {
          const r = i === 4 ? 22 : i === 2 ? 18 : 14;
          const cx = 501;
          const isBot = i === 4;
          return (
            <g key={label}>
              <polygon points={hexPoints(cx, y - 22, r)} fill="rgba(100,78,30,0.85)" stroke={isBot ? 'rgba(212,160,23,0.95)' : 'rgba(184,134,11,0.70)'} strokeWidth={isBot ? 2.0 : 1.4} filter="url(#hero-fGold)" />
              <rect x={cx - 56} y={y - 8} width="112" height="20" rx="4" fill="rgba(38,22,6,0.90)" stroke="rgba(184,134,11,0.45)" strokeWidth="0.9" />
              <text x={cx} y={y + 2} textAnchor="middle" dominantBaseline="central" fill="rgba(238,198,118,0.97)" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.02em">{label}</text>
            </g>
          );
        })}
        {supplyLabels.slice(0, -1).map(({ y }, i) => (
          <line key={i} x1="501" y1={y + 10} x2="501" y2={supplyLabels[i + 1]!.y - 38} stroke="rgba(184,134,11,0.25)" strokeWidth="1" strokeDasharray="3 6" />
        ))}

        {/* CORE PANEL */}
        <rect x="186" y="10" width="218" height="670" rx="14" fill="url(#hero-cGrad)" stroke="rgba(184,134,11,0.28)" strokeWidth="1.2" />
        <rect x="186" y="10" width="218" height="36" rx="14" fill="rgba(184,134,11,0.12)" />
        <rect x="186" y="32" width="218" height="14" fill="rgba(184,134,11,0.12)" />
        <text x={coreX} y="28" textAnchor="middle" dominantBaseline="central" fill="rgba(184,134,11,0.80)" fontSize="9.5" letterSpacing="0.18em" fontFamily="Inter,sans-serif" fontWeight="600">PARTNERSHIP CORE</text>
        <ellipse cx={coreX} cy={coreY} rx={outerR + 20} ry={outerR + 20} fill="rgba(184,134,11,0.04)" />
        <ellipse cx={coreX} cy={coreY} rx={outerR + 6} ry={outerR + 6} fill="rgba(184,134,11,0.06)" />
        {([outerR, outerR - 22, outerR - 42, outerR - 60] as const).map((r, i) => (
          <ellipse key={i} cx={coreX} cy={coreY} rx={r} ry={r} stroke={i === 0 ? 'rgba(184,134,11,0.26)' : i === 1 ? 'rgba(184,134,11,0.42)' : i === 2 ? 'rgba(184,134,11,0.62)' : 'rgba(212,160,23,0.90)'} strokeWidth={i === 3 ? 2.2 : i === 2 ? 1.5 : 1.2} fill={i === 3 ? 'rgba(184,134,11,0.04)' : 'none'} filter={i >= 2 ? 'url(#hero-fGold)' : undefined} />
        ))}
        <polygon points={hexPoints(coreX, coreY, 22)} fill="rgba(20,16,42,0.96)" stroke="rgba(212,160,23,0.98)" strokeWidth="2" filter="url(#hero-fGold)" />
        <polygon points={hexPoints(coreX, coreY, 13)} fill="rgba(184,134,11,0.90)" />
        <polygon points={hexPoints(coreX, coreY, 7)} fill="rgba(212,160,23,1.0)" />
        {stageLabels.map(({ angle, label }) => {
          const rad = (angle * Math.PI) / 180;
          const lR = outerR - 10;
          const lx = coreX + lR * Math.cos(rad);
          const ly = coreY + lR * Math.sin(rad);
          const w = label.length * 7.8 + 20;
          const dx = coreX + outerR * Math.cos(rad);
          const dy = coreY + outerR * Math.sin(rad);
          return (
            <g key={label}>
              <circle cx={dx} cy={dy} r="5.5" fill="rgba(184,134,11,0.95)" filter="url(#hero-fGlow)" />
              <circle cx={dx} cy={dy} r="2.8" fill="#d4a017" />
              <rect x={lx - w / 2} y={ly - 10.5} width={w} height="21" rx="5" fill="rgba(10,8,24,0.93)" stroke="rgba(184,134,11,0.60)" strokeWidth="1.1" />
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fill="rgba(212,160,23,0.98)" fontSize="10.5" letterSpacing="0.14em" fontFamily="Inter,sans-serif" fontWeight="700">{label.toUpperCase()}</text>
            </g>
          );
        })}
        {[45, 135, 225, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const r1 = outerR - 22;
          return (
            <line key={deg} x1={coreX + (r1 - 6) * Math.cos(rad)} y1={coreY + (r1 - 6) * Math.sin(rad)} x2={coreX + (r1 + 6) * Math.cos(rad)} y2={coreY + (r1 + 6) * Math.sin(rad)} stroke="rgba(184,134,11,0.40)" strokeWidth="1.5" />
          );
        })}
        <line x1={coreX} y1="46" x2={coreX} y2={coreY - outerR - 6} stroke="rgba(184,134,11,0.22)" strokeWidth="1" strokeDasharray="3 5" />
        <line x1={coreX} y1={coreY + outerR + 6} x2={coreX} y2="680" stroke="rgba(184,134,11,0.22)" strokeWidth="1" strokeDasharray="3 5" />

        {/* ANIMATED ROUTES — demand → core */}
        {demandLabels.map(({ y }, i) => {
          const sx = 145, sy = y, ddy = y - coreY;
          const ex = coreX + outerR * Math.cos(Math.PI - Math.atan2(ddy, coreX - 168));
          const ey = coreY + outerR * Math.sin(Math.PI - Math.atan2(ddy, coreX - 168));
          const path = `M ${sx} ${sy} C ${sx + 35} ${sy}, ${ex - 25} ${ey}, ${ex} ${ey}`;
          const dur = 2.6 + i * 0.35;
          return (
            <g key={i}>
              <path d={path} stroke="rgba(90,130,224,0.28)" strokeWidth="1.2" fill="none" strokeDasharray="4 7" />
              <circle r="3.2" fill="rgba(120,160,248,0.90)" filter="url(#hero-fGlow)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" path={path} />
              </circle>
              <circle r="1.8" fill="rgba(90,130,224,0.45)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin={`${dur * 0.15}s`} path={path} />
              </circle>
            </g>
          );
        })}

        {/* ANIMATED ROUTES — core → supply */}
        {supplyLabels.map(({ y }, i) => {
          const ddy = y - coreY;
          const sx = coreX + outerR * Math.cos(Math.atan2(ddy, 422 - coreX));
          const sy = coreY + outerR * Math.sin(Math.atan2(ddy, 422 - coreX));
          const ex = 447, ey = y;
          const path = `M ${sx} ${sy} C ${sx + 25} ${sy}, ${ex - 35} ${ey}, ${ex} ${ey}`;
          const dur = 2.4 + i * 0.32;
          return (
            <g key={i}>
              <path d={path} stroke="rgba(184,134,11,0.35)" strokeWidth="1.2" fill="none" strokeDasharray="4 7" />
              <circle r="3.2" fill="rgba(212,160,23,0.95)" filter="url(#hero-fGold)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" path={path} />
              </circle>
              <circle r="1.8" fill="rgba(184,134,11,0.45)">
                <animateMotion dur={`${dur}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" begin={`${dur * 0.15}s`} path={path} />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// RoleSelector
// ---------------------------------------------------------------------------

interface RoleSelectorProps {
  activeRole: PlatformRole;
  onSelect: (role: PlatformRole) => void;
}

function RoleSelector({ activeRole, onSelect }: RoleSelectorProps) {
  const defs: Array<{ role: 'buyer' | 'vendor' }> = [
    { role: 'buyer' },
    { role: 'vendor' },
  ];
  return (
    <div className="flex flex-col gap-3">
      <span
        className="text-[var(--text-xs)] font-semibold uppercase tracking-widest"
        style={{ color: 'var(--muted-foreground)' }}
      >
        Select your role to continue
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {defs.map(({ role }) => {
          const cfg = shared.roleSelector[role];
          const active = activeRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => onSelect(active ? null : role)}
              aria-pressed={active}
              className="focus-visible:ring-(--primary) flex flex-col items-start gap-1 rounded-[10px] px-4 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2"
              style={{
                minWidth: '158px',
                border: active
                  ? '1px solid color-mix(in srgb, var(--primary) 45%, transparent)'
                  : '1px solid color-mix(in srgb, var(--primary) 8%, transparent)',
                background: active
                  ? 'color-mix(in srgb, var(--primary) 8%, transparent)'
                  : 'color-mix(in srgb, var(--primary) 3%, transparent)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="shrink-0 rounded-full transition-all duration-300"
                  style={{
                    width: active ? '6px' : '4px',
                    height: active ? '6px' : '4px',
                    background: active
                      ? 'var(--primary)'
                      : 'color-mix(in srgb, var(--primary) 20%, transparent)',
                    boxShadow: active
                      ? '0 0 8px color-mix(in srgb, var(--primary) 55%, transparent)'
                      : 'none',
                  }}
                />
                <span
                  className="text-[13px] transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: active ? 600 : 400,
                    color: active ? 'var(--primary)' : 'var(--muted-foreground)',
                  }}
                >
                  {cfg.title}
                </span>
              </div>
              <span
                className="pl-3 text-[10px] tracking-[0.04em] transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: active
                    ? 'var(--muted-foreground)'
                    : 'color-mix(in srgb, var(--primary) 22%, transparent)',
                }}
              >
                {cfg.desc}
              </span>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {(activeRole === 'buyer' || activeRole === 'vendor') && (
          <motion.p
            key={activeRole}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.28 }}
            className="text-[11px] tracking-[0.04em]"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--muted-foreground)',
            }}
          >
            → {HOMEPAGE.hero.roles[activeRole].sectionLabel}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

interface HeroSectionProps {
  activeRole: PlatformRole;
  onRoleSelect: (role: PlatformRole) => void;
}

export default function HeroSection({ activeRole, onRoleSelect }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  const roleKey = activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : 'default';
  const content = roles[roleKey];

  function fadeUp(delay: number) {
    return {
      initial: { opacity: 0, y: 22, filter: 'blur(3px)' },
      animate: inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    };
  }

  return (
    <section
      ref={ref}
      aria-label="Partnership Gateway Hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="texture-noise absolute inset-0 opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 78% 40%, color-mix(in srgb, var(--signature) 4%, transparent) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 45% 60% at 12% 80%, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}
        />
      </div>

      {/* Main grid */}
      <div
        className="container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0"
        style={{ minHeight: '100svh', paddingTop: '8rem', paddingBottom: '8rem' }}
      >
        {/* LEFT — text */}
        <div className="flex flex-col gap-6 lg:pr-12 xl:pr-16">
          <motion.div {...fadeUp(0.06)}>
            <Badge variant="glass" size="md" dot>
              {content.sectionLabel}
            </Badge>
          </motion.div>
          <motion.div {...fadeUp(0.12)}>
            <RoleSelector activeRole={activeRole} onSelect={onRoleSelect} />
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="heading-hero font-display"
            style={{
              color: 'var(--foreground)',
              maxWidth: '13ch',
              lineHeight: '0.9',
              textShadow: '0 2px 40px color-mix(in srgb, var(--background) 40%, transparent)',
            }}
          >
            {shared.headline}
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={roleKey + '-sub'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-body"
              style={{ maxWidth: '50ch' }}
            >
              {content.subheading}
            </motion.p>
          </AnimatePresence>
          <motion.p
            {...fadeUp(0.38)}
            className="eyebrow"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {content.supportLine}
          </motion.p>
          <AnimatePresence mode="wait">
            <motion.div
              key={roleKey + '-ctas'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Link href={content.ctas[0].href}>
                <Button
                  variant="depth"
                  size="md"
                  iconRight={<ArrowRight weight="bold" size={15} />}
                >
                  {content.ctas[0].label}
                </Button>
              </Link>
              <Link href={content.ctas[1].href}>
                <Button variant="outline" size="md">
                  {content.ctas[1].label}
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — EcosystemDiagram */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="hidden items-center justify-center lg:flex"
          style={{ height: 'clamp(520px, 70vh, 680px)' }}
          aria-hidden="true"
        >
          <EcosystemDiagram />
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.75 }}
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          borderTop: '1px solid var(--border)',
          background: 'color-mix(in srgb, var(--background) 55%, transparent)',
          backdropFilter: 'blur(12px)',
          padding: '14px 0',
        }}
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(
              [
                { Icon: ShieldCheck, label: shared.trustStrip[0] },
                { Icon: MapPin, label: shared.trustStrip[1] },
                { Icon: GitBranch, label: shared.trustStrip[2] },
                { Icon: CheckCircle, label: shared.trustStrip[3] },
              ] as const
            ).map(({ Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-4 w-px"
                    style={{ background: 'var(--border)' }}
                  />
                )}
                <Chip
                  variant="default"
                  size="sm"
                  icon={<Icon weight="fill" size={11} style={{ color: 'var(--primary)' }} />}
                >
                  <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>{label}</span>
                </Chip>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-6 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] uppercase tracking-[0.20em]"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'color-mix(in srgb, var(--foreground) 20%, transparent)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="h-10 w-px"
          style={{
            background: 'linear-gradient(to bottom, color-mix(in srgb, var(--primary) 45%, transparent), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
