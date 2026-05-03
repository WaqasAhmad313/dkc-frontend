import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { cn } from '@/lib/utils';
import { PUBLIC_ROUTES } from '@dkc/constants';

/* ── Config ──────────────────────────────────────────────────── */

const FOOTER_COLS = [
  {
    heading: 'Partnerships',
    links: [
      { label: 'Core Trade', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS },
      { label: 'Brand Expansion', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS },
      { label: 'Collaborative', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS },
      { label: 'Institutional Pathways', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS },
      { label: 'All 16 Sub-Partnerships', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'How It Works', href: PUBLIC_ROUTES.HOW_GROWTH_WORKS },
      { label: 'Pricing & Packages', href: PUBLIC_ROUTES.PRICING },
      { label: 'Trust & Standards', href: PUBLIC_ROUTES.TRUST_STANDARDS },
      { label: 'Book Consultation', href: PUBLIC_ROUTES.BOOKING },
      { label: 'Start Application', href: PUBLIC_ROUTES.APPLY },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About DKC', href: PUBLIC_ROUTES.ABOUT },
      { label: 'Ecosystem', href: PUBLIC_ROUTES.ABOUT },
      { label: 'Contact', href: PUBLIC_ROUTES.CONTACT },
      { label: 'Sign In', href: PUBLIC_ROUTES.LOGIN },
    ],
  },
];

const TRUST_ITEMS = [
  { label: 'Fair Trade Aligned', desc: 'Certified ethical sourcing' },
  { label: 'GI Protected', desc: 'Geographical indication mark' },
  { label: 'Blockchain Traced', desc: 'Immutable product history' },
  { label: 'KYC Verified', desc: 'Identity and business checks' },
  { label: 'Anti-Counterfeit', desc: 'Authenticity guarantee' },
  { label: 'Dispute Protected', desc: 'Structured resolution pathways' },
];

const STATS = [
  { value: '16', label: 'Sub-Partnerships' },
  { value: '4', label: 'Partnership Systems' },
  { value: '7.5yr', label: 'Growth Horizon' },
  { value: '9', label: 'Application Stages' },
];

/* ── Component ───────────────────────────────────────────────── */

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* ── Stats band ──────────────────────────────────────── */}
      <div className="relative" style={{ background: 'var(--gradient-gold)' }}>
        <div className="container-platform py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span
                  className="font-serif font-bold"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main dark body ──────────────────────────────────── */}
      <div className="relative" style={{ background: 'var(--color-primary)' }}>
        {/* Subtle dot grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-platform relative py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ── Brand column ── */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-base font-bold text-white"
                  style={{ background: 'var(--gradient-gold)' }}
                >
                  DK
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span
                    className="font-bold tracking-tight"
                    style={{ fontSize: '1rem', color: 'white' }}
                  >
                    De Koshur Crafts
                  </span>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    B2B Connect Platform
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <div className="flex max-w-sm flex-col gap-3">
                <p
                  className="font-serif leading-snug"
                  style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}
                >
                  Not just a marketplace.{' '}
                  <span style={{ color: 'var(--color-accent)' }}>
                    A structured B2B growth system.
                  </span>
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  A protected professional-entry platform where access, growth, and advancement are
                  structured, governed, and earned over time.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={PUBLIC_ROUTES.APPLY}
                  className={cn(
                    'inline-flex items-center justify-center gap-2',
                    'rounded-md px-5 py-3 text-sm font-semibold',
                    'text-white transition-all duration-200',
                    'hover:-translate-y-0.5 hover:opacity-90',
                  )}
                  style={{ background: 'var(--gradient-gold)', boxShadow: 'var(--shadow-accent)' }}
                >
                  Start Application
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <Link
                  href={PUBLIC_ROUTES.BOOKING}
                  className={cn(
                    'inline-flex items-center justify-center gap-2',
                    'rounded-md px-5 py-3 text-sm font-medium',
                    'transition-colors duration-200',
                  )}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* ── Links columns ── */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:col-span-7">
              {FOOTER_COLS.map((col) => (
                <div key={col.heading} className="flex flex-col gap-5">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {col.heading}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1 text-sm transition-colors duration-150 hover:text-white"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Trust standards band ── */}
        <div className="border-b border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="container-platform py-8">
            <div className="flex flex-col gap-5">
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Platform Trust & Standards
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                {TRUST_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 rounded-lg p-3"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span
                      className="text-xs font-semibold"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[10px] leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                    >
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="container-platform py-5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                © {year} De Koshur Crafts. All rights reserved.
              </p>
              <span
                className="hidden h-3 w-px sm:block"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              />
              <p className="hidden text-xs sm:block" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Confidential B2B Platform
              </p>
            </div>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
