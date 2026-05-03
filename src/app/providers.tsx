'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MotionConfig } from 'framer-motion';
import { useState, useEffect } from 'react';
import { configureClient } from '@dkc/api-client';
import { useAuthStore } from '@/store/auth.store';

/* ─────────────────────────────────────────────────────────────────
   API CLIENT CONFIGURATOR
   Runs as a side-effect component so the api-client always has
   a fresh accessToken and the correct onUnauthorized redirect.
   Re-runs any time the token changes (login / token refresh).
───────────────────────────────────────────────────────────────── */
function ApiClientConfig() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  useEffect(() => {
    configureClient({
      baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1',
      getAccessToken: () => accessToken,
      onUnauthorized: () => {
        clearAuth();
        window.location.href = '/login';
      },
    });
  }, [accessToken, clearAuth]);

  return null;
}

/* ─────────────────────────────────────────────────────────────────
   PROVIDERS
   ─────────────────────────────────────────────────────────────────
   Provider order (outermost → innermost):

     MotionConfig          — animation config for the whole tree.
                             reducedMotion="user" reads the OS
                             prefers-reduced-motion setting and
                             disables all framer-motion variants
                             in lib/motion/variants.ts automatically.
                             Works alongside the CSS
                             @media (prefers-reduced-motion) block
                             in globals.css for pure-CSS animations.

     QueryClientProvider   — React Query. staleTime, retry, and
                             refetchOnWindowFocus are set once here
                             so no query needs to repeat them.

     ApiClientConfig       — renderless; syncs the api-client with
                             the current auth token on every render
                             where the token changes.

     ReactQueryDevtools    — dev-only, bottom-left, does not ship
                             in production builds.

   When adding new providers (AuthProvider, Toaster, ThemeProvider)
   insert them inside QueryClientProvider, outside children:

     <QueryClientProvider>
       <ApiClientConfig />
       <NewProvider>        ← add here
         {children}
         <Toaster />        ← or here if self-closing
       </NewProvider>
     </QueryClientProvider>
───────────────────────────────────────────────────────────────── */
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 min — most B2B data is stable
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 0,
          },
        },
      }),
  );

  return (
    <MotionConfig reducedMotion="user">
      <QueryClientProvider client={queryClient}>
        <ApiClientConfig />
        {children}
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
        )}
      </QueryClientProvider>
    </MotionConfig>
  );
}
