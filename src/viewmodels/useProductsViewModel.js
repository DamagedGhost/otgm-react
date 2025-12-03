import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_URL = 'http://34.193.81.109:3000/api/v1/productos';

const useProductsViewModel = () => {
  const [products, setProducts] = useState([]);

  // --- FUNCIÓN HELPER PARA CABECERAS ---
  const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken');
    return {
        headers: { 'Authorization': `Bearer ${token}` }
    };
  };

  // GET: Público (Sin headers)
  const cargarProductos = useCallback(async () => {
    try {
      const res = await axios.get(API_URL);
      const data = res.data.map(p => ({ ...p, id: p._id }));
      setProducts(data);
    } catch (error) { console.error(error); }
  }, []);

  useEffect(() => { cargarProductos(); }, [cargarProductos]);

  // POST: Protegido (Con headers)
  const addProducto = async (prod) => {
    try {
      await axios.post(API_URL, prod, getAuthHeaders());
      await cargarProductos();
    } catch (error) {
      alert("Error: No autorizado (Token faltante o expirado)");
    }
  };

  // PUT: Protegido
  const updateProducto = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
      await cargarProductos();
    } catch (error) { alert("Error al actualizar"); }
  };

  // DELETE: Protegido
  const deleteProducto = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
      await cargarProductos();
    } catch (error) { alert("Error al eliminar"); }
  };

  return { products, addProducto, updateProducto, deleteProducto, getProductoById: (id) => products.find(p=>p.id===id) };
};

export default useProductsViewModel;