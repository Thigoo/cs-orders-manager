import { createContext } from "react";

interface AuthContextProps {
    user: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

