import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { Pizza } from "../sanity-backend/schemaTypes";
import css from "../styles/Menu.module.css";

interface IProps {
  pizzas: Pizza[];
}

const Menu = ({ pizzas }: IProps) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu that Always</span>
        <span>Makes You fall in Love</span>
      </div>

      <div className={css.menu}>
        {pizzas.map((pizza, idx) => {
          const src = urlFor(pizza.image as SanityImageSource).url();
          return (
            <div className={css.pizza} key={pizza._id}>
              <Link href={`/pizza/${pizza.slug?.current}`}>
                <div className={css.imageWrapper}>
                  <Image loader={() => src} src={src} alt="" objectFit="cover" layout="fill" unoptimized />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span> {pizza.price?.[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
