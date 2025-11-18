import { useState, useEffect } from 'react';
import axios from 'axios';

// ⚠️ CAMBIA ESTO POR LA IP DE TU INSTANCIA BACKEND
const API_URL = 'http://34.193.81.109:3000/boletas';

const useBoletaViewModel = () => {
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    const cargarBoletas = async () => {
        try {
            const res = await axios.get(API_URL);
            
            // Adaptamos la respuesta compleja de MongoDB a una estructura plana
            const boletasAdaptadas = res.data.map(b => ({
                id: b._id,
                // Formateamos la fecha para que se vea bien en Chile
                fecha: new Date(b.fecha).toLocaleDateString('es-CL', { 
                    year: 'numeric', month: '2-digit', day: '2-digit', 
                    hour: '2-digit', minute: '2-digit'
                }),
                total: b.total,
                estado: b.estado,
                // Manejo de seguridad por si el usuario fue borrado
                userId: b.usuario?._id || 'N/A',
                cliente: b.usuario ? `${b.usuario.nombre} ${b.usuario.apellidos}` : 'Usuario Eliminado'
            }));
            
            setBoletas(boletasAdaptadas);
        } catch (error) {
            console.error("Error cargando boletas", error);
        }
    };
    cargarBoletas();
  }, []);

  // Filtra las boletas para un usuario específico (Historial de compra)
  const getBoletasByUserId = (userId) => {
    return boletas.filter(b => b.userId === userId);
  };

  return { boletas, getBoletasByUserId };
};

export default useBoletaViewModel;