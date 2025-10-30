import AdminTemplate from "../../../templates/AdminTemplate"
import Button from "../../../components/atoms/Button"

const Usuario = () => {
    return (
        <AdminTemplate>
            <div>
            <div className="container-fluid p-4">
                <h2 className="h5 mb-4">Menu usuario</h2>
                <p>Desde aquí puedes crear, mostrar y editar usuarios.</p>
                {/* Contenido adicional del panel de administración */}
            </div>
                <div className="d-flex flex-column gap-3 p-4 col-5">
                    <Button label={'Agregar usuario'}/>
                    <Button label={'Mostrar usuarios'}/>
                </div>
            </div>
        </AdminTemplate>
    )
}

export default Usuario