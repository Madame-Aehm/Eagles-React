import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
type ProtectedRoutePropsType = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { user, userCheck } = useContext(AuthContext);

  // const isUserLoggedin = user ? true : false;
  // return <>{isUserLoggedin ? children : <Navigate to="/" />}</>;
  return userCheck ?
    user ? 
      children
    : <Navigate to="/" />
    : <p>Loading...</p>
}

export default ProtectedRoute;
