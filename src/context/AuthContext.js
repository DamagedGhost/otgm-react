import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AUTH_KEY = 'authUser';
const TOKEN_KEY = 'authToken';
const API_URL = 'http://34.193.81.109:3000'; // Tu IP o localhost

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    // 1. Cargar Usuario y Token desde LocalStorage
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem(AUTH_KEY);
        return stored ? JSON.parse(stored) : null;
    });
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

    // 2. Sincronizar cambios en LocalStorage
    useEffect(() => {
        if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        else localStorage.removeItem(AUTH_KEY);

        if (token) localStorage.setItem(TOKEN_KEY, token);
        else localStorage.removeItem(TOKEN_KEY);
    }, [user, token]);

    // 3. Función Login (Conecta con API)
    const login = async (correo, password) => {
        try {
            const res = await axios.post(`${API_URL}/login`, { correo, password });
            const { user: userData, token: userToken } = res.data;

            // Guardamos en estado (y useEffect guarda en Storage)
            setUser(userData);
            setToken(userToken);

            // Redirección por Rol
            if (userData.rol === 'admin' || userData.rol === 'vendedor') {
                navigate('/Admin');
            } else {
                navigate('/');
            }
            return true;
        } catch (error) {
            console.error("Login fallido:", error);
            alert('Credenciales incorrectas');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);