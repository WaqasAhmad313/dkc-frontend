import { create } from 'zustand';

export type PlatformRole = 'buyer' | 'vendor' | 'institution' | 'partner' | null;

const STORAGE_KEY = 'dkc_role';

function readFromStorage(): PlatformRole {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === 'buyer' || raw === 'vendor' || raw === 'institution' || raw === 'partner') {
      return raw;
    }
  } catch {
    // localStorage unavailable (SSR, private mode, etc.)
  }
  return null;
}

function writeToStorage(role: PlatformRole): void {
  if (typeof window === 'undefined') return;
  try {
    if (role === null) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, role);
    }
  } catch {
    // localStorage unavailable
  }
}

interface RoleStore {
  activeRole: PlatformRole;

  /** Set role — called from role selector, navbar, and registration flow */
  setRole: (role: PlatformRole) => void;

  /** Clear role — resets to null, shows role selector again */
  clearRole: () => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  activeRole: readFromStorage(),

  setRole: (role) => {
    writeToStorage(role);
    set({ activeRole: role });
  },

  clearRole: () => {
    writeToStorage(null);
    set({ activeRole: null });
  },
}));
