import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { Pizza } from "../../sanity-backend/schemaTypes";
import { PizzaItem } from "../../store/store";

const stripe = new Stripe(
  "sk_test_51LpFnjF8TXjSP8fdQ7admB88HcntPApGwFn9J4AcOUCbFnV1nXd03cnjBMfjAl1AvAyevC1DpzwPTUkS417ex6hT00ajZjAsGJ",
  {
    apiVersion: "2020-08-27",
  }
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req.body.map((pizzaItem: PizzaItem) => {
          const img = pizzaItem.pizza.image.asset._ref;
          const newImg = img
            .replace("image-", "https://cdn.sanity.io/images/3f6l2wv1/production/")
            .replace("-jpg", ".jpg");

          console.log(newImg);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: pizzaItem.pizza.name,
                images: [newImg],
              },
              unit_amount: pizzaItem.price * 100,
            },
            adjustable_quantity: {
              enabled: false,
            },
            quantity: pizzaItem.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cart`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
