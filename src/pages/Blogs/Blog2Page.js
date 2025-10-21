import React from 'react';
import MainTemplate from '../../templates/MainTemplate';

const Blog2Page = () => {
  return (
    <MainTemplate>
      <section className="text-center p-5 bg-light">
        <h1 className="fw-bold">¡Rumores de nuevo bajo eléctrico!</h1>
      </section>

      <section>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card p-4 shadow-sm">
                <div className="text-center mb-4">
                  <img
                    src="https://preview.redd.it/2000-bc-rich-acrylic-series-warlock-bass-prototype-v0-hphxb214lcob1.jpg?width=640&crop=smart&auto=webp&s=93ea09a7b718fc96f2128d16d5ef25e773e67c1a"
                    alt="Bajo eléctrico prototipo Warlock"
                    className="img-fluid rounded border"
                  />
                </div>
                <div className="card-body">
                  <h3 className="mb-3 text-primary">Rumores en el mundo del bajo eléctrico</h3>
                  <p className="fs-5 mb-4">
                    En los últimos días han surgido comentarios sobre un posible lanzamiento que podría sorprender a muchos:
                    un <strong>bajo acrílico prototipo Warlock</strong>. Aunque no hay confirmación oficial, varias fuentes aseguran
                    que ya se han visto pruebas privadas del instrumento.
                  </p>
                  <p className="fs-5 mb-4">
                    Lo que más llama la atención es su diseño: un cuerpo transparente en acrílico, con la estética agresiva
                    y reconocible de la serie Warlock. Esta elección no solo impacta visualmente, también podría ofrecer
                    nuevas cualidades en el sonido.
                  </p>
                  <p className="fs-5 mb-4">
                    Se dice que el prototipo incorporaría <strong>electrónica activa avanzada</strong> y pastillas diseñadas
                    para realzar graves potentes sin perder claridad en los agudos. Una combinación ideal para escenarios de rock y metal.
                  </p>
                  <p className="fs-5 mb-0">
                    En <strong>On The Go Music</strong> estaremos atentos a cualquier novedad. Si este rumor se convierte en
                    realidad, lo compartiremos con ustedes de inmediato. ¡Un lanzamiento así ningún bajista debería perdérselo!
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

export default Blog2Page;
