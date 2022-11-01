interface IOrder {
  name: string;
  phone: string;
  address: string;
  total: number;
  method: number;
}

export const createOrder = async ({ name, phone, address, total, method }: IOrder) => {
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      total: total,
      method: method,
      status: 1,
    }),
  });
  const id: string = await res.json();
  return id;
};
