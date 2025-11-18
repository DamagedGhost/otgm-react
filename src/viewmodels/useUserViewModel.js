import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// ⚠️ CAMBIA ESTO POR LA IP DE TU INSTANCIA BACKEND
const API_URL = 'http://34.193.81.109:3000'; 

const useUserViewModel = () => {
  const [users, setUsers] = useState([]);

  // --- LOGIN (Usado por AuthContext) ---
  const login = async (correo, password) => {
    try {
        // Enviamos correo y password al endpoint /login
        const response = await axios.post(`${API_URL}/login`, { correo, password });
        // Si es exitoso, la API devuelve los datos del usuario
        return response.data; 
    } catch (error) {
        console.error("Error de login:", error);
        return null;
    }
  };

  // --- CREAR USUARIO (Usado en Registro y Admin) ---
  const addUser = async (userData) => {
    try {
        // Usamos el endpoint /usuarios. 
        // Si viene del Registro público, no lleva rol (el modelo asigna 'cliente' por defecto).
        // Si viene del Admin, lleva rol y se respeta.
        await axios.post(`${API_URL}/usuarios`, userData);
        
        // Si estamos en la vista de admin (y ya cargamos usuarios), recargamos la lista
        if (users.length > 0) {
            loadUsers();
        }
        return true;
    } catch (error) {
        console.error("Error al crear usuario:", error);
        throw error; 
    }
  };

  // --- LEER USUARIOS (Para la tabla de Admin) ---
  const loadUsers = useCallback(async () => {
      try {
          const res = await axios.get(`${API_URL}/usuarios`);
          // Mapeamos _id (de Mongo) a id (que usa tu tabla React)
          const adaptedUsers = res.data.map(u => ({ 
              ...u, 
              id: u._id 
          }));
          setUsers(adaptedUsers);
      } catch (e) { 
          console.error("Error cargando usuarios", e); 
      }
  }, []);

  // Cargar usuarios automáticamente solo si se llama al hook (útil para la página de lista)
  // Nota: Si prefieres cargar solo bajo demanda, puedes quitar este useEffect
  useEffect(() => {
      loadUsers();
  }, [loadUsers]);

  // --- ACTUALIZAR USUARIO ---
  const updateUser = async (id, data) => {
      try {
          await axios.put(`${API_URL}/usuarios/${id}`, data);
          loadUsers(); // Recargar lista
      } catch (error) {
          console.error("Error actualizando usuario", error);
      }
  };

  // --- ELIMINAR USUARIO ---
  const deleteUser = async (id) => {
      try {
          await axios.delete(`${API_URL}/usuarios/${id}`);
          loadUsers();
      } catch (error) {
          console.error("Error eliminando usuario", error);
      }
  };

  // Helper para obtener datos de la lista local (para EditarUsuario.js)
  const getUserById = (id) => users.find(u => u.id === id);

  // Mantenemos esta función vacía para compatibilidad si algún archivo viejo la llama
  const findUserByEmailAndPassword = () => {
      console.warn("Usar login() en lugar de findUserByEmailAndPassword");
  };

  return { 
    users, 
    login, 
    addUser, 
    deleteUser,
    updateUser,
    getUserById,
    findUserByEmailAndPassword,
    loadUsers // Exportamos también loadUsers por si quieres recargar manualmente
  };
};

export default useUserViewModel;