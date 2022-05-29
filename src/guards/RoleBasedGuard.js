import PropTypes from 'prop-types';
import { Container, Alert, AlertTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/store";
// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.string, // Example ['admin', 'leader']
  children: PropTypes.node
};

// const useCurrentRole = () => {
//   // Logic here to get current user role
//   const role ="admin";
//   return role;
// };

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const { user } = useAppSelector((state) => state.user);
  const [role, setRole]=useState("")
  // const currentRole = useCurrentRole();
  useEffect(()=>{
 
   if(user?.role==="modaretor"){
      setRole("modaretor")
    }
    else if(user?.role==="doctor"){
      setRole("doctor")
    }
    else{
      setRole("user")
    }
  },[])
  if(user?.role==="admin"){
    return <>{children}</>;
  }

  if (accessibleRoles!==role) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
}
