import { OrderForm, OrderFormValues } from "./components/order-form.component";
import { useNavigate } from "react-router-dom";
import { useOrders } from "@/hooks/use-orders";

export const AddOrdersView = () => {
  const { submitOrder, loading } = useOrders();
  const navigate = useNavigate();
  const onSubmit = async (data: OrderFormValues) => {
    try {
      await submitOrder(data);
    } finally {
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
