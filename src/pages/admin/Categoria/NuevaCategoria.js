import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTemplate from '../../../templates/AdminTemplate';
import useCategoriaViewModel from '../../../viewmodels/useCategoriaViewModel';
import Button from '../../../components/atoms/Button';

const NuevaCategoria = () => {
    const navigate = useNavigate();
    const { addCategoria } = useCategoriaViewModel();
    const [nombre, setNombre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() === '') {
            alert("El nombre no puede estar vacío");
            return;
        }
        addCategoria(nombre);
        alert('Categoría agregada');
        navigate('/Admin/Categorias/ListarCategorias');
    };

    return (
        <AdminTemplate>
            <section id="main-content" className="flex-grow-1 p-4">
            <div className="bg-white p-4 shadow-sm rounded">
                <h1 className="h4">Nueva Categoría</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre de la Categoría *</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                            className="form-control" 
                        />
                    </div>
                    <Button label={'Agregar Categoría'} type="submit" variant="primary" />
                </form>
            </div>
            </section>
        </AdminTemplate>
    );
};

export default NuevaCategoria;