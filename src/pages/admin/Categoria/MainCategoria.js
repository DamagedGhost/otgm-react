import React from 'react';
import AdminTemplate from "../../../templates/AdminTemplate";
import Button from '../../../components/atoms/Button';

const MainCategorias = () => {
    return (
        <AdminTemplate>
          <main className="flex-grow-1" id="main-content" role="main">
            <div className="container-fluid py-4">
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Categorías</li>
                </ol>
              </nav>
              <header className="d-flex align-items-start justify-content-between mb-4">
                <div>
                  <h1 className="h4 mb-1">Gestión de Categorías</h1>
                  <p className="text-muted mb-0">Administra las categorías de productos.</p>
                </div>
                <div className="d-flex gap-2">
                  <Button label="Crear Categoría" href="/Admin/Categorias/NuevaCategoria" />
                  <Button label="Listar Categorías" href="/Admin/Categorias/ListarCategorias" />
                </div>
              </header>
            </div>
          </main>
        </AdminTemplate>
    );
};

export default MainCategorias;