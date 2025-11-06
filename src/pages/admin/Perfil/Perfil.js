import React, { useState } from 'react';
import AdminTemplate from '../../../templates/AdminTemplate';

const Perfil = () => {

    // Simula los datos del admin que estarían "logueados"
    const [formData, setFormData] = useState({
        nombre: 'Admin',
        apellido: 'Principal',
        correo: 'admin@onthegomusic.com'
    });
    
    // Estado para controlar si los campos están editables
    const [isEditing, setIsEditing] = useState(false);

    // Manejador genérico para los cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manejador para guardar los cambios
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos guardados:', formData);
        // Aquí llamarías a tu hook/API para actualizar al usuario
        // ej: updateUser(formData);
        alert('Perfil actualizado (simulación)');
        setIsEditing(false); // Vuelve al modo "sólo lectura"
    };

    // Manejador para el formulario de contraseña
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Lógica para cambiar la contraseña
        alert('Contraseña cambiada (simulación)');
    };

    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="container-fluid">
                    <h2 className="h4 mb-4">Mi Perfil</h2>
                    
                    <div className="row">
                        
                        {/* Columna Izquierda: Tarjeta de Perfil */}
                        <div className="col-lg-4">
                            {/* Añadimos la clase 'profile-card-animation' para la animación */}
                            <div className="card shadow-sm mb-4 text-center profile-card-animation">
                                <div className="card-body">
                                    {/* Icono de Bootstrap como avatar */}
                                    <i className="bi bi-person-circle display-1 text-primary"></i>
                                    <h4 className="card-title mt-3">{formData.nombre} {formData.apellido}</h4>
                                    <p className="card-text text-muted">Administrador</p>
                                    <hr />
                                    <p className="card-text small">Miembro desde: 01 Enero 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha: Formularios de Edición */}
                        <div className="col-lg-8">
                            {/* Tarjeta de Detalles del Perfil */}
                            <div className="card shadow-sm mb-4 profile-details-animation">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Detalles del Perfil</h5>
                                    {!isEditing && (
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => setIsEditing(true)}
                                        >
                                            <i className="bi bi-pencil-square me-1"></i>
                                            Editar
                                        </button>
                                    )}
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="nombre" 
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing} // Controlado por el estado
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="apellido" 
                                                    name="apellido"
                                                    value={formData.apellido}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="correo" 
                                                    name="correo"
                                                    value={formData.correo}
                                                    onChange={handleChange}
                                                    readOnly={!isEditing}
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Botones que aparecen solo al editar */}
                                        {isEditing && (
                                            <div className="mt-4">
                                                <button type="submit" className="btn btn-primary me-2">Guardar Cambios</button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-secondary"
                                                    onClick={() => setIsEditing(false)} // Cancela la edición
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* Tarjeta de Cambio de Contraseña */}
                            <div className="card shadow-sm profile-details-animation">
                                <div className="card-header">
                                    <h5 className="mb-0">Seguridad</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handlePasswordSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="passActual" className="form-label">Contraseña Actual</label>
                                            <input type="password" className="form-control" id="passActual" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="passNueva" className="form-label">Contraseña Nueva</label>
                                            <input type="password" className="form-control" id="passNueva" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default Perfil;