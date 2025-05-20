import { api } from "@/api/api";
import { IUser } from "@/contexts/AuthProvider";

export interface ILoginData {
    email: string;
    password: string;
}

export const registerUser = (data: IUser) => api.post('/api/auth/register', data);
export const loginUser = (data: ILoginData) => api.post('/api/auth/login', data);