import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Pizza } from "../sanity-backend/schemaTypes";

interface ICart {
  cart: {
    pizzas: Pizza[];
  };
}

export const useStore = create<ICart>()(
  devtools(
    persist(
      (set) => ({
        cart: {
          pizzas: [],
        },

        addPizza: (data: Pizza) => {
          set((state) => ({
            cart: {
              pizzas: [...state.cart.pizzas, data],
            },
          }));
        },
      }),
      {
        name: "cart",
      }
    )
  )
);
