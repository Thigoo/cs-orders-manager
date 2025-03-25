import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOrder } from "../orders.view";

interface IOrdersTableProps {
  orders: IOrder[];
}

export const OrdersTable = ({ orders }: IOrdersTableProps) => {
  return (
    <Table className="overflow-auto w-screen border">
      <TableHeader className="bg-neutral-100">
        <TableRow>
          <TableHead className="">id</TableHead>
          <TableHead className="">customer</TableHead>
          <TableHead className="">product</TableHead>
          <TableHead className="">quantity</TableHead>
          <TableHead className="">theme</TableHead>
          <TableHead className="">amount</TableHead>
          <TableHead className="">date</TableHead>
          <TableHead className="">status</TableHead>
          <TableHead className="">prodStatus</TableHead>
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
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.theme}</TableCell>
            <TableCell>{order.amount}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.prodStatus ? "Yes" : "No"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
