import { create } from "zustand";

interface useResponsiveStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useResponsive = create<useResponsiveStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
