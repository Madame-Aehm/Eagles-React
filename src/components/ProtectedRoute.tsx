import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
type ProtectedRoutePropsType = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { user, userCheck } = useAuth();

  return userCheck ?
    user ? 
      children
    : <Navigate to="/" />
    : <p>Loading...</p>
}

export default ProtectedRoute;
