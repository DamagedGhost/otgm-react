import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';

const RegistroPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    correo2: '',
    pass: '',
    pass2: '',
    telefono: '',
    region: '',
    comuna: ''
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
    if (formData.pass !== formData.pass2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos de registro:', formData);
    // Aquí podrías enviar los datos al backend
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
                  {[
                    { id: 'nombre', label: 'Nombre completo', type: 'text' },
                    { id: 'correo', label: 'Correo', type: 'email' },
                    { id: 'correo2', label: 'Confirmar correo', type: 'email' },
                    { id: 'pass', label: 'Contraseña', type: 'password' },
                    { id: 'pass2', label: 'Confirmar contraseña', type: 'password' },
                    { id: 'telefono', label: 'Teléfono (opcional)', type: 'tel' }
                  ].map(({ id, label, type }) => (
                    <div key={id} className="card mb-3 p-3">
                      <label htmlFor={id} className="form-label">{label}</label>
                      <input
                        type={type}
                        id={id}
                        className="form-control"
                        value={formData[id]}
                        onChange={handleChange}
                        required={id !== 'telefono'}
                      />
                    </div>
                  ))}

                  <div className="card mb-3 p-3">
                    <label htmlFor="region" className="form-label">Región</label>
                    <select
                      id="region"
                      className="form-select"
                      value={formData.region}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Seleccione la región --</option>
                      <option>Región Metropolitana de Santiago</option>
                      <option>Región de la Araucanía</option>
                      <option>Región de Ñuble</option>
                    </select>
                  </div>

                  <div className="card mb-3 p-3">
                    <label htmlFor="comuna" className="form-label">Comuna</label>
                    <select
                      id="comuna"
                      className="form-select"
                      value={formData.comuna}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Seleccione la comuna --</option>
                      <option>Linares</option>
                      <option>Longaví</option>
                      <option>Concepción</option>
                    </select>
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
