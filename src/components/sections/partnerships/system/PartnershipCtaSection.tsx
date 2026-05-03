'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, CTAButton } from '@/components/shared/Button';
import { Chip } from '@/components/shared/Chip';
import { cn } from '@/lib/utils';
import { ArrowRight, UsersThree, Handshake, Swap } from '@/lib/icons';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface PartnershipCtaSectionProps {
  role: Role;
  systemLabel: string;
  onRoleSwitch: () => void;
}

/* ── Role content ───────────────────────────────────────────────── */

const ROLE_CONTENT: Record<
  Role,
  {
    overline: string;
    headline: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    switchPrompt: string;
  }
> = {
  buyer: {
    overline: 'Ready to source?',
    headline: 'Start Your Buyer Application',
    body: 'Enter a structured sourcing pathway designed for serious buyers. Verified vendors, clear terms, and a progression system built for long-term trade.',
    primaryCta: { label: 'Start Buyer Application', href: '/registration' },
    secondaryCta: { label: 'Book a Consultation', href: '/book-consultation' },
    switchPrompt: 'Are you a vendor?',
  },
  vendor: {
    overline: 'Ready to supply?',
    headline: 'Start Your Vendor Application',
    body: 'Enter a structured supply pathway designed for serious vendors. Global buyer access, no middlemen, and a clear progression system built for sustainable growth.',
    primaryCta: { label: 'Start Vendor Application', href: '/registration' },
    secondaryCta: { label: 'Book a Consultation', href: '/book-consultation' },
    switchPrompt: 'Are you a buyer?',
  },
};

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

/* ── PartnershipCtaSection ──────────────────────────────────────── */

export function PartnershipCtaSection({
  role,
  systemLabel,
  onRoleSwitch,
}: PartnershipCtaSectionProps) {
  const content = ROLE_CONTENT[role];
  const Icon = role === 'buyer' ? UsersThree : Handshake;

  return (
    <section
      aria-label="Start your application"
      className="section-major relative w-full overflow-hidden"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="texture-noise pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          {/* Role chip + overline */}
          <motion.div
            className="flex flex-col items-center gap-3"
            variants={ENTER}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-background-focus) rounded-(--radius-card-sm) flex size-8 items-center justify-center shadow-inner">
                <Icon weight="fill" size={15} className="text-signature)" />
              </div>
              <Chip variant="outline" size="sm">
                {systemLabel}
              </Chip>
            </div>
            <span className="font-label text-signature) text-[10px] font-semibold uppercase tracking-widest">
              {content.overline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="heading-section font-display text-(--foreground) relative overflow-hidden"
            style={{ lineHeight: '0.9' }}
            variants={ENTER}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.headline}
          </motion.h2>

          {/* Body */}
          <motion.p
            className="text-(--muted-foreground) max-w-[48ch] text-lg"
            variants={ENTER}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={ENTER}
            custom={3}
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
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-(--muted-foreground) text-[12px]">{content.switchPrompt}</span>
            <button
              type="button"
              onClick={onRoleSwitch}
              className={cn(
                'border-(--border) text-(--muted-foreground) hover:bg-(--muted) hover:border-(--border) flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-all duration-150 focus:outline-none',
              )}
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
