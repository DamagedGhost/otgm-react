import AdminTemplate from "../../../templates/AdminTemplate";

const MostrarBoletas = () => {
    return (
        <AdminTemplate>
        <main className="flex-grow-1" id="main-content" role="main">
            <div className="container-fluid py-4">
            <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                <li className="breadcrumb-item"><a href="/Admin/Boleta">Boletas</a></li>
                <li className="breadcrumb-item active" aria-current="page">Mostrar Boletas</li>
                </ol>
            </nav>
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
                {/* Aquí irán las filas de las boletas dinámicamente */}
                <tbody />
            </table>
            </div>
        </main>
        </AdminTemplate>

    );
}

export default MostrarBoletas;