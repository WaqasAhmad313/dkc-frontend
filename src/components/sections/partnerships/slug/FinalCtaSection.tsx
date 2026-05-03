'use client';

import { cn } from '@/lib/utils';
import { Button, CTAButton } from '@/components/shared/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip } from '@/components/shared/Chip';
import Link from 'next/link';
import { CheckCircle, UsersThree, Handshake, Swap } from '@/lib/icons';
import { useRoleStore } from '@/store/role.store';
import type { ModelPageContent } from '@/data/partnership/models';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

export interface FinalCtaSectionProps {
  data: ModelPageContent['finalCtaSection'];
  role: Role;
}

/* ── Animation ──────────────────────────────────────────────────── */

const ENTER = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ── FinalCtaSection ────────────────────────────────────────────── */

export default function FinalCtaSection({ data, role }: FinalCtaSectionProps) {
  const { setRole } = useRoleStore();
  const content = data.roles[role];
  const Icon = role === 'buyer' ? UsersThree : Handshake;

  function handleRoleSwitch() {
    setRole(role === 'buyer' ? 'vendor' : 'buyer');
  }

  return (
    <section
      aria-label={data.sectionLabel}
      className="section section-major relative w-full overflow-hidden"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="texture-noise pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="container relative z-10 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          {/* Role chip */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={ENTER}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-(--background-focus) flex size-8 items-center justify-center rounded-[var(--radius-card-sm)]">
                <Icon weight="fill" size={15} className="text-(--primary)" />
              </div>
              <Chip variant="outline" size="sm">
                {role === 'buyer' ? 'For Buyers' : 'For Vendors'}
              </Chip>
            </div>
            <span className="text-(--primary) font-label text-[11px] font-semibold uppercase tracking-widest">
              {data.sectionLabel}
            </span>
          </motion.div>

          {/* Shared headline — with shimmer */}
          <motion.h2
            className="heading-section text-(--foreground) relative overflow-hidden"
            style={{ lineHeight: '1.05' }}
            variants={ENTER}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.shared.headline}
          </motion.h2>

          {/* Shared description */}
          <motion.p
            className="text-(--muted-foreground) max-w-[50ch] text-lg"
            variants={ENTER}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.shared.description}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={ENTER}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-(--border) h-px w-full" aria-hidden="true" />
          </motion.div>

          {/* Role-specific headline */}
          <motion.h3
            className="text-(--foreground) font-heading max-w-[36ch] text-2xl font-bold"
            variants={ENTER}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.headline}
          </motion.h3>

          {/* Supporting points */}
          <motion.ul
            className="flex flex-col gap-2.5 text-left"
            variants={ENTER}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.supportingPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle weight="fill" size={15} className="text-(--primary) mt-0.5 shrink-0" />
                <span className="text-(--muted-foreground) text-[13px] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={ENTER}
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href={content.primaryCta.href}>
              <CTAButton variant="depth" size="md">
                {content.primaryCta.label}
              </CTAButton>
            </Link>
            <Link href={content.secondaryCta.href}>
              <Button variant="outline" size="md">
                {content.secondaryCta.label}
              </Button>
            </Link>
          </motion.div>

          {/* Role switcher */}
          <motion.div
            className="flex items-center gap-2"
            variants={ENTER}
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-(--muted-foreground) text-[12px]">
              {role === 'buyer' ? 'Are you a vendor?' : 'Are you a buyer?'}
            </span>
            <button
              type="button"
              onClick={handleRoleSwitch}
              className="border-(--border) text-(--muted-foreground) hover:bg-(--background-elevated) hover:border-(--border) flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all duration-150 focus:outline-none"
            >
              <Swap weight="bold" size={11} />
              Switch to {role === 'buyer' ? 'Vendor' : 'Buyer'} view
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
