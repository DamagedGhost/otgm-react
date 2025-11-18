import React, { createContext, useContext, useState, useEffect } from 'react';
import useUserViewModel from '../viewmodels/useUserViewModel';
import { useNavigate } from 'react-router-dom';

const AUTH_KEY = 'authUser';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Cargamos usuario inicial si existe en localStorage (para no perder sesión al recargar)
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem(AUTH_KEY);
        try {
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (e) {
            return null;
        }
    });

    const { login: loginService } = useUserViewModel();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(AUTH_KEY);
        }
    }, [user]);

    // --- LOGIN ASÍNCRONO ---
    const login = async (email, password) => {
        // Llamamos al servicio de la API
        const loggedUser = await loginService(email, password);
        
        if (loggedUser) {
            setUser(loggedUser);
            if (loggedUser.rol === 'admin') {
                navigate('/Admin');
            } else {
                navigate('/');
            }
            return true;
        } else {
            alert('Correo o contraseña incorrectos.');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};