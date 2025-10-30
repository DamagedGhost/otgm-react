import AdminTemplate from '../../../templates/AdminTemplate';
import Button from '../../../components/atoms/Button';

const AgregarUsuario = () => {
    return (
        <AdminTemplate>
            <section id="nuevo-usuario" className="form-section container my-3">
            <h1>Nuevo Usuario</h1>
            <form id="registrationForm">
                {/* RUT */}
                <div id="rutDiv" className="mb-3">
                <label htmlFor="rutInput">RUT *</label>
                <input type="text" id="rutInput" required className="form-control" oninput="validarRUT()" />
                <span id="rutFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Nombre */}
                <div id="nameDiv" className="mb-3">
                <label htmlFor="nameInput">Nombre *</label>
                <input type="text" id="nameInput" required className="form-control" oninput="validarNombre()" />
                <span id="nameFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Apellidos */}
                <div id="surnameDiv" className="mb-3">
                <label htmlFor="surnameInput">Apellidos *</label>
                <input type="text" id="surnameInput" required className="form-control" oninput="validarApellido()" />
                <span id="surnameFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Correo */}
                <div id="emailDiv" className="mb-3">
                <label htmlFor="emailInput">Correo *</label>
                <input type="email" id="emailInput" required className="form-control" oninput="validarCorreo()" />
                <span id="emailFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Contraseña */}
                <div id="passwordDiv" className="mb-3">
                <label htmlFor="passwordInput">Contraseña *</label>
                <input type="password" id="passwordInput" required className="form-control" oninput="validarContrasena()" />
                <span id="passwordFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Fecha de Nacimiento */}
                <div id="birthdateDiv" className="mb-3">
                <label htmlFor="birthdateInput">Fecha de Nacimiento:</label>
                <input type="date" id="birthdateInput" className="form-control text-secondary" oninput="validarFechaNacimiento()" />
                <span id="birthdateFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Tipo de Usuario */}
                <div id="userTypeDiv" className="mb-3">
                <label htmlFor="userTypeSelect">Tipo de Usuario: *</label>
                <select id="userTypeSelect" className="form-select text-secondary" required onchange="validarTipoUsuario()">
                    <option value>Seleccione tipo de usuario</option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                    <option value="client">Cliente</option>
                </select>
                <span id="userTypeFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Región y Comuna (lado a lado) */}
                <div id="locationDiv" className="mb-3 row g-3">
                <div id="regionDiv" className="col-md-6">
                    <label htmlFor="regionSelect" className="form-label">Región</label>
                    <select id="regionSelect" className="form-select text-secondary" required onchange="cargarComunas(); validarRegion()">
                    <option value>Seleccione región</option>
                    <option value="Arica_Parinacota">Arica y Parinacota</option>
                    <option value="Tarapaca">Tarapacá</option>
                    <option value="Antofagasta">Antofagasta</option>
                    <option value="Atacama">Atacama</option>
                    <option value="Coquimbo">Coquimbo</option>
                    <option value="Valparaiso">Valparaíso</option>
                    <option value="Metropolitana">Metropolitana</option>
                    <option value="Libertador_Bernardo_OHiggins">O’Higgins</option>
                    <option value="Maule">Maule</option>
                    <option value="Ñuble">Ñuble</option>
                    <option value="Biobío">Biobío</option>
                    <option value="La_Araucanía">La Araucanía</option>
                    <option value="Los_Ríos">Los Ríos</option>
                    <option value="Los_Lagos">Los Lagos</option>
                    {/* puedes seguir agregando */}
                    </select>
                    <span id="regionFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                <div id="comunaDiv" className="col-md-6">
                    <label htmlFor="comunaSelect" className="form-label">Comuna</label>
                    <select id="comunaSelect" className="form-select text-secondary" required onchange="validarComuna()">
                    <option value>Seleccione comuna</option>
                    {/* se llenará dinámicamente */}
                    </select>
                    <span id="comunaFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                </div>
                {/* Dirección */}
                <div id="directionDiv" className="mb-3">
                <label htmlFor="directionInput">Dirección: *</label>
                <input type="text" id="directionInput" required className="form-control" oninput="validarDireccion()" />
                <span id="directionFeedback" className="invalid-feedback" style={{color: 'red'}} />
                </div>
                {/* Botón */}
                <div className="d-flex gap-2 mt-3 p-3 border-top">
                    <Button label={'Registrar usuario'}/>
                    <Button label={'Limpiar formulario'}/>
                </div>
            </form>
            </section>
        </AdminTemplate>
    );
};

export default AgregarUsuario;