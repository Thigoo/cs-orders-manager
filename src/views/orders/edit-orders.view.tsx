import { useEffect, useState } from "react";
import { OrderForm, OrderFormValues } from "./components/order-form.component";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IOrder {
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  date: Date;
  status: "Pending" | "Paid" | "Shipped" | "Delivered";
  theme?: string | undefined;
}

export const EditOrdersView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrder>({} as IOrder);

  useEffect(() => {
    if (!id) {
      console.error("No order ID provided");
      return;
    }
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    fetchOrder();
  }, [id]);

  const handleSubmit = async (data: OrderFormValues) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:3001/orders/${id}`,
        data
      );
      if (!response.data) {
        throw new Error("Order not found");
      }
      setOrder(response.data);
      console.log("Order updated:", response.data);
    } catch (error) {
      console.error("Error updating order:", error);
      setOrder({} as IOrder);
    } finally {
      setLoading(false);
    }
  };

  if (!order) {
    return <div>Loading order...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Edit Order</h1>
      <OrderForm
        initialData={order as OrderFormValues}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};
