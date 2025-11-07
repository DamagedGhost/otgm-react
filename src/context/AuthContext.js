import React, { createContext, useContext, useState } from 'react';
import useUserViewModel from '../viewmodels/useUserViewModel';
import { useNavigate } from 'react-router-dom';

// 1. Crear el Contexto
const AuthContext = createContext();

// 2. Crear el Proveedor (Provider)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { findUserByEmailAndPassword } = useUserViewModel();
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = (email, password) => {
    const foundUser = findUserByEmailAndPassword(email, password);
    if (foundUser) {
      setUser(foundUser);
      // Redirigir al Admin si es admin, o a la home si es cliente
      if (foundUser.rol === 'admin') {
        navigate('/Admin');
      } else {
        navigate('/');
      }
      return true;
    }
    // Si no lo encuentra
    alert('Correo o contraseña incorrectos.');
    return false;
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    navigate('/'); // Enviar a la home al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Crear el Hook para consumir el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};