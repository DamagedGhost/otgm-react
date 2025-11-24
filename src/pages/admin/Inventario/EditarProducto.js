import AdminTemplate from "../../../templates/AdminTemplate";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import useProductsViewModel from "../../../viewmodels/useProductsViewModel";

const EditarProducto = () => {
    const { id } = useParams(); // ID es un String (de MongoDB)
    const navigate = useNavigate();
    // Traemos 'products' y 'updateProducto'
    const { products, updateProducto } = useProductsViewModel();

    // Estado local del formulario
    const [formData, setFormData] = useState({
        codigo: '',
        title: '',
        descripcion: '',
        price: '',
        stock: '',
        stockCritico: '',
        categoria: '',
        image: '',
    });

    // Cargar los datos del producto cuando 'products' cambie o al montar
    useEffect(() => {
        // CORRECCIÓN 1: No usar parseInt. Buscar directamente en la lista 'products'.
        const producto = products.find(p => p.id === id);
        
        if (producto) {
            setFormData(producto);
        } else {
            // Solo redirigir si ya se cargaron productos y aun así no está
            if (products.length > 0) {
                alert("Producto no encontrado");
                navigate('/Admin/Inventario/ListadoProductos');
            }
        }
    // CORRECCIÓN 2: Quitamos funciones de las dependencias para evitar reseteos al escribir
    }, [id, products, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Convertimos los datos numéricos antes de guardar
        const dataToUpdate = {
            ...formData,
            price: parseInt(formData.price, 10),
            stock: parseInt(formData.stock, 10),
            stockCritico: parseInt(formData.stockCritico, 10),
        };
        
        try {
            // Usamos await si tu ViewModel lo soporta (recomendado)
            await updateProducto(formData.id, dataToUpdate);
            alert('¡Producto actualizado con éxito!');
            navigate('/Admin/Inventario/ListadoProductos');
        } catch (error) {
            alert("Error al actualizar producto");
        }
    };

    return (
        <AdminTemplate>
            <section className="flex-grow-1" id="main-content" role="main">
                <div className="container-fluid py-4">
                    <nav aria-label="breadcrumb" className="mb-3">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                            <li className="breadcrumb-item"><a href="/Admin/Inventario">Inventario</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Editar Producto</li>
                        </ol>
                    </nav>
                    <div className="bg-white p-4 shadow-sm rounded">
                    <h1 className="h4 mb-4">Editar Producto (ID: {id})</h1>
                    
                    {/* Mostramos formulario solo si tenemos datos cargados */}
                    {formData.id || products.length === 0 ? (
                        <form id="editForm" onSubmit={handleSubmit}>
                            
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
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2">Cargando datos del producto...</p>
                        </div>
                    )}
                    </div>
                </div>
            </section>
        </AdminTemplate>
    );
}

export default EditarProducto;