import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'http://34.193.81.109:3000/api/v1/usuarios';

const useUserViewModel = () => {
  const [users, setUsers] = useState([]);

  // --- HELPER CABECERAS ---
  const getAuthHeaders = () => {
      const token = localStorage.getItem('authToken');
      return { headers: { 'Authorization': `Bearer ${token}` } };
  };

  // GET: Protegido (Solo Admin)
  const loadUsers = useCallback(async () => {
      try {
          // ⚠️ IMPORTANTE: Aquí enviamos el token
          const res = await axios.get(API_URL, getAuthHeaders());
          const adaptedUsers = res.data.map(u => ({ ...u, id: u._id }));
          setUsers(adaptedUsers);
      } catch (e) {
          if (e.response && e.response.status === 403) {
              console.warn("No eres admin, no puedes ver usuarios.");
          }
      }
  }, []);

  // POST: Público (Registro) - Usamos una lógica híbrida o solo la pública del backend
  const addUser = async (userData) => {
      // Usamos el endpoint público o privado según corresponda. 
      // Por simplicidad, usamos el mismo sin headers para creación básica
      await axios.post(API_URL, userData);
      // Si somos admin viendo la lista, recargamos
      if (localStorage.getItem('authToken')) loadUsers();
  };

  // PUT: Protegido
  const updateUser = async (id, data) => {
      try {
          await axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
          loadUsers();
      } catch (error) { console.error(error); }
  };

  // DELETE: Protegido
  const deleteUser = async (id) => {
      try {
          await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
          loadUsers();
      } catch (error) { console.error(error); }
  };

  useEffect(() => {
      // Solo cargamos usuarios si hay un token (si no, dará 401 de todas formas)
      if(localStorage.getItem('authToken')) loadUsers();
  }, [loadUsers]);

  return { users, addUser, updateUser, deleteUser, getUserById: (id) => users.find(u=>u.id===id) };
};

export default useUserViewModel;