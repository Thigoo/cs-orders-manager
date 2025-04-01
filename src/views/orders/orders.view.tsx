import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { OrdersTable } from "./components/orders-table.component";
import { Link } from "react-router-dom";

export interface IOrder {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  theme: string;
  amount: number;
  date: string;
  status: string;
  prodStatus: boolean;
}
export const OrdersView = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const API_URL='http://localhost:3001'

  const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/orders`);
      const data = await response.json();
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
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
          <Button onClick={getData}>Create Order</Button>
        </Link>
      </div>

      <OrdersTable orders={orders} />
    </div>
  );
};
