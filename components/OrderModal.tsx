import { Modal, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { createOrder } from "../lib/orderHandler";
import { useStore } from "../store/store";
import css from "../styles/OrderModal.module.css";

interface IProps {
  opened: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<number | null>>;
  paymentMethod: number | null;
}

const OrderModal = ({ opened, setOpened, paymentMethod }: IProps) => {
  const theme = useMantineTheme();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    address: "",
  });

  const resetCart = useStore((state) => state.resetCart);

  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = await createOrder({ ...formData, total: parseFloat(total as string), method: paymentMethod as number });
    toast.success(`Order #${id} created successfully!`);
    resetCart();
    if (typeof window !== "undefined") {
      localStorage.setItem("order", id);
    }

    router.push(`/order/${id}`);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened && setOpened(null)}
      overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input type="text" name="name" required placeholder="Name" onChange={handleInput} />
        <input type="text" name="phone" required placeholder="Phone Number" onChange={handleInput} />
        <textarea name="address" rows={3} required placeholder="Address" onChange={handleInput} />

        <span>
          You will pay <span style={{ color: "var(--themeRed)" }}>${total}</span> on delivery
        </span>

        <button type="submit" className={`btn`}>
          Place Order
        </button>
      </form>

      <Toaster />
    </Modal>
  );
};

export default OrderModal;
