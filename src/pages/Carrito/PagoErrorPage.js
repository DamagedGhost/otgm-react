import MainTemplate from '../../templates/MainTemplate';
import Button from '../../components/atoms/Button';

const PagoErrorPage = () => (
  <MainTemplate>
    <div className="text-center my-5">
      <h2 className="text-danger fw-bold">¡Error al procesar el pago!</h2>
      <p>Ocurrió un problema con tu transacción. Inténtalo nuevamente o contacta soporte.</p>
      <div className="my-4">
        <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '5rem' }}></i>
      </div>
      <div className="mt-4">
        <Button label="Volver a inicio" href="/" variant="primary" />
      </div>
    </div>
  </MainTemplate>
);
export default PagoErrorPage;
