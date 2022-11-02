import { UilEnvelope, UilGithub, UilLinkedin, UilPizzaSlice } from "@iconscout/react-unicons";
import React from "react";
import css from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.social}>
        <UilEnvelope size={45} onClick={() => window.open("mailto:no-reply@example.com")} />
        <UilGithub size={45} onClick={() => window.open("https://github.com/pavle99")} />
        <UilLinkedin size={45} onClick={() => window.open("https://www.linkedin.com/in/pavle-cvejovic/")} />
      </div>

      <div className={css.logo}>
        <UilPizzaSlice width={70} height={70} color="#f54748" />
        <span>FUDY</span>
      </div>
    </div>
  );
};

export default Footer;
