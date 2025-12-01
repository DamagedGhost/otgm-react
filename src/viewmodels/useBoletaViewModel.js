import { useState, useEffect } from 'react';
import axios from 'axios';

// ⚠️ CAMBIA ESTO POR LA IP DE TU INSTANCIA BACKEND SI ES NECESARIO
const API_URL = 'http://34.193.81.109:3000/boletas';

const useBoletaViewModel = () => {
  const [boletas, setBoletas] = useState([]);
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null);      // Estado de error

  // --- CARGAR BOLETAS (READ) ---
  const cargarBoletas = async () => {
      setLoading(true);
      setError(null);
      try {
          const res = await axios.get(API_URL);
          
          // Adaptamos la respuesta
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
              // IMPORTANTE: Mapeamos los items para poder ver el detalle
              items: b.items || [] 
          }));
          
          setBoletas(boletasAdaptadas);
      } catch (err) {
          console.error("Error cargando boletas", err);
          setError(err);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
    cargarBoletas();
  }, []);

  // --- CREAR BOLETA (CREATE) ---
  const addBoleta = async (compraData) => {
      try {
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
      loading, // Exportamos loading
      error,   // Exportamos error
      getBoletasByUserId,
      addBoleta 
  };
};

export default useBoletaViewModel;