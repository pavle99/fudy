import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";

const Cart = () => {
  const cartData = useStore((state) => state.cart);
  const removePizzaItem = useStore((state) => state.removePizzaItem);

  const [paymentMethod, setPaymentMethod] = React.useState<number | null>(null);

  const calcTotal = () =>
    cartData.pizzaItems.reduce((acc: number, pizzaItem) => acc + pizzaItem.quantity * pizzaItem.price, 0);

  const handleRemove = (i: number) => {
    removePizzaItem(i);
    toast.error("Item removed from cart");
  };

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", calcTotal().toString());
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {cartData.pizzaItems.length > 0 &&
                cartData.pizzaItems.map((pizzaItem, index) => {
                  const pizza = pizzaItem.pizza;
                  const src = urlFor(pizza.image as SanityImageSource).url();

                  return (
                    <tr key={pizza._id}>
                      <td className={css.imageTd}>
                        <Image loader={() => src} src={src} alt="" objectFit="cover" width={85} height={85} />
                      </td>
                      <td>{pizza.name}</td>
                      <td>{pizzaItem.size === 0 ? "Small" : pizzaItem.size === 1 ? "Medium" : "Large"}</td>
                      <td>{pizzaItem.price}</td>
                      <td>{pizzaItem.quantity}</td>
                      <td>{pizzaItem.quantity * pizzaItem.price}</td>
                      <td style={{ color: "var(--themeRed)", cursor: "pointer" }} onClick={() => handleRemove(index)}>
                        x
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Items</span>
              <span>{cartData.pizzaItems.length}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{calcTotal()}</span>
            </div>
          </div>

          <div className={css.buttons}>
            <button className="btn" onClick={handleOnDelivery}>
              Pay on Delivery
            </button>
            <button className="btn" onClick={handleCheckOut}>
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <Toaster />

      <OrderModal opened={paymentMethod === 0} setOpened={setPaymentMethod} paymentMethod={paymentMethod} />
    </Layout>
  );
};

export default Cart;
