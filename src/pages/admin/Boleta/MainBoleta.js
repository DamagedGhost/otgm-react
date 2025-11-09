import AdminTemplate from "../../../templates/AdminTemplate";
import Button from "../../../components/atoms/Button";
import useBoletaViewModel from "../../../viewmodels/useBoletaViewModel"; // 1. Importar

const MainBoleta = () => {
  const { boletas } = useBoletaViewModel(); // 2. Obtener boletas

  return (
    <AdminTemplate>
      <main className="flex-grow-1" id="main-content" role="main">
        <div className="container-fluid py-4">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="/Admin">Administración</a></li>
              <li className="breadcrumb-item active" aria-current="page">Boletas</li>
            </ol>
          </nav>

          <header className="d-flex align-items-start justify-content-between mb-4">
            <div>
              <h1 className="h4 mb-1">Gestión de Boletas</h1>
              <p className="text-muted mb-0">Visualiza, crea y administra las boletas emitidas por el sistema.</p>
            </div>
            <div className="d-flex gap-2">
              <Button label="Mostrar Boletas" href="/Admin/Boleta/MostrarBoletas" />
            </div>
          </header>

          <section aria-labelledby="boleta-overview" className="mb-4">
            <h2 id="boleta-overview" className="visually-hidden">Resumen de boletas</h2>
            <div className="row g-3">
              <div className="col-sm-6 col-md-6">
                <div className="card shadow-sm profile-card-animation-1">
                  <div className="card-body">
                    <small className="text-muted">Total emitidas</small>
                    {/* 3. Dato real */}
                    <div className="h5 mt-2">{boletas.length} Órdenes</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="card shadow-sm profile-card-animation-4">
                  <div className="card-body">
                    <small className="text-muted">Última emisión</small>
                    {/* 4. Dato real (del mock) */}
                    <div className="h5 mt-2">{boletas.length > 0 ? boletas[boletas.length - 1].fecha : 'N/A'}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </AdminTemplate>
  );
};

export default MainBoleta;