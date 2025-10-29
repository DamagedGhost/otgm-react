import AdminTemplate from "../../../templates/AdminTemplate";

const ListadoProductos = () => {
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
                    {/* Se llenará con JS */}
                </tbody>
                </table>
            </div>
            </div>
        </AdminTemplate>
    );
};

export default ListadoProductos;