import { create } from "zustand";

export interface DrawerState {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDrawer = create<DrawerState>()((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));
