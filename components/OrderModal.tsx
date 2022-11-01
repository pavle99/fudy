import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import css from "../styles/OrderModal.module.css";

interface IProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<number | null>>;
  paymentMethod: number | null;
}

const OrderModal = ({ opened, setOpened, paymentMethod }: IProps) => {
  const theme = useMantineTheme();

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const total = typeof window !== "undefined" && localStorage.getItem("total");

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(null)}
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
    </Modal>
  );
};

export default OrderModal;
