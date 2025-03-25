import { Button } from "@/components/ui/button";
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
  const orders: IOrder[] = [
    {
      id: 1,
      customer: "John Doe",
      product: "Product A",
      quantity: 2,
      theme: "Moana",
      amount: 100,
      date: "2023-01-01",
      status: "Paid",
      prodStatus: true,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <h1>Orders</h1>
        <Link to={"/orders/new-order"}>
          <Button>Create Order</Button>
        </Link>
      </div>

      <OrdersTable orders={orders} />
    </div>
  );
};
