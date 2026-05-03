import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@dkc/types',
    '@dkc/validators',
    '@dkc/constants',
    '@dkc/utils',
    '@dkc/api-client',
  ],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react', 'framer-motion'],
  },
};

export default nextConfig;
