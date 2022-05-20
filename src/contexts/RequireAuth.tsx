import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useAppSelector } from "../redux/store";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading }: any = useAppSelector((state) => state.user);

  let location = useLocation();

  if (loading) {
    return (
      <div className="m-10">
        <svg
          className="animate-spin h-5 w-5 bg-yellow-400 mx-auto ..."
          viewBox="0 0 24 24"
        ></svg>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
