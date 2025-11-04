import AdminTemplate from "../../../templates/AdminTemplate";
// 1. Importa tu hook

const ListadoProductos = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                    <h2 className="h5 mb-4">Listado de Productos</h2>
                    <div className="container-fluid p-4">
                        <div>
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
                            {/* Se llenará con JS */}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
};

export default ListadoProductos;