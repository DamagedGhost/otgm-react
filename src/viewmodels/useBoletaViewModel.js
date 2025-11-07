import { useState, useEffect } from 'react';


// Simulación de datos de boletas
const mockBoletas = [
    { id: 'B-001', fecha: '2025-10-01', total: 55000, estado: 'Entregado', userId: 2, cliente: 'Ana Gómez' },
    { id: 'B-002', fecha: '2025-10-03', total: 45000, estado: 'En preparación', userId: 3, cliente: 'Felipe Rojas' },
    { id: 'B-003', fecha: '2025-10-04', total: 80000, estado: 'Entregado', userId: 2, cliente: 'Ana Gómez' },
];

const useBoletaViewModel = () => {
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    // Simular carga de API
    setBoletas(mockBoletas);
  }, []);

  const getBoletasByUserId = (userId) => {
    return boletas.filter(b => b.userId === userId);
  };

  return { boletas, getBoletasByUserId };
};

export default useBoletaViewModel;