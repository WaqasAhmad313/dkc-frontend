import type { Metadata, Viewport } from 'next';
import { playfairDisplay, inter, jetbrainsMono } from '@/lib/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/navbar';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'De Koshur Crafts — B2B Connect',
    template: '%s | De Koshur Crafts',
  },
  description:
    "Kashmir's premier B2B platform. Connect directly with 1,200+ verified artisans — Pashmina, carpets, woodwork and more.",
  keywords: [
    'Kashmir crafts',
    'B2B artisan platform',
    'Pashmina wholesale',
    'GI certified crafts',
    'Kashmiri handmade',
  ],
  authors: [{ name: 'De Koshur Crafts' }],
  openGraph: {
    type: 'website',
    siteName: 'De Koshur Crafts',
    title: 'De Koshur Crafts — B2B Connect',
    description:
      "Kashmir's premier B2B platform connecting global buyers with verified local artisans.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De Koshur Crafts — B2B Connect',
    description:
      "Kashmir's premier B2B platform connecting global buyers with verified local artisans.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D4F3C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[playfairDisplay.variable, inter.variable, jetbrainsMono.variable].join(' ')}
    >
      <body className="has-sticky-header">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
