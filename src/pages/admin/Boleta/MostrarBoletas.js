import AdminTemplate from "../../../templates/AdminTemplate";

const MostrarBoletas = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1 bg-light p-4" id="main-content">
                <h1>Mostrar Boletas</h1>
                <p>Aquí se mostrarán las boletas generadas.</p>
            </div>
        </AdminTemplate>
    );
}

export default MostrarBoletas;