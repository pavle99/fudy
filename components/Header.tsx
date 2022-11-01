import Image from "next/image";
import React from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import { UilReceipt, UilShoppingBag } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";

const Header = () => {
  const items = useStore((state) => state.cart.pizzaItems.length);

  const [order, setOrder] = React.useState("");

  React.useEffect(() => {
    setOrder(localStorage.getItem("order") ?? "");
  }, []);

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={70} height={70} />
        <span>FUDY</span>
      </div>

      <ul className={css.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {order && (
          <Link href={`/order/${order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              <div className={css.badge}>!</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
