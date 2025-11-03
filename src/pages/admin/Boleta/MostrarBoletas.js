import AdminTemplate from "../../../templates/AdminTemplate";

const MostrarBoletas = () => {
    return (
        <AdminTemplate>
            <div id="main-content" className="flex-grow-1">
            <div className="">
                <h2 className="h5 mb-4">Menu Listado de Boletas</h2>
            </div>
            <div className="container-fluid p-4 bg-white shadow-sm rounded">
                <table id="dataTable" className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Número</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Método de Pago</th>
                    <th>Estado</th>
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
}

export default MostrarBoletas;