import AdminTemplate from "../../../templates/AdminTemplate";

const ListarUsuarios = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                    <div>
                        <h2 className="h5 mb-4">Menu Listado de Usuarios</h2>
                    </div>
                    <div>
                        <table id="dataTable" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>RUT</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>Contraseña</th>
                                    <th>Rol</th>
                                    <th>Región</th>
                                    <th>Comuna</th>
                                    <th>Dirección</th>
                                    <th>Acciones</th> {/* Boton que abre pagina de historial de compras */}
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
};

export default ListarUsuarios;