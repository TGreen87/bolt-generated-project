/**
 * Global state management
 */
import { create } from 'zustand';
import { Session, User } from '@/types';

interface AppState {
  session: Session | null;
  setSession: (session: Session | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useStore = create<AppState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  user: null,
  setUser: (user) => set({ user }),
}));
