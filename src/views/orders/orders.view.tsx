import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { OrdersTable } from "./components/orders-table.component";
import { Link } from "react-router-dom";
import axios from "axios";

export interface IOrder {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  theme: string;
  amount: number;
  date: string;
  status: string;
}
export const OrdersView = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const API_URL: string = "http://localhost:3001";

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}/orders`);
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <h1>Orders</h1>
        <Link to={"/orders/new-order"}>
          <Button>Create Order</Button>
        </Link>
      </div>

      <OrdersTable orders={orders} loading={loading} />
    </div>
  );
};
