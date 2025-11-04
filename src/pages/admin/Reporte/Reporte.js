import AdminTemplate from "../../../templates/AdminTemplate";

const Reporte = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                    <h2 className="h5 mb-4">Reporte Administrativo</h2>
                    <div className="container-fluid p-4">
                        <p>Aquí se mostrarán los gráficos y tablas relacionadas con el reporte administrativo.</p>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default Reporte;