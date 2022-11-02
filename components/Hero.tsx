import Image from "next/image";
import React from "react";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>Much Faster</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span>Be the fastest </span>
          <span>in delivering </span>
          <span>
            your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our mission is to fill your tummy with delicious food with fast and free delivery
        </span>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 14.99
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
