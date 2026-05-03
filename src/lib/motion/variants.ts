import type { Variants } from 'framer-motion';

/* ── Fade ────────────────────────────────────────────────────── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
};

export const fadeInSlow: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

/* ── Slide ───────────────────────────────────────────────────── */

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, x: -12, transition: { duration: 0.2 } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, x: 12, transition: { duration: 0.2 } },
};

/* ── Scale ───────────────────────────────────────────────────── */

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.15 } },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
};

/* ── Stagger containers ──────────────────────────────────────── */

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* ── Stagger children (use inside staggerContainer) ─────────── */

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } },
};

export const staggerItemFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

/* ── Page transitions ────────────────────────────────────────── */

export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

/* ── Hero specific ───────────────────────────────────────────── */

export const heroHeading: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/* ── Card hover ──────────────────────────────────────────────── */

export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--shadow-card)' },
  hover: {
    y: -4,
    boxShadow: 'var(--shadow-card-hover)',
    transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/* ── Number counter ──────────────────────────────────────────── */

export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/* ── Overlay / backdrop ──────────────────────────────────────── */

export const overlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/* ── 3D tilt (apply to motion.div with useMotionValue) ───────── */

export const tiltTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};
