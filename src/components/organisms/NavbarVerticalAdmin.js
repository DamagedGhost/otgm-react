import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const NavbarVerticalAdmin = () => {
    const { user, logout } = useAuth();

    // Normalizar rol y soportar variantes en español/inglés si existen
    const role = (user?.rol || '').toString().toLowerCase();
    const isAdmin = ['admin', 'administrador', 'jefe'].includes(role);
    const isSeller = ['seller', 'vendedor', 'venda'].includes(role);

    return (
        <div>
            {/* --- SIDEBAR --- */}
            <aside className="d-flex flex-column justify-content-between vh-100" id="sidebar">
                
                {/* Sección Superior: Logo y Menú */}
                <div>
                    {/* Logo */}
                    <div className="d-flex align-items-center gap-2 p-2">
                        <i className="bi bi-vinyl-fill fs-4"></i>
                        <span className="fs-5">On the go music</span>
                    </div>

                    {/* Menú de Navegación */}
                    <div className="border-top my-3 pt-3" id="admin-nav-top">
                        <ul className="nav flex-column mb-3">
                            
                            {/* Visible para TODOS los del panel */}
                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin">
                                    <i className="bi bi-grid-fill"></i>
                                    Dashboard
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Boleta">
                                    <i className="bi bi-receipt"></i>
                                    Órdenes
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Inventario">
                                    <i className="bi bi-box-seam-fill"></i>
                                    Inventario
                                </Link>
                            </li>

                            {/* Visible SOLO para Admin */}
                            {isAdmin && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-warning d-flex align-items-center gap-2" to="/Admin/Reporte">
                                            <i className="bi bi-bar-chart-fill"></i>
                                            Reportes
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-warning d-flex align-items-center gap-2" to="/Admin/Usuarios">
                                            <i className="bi bi-people-fill"></i>
                                            Usuarios
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-warning d-flex align-items-center gap-2" to="/Admin/Categorias">
                                            <i className="bi bi-tags-fill"></i>
                                            Categorías
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* Visible SOLO para Vendedor / Seller */}
                            {isSeller && (
                                <li className="nav-item">
                                    <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Clientes">
                                        <i className="bi bi-person-standing"></i>
                                        Clientes
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Sección Inferior: Perfil y Configuración */}
                <div>
                    <div className="border-top my-3 pt-3" id="admin-nav-bottom">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="#">
                                    <i className="bi bi-gear-fill"></i>
                                    Configuración
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Perfil">
                                    <i className="bi bi-person-fill"></i>
                                    Perfil
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Perfil de Usuario */}
                    <div className="d-flex flex-column p-3 border-top border-secondary" id="admin-user">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-person-circle fs-3 me-2"></i>
                            <div className="d-flex flex-column">
                                <span className="fw-bold">{user ? user.nombre : 'Usuario'}</span>
                                <small className="text-white-50">{user ? user.rol : 'Admin'}</small>
                            </div>
                        </div>
                        <button 
                            className="btn btn-sm btn-outline-danger mt-3" 
                            onClick={logout}
                        >
                            <i className="bi bi-box-arrow-right me-1"></i>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

            </aside>

            {/* --- HEADER --- */}
            <header id="header" className="d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0">Panel de Administración</h1>
                <div>
                    <i className="bi bi-bell-fill fs-5"></i>
                </div>
            </header>
        </div>
    );
};

export default NavbarVerticalAdmin;