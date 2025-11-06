import AdminTemplate from "../../../templates/AdminTemplate";
import { useNavigate } from 'react-router-dom';
import useProductsViewModel from "../../../viewmodels/useProductsViewModel"; // 1. Importar el hook

const ListadoProductos = () => {
    
    // 2. Obtener los productos y la función de eliminar
    const { products, deleteProducto } = useProductsViewModel();
    const navigate = useNavigate();

    const handleEliminar = (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
            deleteProducto(id);
        }
    };

    const handleEditar = (id) => {
        // Navegamos a la página de edición (la creamos en el paso 4)
        navigate(`/Admin/Inventario/EditarProducto/${id}`);
    };

    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                    <h2 className="h5 mb-4">Listado de Productos</h2>
                    <div className="table-responsive">
                        <table id="dataTable" className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Stock Critico</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                                {/* 3. Mapear los productos para llenar la tabla */}
                                {products.length > 0 ? (
                                    products.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.codigo}</td>
                                            {/* 'title' es el nombre en tu hook */}
                                            <td>{producto.title}</td> 
                                            <td>${producto.price.toLocaleString()}</td>
                                            <td>{producto.stock}</td>
                                            <td>{producto.stockCritico}</td>
                                            <td>{producto.categoria}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => handleEditar(producto.id)}
                                                >
                                                    Editar
                                                </button>
                                                <button 
                                                    className="btn btn-sm btn-danger ms-2"
                                                    onClick={() => handleEliminar(producto.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center">No hay productos para mostrar</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
};

export default ListadoProductos;