import { create } from "zustand";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: string;
  image?: string;
  color?: string;
  size?: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalCount: () => number;
  clearCart: () => void;
};

const generateItemId = () => `cart-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          ...item,
          id: generateItemId(),
        },
      ],
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),

  totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  clearCart: () => set({ items: [] }),
}));
