'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CaretDown } from '@/lib/icons';
import type { PartnershipSystemData } from '@/data/partnership';

/* ── Types ─────────────────────────────────────────────────────── */

interface FaqSectionProps {
  data: PartnershipSystemData['faqSection'];
}

type FaqItem = PartnershipSystemData['faqSection']['items'][number];

/* ── Helpers ────────────────────────────────────────────────────── */

function parseAnswer(answer: string): React.ReactNode {
  const yesMatch = answer.match(/^(Yes)([\.,]?\s*)(.*)/s);
  const noMatch = answer.match(/^(No)([\.,]?\s*)(.*)/s);

  if (yesMatch) {
    return (
      <>
        <span className="text-(--success) font-bold">
          {yesMatch[1]}
        </span>
        {yesMatch[2]}
        {yesMatch[3]}
      </>
    );
  }

  if (noMatch) {
    return (
      <>
        <span className="text-(--primary) font-bold">
          {noMatch[1]}
        </span>
        {noMatch[2]}
        {noMatch[3]}
      </>
    );
  }

  return answer;
}

/* ── Animation ──────────────────────────────────────────────────── */

const SECTION_ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ITEM_ENTER = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── AccordionItem ──────────────────────────────────────────────── */

interface AccordionItemProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, index, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      variants={ITEM_ENTER}
      custom={index}
      className={cn(
        'overflow-hidden border transition-all duration-200 rounded-[var(--radius-card)]',
        isOpen ? 'border-(--primary) border-l-[2px] bg-(--card) shadow-(--shadow-sm)' : 'border-(--border) border-l-[1px] bg-(--background-elevated)'
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          'flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left',
          'focus-visible:ring-(--primary)/30 focus:outline-none focus-visible:ring-2',
          'transition-colors duration-150',
        )}
      >
        <span
          className="font-ui text-(--foreground) text-[14px] font-semibold leading-snug"
        >
          {item.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <CaretDown
            weight="bold"
            size={14}
            className={isOpen ? 'text-(--primary)' : 'text-(--muted-foreground)'}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="border-(--border) border-t px-4 pb-4 pt-3"
            >
              <p className="text-sm leading-relaxed text-(--muted-foreground)">
                {parseAnswer(item.answer)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── FaqSection ─────────────────────────────────────────────────── */

export function FaqSection({ data }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleToggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <section aria-label={data.sectionLabel} className="section w-full">
      <div className="container">
        <motion.div
          className="flex flex-col gap-8"
          variants={SECTION_ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="centered"
            eyebrow={data.sectionLabel}
            headline={data.headline}
          />

          <motion.div
            className="mx-auto w-full max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4%' }}
          >
            <div className="flex flex-col gap-2">
              {data.items.map((item, idx) => (
                <AccordionItem
                  key={item.question}
                  item={item}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => handleToggle(idx)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
