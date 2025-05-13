import { getOrders } from "@/services/order-service";
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

    return {
        fetchOrders,
        orders,
        loading
    }
}