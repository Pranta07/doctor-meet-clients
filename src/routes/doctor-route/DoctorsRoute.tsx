import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DoctorsRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isLoading } = useAuth();
  const [doctor, setdoctor] = useState(false);
  const [done, setDone] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (!isLoading) {
      setDone(false);
      setdoctor(false);
      fetch(`http://localhost:5000/user/${user?.email}`)
        .then((res) => res.json())
        .then((user) => {
          if (user?.role === "doctor") {
            setdoctor(true);
          }
        })
        .finally(() => setDone(true));
    }
  }, [isLoading]);

  if (isLoading || !done) {
    return (
      <div className="m-10">
        <svg
          className="animate-spin h-5 w-5 bg-yellow-400 mx-auto"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    );
  }

  if (user?.email && doctor) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default DoctorsRoute;
