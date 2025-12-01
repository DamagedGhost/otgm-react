import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';

const PagoCorrectoPage = () => (
  <MainTemplate>
    <div className="text-center my-5">
      <h2 className="text-success fw-bold">¡Pago realizado con éxito!</h2>
      <p>Gracias por tu compra. Te enviaremos un correo con los detalles del pedido.</p>
      <div className="my-4">
        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
      </div>

      <div className="mt-4">
        <Button label="Volver a inicio" href="/" variant="primary" />
      </div>
    </div>
  </MainTemplate>
);
export default PagoCorrectoPage;
