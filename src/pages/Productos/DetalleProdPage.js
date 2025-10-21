import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import useProductsViewModel from '../../viewmodels/useProductsViewModel';
import Button from '../../components/atoms/Button';
import '../../App.css';

const DetallesProdPage = () => {
    const { title: titleParam } = useParams();
    const { products } = useProductsViewModel();

    // Normaliza y crea un "slug" a partir del title para usar en la URL
    const slugify = (t = '') =>
        t
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // quita acentos
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/gi, '') // deja sólo letras, números y guiones
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();

    // Ejemplo: si product.title === "Guitarra Rosewood" => slugify(product.title) === "guitarra-rosewood"
    const titleSlug = decodeURIComponent(titleParam || '').toLowerCase();

    const currentIndex = products.findIndex(p => slugify(p.title) === titleSlug);
    const product = currentIndex !== -1 ? products[currentIndex] : undefined;

    // Maneja el title de la página según el título del producto
    React.useEffect(() => {
  document.title = product ? product.title : 'Producto no encontrado';
}, [product]);

    if (!product) {
        return (
            <MainTemplate>
                <div className="container text-center my-5">
                    <h2>Producto no encontrado</h2>
                    <Link to="/productos" className="btn btn-primary mt-3">
                        Volver a productos
                    </Link>
                </div>
            </MainTemplate>
        );
    }

    // Productos relacionados → excluye el actual y toma hasta 4
    const relacionados = products.filter((_, i) => i !== currentIndex).slice(0, 4);

    return (
        <MainTemplate>
            <main>
                <nav className="container mt-3" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {product.title}
                        </li>
                    </ol>
                </nav>

                {/* Detalle del producto */}
                                <div className="container my-4">
                                    <div className="row">
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="border mb-3 rounded"
                                                style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                                            />
                                            {/* Miniaturas simples de ejemplo */}
                            <div className="d-flex gap-2 justify-content-center">
                                <img
                                    src={product.miniatura1}
                                    alt="Miniatura 1"
                                    className="img-thumbnail"
                                    width="100"
                                />
                                <img
                                    src={product.miniatura2}
                                    alt="Miniatura 2"
                                    className="img-thumbnail"
                                    width="100"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-center mb-5">
                            <div>
                                <h2>{product.title}</h2>
                                <h4 className="text-primary">${product.price.toLocaleString()}</h4>
                                <hr />
                                <p>
                                    {product.descripcion}
                                </p>

                                <div className="mb-3">
                                    <label htmlFor="cantidad" className="form-label">
                                        Cantidad
                                    </label>
                                    <select id="cantidad" className="form-select w-25">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>

                                <Button
                                    label="Añadir al carrito"
                                    variant="primary"
                                    onClick={() => {}}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Productos relacionados */}
                <div className="container my-5">
                    <h4>Productos Relacionados</h4>
                    <div className="row g-3">
                        {relacionados.map((rel, i) => (
                            <div className="col-6 col-md-3" key={i}>
                                <div className="card h-100 text-center">
                                    <Link to={`/productos/${slugify(rel.title)}`}>
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            className="card-img-top"
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-text">{rel.title}</p>
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

export default DetallesProdPage;