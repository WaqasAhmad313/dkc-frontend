'use client';

import Image from 'next/image';
import { CheckCircle } from '@/lib/icons';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Badge } from '@/components/shared/Badge';
import type { PlatformRole } from '@/store/role.store';

/* ── WhatYouGetSection ────────────────────────────────────────────── */

export default function WhatYouGetSection({
  data,
  activeRole: _activeRole,
}: {
  data: any;
  activeRole?: PlatformRole;
}) {
  return (
    <section className="section-elevated section">
      <div className="container">
        <div className="section-inner">
          <SectionHeader
            headline={data.headline}
            description={data.description}
            size="md"
            align="left"
          />

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            {/* LEFT — 10 included items */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/10 p-8">
              <div className="mb-6">
                <Badge variant="outline" size="sm">Included in this pathway</Badge>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {(data.items as string[]).map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="border-(--border) bg-(--background)/60 flex items-start gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm"
                  >
                    <CheckCircle
                      size={14}
                      weight="fill"
                      className="text-(--primary) mt-0.5 shrink-0"
                    />
                    <span className="text-(--foreground) text-[13px] font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image, same height as left card */}
            <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10">
              {data.media?.image && (
                <Image
                  src={data.media.image}
                  alt="Private label packaging"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
