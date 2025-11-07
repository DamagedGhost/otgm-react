import AdminTemplate from "../../../templates/AdminTemplate"

const ProductosCriticos = () => {
    return (
        <AdminTemplate>
            <main className="flex-grow-1" id="main-content" role="main">
                <div className="container-fluid py-4">
                    <nav aria-label="breadcrumb" className="mb-3">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                            <li className="breadcrumb-item"><a href="/Admin/Inventario">Inventario</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Reporte</li>
                        </ol>
                    </nav>
                <div className="bg-white p-4 shadow-sm rounded mb-4">
                    <h2 className="h5 mb-4">Gráficos de Productos Críticos</h2>
                    <div className="container-fluid p-4">
                        {/* Aquí puedes agregar gráficos utilizando una biblioteca como Chart.js o Recharts */}
                        <p>Aquí se mostrarán los gráficos relacionados con los productos críticos.</p>
                    </div>
                </div>
                {/* Implementar tabla que muestre productos críticos */}
                <div className="bg-white p-4 shadow-sm rounded">
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
        </main>
        </AdminTemplate>
    );
};

export default ProductosCriticos;