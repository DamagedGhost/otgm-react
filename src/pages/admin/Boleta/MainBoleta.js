import AdminTemplate from "../../../templates/AdminTemplate";
import Button from "../../../components/atoms/Button";

const MainBoleta = () => {
  return (
    <AdminTemplate>
        <div className="flex-grow-1 bg-light" id="main-content">
          <h1>Gestión de Boletas</h1>
          <p>Aquí puedes gestionar las boletas generadas en el sistema.</p>
          <div>
            <Button label="Mostrar Boletas" href="/Admin/Boleta/MostrarBoletas" />
          </div>
        </div>
    </AdminTemplate>
  );
};

export default MainBoleta;