import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Pizza } from "../sanity-backend/schemaTypes";

interface ICart {
  addPizza: (pizza: Pizza) => void;
  cart: {
    pizzas: Pizza[];
  };
}

export const useStore = create<ICart>()((set) => ({
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
}));
