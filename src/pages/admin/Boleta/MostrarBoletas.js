import AdminTemplate from "../../../templates/AdminTemplate";
import useBoletaViewModel from "../../../viewmodels/useBoletaViewModel"; // 1. Importar

const MostrarBoletas = () => {
    const { boletas } = useBoletaViewModel(); // 2. Obtener boletas

    return (
        <AdminTemplate>
        <main className="flex-grow-1" id="main-content" role="main">
            <div className="container-fluid py-4">
                <nav aria-label="breadcrumb" className="mb-3">
                    <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
                    <li className="breadcrumb-item"><a href="/Admin/Boleta">Boletas</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Listado</li>
                </ol>
            </nav>
            <h2 className="h5 mb-4">Listado de Boletas</h2>
            <table id="dataTable" className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Número</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                    {/* 3. Mapear boletas */}
                    {boletas.map((boleta) => (
                        <tr key={boleta.id}>
                            <td>{boleta.id}</td>
                            <td>{boleta.fecha}</td>
                            <td>{boleta.cliente} (ID: {boleta.userId})</td>
                            <td>${boleta.total.toLocaleString()}</td>
                            <td>{boleta.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </main>
        </AdminTemplate>
    );
}

export default MostrarBoletas;