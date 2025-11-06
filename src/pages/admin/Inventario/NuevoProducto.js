import AdminTemplate from "../../../templates/AdminTemplate";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useProductsViewModel from "../../../viewmodels/useProductsViewModel"; // 1. Importar el hook

const NuevoProducto = () => {
    const navigate = useNavigate();
    const { addProducto } = useProductsViewModel(); // 2. Traer la función 'addProducto'

    const [formData, setFormData] = useState({
        codigo: '',
        title: '', // Cambiado de 'nombre' a 'title' para coincidir con tu hook
        descripcion: '',
        price: '', // 'price' en lugar de 'precio'
        stock: '',
        stockCritico: '',
        categoria: '',
        image: '', // <-- CAMPO NUEVO AÑADIDO
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 3. Llamar a la función del hook con los datos del formulario
        addProducto(formData); 
        
        alert('¡Producto agregado con éxito!');
        // 4. Redirigir al listado para ver el nuevo producto
        navigate('/Admin/Inventario/ListadoProductos'); 
    };

    return (
    <AdminTemplate>
        <section className="flex-grow-1" id="main-content">
            <div className="bg-white p-4 shadow-sm rounded">
                <h1>Nuevo Producto</h1>
                
                <form id="registrationForm" onSubmit={handleSubmit}>
                    
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="codigo">Código Producto *</label>
                            <input 
                                type="text" id="codigo" name="codigo"
                                value={formData.codigo} onChange={handleChange}
                                required className="form-control" 
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="title">Nombre Producto *</label>
                            <input 
                                type="text" id="title" name="title"
                                value={formData.title} onChange={handleChange}
                                required className="form-control" 
                            />
                        </div>
                    </div>

                    {/* --- CAMPO DE IMAGEN AÑADIDO --- */}
                    <div className="mb-3">
                        <label htmlFor="image">URL de la Imagen</label>
                        <input 
                            type="text" 
                            id="image" 
                            name="image"
                            value={formData.image} 
                            onChange={handleChange}
                            className="form-control" 
                            placeholder="https://ejemplo.com/imagen.png"
                        />
                    </div>
                    {/* --- FIN DE CAMPO AÑADIDO --- */}

                    <div className="mb-3">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea 
                            id="descripcion" name="descripcion"
                            value={formData.descripcion} onChange={handleChange}
                            className="form-control" rows="3"
                        />
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="price">Precio *</label>
                            <input 
                                type="number" id="price" name="price"
                                value={formData.price} onChange={handleChange}
                                required className="form-control" 
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="stock">Stock *</label>
                            <input 
                                type="number" id="stock" name="stock"
                                value={formData.stock} onChange={handleChange}
                                required className="form-control" 
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="stockCritico">Stock Crítico</label>
                            <input 
                                type="number" id="stockCritico" name="stockCritico"
                                value={formData.stockCritico} onChange={handleChange}
                                className="form-control" 
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">Categoría *</label>
                        <select 
                            id="categoria" name="categoria"
                            value={formData.categoria} onChange={handleChange}
                            className="form-select" required
                        >
                            <option value="">Seleccione categoría</option>
                            <option value="Guitarras">Guitarras</option>
                            <option value="Teclados">Teclados</option>
                            <option value="Baterías">Baterías</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                    
                    <div>
                        <button type="submit" id="submitBtn" className="btn btn-primary mt-3">
                            Agregar Producto
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </AdminTemplate>
    );
}

export default NuevoProducto;