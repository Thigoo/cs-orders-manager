import { Button } from "@/components/ui/button";
import { OrdersTable } from "./components/orders-table.component";
import { Link } from "react-router-dom";
import { useOrders } from "@/hooks/use-orders";
import { useEffect } from "react";

export interface IOrder {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  theme: string;
  amount: number;
  date: string;
  status: string;
}
export const OrdersView = () => {
  const { fetchOrders, orders, loading } = useOrders();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

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
