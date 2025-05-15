import { api } from "@/api/api";
import { OrderFormValues } from "@/views/orders/components/order-form.component";

export const getOrders = () => api.get("/orders");
export const createOrder = (data: OrderFormValues) => api.post("/orders", data);