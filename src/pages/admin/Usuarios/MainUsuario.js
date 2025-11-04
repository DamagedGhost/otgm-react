import AdminTemplate from "../../../templates/AdminTemplate"
import Button from "../../../components/atoms/Button"

const Usuario = () => {
    return (
        <AdminTemplate>
            <div className="flex-grow-1" id="main-content">
            <div className="d-flex flex-column align-items-center bg-light border rounded p-4 gap-4 shadow-sm">
            <div>
                <h2 className="h5 mb-4">Menu usuario</h2>
                <p>Desde aquí puedes crear, mostrar y editar usuarios.</p>
                {/* Contenido adicional del panel de administración */}
            </div>
                <div className="d-flex flex-column gap-3 p-4 col-5">
                    <Button label={'Agregar usuario'}/>
                    <Button label={'Mostrar usuarios'}/>
                </div>
            </div>
            </div>
        </AdminTemplate>
    )
}

export default Usuario;