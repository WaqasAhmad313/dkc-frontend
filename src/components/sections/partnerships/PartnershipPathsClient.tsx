'use client';

import { useState, useCallback } from 'react';
import { useRoleStore, type PlatformRole } from '@/store/role.store';
import type { BuyerFilterState, VendorFilterState } from '@/content/partnership.content';
import { PartnershipHeroSection } from './PartnershipHeroSection';
import { RoleContextBanner } from './RoleContextBanner';
import { CatalogueSection } from './CatalogueSection';

/* ── Types ──────────────────────────────────────────────────────── */

export type PartnershipRole = 'buyer' | 'vendor';

function isPartnershipRole(role: PlatformRole): role is PartnershipRole {
  return role === 'buyer' || role === 'vendor';
}

/* ── PartnershipPathsClient ─────────────────────────────────────── */

export default function PartnershipPathsClient() {
  const { activeRole, setRole } = useRoleStore();

  /* ── Filter state — lives here, passed down to sections ───────── */
  const [buyerState, setBuyerState] = useState<BuyerFilterState>({});
  const [vendorState, setVendorState] = useState<VendorFilterState>({});

  /* ── Reset filters when role switches ─────────────────────────── */
  const resolvedRole: PartnershipRole = isPartnershipRole(activeRole) ? activeRole : 'buyer';

  function handleRoleSwitch(): void {
    const next: PartnershipRole = resolvedRole === 'buyer' ? 'vendor' : 'buyer';
    setRole(next);
    /* Clear both states on switch — new role = fresh filter context */
    setBuyerState({});
    setVendorState({});
  }

  const handleBuyerChange = useCallback((s: BuyerFilterState) => setBuyerState(s), []);
  const handleVendorChange = useCallback((s: VendorFilterState) => setVendorState(s), []);

  /* ── Render ────────────────────────────────────────────────────── */
  return (
    <main>
      {/* §01 — Hero (compact dark emerald) */}
      <PartnershipHeroSection role={resolvedRole} onRoleSwitch={handleRoleSwitch} />

      {/* §02 — Role Context Banner */}
      <RoleContextBanner role={resolvedRole} onRoleSwitch={handleRoleSwitch} />

      {/* §03 — Catalogue (filters + cards + comparison) */}
      <CatalogueSection
        role={resolvedRole}
        buyerState={buyerState}
        vendorState={vendorState}
        onBuyerChange={handleBuyerChange}
        onVendorChange={handleVendorChange}
      />
    </main>
  );
}

export type { PlatformRole };
