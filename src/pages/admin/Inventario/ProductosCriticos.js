import AdminTemplate from "../../../templates/AdminTemplate"

const ProductosCriticos = () => {
    return (
        <AdminTemplate>
        <div className="flex-grow-1" id="main-content">
            <div className="bg-white p-4 shadow-sm rounded">
                {/* Implementar graficos que muestre productos críticos */}
                <div>
                    <h2 className="h5 mb-4">Gráficos de Productos Críticos</h2>
                    <div className="container-fluid p-4">
                        {/* Aquí puedes agregar gráficos utilizando una biblioteca como Chart.js o Recharts */}
                        <p>Aquí se mostrarán los gráficos relacionados con los productos críticos.</p>
                    </div>
                </div>
                {/* Implementar tabla que muestre productos críticos */}
                <div>
                    <h2 className="h5 mb-4">Productos Críticos</h2>
                    <div className="container-fluid p-4">
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

export default ProductosCriticos;