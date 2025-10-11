import { CartStoreStateType, CartStoreActionsType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (item) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (i) =>
              i.id === item.id &&
              i.selectedSize === item.selectedSize &&
              i.selectedColor === item.selectedColor
          );
          if (existingIndex != -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += item.quantity || 1;
            return { cart: updatedCart };
          }
          return {
            cart: [
              ...state.cart,
              {
                ...item,
                quantity: 1,
                selectedSize: item.selectedSize,
                selectedColor: item.selectedColor,
              },
            ],
          };
        }),
      removeFromCart: (item) =>
        set((state) => ({
          cart: state.cart.filter(
            (i) =>
              !(
                i.id === item.id &&
                i.selectedSize === item.selectedSize &&
                i.selectedColor === item.selectedColor
              )
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;
