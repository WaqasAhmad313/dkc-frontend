'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoleStore } from '@/store/role.store';
import type { ModelPageContent } from '@/data/partnership/models';
import { CaretDown } from '@/lib/icons';
import { PartnershipIcon } from './PartnershipIcon';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { cn } from '@/lib/utils';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor'; // Keep this type for component props, even though store is PlatformRole

export interface ModelDifferenceSectionProps {
  data: ModelPageContent['modelDifferenceSection'];
}

/* ── Animation ──────────────────────────────────────────────────── */

const ENTER = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CROSSFADE = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const ACCORDION_BODY_TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as const,
};

/* ── AccordionCard ───────────────────────────────────────────────── */

interface AccordionCardProps {
  iconName: string;
  title: string;
  previewText: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  iconBgColor?: string; // For visual distinction in role-aware column
  iconColor?: string;
}

function AccordionCard({
  iconName,
  title,
  previewText,
  description,
  isOpen,
  onToggle,
  iconBgColor = 'var(--background-elevated)', // Default for shared
  iconColor = 'var(--primary)', // Default for shared
}: AccordionCardProps) {
  return (
    <div
      className={cn(
        'bg-(--card) border-(--border) shadow-(--shadow-sm) overflow-hidden rounded-[var(--radius-card)] border transition-all duration-300',
        'hover:border-(--border) hover:shadow-(--shadow-md) hover:-translate-y-0.5',
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2',
          isOpen ? 'border-b-transparent' : 'border-b-(--border)',
        )}
      >
        {/* Left side: Icon + Text Block */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] shadow-inner"
            style={{
              backgroundColor: iconBgColor,
            }}
          >
            <PartnershipIcon
              name={iconName}
              size={18}
              weight="duotone"
              style={{ color: iconColor }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-(--foreground) font-ui text-base font-semibold">{title}</span>
            <span className="text-(--muted-foreground) mt-1 line-clamp-1 text-xs">
              {previewText}
            </span>
          </div>
        </div>

        {/* Right side: Chevron Icon */}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <CaretDown weight="bold" size={16} className="text-(--muted-foreground)" />
        </motion.div>
      </button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={ACCORDION_BODY_TRANSITION}
            className="overflow-hidden"
          >
            <div className="border-(--border) border-t p-5">
              <p className="text-(--muted-foreground) text-sm leading-relaxed">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── ModelDifferenceSection ──────────────────────────────────────── */

export default function ModelDifferenceSection({ data }: ModelDifferenceSectionProps) {
  const { activeRole } = useRoleStore();
  const currentRole: Role =
    activeRole === 'buyer' || activeRole === 'vendor' ? activeRole : 'buyer'; // Default to 'buyer'

  const [openSharedIndex, setOpenSharedIndex] = useState<number | null>(null);
  const [openRoleIndex, setOpenRoleIndex] = useState<number | null>(null);

  const roleContent = data.roles[currentRole];

  return (
    <section aria-label={data.sectionLabel} className="section w-full">
      <div className="container">
        <motion.div
          className="flex flex-col gap-12"
          variants={ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6%' }}
        >
          <SectionHeader
            layout="centered"
            headline={data.headline}
            description={data.exclusivityNote}
          />

          {/* Two-column grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Column: Shared Platform Features */}
            <div className="flex flex-col gap-4">
              <h3 className="text-(--muted-foreground) font-label mb-4 text-[10px] font-bold uppercase tracking-widest">
                SHARED PLATFORM FEATURES
              </h3>
              <div className="flex flex-col gap-3">
                {data.sharedFeatures.map((feature, index) => (
                  <AccordionCard
                    key={feature.title}
                    iconName={feature.icon}
                    title={feature.title}
                    previewText={feature.description} // Using description as preview
                    description={feature.description}
                    isOpen={openSharedIndex === index}
                    onToggle={() => setOpenSharedIndex(openSharedIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Role-aware features */}
            <div className="flex flex-col gap-4">
              {/* Header row without role toggle */}
              <h3 className="text-(--muted-foreground) font-label mb-4 text-[10px] font-bold uppercase tracking-widest">
                WHAT {currentRole.toUpperCase()}S GET
              </h3>

              {/* Role-specific features — crossfade on role switch */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  {...CROSSFADE}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} // Crossfade 200ms
                  className="flex flex-col gap-3"
                >
                  {roleContent.features.map((feature, index) => (
                    <AccordionCard
                      key={feature.title}
                      iconName={feature.icon}
                      title={feature.title}
                      previewText={feature.description} // Using description as preview
                      description={feature.description}
                      isOpen={openRoleIndex === index}
                      onToggle={() => setOpenRoleIndex(openRoleIndex === index ? null : index)}
                      iconBgColor="var(--muted)" // Slight distinction
                      iconColor="var(--secondary)"
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
