import Image from "next/image";
import React from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";

const Header = () => {
  const items = useStore((state) => state.cart.pizzaItems.length);
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={70} height={70} />
        <span>FUDY</span>
      </div>

      <ul className={css.menu}>
        <li>Home</li>
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
      </div>
    </div>
  );
};

export default Header;
