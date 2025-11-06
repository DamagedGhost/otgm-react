import AdminTemplate from "../../../templates/AdminTemplate";
import Button from "../../../components/atoms/Button";

const MainBoleta = () => {
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
              <Button label="Crear Boleta" href="/Admin/Boleta/Nueva" />
              <Button label="Mostrar Boletas" href="/Admin/Boleta/MostrarBoletas" />
            </div>
          </header>

          <section aria-labelledby="boleta-overview" className="mb-4">
            <h2 id="boleta-overview" className="visually-hidden">Resumen de boletas</h2>
            <div className="row g-3">
              <div className="col-sm-6 col-md-3">
                <div className="card shadow-sm profile-card-animation-1">
                  <div className="card-body">
                    <small className="text-muted">Total emitidas</small>
                    <div className="h5 mt-2">1,234</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card shadow-sm profile-card-animation-2">
                  <div className="card-body">
                    <small className="text-muted">Pendientes</small>
                    <div className="h5 mt-2">12</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card shadow-sm profile-card-animation-3">
                  <div className="card-body">
                    <small className="text-muted">Rechazadas</small>
                    <div className="h5 mt-2">3</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card shadow-sm profile-card-animation-4">
                  <div className="card-body">
                    <small className="text-muted">Última emisión</small>
                    <div className="h5 mt-2">2025-10-29</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="boleta-actions">
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="boleta-search" className="me-2 visually-hidden">Buscar boletas</label>
              <input
                id="boleta-search"
                type="search"
                className="form-control me-3 profile-card-animation"
                placeholder="Buscar por número, cliente o referencia"
                style={{ maxWidth: 420 }}
                aria-label="Buscar boletas"
              />
            </div>

            <div className="card shadow-sm profile-card-animation">
              <div className="card-body">
                <p className="text-muted mb-0">Tabla de boletas (placeholder). En la siguiente pantalla podrás filtrar y gestionar cada registro.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </AdminTemplate>
  );
};

export default MainBoleta;