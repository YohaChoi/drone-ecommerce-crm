import create from "zustand";
import { persist } from "zustand/middleware";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string
}

interface CartState {
  items: Item[];
  numberOfOrders: number;
  subtotal: number;
  totalPrice: number;
  isOpen: boolean; 
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantityToAdd: number) => void;
  calculateTotals: () => void;
  clearCart: () => void;
  toggleCart: () => void; 
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      numberOfOrders: 0,
      subtotal: 0,
      totalPrice: 0,
      isOpen: false,

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((p) => p.id === item.id);
          if (existingItem) {
            existingItem.quantity = (existingItem.quantity ?? 0) + (item.quantity ?? 1);
          } else {
            state.items.push({ ...item, quantity: item.quantity ?? 1 });
          }
          state.numberOfOrders += 1;
          return { ...state };
        });
        get().calculateTotals();
      },
      

      removeItem: (itemId) => {
        set((state) => {
          const filteredItems = state.items.filter((p) => p.id !== itemId);
          return { ...state, items: filteredItems };
        });
        get().calculateTotals();
      },

      updateQuantity: (itemId, quantityToAdd) => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, quantity: item.quantity + quantityToAdd };
            }
            return item;
          });
          return { ...state, items: updatedItems };
        });
        get().calculateTotals();
      },

      calculateTotals: () => {
        set((state) => {
          const subtotal = state.items.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
          const totalPrice = subtotal;
          return { ...state, subtotal, totalPrice };
        });
      },

      clearCart: () => {
        set({ items: [], numberOfOrders: 0, subtotal: 0, totalPrice: 0 });
      },

      toggleCart: () => {
        set((state) => ({ ...state, isOpen: !state.isOpen }));
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useCartStore;
