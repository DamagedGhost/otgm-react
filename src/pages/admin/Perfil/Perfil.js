import AdminTemplate from '../../../templates/AdminTemplate';

const Perfil = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
                <div className="bg-white p-4 shadow-sm rounded">
                    <h2 className="h5 mb-4">Perfil de Administrador</h2>
                    <div className="container-fluid p-4">
                        <p>Aquí se mostrarán y podrán editar los detalles del perfil del administrador.</p>
                    </div>
                </div>
            </div>
        </AdminTemplate>
    );
}

export default Perfil;