import { useAuth } from "@/hooks/use-auth";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};
