import React from 'react';
import AdminTemplate from "../../../templates/AdminTemplate";
import Button from '../../../components/atoms/Button';

const MainInventario = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1 " id="main-content">
            <div className="d-flex flex-column align-items-center bg-light border rounded p-4 gap-4 shadow-sm">
            <div className="text-center p-4 col-5">
                <h2 className="h5 mb-4">Menu producto</h2>
                <p>Desde aquí puedes crear, mostrar y editar productos.</p>
                {/* Contenido adicional del panel de administración */}
            </div>
            <div className="d-flex flex-column gap-3 p-4 col-5" id="user-menu">
                <Button label="Crear producto" href="/Admin/Inventario/NuevoProducto" />
                <Button label="Mostrar productos" href="/MostrarProductos" />
                <Button label="Productos críticos" href="/ProductosCriticos" />
                <Button label="Reportes" href="/Reportes" />
            </div>
            </div>
            </div>
        </AdminTemplate>
    );
};

export default MainInventario;