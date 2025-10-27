import React from 'react';
import AdminTemplate from '../../templates/AdminTemplate';
import '../../Admin.css'

const AdminHomePage = () => {
    return (
        <AdminTemplate>

            <main className="flex-grow-1" id="main-content">
            <div className="container-fluid p-4">
                <h2 className="h5 mb-4">Bienvenido al panel de administración</h2>
                <p>Desde aquí puedes gestionar las órdenes, el inventario, los reportes y más.</p>
                {/* Contenido adicional del panel de administración */}
            </div>
            <div id="diseño-grafico" className="p-4">
                <div id="grafico-1" />
            </div>
            </main>

        </AdminTemplate>
    );
};

export default AdminHomePage;