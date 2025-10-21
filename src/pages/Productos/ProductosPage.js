import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import useProductsViewModel from '../../viewmodels/useProductsViewModel';
import Button from '../../components/atoms/Button';

const ProductosPage = () => {
  const { products } = useProductsViewModel();

  return (
    <MainTemplate>
      <main id="productos" className="container my-5">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <div className="row row-cols-1 row-cols-md-4 g-3">
          {products.map((product) => (
            <div className="col" key={product.title}>
              <div className="card h-100 text-center shadow-sm">
                <Link to={`/productos/${product.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fw-bold text-danger">${product.price.toLocaleString()}</p>
                  <Button
                    label="Agregar al carrito"
                    variant="outline-primary"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </MainTemplate>
  );
};

export default ProductosPage;