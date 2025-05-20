import { createContext } from "react";
import { IUser } from "./AuthProvider";

interface AuthContextProps {
    user: { name: string, email: string } | null;
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    register: (data: IUser) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

