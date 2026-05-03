import localFont from 'next/font/local';

// Playfair Display — variable font
// Axes: wght 400–900 (normal), wght 400–900 (italic)
// Design system use: --font-serif → --font-heading
// Applied to: h1–h6, .font-display, .font-heading, .font-editorial
// Classes using weights: 600 (headings), 700 (.heading-card)
export const playfairDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/PlayfairDisplay-Variable.woff2',
      weight: '400 900',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PlayfairDisplay-Italic-Variable.woff2',
      weight: '400 900',
      style: 'italic',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

// Inter — variable font
// Axes: wght 100–900, wdth 75–125
// wdth (font-stretch) is available but not currently used — set via CSS font-stretch if needed
// Design system use: --font-sans → --font-body
// Applied to: body, .font-ui, .font-body, .heading-card, all UI components
// Classes using weights: 400 (body), 600 (buttons, labels), 700 (table headers)
export const inter = localFont({
  src: [
    {
      path: '../../../public/fonts/Inter-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

// JetBrains Mono — variable font
// Axes: wght 100–800
// Design system use: --font-mono → --font-mono-var
// Applied to: .font-mono, .font-data, .font-label, .eyebrow
// Classes using weights: 400 (mono body), 500 (medium labels)
export const jetbrainsMono = localFont({
  src: [
    {
      path: '../../../public/fonts/JetBrainsMono-Variable.woff2',
      weight: '100 800',
      style: 'normal',
    },
  ],
  variable: '--font-mono-var',
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});
