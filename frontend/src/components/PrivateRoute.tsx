// src/components/PrivateRoute.tsx
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // ou un spinner si tu veux
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
