import { createOrder, getOrders } from "@/services/order-service";
import { OrderFormValues } from "@/views/orders/components/order-form.component";
import { IOrder } from "@/views/orders/orders.view";
import { useCallback, useState } from "react";

export const useOrders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchOrders = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await getOrders();
            setOrders(data);
        } catch (error) {
            console.log("Error fetching orders", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const submitOrder = useCallback(async (data: OrderFormValues) => {
        try {
            setLoading(true);
            await createOrder(data);
            fetchOrders();
        } catch (error) {
            console.log("Error creating order", error);
        } finally {
            setLoading(false);
        }
    }, [fetchOrders]);

    return {
        fetchOrders,
        submitOrder,
        orders,
        loading
    }
}