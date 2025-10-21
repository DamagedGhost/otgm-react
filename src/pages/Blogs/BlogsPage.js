import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import { Link } from 'react-router-dom';


const BlogsPage = () => {
  return (
    <MainTemplate>
      <section className="hero text-center p-5 bg-light">
        <h2 className="fw-bold">Noticias Importantes</h2>
        <p className="text-muted">Lo último en música e instrumentos</p>
      </section>

      {/* Noticia 1 */}
      <section>
        <div className="container my-5">
          <div className="card shadow-sm p-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title mb-3">¡Nuevo Producto en On The Go Music!</h2>
                  <p className="card-text">Gibson Archtop: Tradición y Sonido Excepcional</p>
                  <Link to="/blogs/blog1" className="btn btn-primary mt-3">
                    VER NOTICIA <i className="bi bi-caret-right-fill"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://images.gibson.com/Lifestyle/Spanish/ES75VSNH1-Finish-Shot.jpg"
                  className="img-fluid rounded border mt-3 mb-3"
                  alt="Imagen Gibson Archtop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticia 2 */}
      <section>
        <div className="container my-5">
          <div className="card shadow-sm p-3">
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title mb-3">Rumores de nuevo bajo eléctrico</h2>
                  <p className="card-text">Un prototipo Warlock acrílico sorprende al mundo del bajo</p>
                  <Link to="/blogs/blog2" className="btn btn-primary mt-3">
                    VER NOTICIA <i className="bi bi-caret-right-fill"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://preview.redd.it/2000-bc-rich-acrylic-series-warlock-bass-prototype-v0-hphxb214lcob1.jpg?width=640&crop=smart&auto=webp&s=93ea09a7b718fc96f2128d16d5ef25e773e67c1a"
                  className="img-fluid rounded border mt-3 mb-3"
                  alt="Bajo acrílico Warlock"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default BlogsPage;
