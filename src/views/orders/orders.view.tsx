import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

interface IOrder {
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

export const OrdersView = () => {
  return (
    <Table>
      <TableHeader className="bg-neutral-100">
        <TableRow>
          <TableHead className="">id</TableHead>
          <TableHead className="">customer</TableHead>
          <TableHead className="">date</TableHead>
          <TableHead className="">prodStatus</TableHead>
          <TableHead className="flex justify-center items-center">
            actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.length === 0 && (
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              No orders found.
            </TableCell>
          </TableRow>
        )}
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.prodStatus ? "Yes" : "No"}</TableCell>
            <TableCell className="bg-red-100 flex justify-center">
              <button className="cursor-pointer flex items-center justify-center">
                <Search /> Details
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
