import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
import { useAppDispatch, useAppSelector } from "../redux/store";
// pages
import Login from '../pages/security/login/Login';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { user } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

 
  if (user?.email) {
    return <>{children}</>;
  }

  if (!user?.email) {
    <LoadingScreen/>
   
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
   
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
