import React from 'react';
import MainTemplate from '../../templates/MainTemplate';

const Blog1Page = () => {
  return (
    <MainTemplate>
      <section className="text-center p-5 bg-light">
        <h1 className="fw-bold">¡Nuevo Producto en On The Go Music!</h1>
      </section>

      <section>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card p-4 shadow-sm">
                <div className="text-center mb-4">
                  <img
                    src="https://images.gibson.com/Lifestyle/Spanish/ES75VSNH1-Finish-Shot.jpg"
                    alt="Imagen guitarra Gibson Archtop"
                    className="img-fluid rounded border"
                  />
                </div>
                <div className="card-body">
                  <h3 className="mb-3 text-primary">Gibson Archtop: Tradición y Sonido Excepcional</h3>
                  <p className="fs-5 mb-4">
                    Nos complace anunciar la incorporación de un instrumento muy esperado en nuestra tienda: la guitarra
                    <strong> Archtop de Gibson</strong>. Este modelo, reconocido mundialmente por su diseño elegante y su sonido excepcional,
                    representa lo mejor de la tradición y la innovación de Gibson.
                  </p>
                  <p className="fs-5 mb-4">
                    La Archtop se ha consolidado como una de las favoritas entre guitarristas de jazz, blues y rock, gracias a su cálida resonancia
                    y a su versatilidad en distintos estilos musicales. Su construcción artesanal y sus detalles de alta calidad hacen de este
                    instrumento una verdadera joya para músicos exigentes y coleccionistas.
                  </p>
                  <p className="fs-5 mb-4">
                    Invitamos a todos nuestros clientes y amigos a visitar <strong>On The Go Music</strong> para conocer de cerca esta nueva llegada.
                    La Gibson Archtop ya está disponible para prueba y compra en nuestra tienda.
                  </p>
                  <p className="fs-5 mb-0">
                    No dejes pasar la oportunidad de experimentar un sonido único que solo Gibson puede ofrecer. Ven y descubre por qué
                    la guitarra Archtop es una elección insuperable para cualquier músico apasionado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default Blog1Page;
