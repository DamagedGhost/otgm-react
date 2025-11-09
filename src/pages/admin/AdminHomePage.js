import React from 'react';
import AdminTemplate from '../../templates/AdminTemplate';
import useProductsViewModel from '../../viewmodels/useProductsViewModel';
import useUserViewModel from '../../viewmodels/useUserViewModel';
import useBoletaViewModel from '../../viewmodels/useBoletaViewModel';
import DonutChart from '../../components/organisms/Grafico'; // Importamos tu gráfico

const AdminHomePage = () => {
    // 1. Obtenemos todos los datos de nuestros ViewModels
    const { products } = useProductsViewModel();
    const { users } = useUserViewModel();
    const { boletas } = useBoletaViewModel();

    // 2. Preparamos los datos para los gráficos
    
    // Gráfico 1: Productos por Categoría
    const productData = products.reduce((acc, p) => {
        const categoria = p.categoria || 'Sin Categoría';
        const existing = acc.find(item => item.label === categoria);
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ id: acc.length, value: 1, label: categoria });
        }
        return acc;
    }, []);

    // Gráfico 2: Usuarios por Rol
    const userData = users.reduce((acc, u) => {
        const rol = u.rol === 'admin' ? 'Admins' : 'Clientes';
        const existing = acc.find(item => item.label === rol);
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ id: acc.length, value: 1, label: rol });
        }
        return acc;
    }, []);


    return (
      <AdminTemplate>
        <main className="flex-grow-1" id="main-content" role="main">
          <div className="container-fluid py-4">
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">Administración</li>
              </ol>
            </nav>
            <h1 className="h4 mb-4">Dashboard Principal</h1>
            
            {/* 3. Tarjetas de Resumen (¡Ahora con datos!) */}
            <section className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm profile-card-animation-1">
                        <div className="card-body text-center">
                            <i className="bi bi-box-seam-fill fs-2 text-primary"></i>
                            <h5 className="h3 mt-2">{products.length}</h5>
                            <small className="text-muted">Productos (SKU) Totales</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm profile-card-animation-2">
                        <div className="card-body text-center">
                            <i className="bi bi-people-fill fs-2 text-success"></i>
                            <h5 className="h3 mt-2">{users.length}</h5>
                            <small className="text-muted">Usuarios Registrados</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm profile-card-animation-3">
                        <div className="card-body text-center">
                            <i className="bi bi-receipt fs-2 text-warning"></i>
                            <h5 className="h3 mt-2">{boletas.length}</h5>
                            <small className="text-muted">Órdenes Emitidas</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Sección de Gráficos */}
            <section className="row g-3">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex justify-content-center">
                            {/* Usamos tu componente Grafico.js */}
                            <DonutChart data={productData} title="Productos por Categoría" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex justify-content-center">
                            <DonutChart data={userData} title="Usuarios por Rol" />
                        </div>
                    </div>
                </div>
            </section>

          </div>
        </main>
      </AdminTemplate>

    );
};

export default AdminHomePage;