'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, FileText, TrendUp, Star } from '@/lib/icons';

/* ── Types ─────────────────────────────────────────────────────── */

interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseData {
  headline: string;
  items: WhyChooseItem[];
}

/* ── Icon Map ───────────────────────────────────────────────────── */

const ICON_MAP: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  handshake: Handshake,
  fileCheck: FileText,
  trendingUp: TrendUp,
  star: Star,
};

/* ── Animation ──────────────────────────────────────────────────── */

const CARD_CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const CARD_ENTER = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── WhyChooseSection ───────────────────────────────────────────── */

export function WhyChooseSection({ data }: { data: WhyChooseData }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-inner-sm">
          {/* Ruled heading */}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-6%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-(--primary)" />
            <div className="flex shrink-0 items-center gap-2.5">
              <span className="block size-1.5 rounded-full bg-(--primary)" />
              <h2 className="font-heading heading-card font-bold text-(--foreground)">
                {data.headline}
              </h2>
              <span className="block size-1.5 rounded-full bg-(--primary)" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-(--primary)" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            variants={CARD_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-6%' }}
          >
            {data.items.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? ShieldCheck;
              return (
                <motion.div
                  key={item.title}
                  variants={CARD_ENTER}
                  className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4">
                    <Icon size={36} className="text-(--primary)" />
                  </div>
                  <h3 className="font-heading mb-2 text-[16px] font-semibold leading-snug tracking-tight text-(--foreground)">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-(--muted-foreground)">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
