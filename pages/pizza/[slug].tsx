import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import { Pizza } from "../../sanity-backend/schemaTypes";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";

const Pizza = ({ pizza }: { pizza: Pizza }) => {
  const src = urlFor(pizza.image as SanityImageSource).url();

  const [size, setSize] = React.useState(1);
  const [quantity, setQuantity] = React.useState(1);

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image loader={() => src} src={src} alt="" layout="fill" objectFit="cover" unoptimized />
        </div>

        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span> {pizza.price?.[size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div onClick={() => setSize(0)} className={size === 0 ? css.selected : ""}>
                Small
              </div>
              <div onClick={() => setSize(1)} className={size === 1 ? css.selected : ""}>
                Medium
              </div>
              <div onClick={() => setSize(2)} className={size === 2 ? css.selected : ""}>
                Large
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              />
              <span>{quantity}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => setQuantity((prev) => prev + 1)}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`}>Add to Cart</div>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;

export async function getStaticPaths() {
  const paths = await client.fetch<string[]>(`*[_type == "pizza" && defined(slug.current)][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const { slug = "" } = params;
  const pizza = await client.fetch<Pizza>(`*[_type == "pizza" && slug.current == '${slug}'][0]`);
  return {
    props: {
      pizza,
    },
  };
}
