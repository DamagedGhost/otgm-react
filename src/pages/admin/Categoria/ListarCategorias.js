import AdminTemplate from "../../../templates/AdminTemplate";
import useCategoriaViewModel from "../../../viewmodels/useCategoriaViewModel";

const ListarCategorias = () => {
    const { categorias, deleteCategoria } = useCategoriaViewModel();

    const handleEliminar = (id) => {
        if (window.confirm("¿Eliminar esta categoría?")) {
            deleteCategoria(id);
        }
    };

    return (
        <AdminTemplate>
            <main className="flex-grow-1" id="main-content" role="main">
                <div className="container-fluid py-4">
                    <h2 className="h5 mb-4">Listado de Categorías</h2>
                    <div className="bg-white p-4 shadow-sm rounded">
                        <table id="dataTable" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categorias.map((cat) => (
                                    <tr key={cat.id}>
                                        <td>{cat.id}</td>
                                        <td>{cat.nombre}</td>
                                        <td>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleEliminar(cat.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </AdminTemplate>
    );
};

export default ListarCategorias;