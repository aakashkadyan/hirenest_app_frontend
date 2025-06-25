import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children,allowedRole }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('userRole');

  console.log("Token:", token);
  console.log("Role:", role);
  console.log("AllowedRole:", allowedRole);

  useEffect(() => {
    // If user tries to access protected route without proper auth,
    // clear any stale auth data to prevent confusion
    if (!token || role !== allowedRole) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    }
  }, [token, role, allowedRole]);

  if (!token || role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
