import React from 'react';
import AdminTemplate from '../../templates/AdminTemplate';

const AdminHomePage = () => {
    return (
      <AdminTemplate>
        <main className="flex-grow-1" id="main-content" role="main">
          <div className="container-fluid py-4">
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">Administración</li>
              </ol>
            </nav>
            <h2 className="h5 mb-4">Bienvenido al panel de administración</h2>
            <p>Desde aquí puedes gestionar las órdenes, el inventario, los reportes y más.</p>
          </div>
        </main>
      </AdminTemplate>

    );
};

export default AdminHomePage;