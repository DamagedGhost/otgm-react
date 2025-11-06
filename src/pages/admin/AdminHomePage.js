import React from 'react';
import AdminTemplate from '../../templates/AdminTemplate';
import Box from '@mui/material/Box'; // Necesitamos Box para ordenar los gráficos
import DonutChart from '../../components/organisms/Grafico';

// --- DATA DE DEMOSTRACIÓN ---

// 1. Demo para "Usuarios"
const userStatusData = [
  { id: 0, label: 'Activos', value: 125, color: '#00C49F' },
  { id: 1, label: 'Inactivos', value: 40, color: '#FFBB28' },
  { id: 2, label: 'Baneados', value: 12, color: '#FF8042' },
];

// 2. Demo para "Órdenes" (el "etc.")
const orderStatusData = [
  { id: 0, label: 'Pendientes', value: 35, color: '#0088FE' },
  { id: 1, label: 'Enviadas', value: 80, color: '#00C49F' },
  { id: 2, label: 'Completadas', value: 210, color: '#98bf45' },
  { id: 3, label: 'Canceladas', value: 15, color: '#fa938e' },
];
// ------------------------------


const AdminHomePage = () => {
    return (
        <AdminTemplate>
            <main className="flex-grow-1" id="main-content">
                <div className="container-fluid p-4">
                    <h2 className="h5 mb-4">Bienvenido al panel de administración</h2>
                    <p>Desde aquí puedes gestionar las órdenes, el inventario, los reportes y más.</p>
                </div>

                <div className="card shadow-sm mb-4 text-center profile-card-animation">
                  {/* Contenedor para los gráficos */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', // Para que se ajusten en móviles
                      justifyContent: 'center', // Centramos los gráficos
                      gap: 4, // Espacio entre gráficos
                      p: 2 
                    }}
                  >

                    {/* 👇 Gráfico 1: Pasamos la data y título de Usuarios */}
                    <DonutChart 
                      title="Usuarios por Estado" 
                      data={userStatusData} 
                    />

                    {/* 👇 Gráfico 2: Pasamos la data y título de Órdenes */}
                    <DonutChart 
                      title="Órdenes por Estado" 
                      data={orderStatusData} 
                    />

                  </Box>
                </div>
            </main>
        </AdminTemplate>
    );
};

export default AdminHomePage;