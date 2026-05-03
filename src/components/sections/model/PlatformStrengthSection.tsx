'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NotePencil,
  Palette,
  Wrench,
  Factory,
  ShieldCheck,
  Package,
  SlidersHorizontal,
  Folder,
  Users,
  Pulse,
  Stack,
  Gear,
  Tag,
  Truck,
} from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Tabs } from '@/components/shared/Tabs';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

type Feature = {
  icon?: string;
  title: string;
  description: string;
};

type SupportData =
  | { description: string; note?: string }
  | string
  | undefined;

type PlatformTab = {
  id: string;
  label: string;
  headline?: string;
  description?: string;
  features?: Feature[];
  support?: SupportData;
};

type PlatformStrengthData = {
  sectionLabel: string;
  headline: string;
  description?: string;
  defaultTab?: string;
  tabs?: PlatformTab[];
};

/* ── Helpers ────────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  FileSignature: NotePencil,
  Palette,
  Calculator: Wrench,
  Factory,
  ShieldCheck,
  Package,
  Sliders: SlidersHorizontal,
  Folder,
  Users,
  Shield: ShieldCheck,
  Activity: Pulse,
  Layers: Stack,
  Tag,
  Truck,
};

const EASE = [0.22, 1, 0.36, 1] as const;
const ORBITAL_RADIUS = 168;

/* ── PlatformStrengthSection ────────────────────────────────────── */

export default function PlatformStrengthSection({ data }: { data: PlatformStrengthData }) {
  if (!data) return null;

  const tabs = Array.isArray(data.tabs)
    ? data.tabs.filter((t) => t.id && t.label)
    : [];

  const [activeTabId, setActiveTabId] = useState(data.defaultTab ?? tabs[0]?.id ?? '');
  const [activeFeature, setActiveFeature] = useState(0);

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];
  const features = Array.isArray(activeTab?.features) ? activeTab.features : [];
  const currentFeature = features[activeFeature] ?? features[0];

  const FeatureIcon = currentFeature?.icon
    ? (ICON_MAP[currentFeature.icon] ?? Gear)
    : Gear;

  function switchTab(id: string) {
    setActiveTabId(id);
    setActiveFeature(0);
  }

  return (
    <section className="section-elevated section">
      <div className="container">
        <div className="section-inner">

          {/* ── Header ── */}
          <SectionHeader
            eyebrow={data.sectionLabel}
            badgeVariant="primary"
            headline={data.headline}
            description={data.description}
            size="lg"
            layout="centered"
            align="center"
          />

          {/* ── Tab buttons ── */}
          <div className="flex justify-center">
            <Tabs
              tabs={tabs.map((t) => ({ key: t.id, label: t.label }))}
              activeTab={activeTabId}
              onChange={switchTab}
              variant="segment"
            />
          </div>

          {/* ── Main layout ── */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* ── Left: Orbital visualization (desktop only) ── */}
            <div className="relative hidden h-[520px] items-center justify-center lg:flex">

              {/* Faint orbit ring */}
              <div
                aria-hidden
                style={{ width: ORBITAL_RADIUS * 2 + 112, height: ORBITAL_RADIUS * 2 + 112 }}
                className="absolute rounded-full border border-(--border)/40 border-dashed"
              />

              {/* Center core */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`core-${activeTabId}-${activeFeature}`}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="absolute flex size-44 flex-col items-center justify-center rounded-full bg-(--primary) p-6 text-center shadow-xl"
                >
                  <FeatureIcon size={28} weight="duotone" className="mb-2 shrink-0 text-white/70" />
                  <h3 className="text-[12px] font-bold leading-snug text-white">
                    {currentFeature?.title ?? activeTab?.label}
                  </h3>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/35">
                    Active node
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Orbiting nodes — wrapper div owns position, button owns style */}
              {features.map((feature, i) => {
                const angle = (i / features.length) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * ORBITAL_RADIUS;
                const y = Math.sin(angle) * ORBITAL_RADIUS;
                const Icon = (feature.icon ? ICON_MAP[feature.icon] : undefined) ?? Gear;
                const isActive = i === activeFeature;

                return (
                  <div
                    key={feature.title}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      zIndex: 10,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFeature(i)}
                      className={cn(
                        'w-28 rounded-xl border px-2.5 py-3 text-center text-[10px] font-semibold',
                        'transition-all duration-200 focus:outline-none',
                        isActive
                          ? 'bg-(--primary) border-(--primary) text-white shadow-md'
                          : 'bg-(--background)/60 border-(--border) text-(--muted-foreground) hover:border-(--primary)/40 hover:text-(--foreground)',
                      )}
                    >
                      <Icon
                        size={13}
                        weight={isActive ? 'fill' : 'regular'}
                        className={cn(
                          'mx-auto mb-1.5',
                          isActive ? 'text-white/70' : 'text-(--muted-foreground)/60',
                        )}
                      />
                      <span className="line-clamp-2 leading-tight">
                        {feature.title.split(' ').slice(0, 3).join(' ')}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ── Right: Context panel ── */}
            <div className="flex flex-col gap-5">

              {/* Mobile: feature selector grid */}
              <div className="grid grid-cols-2 gap-2 lg:hidden">
                {features.map((feature, i) => {
                  const Icon = (feature.icon ? ICON_MAP[feature.icon] : undefined) ?? Gear;
                  const isActive = i === activeFeature;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveFeature(i)}
                      className={cn(
                        'rounded-xl border p-3 text-left text-[11px] font-semibold transition-all duration-200 focus:outline-none',
                        isActive
                          ? 'bg-(--primary) border-(--primary) text-white'
                          : 'bg-(--background)/60 border-(--border) text-(--muted-foreground)',
                      )}
                    >
                      <Icon size={14} weight={isActive ? 'fill' : 'regular'} className="mb-1.5" />
                      <span className="block leading-snug">{feature.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Animated detail card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTabId}-${activeFeature}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-2xl border border-(--border) bg-(--background)/60 p-7 backdrop-blur-sm"
                >
                  <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-widest text-(--primary)/70">
                    {activeTab?.label}
                  </p>
                  <h2 className="font-heading mb-4 text-[22px] font-bold leading-snug text-(--foreground)">
                    {activeTab?.headline ?? activeTab?.label}
                  </h2>
                  <p className="text-[13px] leading-relaxed text-(--muted-foreground)">
                    {currentFeature?.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Feature stack grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {features.map((feature, i) => {
                  const Icon = (feature.icon ? ICON_MAP[feature.icon] : undefined) ?? Gear;
                  const isActive = i === activeFeature;
                  return (
                    <button
                      key={feature.title}
                      type="button"
                      onClick={() => setActiveFeature(i)}
                      className={cn(
                        'flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left',
                        'transition-all duration-200 focus:outline-none',
                        isActive
                          ? 'bg-(--primary) border-(--primary) shadow-sm'
                          : 'bg-(--background)/60 border-(--border) hover:border-(--primary)/30',
                      )}
                    >
                      <div className={cn(
                        'flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                        isActive ? 'bg-white/15' : 'bg-(--background)',
                      )}>
                        <Icon
                          size={13}
                          weight={isActive ? 'fill' : 'regular'}
                          className={isActive ? 'text-white/80' : 'text-(--primary)'}
                        />
                      </div>
                      <span className={cn(
                        'text-[12px] font-semibold leading-snug',
                        isActive ? 'text-white' : 'text-(--foreground)',
                      )}>
                        {feature.title}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
