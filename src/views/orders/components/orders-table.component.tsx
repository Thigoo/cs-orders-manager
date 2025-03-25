import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { IOrder } from "../orders.view";

interface IOrdersTableProps {
  orders: IOrder[];
}

export const OrdersTable = ({ orders }: IOrdersTableProps) => {
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
