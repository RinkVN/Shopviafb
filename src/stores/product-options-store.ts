import { create } from "zustand";

export type SizeOption = "s" | "m" | "l" | "xl" | "2xl";

type ProductOptionsStore = {
  color: string;
  size: SizeOption;
  quantity: number;
  setColor: (color: string) => void;
  setSize: (size: SizeOption) => void;
  setQuantity: (quantity: number) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  reset: () => void;
};

const initialState = {
  color: "ocean-blue",
  size: "m" as SizeOption,
  quantity: 1,
};

export const useProductOptionsStore = create<ProductOptionsStore>((set) => ({
  ...initialState,

  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setQuantity: (quantity) => set({ quantity: Math.max(1, quantity) }),

  incrementQuantity: () => set((s) => ({ quantity: s.quantity + 1 })),
  decrementQuantity: () => set((s) => ({ quantity: Math.max(1, s.quantity - 1) })),

  reset: () => set(initialState),
}));
