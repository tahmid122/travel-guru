import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to={"/login"} state={pathname} />;
  }
  return children;
};

export default PrivateRoute;
