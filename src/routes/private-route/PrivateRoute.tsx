import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading }: any = useAppSelector((state) => state.user);
  const token = window.localStorage.getItem("token");


  let location = useLocation();

  if (loading) {
    return (
      <div className="m-10">
        <svg
          className="animate-spin h-5 w-5 bg-yellow-400 mx-auto"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    );
  }
  // console.log(loading);

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
