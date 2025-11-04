import AdminTemplate from "../../../templates/AdminTemplate";

const HistorialCompra = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                        <h2 className="h5 mb-4">Historial de Compras del Usuario</h2>
                        <div>
                            <p>Nombre: </p>
                            <p>RUT: </p>
                            <p>Correo: </p>
                        </div>
                    <div>
                        <table id="dataTable" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID Compra</th>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th>Detalles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Se llenará con JS */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    )
}

export default HistorialCompra;
