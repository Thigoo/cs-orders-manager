import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    // Simulate login (replace with API call)
    if (username === "admin" && password === "admin") {
      setUser(username);
      localStorage.setItem("user", username);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};