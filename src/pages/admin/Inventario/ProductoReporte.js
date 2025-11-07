import AdminTemplate from "../../../templates/AdminTemplate";

const Reporte = () => {
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

                    <div className="bg-white p-4 shadow-sm rounded">
                        <h2 className="h5 mb-4">Reporte de Inventario</h2>
                        <div className="container-fluid p-4">
                            <p>Aquí se mostrarán los gráficos y tablas relacionadas con el reporte de inventario.</p>
                        </div>
                    </div>
                </div>
            </main>
        </AdminTemplate>
    );
}

export default Reporte;