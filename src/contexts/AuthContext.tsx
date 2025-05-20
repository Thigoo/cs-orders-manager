import { createContext } from "react";
import { IUser } from "./AuthProvider";
import { ILoginData } from "@/services/auth-service";

interface AuthContextProps {
    user: { name: string, email: string } | null;
    token: string | null;
    login: (data: ILoginData) => Promise<void>;
    register: (data: IUser) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

