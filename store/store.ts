import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Pizza } from "../sanity-backend/schemaTypes";

interface PizzaItem {
  pizza: Pizza;
  price: number;
  quantity: number;
  size: number;
}
interface ICart {
  addPizzaItem: (pizzaItem: PizzaItem) => void;
  cart: {
    pizzaItems: PizzaItem[];
  };
  removePizzaItem: (idx: number) => void;
  resetCart: () => void;
}

export const useStore = create<ICart>()((set) => ({
  cart: {
    pizzaItems: [],
  },

  addPizzaItem: (data: PizzaItem) => {
    set((state) => ({
      cart: {
        pizzaItems: [...state.cart.pizzaItems, data],
      },
    }));
  },

  removePizzaItem: (idx: number) => {
    set((state) => ({
      cart: {
        pizzaItems: state.cart.pizzaItems.filter((item, index) => index !== idx),
      },
    }));
  },

  resetCart: () => {
    set(() => ({
      cart: {
        pizzaItems: [],
      },
    }));
  },
}));
