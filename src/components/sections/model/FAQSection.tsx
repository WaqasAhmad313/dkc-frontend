'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, SealCheck } from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';

/* ── Types ─────────────────────────────────────────────────────── */

type FAQItem = {
  question: string;
  answer: string;
};

type FAQData = {
  sectionLabel: string;
  headline: string;
  items: FAQItem[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── FAQSection ─────────────────────────────────────────────────── */

export default function FAQSection({ data }: { data: FAQData }) {
  if (!data) return null;
  const items = Array.isArray(data.items) ? data.items : [];
  if (items.length === 0) return null;
  return <FAQContent data={data} items={items} />;
}

function FAQContent({ data, items }: { data: FAQData; items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="section-elevated section">
      <div className="container">
        <div className="section-inner">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">

            {/* ── Left: Image ── */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
                alt="Kashmiri artisan craft — private label program"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Overlay content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-px w-5 bg-(--primary)" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-(--primary)">
                    Private Label Program
                  </span>
                </div>
                <p className="font-heading text-[20px] font-bold leading-snug text-white">
                  Everything you need to know before applying.
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-white/55">
                  Authentic Kashmiri craft, structured for brand-led trade.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <SealCheck size={12} weight="fill" className="text-(--primary)" />
                  <span className="text-[10px] font-semibold text-white/80">
                    Verified Kashmiri Craft Platform
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ── Right: FAQ accordion ── */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
              className="flex flex-col gap-6"
            >
              <SectionHeader
                eyebrow={data.sectionLabel}
                badgeVariant="primary"
                headline={data.headline}
                size="lg"
                align="left"
              />

              <div className="flex-1 overflow-hidden rounded-2xl border border-(--border) bg-(--background)/60 backdrop-blur-sm">
                {items.map((item, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div key={idx} className="border-b border-(--border) last:border-0">

                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-inset"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 font-mono text-[9px] font-bold text-(--muted-foreground)/30">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-ui text-[13px] font-semibold leading-snug text-(--foreground)">
                            {item.question}
                          </span>
                        </div>
                        <span className={`mt-0.5 shrink-0 transition-colors duration-150 ${isOpen ? 'text-(--primary)' : 'text-(--muted-foreground)'}`}>
                          {isOpen
                            ? <Minus size={14} weight="bold" />
                            : <Plus size={14} weight="bold" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            style={{ overflow: 'hidden' }}
                          >
                            <p className="font-ui pb-5 pl-[3.25rem] pr-6 text-[12px] leading-relaxed text-(--muted-foreground)">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
