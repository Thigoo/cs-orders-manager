import axios from "axios";
import { OrderForm, OrderFormValues } from "./components/order-form.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddOrdersView = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onSubmit = async (data: OrderFormValues) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/orders", data);
      console.log("Order created:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    } finally {
      setLoading(false);
      navigate("/orders");
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Add Orders</h1>
      <OrderForm onSubmit={onSubmit} loading={loading} />
    </div>
  );
};
