import { useState, useEffect, useCallback } from 'react'; // 1. Importar useCallback
import axios from 'axios';

const API_URL = 'http://34.193.81.109:3000/boletas';

const useBoletaViewModel = () => {
  const [boletas, setBoletas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper para headers (opcionalmente memoizado para evitar advertencias en cadena)
  const getAuthHeaders = () => {
      const token = localStorage.getItem('authToken');
      return { headers: { 'Authorization': `Bearer ${token}` } };
  };

  // --- CARGAR BOLETAS (READ) ---
  // 2. Usamos useCallback para "memorizar" la función y que no cambie en cada render
  const cargarBoletas = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
          const res = await axios.get(API_URL, getAuthHeaders());
          
          const boletasAdaptadas = res.data.map(b => ({
              id: b._id,
              fecha: new Date(b.fecha).toLocaleDateString('es-CL', { 
                  year: 'numeric', month: '2-digit', day: '2-digit', 
                  hour: '2-digit', minute: '2-digit'
              }),
              total: b.total,
              estado: b.estado,
              userId: b.usuario?._id || 'N/A',
              cliente: b.usuario ? `${b.usuario.nombre} ${b.usuario.apellidos}` : 'Usuario Eliminado',
              items: b.items || [] 
          }));
          
          setBoletas(boletasAdaptadas);
      } catch (err) {
          console.error("Error cargando boletas", err);
          setError(err);
      } finally {
          setLoading(false);
      }
  }, []); // Array vacío porque no depende de props o estados externos cambiantes

  // 3. Ahora podemos agregar cargarBoletas al array de dependencias sin causar loops
  useEffect(() => {
    if(localStorage.getItem('authToken')) {
        cargarBoletas();
    }
  }, [cargarBoletas]); 

  // --- CREAR BOLETA (CREATE) ---
  const addBoleta = async (compraData) => {
      try {
          // Nota: post no requiere headers si es pública, pero si la proteges usa getAuthHeaders()
          await axios.post(API_URL, compraData);
          await cargarBoletas(); 
          return true;
      } catch (error) {
          console.error("Error al crear la boleta:", error);
          throw error;
      }
  };

  const getBoletasByUserId = (userId) => {
    return boletas.filter(b => b.userId === userId);
  };

  return { 
      boletas, 
      loading, 
      error,   
      getBoletasByUserId,
      addBoleta 
  };
};

export default useBoletaViewModel;