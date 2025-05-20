import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { registerUser } from "@/services/auth-service";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string, email: string } | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('token');
  });

  const login = async (username: string, password: string) => {
    console.log('username ->', username);
    console.log('password ->', password);    
  };

  const register = async (data: IUser) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new Error('Please fill in all fields');
    }
    try {
      const response = await registerUser(data);
      const { name: resName, email: resEmail, token: resToken } = response.data;

      const userData = { name: resName, email: resEmail };
      setUser(userData);
      setToken(resToken);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', resToken);
    } catch (error) {
      console.log('Error registering user', error);
      throw new Error('Error registering user');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};