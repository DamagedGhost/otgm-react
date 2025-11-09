import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import useUserViewModel from '../../viewmodels/useUserViewModel'; // 1. Importar

const RegistroPage = () => {
  const navigate = useNavigate();
  const { addUser } = useUserViewModel(); // 2. Traer la función

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '', // <-- NUEVO
    rut: '',       // <-- NUEVO
    correo: '',
    correo2: '',
    password: '',  // <-- Nombre de estado correcto
    pass2: '',
    telefono: '',
    region: '',
    comuna: '',
    direccion: '' // <-- NUEVO
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.correo !== formData.correo2) {
      alert('Los correos no coinciden');
      return;
    }
    if (formData.password !== formData.pass2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // 3. Crear el nuevo usuario (rol 'client' es automático)
    try {
      addUser(formData);
      alert('¡Registro exitoso! Ahora serás dirigido al login.');
      navigate('/login');
    } catch (error) {
      alert('Error al registrar: ' + error.message);
    }
  };

  return (
    <MainTemplate>
      <main className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header bg-secondary text-white">
                <h4 className="mb-0">Registro de usuario</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  
                  {/* --- CAMPOS ACTUALIZADOS --- */}
                  <div className="card mb-3 p-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                    <input type="text" id="apellidos" className="form-control" value={formData.apellidos} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="rut" className="form-label">RUT</label>
                    <input type="text" id="rut" className="form-control" value={formData.rut} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input type="email" id="correo" className="form-control" value={formData.correo} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="correo2" className="form-label">Confirmar correo</label>
                    <input type="email" id="correo2" className="form-control" value={formData.correo2} onChange={handleChange} required />
                  </div>
                  
                  {/* --- ESTA ES LA LÍNEA CORREGIDA --- */}
                  <div className="card mb-3 p-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    {/* El 'id' ahora es 'password', que coincide con el 'useState' */}
                    <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} required />
                  </div>
                  {/* --- FIN DE LA CORRECCIÓN --- */}

                  <div className="card mb-3 p-3">
                    <label htmlFor="pass2" className="form-label">Confirmar contraseña</label>
                    <input type="password" id="pass2" className="form-control" value={formData.pass2} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                    <input type="tel" id="telefono" className="form-control" value={formData.telefono} onChange={handleChange} />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="region" className="form-label">Región</label>
                    <input type="text" id="region" className="form-control" value={formData.region} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="comuna" className="form-label">Comuna</label>
                    <input type="text" id="comuna" className="form-control" value={formData.comuna} onChange={handleChange} required />
                  </div>
                  <div className="card mb-3 p-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" id="direccion" className="form-control" value={formData.direccion} onChange={handleChange} required placeholder="Calle Falsa 123, Depto 45" />
                  </div>

                  <div className="d-grid">
                    <Button label="Registrar" variant="dark" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainTemplate>
  );
};

export default RegistroPage;