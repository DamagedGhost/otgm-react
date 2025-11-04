import AdminTemplate from "../../../templates/AdminTemplate";
// 1. Importa tu hook
import useProductsViewModel from './useProductsViewModel'; // Asegúrate que la ruta sea correcta

const ListadoProductos = () => {
    
    // 2. Obtiene los productos del hook
    const { products } = useProductsViewModel();

    // 3. Define las funciones que manejarán las acciones
    const handleEditar = (id) => {
        console.log(`Editar producto con ID: ${id}`);
        // Aquí puedes, por ejemplo, navegar a una página de edición
        // o abrir un modal pasando el 'id'
    };

    const handleEliminar = (id) => {
        console.log(`Eliminar producto con ID: ${id}`);
        // Aquí iría tu lógica para llamar a la API de eliminación,
        // mostrar una confirmación, etc.
    };

    return (
        <AdminTemplate>
            <div className="container-fluid">
            <div className="container-fluid p-4">
                <h2 className="h5 mb-4">Menu Listado de Productos</h2>
            </div>
            <div className="container-fluid p-4 bg-white shadow-sm rounded">
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
                    {/* 4. Aquí está la magia: Mapea los productos a filas de la tabla */}
                    {products.map((producto) => (
                        <tr key={producto.id}> {/* 'key' es obligatorio y debe ser único */}
                            <td>{producto.codigo}</td>
                            <td>{producto.nombre}</td>
                            <td>${producto.precio.toLocaleString('es-CL')}</td> {/* Formato de moneda */}
                            <td>{producto.stock}</td>
                            <td>{producto.stockCritico}</td>
                            <td>{producto.categoria}</td>
                            <td>
                                {/* 5. Asigna las funciones a los botones */}
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handleEditar(producto.id)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="btn btn-sm btn-danger ms-2" /* ms-2 para dar espacio */
                                    onClick={() => handleEliminar(producto.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* Si no hay productos, puedes mostrar un mensaje */}
                    {products.length === 0 && (
                        <tr>
                            <td colSpan="7" className="text-center">No hay productos para mostrar</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </AdminTemplate>
    );
};

export default ListadoProductos;