import { api } from "@/api/api";

export const getOrders = () => api.get("/orders");