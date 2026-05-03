'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  List,
  X,
  ArrowRight,
  CaretDown,
  Handshake,
  TrendUp,
  Buildings,
  Package,
} from '@/lib/icons';
import { Button } from '@/components/shared/Button';
import { cn } from '@/lib/utils';
import { PUBLIC_ROUTES } from '@dkc/constants';

/* ── Types ── */

interface NavSubItem {
  label: string;
  href: string;
}

interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  subItems: NavSubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

/* ── Nav config ── */

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Partnership Paths',
    children: [
      {
        label: 'Core Trade',
        href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/core-trade`,
        description: 'Structured direct commerce',
        icon: <Package size={16} weight="duotone" />,
        subItems: [
          {
            label: 'Dropshipping',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/core-trade/dropshipping`,
          },
          {
            label: 'Consignment',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/core-trade/consignment`,
          },
          { label: 'Wholesale', href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/core-trade/wholesale` },
          {
            label: 'Import / Export',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/core-trade/import-export`,
          },
        ],
      },
      {
        label: 'Brand Expansion',
        href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/brand-expansion`,
        description: 'Reach new markets and audiences',
        icon: <TrendUp size={16} weight="duotone" />,
        subItems: [
          {
            label: 'Exhibition',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/brand-expansion/exhibition`,
          },
          {
            label: 'Auction & Bidding',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/brand-expansion/auction`,
          },
          {
            label: 'White Label',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/brand-expansion/white-label`,
          },
          {
            label: 'Brick & Mortar',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/brand-expansion/brick-mortar`,
          },
        ],
      },
      {
        label: 'Collaborative',
        href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/collaborative`,
        description: 'Co-creation and shared systems',
        icon: <Handshake size={16} weight="duotone" />,
        subItems: [
          {
            label: 'Packaging',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/collaborative/packaging`,
          },
          {
            label: 'Design Collaboration',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/collaborative/design-collab`,
          },
          {
            label: 'Storytelling & Media',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/collaborative/storytelling`,
          },
          {
            label: 'Warehouse',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/collaborative/warehouse`,
          },
        ],
      },
      {
        label: 'Institutional',
        href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/institutional`,
        description: 'Formal and governed structures',
        icon: <Buildings size={16} weight="duotone" />,
        subItems: [
          {
            label: 'Museum / Institutional',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/institutional/museum`,
          },
          {
            label: 'NGO / Government',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/institutional/ngo`,
          },
          {
            label: 'Logistics',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/institutional/logistics`,
          },
          {
            label: 'Technology Partnership',
            href: `${PUBLIC_ROUTES.PARTNERSHIP_PATHS}/institutional/technology`,
          },
        ],
      },
    ],
  },
  { label: 'How It Works', href: PUBLIC_ROUTES.HOW_GROWTH_WORKS },
  { label: 'Pricing', href: PUBLIC_ROUTES.PRICING },
  { label: 'Trust Standards', href: PUBLIC_ROUTES.TRUST_STANDARDS },
  { label: 'About', href: PUBLIC_ROUTES.ABOUT },
  { label: 'Contact', href: PUBLIC_ROUTES.CONTACT },
];

/* ── Motion constants ── */

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.4, 0, 1, 1] as const;

/* ── Navbar ── */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  /* Outside-click close */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Body scroll lock when mobile open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Header */}
      <div className="fixed inset-x-0 top-0 z-[var(--z-header)]">
        <div
          ref={navRef}
          className={cn(
            'transition-all duration-300',
            scrolled
              ? 'border-(--border) bg-(--background-elevated) border-b shadow-[var(--shadow-sm)]'
              : 'bg-(--background)',
          )}
          style={{ height: 'var(--header-height)' }}
        >
          <div className="container flex h-full items-center justify-between gap-6">
            {/* Logo */}
            <NavLogo />

            {/* Desktop nav */}
            <nav
              className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <NavItemComponent
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link href={PUBLIC_ROUTES.LOGIN}>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href={PUBLIC_ROUTES.APPLY}>
                <Button
                  variant="elite"
                  size="sm"
                  iconRight={<ArrowRight size={13} weight="bold" />}
                >
                  Start Application
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="text-(--foreground) hover:bg-(--muted) flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] transition-colors lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: 'flex' }}
                >
                  {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}

/* ── NavLogo ── */

function NavLogo() {
  return (
    <Link href={PUBLIC_ROUTES.HOME} className="group flex shrink-0 items-center gap-2.5">
      <div
        className={cn(
          'flex h-7 w-7 shrink-0 items-center justify-center',
          'rounded-[var(--radius-md)] text-[11px] font-bold',
          'bg-(--primary) text-(--primary-foreground)',
          'group-hover:bg-(--accent) group-hover:text-(--accent-foreground)',
          'transition-colors duration-200',
        )}
      >
        DK
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-(--foreground) text-[13px] font-bold tracking-tight">
          De Koshur Crafts
        </span>
        <span className="text-(--muted-foreground) hidden text-[9px] font-semibold uppercase tracking-[0.18em] sm:block">
          B2B Connect
        </span>
      </div>
    </Link>
  );
}

/* ── Desktop Nav Item ── */

function NavItemComponent({
  item,
  pathname,
  activeDropdown,
  setActiveDropdown,
}: {
  item: NavItem;
  pathname: string;
  activeDropdown: string | null;
  setActiveDropdown: (v: string | null) => void;
}) {
  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + '/')
    : false;
  const isOpen = activeDropdown === item.label;
  const hasChildren = !!item.children?.length;

  const baseClass = cn(
    'relative flex items-center gap-1 rounded-[var(--radius-md)] px-3 py-1.5',
    'text-[13px] font-medium whitespace-nowrap',
    'transition-colors duration-150 focus:outline-none',
    'focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_24%,transparent)]',
  );

  if (!hasChildren) {
    return (
      <Link
        href={item.href ?? '#'}
        className={cn(
          baseClass,
          isActive
            ? 'text-(--primary)'
            : 'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted)',
        )}
      >
        {item.label}
        {isActive && (
          <motion.span
            layoutId="nav-active-line"
            className="bg-(--primary) absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
            transition={{ duration: 0.22, ease: EASE }}
          />
        )}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setActiveDropdown(isOpen ? null : item.label)}
        className={cn(
          baseClass,
          isOpen
            ? 'text-(--foreground) bg-(--muted)'
            : 'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted)',
        )}
      >
        {item.label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex' }}
        >
          <CaretDown size={12} weight="bold" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && <MegaMenu item={item} onClose={() => setActiveDropdown(null)} />}
      </AnimatePresence>
    </div>
  );
}

/* ── MegaMenu ── */

function MegaMenu({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <motion.div
      className={cn(
        'absolute left-0 top-full z-[var(--z-dropdown)] mt-3 overflow-hidden',
        'bg-(--popover) text-(--popover-foreground)',
        'border-(--border) border',
        'rounded-[var(--radius-3xl)]',
        'shadow-[var(--shadow-2xl)]',
      )}
      style={{ width: '920px' }}
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      <div className="flex">
        {/* Left feature panel */}
        <MegaMenuFeaturePanel onClose={onClose} />

        {/* Right — 4 category columns */}
        <div className="flex flex-1 flex-col p-5">
          <div className="grid grid-cols-4 gap-3">
            {item.children?.map((child, idx) => (
              <MegaMenuColumn key={child.label} child={child} idx={idx} onClose={onClose} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── MegaMenuFeaturePanel ── */

function MegaMenuFeaturePanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={cn(
        'flex w-56 shrink-0 flex-col justify-between p-5',
        'bg-(--background-focus)',
        'border-(--border) border-r',
        'rounded-l-[var(--radius-3xl)]',
      )}
    >
      <div className="flex flex-col gap-3">
        <span className="text-(--muted-foreground) text-[9px] font-bold uppercase tracking-[0.2em]">
          Partnership Systems
        </span>
        <p
          className="text-(--foreground) text-sm font-semibold leading-snug"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          16 pathways into the Kashmir craft market
        </p>
        <div
          className={cn(
            'rounded-[var(--radius-lg)] p-2.5',
            'bg-(--muted) border-(--border) border',
          )}
        >
          <div
            className="text-(--foreground) text-xl font-bold leading-none"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            4
          </div>
          <div className="text-(--muted-foreground) mt-1 text-[10px] leading-snug">
            systems, each with 4 verified sub-paths
          </div>
        </div>
      </div>

      <Link
        href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}
        onClick={onClose}
        className={cn(
          'flex items-center justify-between',
          'rounded-[var(--radius-xl)] px-3 py-2.5',
          'text-[11px] font-semibold',
          'bg-(--primary) text-(--primary-foreground)',
          'transition-opacity duration-150 hover:opacity-90',
        )}
      >
        View all pathways
        <ArrowRight size={11} weight="bold" />
      </Link>
    </div>
  );
}

/* ── MegaMenuColumn ── */

function MegaMenuColumn({
  child,
  idx,
  onClose,
}: {
  child: NavChild;
  idx: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.04, duration: 0.16, ease: EASE }}
      className={cn(
        'flex flex-col gap-3 rounded-[var(--radius-2xl)] p-3',
        'bg-(--card) border-(--border) border',
        'hover:bg-(--background-elevated) transition-colors duration-150',
      )}
    >
      {/* Icon + title + description */}
      <Link href={child.href} onClick={onClose} className="flex flex-col gap-2">
        <span
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-[var(--radius-lg)]',
            'bg-(--muted) border-(--border) border',
            'text-(--foreground)',
            'transition-colors duration-200',
          )}
        >
          {child.icon}
        </span>
        <div>
          <span className="text-(--foreground) hover:text-(--primary) block text-[12px] font-semibold leading-tight transition-colors duration-150">
            {child.label}
          </span>
          <span className="text-(--muted-foreground) mt-0.5 block text-[10px] leading-relaxed">
            {child.description}
          </span>
        </div>
      </Link>

      {/* Divider */}
      <div className="bg-(--border) h-px w-full" aria-hidden="true" />

      {/* Sub-path links */}
      <div className="flex flex-col gap-1">
        {child.subItems.map((sub) => (
          <Link
            key={sub.label}
            href={sub.href}
            onClick={onClose}
            className={cn(
              'flex items-center gap-1.5 whitespace-nowrap',
              'rounded-[var(--radius-lg)] px-2 py-1.5 text-[11px]',
              'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--secondary)',
              'transition-colors duration-150',
            )}
          >
            <span
              className="bg-(--primary) h-1 w-1 shrink-0 rounded-full opacity-50"
              aria-hidden="true"
            />
            {sub.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* ── MobileMenu ── */

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[var(--z-overlay)] lg:hidden"
            style={{
              background: 'color-mix(in srgb, var(--background) 78%, transparent)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className={cn(
              'fixed bottom-0 right-0 top-0 z-[var(--z-modal)]',
              'flex w-80 flex-col overflow-y-auto lg:hidden',
              'bg-(--popover) border-(--border) border-l',
              'shadow-[var(--shadow-2xl)]',
            )}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {/* Drawer header */}
            <div className="border-(--border) flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-(--primary) text-(--primary-foreground) flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[11px] font-bold">
                  DK
                </div>
                <span className="text-(--foreground) text-sm font-semibold">De Koshur Crafts</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-(--muted-foreground) hover:bg-(--muted) hover:text-(--foreground) flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] transition-colors"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035, duration: 0.2, ease: EASE }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center rounded-[var(--radius-xl)] px-4 py-3 text-sm font-medium transition-colors',
                        pathname === item.href
                          ? 'bg-(--primary) text-(--primary-foreground)'
                          : 'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted)',
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <MobileDropdown item={item} />
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="border-(--border) flex flex-col gap-2.5 border-t px-5 py-4">
              <Link href={PUBLIC_ROUTES.APPLY} className="w-full">
                <Button
                  variant="depth"
                  size="md"
                  fullWidth
                  iconRight={<ArrowRight size={14} weight="bold" />}
                >
                  Start Application
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <Link href={PUBLIC_ROUTES.LOGIN} className="w-full">
                  <Button variant="ghost" size="sm" fullWidth>
                    Sign In
                  </Button>
                </Link>
                <Link href={PUBLIC_ROUTES.REGISTER} className="w-full">
                  <Button variant="secondary" size="sm" fullWidth>
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── MobileDropdown ── */

function MobileDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted) flex w-full items-center justify-between rounded-[var(--radius-xl)] px-4 py-3 text-sm font-medium transition-colors"
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex' }}
        >
          <CaretDown size={13} weight="bold" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-2 pr-1 pt-1">
              {item.children?.map((child) => (
                <div key={child.label} className="mb-2">
                  {/* Category row */}
                  <div className="bg-(--muted) flex items-center gap-2 rounded-[var(--radius-lg)] px-3 py-2">
                    <span className="text-(--foreground)">{child.icon}</span>
                    <span className="text-(--foreground) text-xs font-semibold">{child.label}</span>
                  </div>

                  {/* MobileSubList */}
                  <MobileSubList subItems={child.subItems} />
                </div>
              ))}

              {/* View all link */}
              <Link
                href={PUBLIC_ROUTES.PARTNERSHIP_PATHS}
                className={cn(
                  'mt-1 flex items-center justify-between',
                  'rounded-[var(--radius-xl)] px-3 py-2.5',
                  'bg-(--muted) border-(--border) border',
                  'hover:bg-(--secondary) transition-colors duration-150',
                )}
              >
                <span className="text-(--foreground) text-xs font-semibold">
                  View all partnerships
                </span>
                <ArrowRight size={12} weight="bold" className="text-(--foreground)" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── MobileSubList ── */

function MobileSubList({ subItems }: { subItems: NavSubItem[] }) {
  return (
    <div className="pl-2 pt-0.5">
      {subItems.map((sub) => (
        <Link
          key={sub.label}
          href={sub.href}
          className={cn(
            'flex items-center gap-2 rounded-[var(--radius-lg)] px-3 py-1.5 text-xs',
            'text-(--muted-foreground) hover:text-(--foreground) hover:bg-(--muted)',
            'transition-colors duration-150',
          )}
        >
          <span
            className="bg-(--primary) h-1 w-1 shrink-0 rounded-full opacity-50"
            aria-hidden="true"
          />
          {sub.label}
        </Link>
      ))}
    </div>
  );
}
