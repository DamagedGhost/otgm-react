import { Link } from 'react-router-dom';
import React from 'react';

/*
  Esta es tu barra lateral, pero "React-ificada":
  1. Se corrigieron todos los 'classname' y 'class' a 'className'.
  2. Se reemplazaron todos los SVGs por iconos de Bootstrap (<i className="...">).
  3. Se reemplazaron todas las etiquetas <a> y onclick por <Link> de React Router.
  4. Se mantiene la estructura de IDs (#sidebar, #header) para que tu CSS actual funcione.
*/

const NavbarVerticalAdmin = () => {
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
                            
                            {/* Item de Menú (Patrón) */}
                            <li className="nav-item">
                                {/* Se usa <Link> y la ruta 'to' debe coincidir con tu App.js */}
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

                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Reporte">
                                    <i className="bi bi-bar-chart-fill"></i>
                                    Reportes
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="/Admin/Usuarios">
                                    <i className="bi bi-people-fill"></i>
                                    Usuarios
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-white d-flex align-items-center gap-2" to="#">
                                    <i className="bi bi-person-standing"></i>
                                    Clientes
                                </Link>
                            </li>
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
                    <div className="d-flex align-items-center p-3 border-top border-secondary" id="admin-user">
                        <i className="bi bi-person-circle fs-3 me-2"></i>
                        <div className="d-flex flex-column">
                            <span className="fw-bold">Nombre Usuario</span>
                            <small className="text-white-50">Administrador</small>
                        </div>
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