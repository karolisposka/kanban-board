import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

type props = {
  user?: string | null;
  path: string;
};

const PrivateRoute = ({ user, path }: props) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to={path} replace state={{ from: location }} />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
