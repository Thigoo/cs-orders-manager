import { api } from "@/api/api";
import { IUser } from "@/contexts/AuthProvider";

export const registerUser = (data: IUser) => api.post('/api/auth/register', data);