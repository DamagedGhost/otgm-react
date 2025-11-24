import React from 'react';
import AdminTemplate from "../../../templates/AdminTemplate";
import { useParams, Link } from 'react-router-dom';
import useUserViewModel from "../../../viewmodels/useUserViewModel";
import useBoletaViewModel from "../../../viewmodels/useBoletaViewModel";

const HistorialCompra = () => {
    const { id } = useParams(); // ID es String (de MongoDB)
    
    // Obtenemos las listas completas para asegurarnos de tener datos frescos
    const { users } = useUserViewModel();
    const { boletas } = useBoletaViewModel();

    // 1. Buscamos al usuario en la lista cargada (SIN parseInt)
    const user = users.find(u => u.id === id);

    // 2. Filtramos las boletas que pertenecen a este usuario
    // (Asegúrate de que en useBoletaViewModel.js estés mapeando userId correctamente)
    const historial = boletas.filter(b => b.userId === id);

    // Manejo de carga: Si no hay usuarios cargados aún, mostramos Spinner
    if (users.length === 0) {
        return (
            <AdminTemplate>
                <div className="container-fluid py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-2">Cargando historial...</p>
                </div>
            </AdminTemplate>
        );
    }

    // Si ya cargaron y no encontramos al usuario
    if (!user) {
        return (
            <AdminTemplate>
                <div className="container-fluid py-4">
                    <div className="alert alert-warning">
                        Usuario no encontrado o eliminado.
                        <Link to="/Admin/Usuarios/ListarUsuarios" className="btn btn-sm btn-outline-dark ms-3">Volver</Link>
                    </div>
                </div>
            </AdminTemplate>
        );
    }

    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="container-fluid py-4">
                    <nav aria-label="breadcrumb" className="mb-3">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link to="/Admin">Administración</Link></li>
                            <li className="breadcrumb-item"><Link to="/Admin/Usuarios">Usuarios</Link></li>
                            <li className="breadcrumb-item"><Link to="/Admin/Usuarios/ListarUsuarios">Listado de Usuarios</Link></li>
                            <li className="breadcrumb-item active">Historial de Compras</li>
                        </ol>
                    </nav>
                    
                    <div className="bg-white p-4 shadow-sm rounded">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="h5 mb-0">Historial de: {user.nombre} {user.apellidos}</h2>
                            <span className="badge bg-secondary">{historial.length} Compras</span>
                        </div>
                        
                        <div className="row mb-4 p-3 bg-light rounded">
                            <div className="col-md-4"><strong>RUT:</strong> {user.rut}</div>
                            <div className="col-md-4"><strong>Correo:</strong> {user.correo}</div>
                            <div className="col-md-4"><strong>Rol:</strong> {user.rol}</div>
                        </div>

                        <div className="table-responsive">
                            <table id="dataTable" className="table table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID Compra</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historial.length > 0 ? (
                                        historial.map((boleta) => (
                                            <tr key={boleta.id}>
                                                <td><small>{boleta.id}</small></td>
                                                <td>{boleta.fecha}</td>
                                                <td className="fw-bold">${boleta.total.toLocaleString()}</td>
                                                <td>
                                                    <span className={`badge ${boleta.estado === 'Emitida' ? 'bg-success' : 'bg-secondary'}`}>
                                                        {boleta.estado}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-4">
                                                <i className="bi bi-cart-x fs-1 text-muted d-block mb-2"></i>
                                                Este usuario no ha realizado compras registradas.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default HistorialCompra;