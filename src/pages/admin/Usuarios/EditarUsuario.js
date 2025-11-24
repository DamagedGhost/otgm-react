import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminTemplate from "../../../templates/AdminTemplate";
import useUserViewModel from '../../../viewmodels/useUserViewModel';
import Button from '../../../components/atoms/Button';

const EditarUsuario = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    // Traemos 'users' para buscar directamente aquí y evitar el reseteo
    const { updateUser, users } = useUserViewModel(); 
    
    const [formData, setFormData] = useState({
        rut: '', nombre: '', apellidos: '', correo: '',
        rol: '', region: '', comuna: '', direccion: ''
    });

    // Cargar datos del usuario al montar
    useEffect(() => {
        // CORRECCIÓN CLAVE:
        // Buscamos el usuario directamente en la lista 'users' en lugar de usar la función getUserById.
        // Esto evita que el formulario se resetee cada vez que escribes una letra.
        const user = users.find(u => u.id === id);
        
        if (user) {
            // Solo actualizamos el formulario si encontramos al usuario
            // Y OJO: Esto se ejecutará solo cuando 'users' cambie (al cargar la API), no al escribir.
            setFormData(user);
        } else {
            // Solo redirigimos si ya cargaron los usuarios (length > 0) y aun así no está
            if (users.length > 0) {
                alert("Usuario no encontrado");
                navigate('/Admin/Usuarios/ListarUsuarios');
            }
        }
    // IMPORTANTE: Quitamos 'getUserById' de las dependencias para romper el ciclo de reinicio
    }, [id, users, navigate]); 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(formData.id, formData);
            alert('Usuario actualizado exitosamente');
            navigate('/Admin/Usuarios/ListarUsuarios');
        } catch (error) {
            alert('Error al actualizar');
        }
    };

  return (
    <AdminTemplate>
        <section id="main-content" className="flex-grow-1">
            <div className="container-fluid py-4">
                <nav aria-label="breadcrumb" className="mb-3">
                    <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                    <li className="breadcrumb-item"><a href="/Admin/Usuarios">Usuarios</a></li>
                    <li className="breadcrumb-item"><a href="/Admin/Usuarios/ListarUsuarios">Listado de Usuarios</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Editar usuario</li>
                    </ol>
                </nav>
                <div className="bg-white p-4 shadow-sm rounded">
                    <h2 className="h4 mb-4">Editar usuario</h2>
                    {/* Verificamos formData.id para asegurarnos que cargó */}
                    {formData.id || users.length === 0 ? (
                         // Nota: users.length === 0 permite mostrar el form vacío mientras carga para evitar parpadeos bruscos
                        <form id="editForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="rut">RUT *</label>
                                <input type="text" id="rut" value={formData.rut} onChange={handleChange} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombre">Nombre *</label>
                                <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellidos">Apellidos *</label>
                                <input type="text" id="apellidos" value={formData.apellidos} onChange={handleChange} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo">Correo *</label>
                                <input type="email" id="correo" value={formData.correo} onChange={handleChange} required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rol">Tipo de Usuario: *</label>
                                <select id="rol" value={formData.rol} onChange={handleChange} className="form-select" required>
                                    <option value="cliente">Cliente</option>
                                    <option value="admin">Administrador</option>
                                    <option value="vendedor">Vendedor</option>
                                </select>
                            </div>
                            <div className="mb-3 row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="region" className="form-label">Región</label>
                                    <input type="text" id="region" value={formData.region} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="comuna" className="form-label">Comuna</label>
                                    <input type="text" id="comuna" value={formData.comuna} onChange={handleChange} className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion">Dirección: *</label>
                                <input type="text" id="direccion" value={formData.direccion} onChange={handleChange} required className="form-control" />
                            </div>
                            <div className="d-flex gap-2 mt-3 p-3 border-top">
                                <Button label="Modificar Usuario" type="submit" variant="primary" />
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2">Cargando datos del usuario...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </AdminTemplate>
  );
};
export default EditarUsuario;