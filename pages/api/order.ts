import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/client";
import { Order } from "../../sanity-backend/schemaTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newOrder: Order = await JSON.parse(req.body);
    try {
      await client
        .create({
          _type: "order",
          name: newOrder.name,
          address: newOrder.address,
          phone: newOrder.phone,
          method: newOrder.method,
          total: newOrder.total,
          status: 1,
        })
        .then((data) => {
          res.status(200).json(data._id);
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong, check console." });
    }
  }
}
