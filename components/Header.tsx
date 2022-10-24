import Image from "next/image";
import React from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";

const Header = () => {
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
        <div className={css.cart}>
          <UilShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
