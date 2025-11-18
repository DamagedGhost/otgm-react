import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// ⚠️ CAMBIA ESTO POR LA IP DE TU INSTANCIA BACKEND
const API_URL = 'http://34.193.81.109:3000/productos';

const useProductsViewModel = () => {
  const [products, setProducts] = useState([]);

  // --- CARGAR PRODUCTOS (READ) ---
  const cargarProductos = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      // Adaptamos _id de Mongo a id para tu Frontend
      const data = response.data.map(p => ({ 
          ...p, 
          id: p._id 
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar productos de la API", error);
    }
  }, []);

  // Cargar productos al iniciar cualquier componente que use este hook
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos]);

  // --- AGREGAR PRODUCTO (CREATE) ---
  const addProducto = async (productoData) => {
    try {
      // Convertimos strings a números para evitar errores en Mongo
      const dataLimpia = {
        ...productoData,
        price: parseInt(productoData.price, 10),
        stock: parseInt(productoData.stock, 10),
        stockCritico: parseInt(productoData.stockCritico, 10),
        // Imagen por defecto si viene vacía
        image: productoData.image || 'https://via.placeholder.com/300x300.png?text=Sin+Imagen'
      };
      
      await axios.post(API_URL, dataLimpia);
      await cargarProductos(); // Actualizamos la lista visual
    } catch (error) {
      console.error("Error al agregar producto:", error);
      alert("Error al guardar el producto");
    }
  };

  // --- ACTUALIZAR PRODUCTO (UPDATE) ---
  const updateProducto = async (id, updatedData) => {
    try {
      const dataLimpia = {
          ...updatedData,
          price: parseInt(updatedData.price, 10),
          stock: parseInt(updatedData.stock, 10),
          stockCritico: parseInt(updatedData.stockCritico, 10),
      };

      await axios.put(`${API_URL}/${id}`, dataLimpia);
      await cargarProductos();
    } catch (error) {
      console.error("Error al actualizar producto:", error);
    }
  };

  // --- ELIMINAR PRODUCTO (DELETE) ---
  const deleteProducto = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      await cargarProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  // Busca un producto en la lista ya cargada (para DetalleProdPage o EditarProducto)
  const getProductoById = (id) => {
    return products.find(p => p.id === id);
  };

  return { 
    products, 
    addProducto, 
    getProductoById, 
    updateProducto, 
    deleteProducto 
  };
};

export default useProductsViewModel;