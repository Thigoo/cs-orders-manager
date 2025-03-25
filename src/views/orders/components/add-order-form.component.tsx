import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const orderSchema = z.object({
  customer: z.string().min(2, "Customer name is required"),
  product: z.string().min(2, "Product name is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  theme: z.string().optional(),
  amount: z.number().min(1, "Amount must be greater than 0"),
  date: z.string().min(1, "Date is required"),
  status: z.enum(["Pending", "Paid", "Shipped", "Delivered"]),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export const AddOrderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      status: "Pending",
    },
  });

  const onSubmit = (data: OrderFormValues) => {
    console.log("Order Created:", data);
  };

  return (
    <Card className="max-w-md mx-auto border-none shadow-none">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Customer Name */}
          <div>
            <Label>Customer Name</Label>
            <Input {...register("customer")} placeholder="John Doe" />
            {errors.customer && (
              <p className="text-red-500 text-sm">{errors.customer.message}</p>
            )}
          </div>

          {/* Product */}
          <div>
            <Label>Product</Label>
            <Input {...register("product")} placeholder="Product A" />
            {errors.product && (
              <p className="text-red-500 text-sm">{errors.product.message}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <Label>Quantity</Label>
            <Input
              type="number"
              {...register("quantity", { valueAsNumber: true })}
              placeholder="2"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          {/* Theme */}
          <div>
            <Label>Theme (Optional)</Label>
            <Input {...register("theme")} placeholder="e.g. Moana" />
          </div>

          {/* Amount */}
          <div>
            <Label>Amount ($)</Label>
            <Input
              type="number"
              {...register("amount", { valueAsNumber: true })}
              placeholder="100"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <Label>Date</Label>
            <Input type="date" {...register("date")} />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <Label>Status</Label>
            <Select
              onValueChange={(value) =>
                setValue("status", value as OrderFormValues["status"])
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Shipped">Shipped</SelectItem>
                <SelectItem value="Delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Create Order
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
