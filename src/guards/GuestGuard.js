import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// hooks
import { useAppDispatch, useAppSelector } from "../redux/store";
// routes
import { PATH_DASHBOARD } from '../routes/paths';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
  const { user } = useAppSelector((state) => state.user);

  if (!user?.email) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
