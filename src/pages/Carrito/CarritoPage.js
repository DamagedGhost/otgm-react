import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const CarritoPage = () => {
  const navigate = useNavigate();

  // Productos simulados en el carrito (puedes conectar esto a useProductsViewModel o a localStorage)
  const [cart, setCart] = useState([
    { id: 1, nombre: 'Guitarra Rosewood', precio: 45000, cantidad: 1, imagen: 'https://audiomusicacl.vtexassets.com/arquivos/ids/192797/1-guitarra-acustica-vizcaya-con-cuerdas-de-nylon-arcg39-rb-207758.jpg?v=638556328914200000' },
    { id: 2, nombre: 'Teclado Clásico', precio: 20000, cantidad: 2, imagen: 'https://casaroyal.vtexassets.com/arquivos/ids/162255/111977_1.jpg?v=638774932664670000' },
  ]);

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleComprar = () => {
    navigate('/compra'); // Redirige al checkout
  };

  return (
    <MainTemplate>
      <main className="container my-5">
        <div className="row">
          {/* 🧾 Columna izquierda: resumen de pago */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h4 className="mb-3 text-center">Resumen de compra</h4>
              <ul className="list-group mb-3">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{item.nombre}</span>
                    <span>${(item.precio * item.cantidad).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <h5 className="text-success text-center">Total: ${total.toLocaleString()}</h5>
              <div className="d-grid mt-3">
                <Button
                  label="Comprar"
                  variant="primary"
                  onClick={handleComprar}
                  fullWidth
                />
              </div>
            </div>
          </div>

          {/*  Columna derecha: lista de productosS
           */}
          <div className="col-md-8">
            <h3 className="mb-4 text-center">Productos en tu carrito</h3>
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid rounded" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.nombre}</h5>
                      <p className="card-text">Precio: ${item.precio.toLocaleString()}</p>
                      <p className="card-text">Cantidad: {item.cantidad}</p>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <Button
                      label="Eliminar"
                      variant="outline-danger"
                      onClick={() => setCart(cart.filter((p) => p.id !== item.id))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </MainTemplate>
  );
};

export default CarritoPage;
