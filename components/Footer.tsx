import { UilFacebook, UilGithub, UilLinkedin } from "@iconscout/react-unicons";
import Image from "next/image";
import React from "react";
import css from "../styles/Footer.module.css";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilLinkedin size={45} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={70} height={70} />
        <span>FUDY</span>
      </div>
    </div>
  );
};

export default Footer;
