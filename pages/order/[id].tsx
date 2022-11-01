import { UilBill, UilBox } from "@iconscout/react-unicons";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout";
import { client } from "../../lib/client";
import { Order } from "../../sanity-backend/schemaTypes";
import css from "../../styles/Order.module.css";
import Cooking from "../../assets/cooking.png";
import Onway from "../../assets/onway.png";
import Spinner from "../../assets/spinner.svg";

const Order = ({ order }: { order: Order }) => {
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Order in Process</span>

        <div className={css.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Customer Name</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Method</span>
            <span>{order.method === 0 ? "Cash on Delivery" : "Online Payment"}</span>
          </div>
          <div>
            <span>Total</span>
            <span>$ {order.total}</span>
          </div>
        </div>

        <div className={css.statusContainer}>
          <div className={css.status}>
            <UilBill width={50} height={50} />
            <span>Payment</span>

            {order.method === 0 ? (
              <span className={css.pending}>On Delivery</span>
            ) : (
              <span className={css.completed}>Completed</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Cooking} alt="" width={50} height={50} />
            <span>Cooking</span>

            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 1 && <span className={css.completed}>Completed</span>}
          </div>

          <div className={css.status}>
            <Image src={Onway} alt="" width={50} height={50} />
            <span>OnWay</span>

            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 2 && <span className={css.completed}>Completed</span>}
          </div>

          <div className={css.status}>
            <UilBox width={50} height={50} />
            <span>Delivered</span>

            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 3 && <span className={css.completed}>Completed</span>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;

export const getServerSideProps = async ({ params: { id } }: any) => {
  const order = await client.fetch<Order>(`*[_type == "order" && _id == '${id}'][0]`);
  return {
    props: {
      order,
    },
  };
};
