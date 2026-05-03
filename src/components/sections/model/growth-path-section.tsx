'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Tag,
  MagnifyingGlass,
  Factory,
  Storefront,
  Gift,
  ShippingContainer,
  GlobeHemisphereWest,
  Certificate,
} from '@/lib/icons';

const ICON_MAP: Record<string, React.ElementType> = {
  Tag,
  MagnifyingGlass,
  Factory,
  Storefront,
  Gift,
  ShippingContainer,
  GlobeHemisphereWest,
  Certificate,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function GrowthPathSection({ data }: any) {
  const row1 = data.steps.slice(0, 4);
  const row2 = data.steps.slice(4, 7);

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-5 bg-(--primary)" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-(--primary)">
                Scale Strategy
              </span>
            </div>
            <h2 className="font-heading heading-subsection text-(--foreground)">
              {data.headline}
            </h2>
            <p className="font-ui max-w-md text-[14px] leading-relaxed text-(--muted-foreground)">
              {data.description}
            </p>
          </motion.div>

          {/* Right: steps */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {row1.map((step: any, idx: number) => (
                <StepNode key={step.title} step={step} idx={idx} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {row2.map((step: any, idx: number) => (
                <StepNode key={step.title} step={step} idx={idx + 4} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StepNode({ step, idx }: { step: any; idx: number }) {
  const Icon = ICON_MAP[step.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.04, duration: 0.4, ease: EASE }}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-(--border) bg-(--background-elevated) px-3 py-6 transition-all duration-200 hover:border-(--primary) hover:bg-(--background) hover:shadow-md"
    >
      <div className={cn(
        'flex size-10 items-center justify-center rounded-lg transition-all duration-300',
        'bg-(--background) text-(--primary) group-hover:bg-(--primary) group-hover:text-(--primary-foreground)',
      )}>
        {Icon && <Icon size={18} weight="light" />}
      </div>

      <h4 className="font-ui text-center text-[12px] font-semibold leading-snug text-(--foreground)">
        {step.title}
      </h4>

      <div className="absolute bottom-0 inset-x-0 h-[2px] rounded-b-xl bg-(--primary) scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  );
}
