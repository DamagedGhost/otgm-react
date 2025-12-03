import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

// Ahora recibimos "allowedRoles" como prop
const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // 1. No está logueado -> Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si se exigen roles y el usuario no tiene uno de ellos -> Home (o página de error)
  // Ejemplo: allowedRoles=['admin', 'vendedor'] y user.rol es 'cliente' -> Bloqueado
  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    return <Navigate to="/" replace />;
  }

  // 3. Pase
  return <Outlet />;
};

export default ProtectedRoute;