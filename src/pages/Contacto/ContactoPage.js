import React from 'react';
import ContactoForm from '../../components/organisms/ContactoForm';
import MainTemplate from '../../templates/MainTemplate';

function ContactoPage() {
  return (
    <MainTemplate>
      <div className="text-center my-4">
        <img
          src="https://i.gyazo.com/bf5ddbb13126156cdb262a2017c1ca3b.png"
          className="img-fluid w-25 border rounded mb-3"
          alt="Logo On The Go Music"
        />
        <h2 className="fw-bold">On The Go Music</h2>
      </div>

      <section className="container d-flex justify-content-center mb-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-center fw-bold bg-light">
              FORMULARIO DE CONTACTO
            </div>
            <div className="card-body">
              <ContactoForm />
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
}

export default ContactoPage;
