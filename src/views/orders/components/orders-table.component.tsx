import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOrder } from "../orders.view";
import { Loading } from "./loading.component";
import { Badge } from "@/components/ui/badge";
import { getBadgeColor } from "../utils/get-badge-color";
import { MoreHorizontal } from "lucide-react";

interface IOrdersTableProps {
  orders: IOrder[];
  loading: boolean;
}

export const OrdersTable = ({ orders, loading }: IOrdersTableProps) => {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Table className="overflow-auto w-screen border">
          <TableHeader className="bg-neutral-100">
            <TableRow>
              <TableHead className="">customer</TableHead>
              <TableHead className="">product</TableHead>
              <TableHead className="">quantity</TableHead>
              <TableHead className="">theme</TableHead>
              <TableHead className="">amount</TableHead>
              <TableHead className="">delivery date</TableHead>
              <TableHead className="">status</TableHead>
              <TableHead className="">actions</TableHead>
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
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.theme}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge className={getBadgeColor(order.status)}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <MoreHorizontal />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
