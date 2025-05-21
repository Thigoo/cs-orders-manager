import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ILoginData, loginUser, registerUser } from "@/services/auth-service";

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

  const login = async (data: ILoginData) => {
    const { email, password } = data;
    if (!email || !password) {
      throw new Error('Please fill in all fields');
    }
    try {
      const response = await loginUser(data);
      const { name, email, token } = response.data;
      const userData = { name, email };
      setUser(userData);
      setToken(token);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('Error logging in', error);
      throw new Error('Error logging in');
    }
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
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};