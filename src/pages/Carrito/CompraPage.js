import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const CompraPage = () => {
  const navigate = useNavigate();

  // Carrito vacío o por conectar a datos reales
  const cart = [];

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    calle: '',
    departamento: '',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Cerrillos',
    indicaciones: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pago-correcto');
  };

  return (
    <MainTemplate>
      <main className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Carrito de compra</h2>

        {/* Carrito */}
        <div className="card shadow-sm p-4 mb-4">
          <h5 className="fw-semibold mb-3">Completa la siguiente información</h5>
          {cart.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>${item.precio.toLocaleString()}</td>
                        <td>{item.cantidad}</td>
                        <td>${(item.precio * item.cantidad).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-end mt-3">
                <h5>
                  <span className="fw-bold text-success">
                    Total a pagar: ${total.toLocaleString()}
                  </span>
                </h5>
              </div>
            </>
          ) : (
            <p className="text-center text-muted">No hay productos en tu carrito.</p>
          )}
        </div>

        {/* Información del cliente */}
        <div className="card shadow-sm p-4 mb-4">
          <h5 className="fw-semibold mb-3">Información del cliente</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Nombre*</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Ej: Juan"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Apellidos*</label>
                <input
                  type="text"
                  name="apellido"
                  className="form-control"
                  placeholder="Ej: Pérez Soto"
                  value={form.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Correo*</label>
              <input
                type="email"
                name="correo"
                className="form-control"
                placeholder="Ej: juanperez@gmail.com"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            {/* Dirección */}
            <h5 className="fw-semibold mb-3 mt-4">Dirección de entrega de los productos</h5>
            <div className="row mb-3">
              <div className="col-md-8">
                <label className="form-label">Calle*</label>
                <input
                  type="text"
                  name="calle"
                  className="form-control"
                  placeholder="Ej: Calle Falsa 123"
                  value={form.calle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Departamento (opcional)</label>
                <input
                  type="text"
                  name="departamento"
                  className="form-control"
                  placeholder="Ej: 603"
                  value={form.departamento}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Región*</label>
                <select
                  name="region"
                  className="form-select"
                  value={form.region}
                  onChange={handleChange}
                >
                  <option>Región Metropolitana de Santiago</option>
                  <option>Valparaíso</option>
                  <option>Biobío</option>
                  <option>Los Lagos</option>
                  <option>Coquimbo</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Comuna*</label>
                <input
                  type="text"
                  name="comuna"
                  className="form-control"
                  placeholder="Ej: Cerrillos"
                  value={form.comuna}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Indicaciones para la entrega (opcional)</label>
              <textarea
                name="indicaciones"
                className="form-control"
                rows="2"
                placeholder="Ej: Entre calles, color del edificio, no tiene timbre."
                value={form.indicaciones}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="d-grid">
              <Button
                label={`Pagar ahora $${total.toLocaleString()}`}
                type="submit"
                variant="success"
              />
            </div>
          </form>
        </div>
      </main>
    </MainTemplate>
  );
};

export default CompraPage;
