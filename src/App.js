// TODOS TUS IMPORTS ORIGINALES
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <--- SIN 'Router'
import HomePage from './pages/HomePage';
import BlogsPage from './pages/Blogs/BlogsPage';
import Blog1Page from './pages/Blogs/Blog1Page';
import Blog2Page from './pages/Blogs/Blog2Page';
import NostrosPage from './pages/Nosotros/NosotrosPage';
import ProductosPage from './pages/Productos/ProductosPage';
import DetallesProdPage from './pages/Productos/DetalleProdPage';
import ContactoPage from './pages/Contacto/ContactoPage';
import LoginPage from './pages/Registro/LoginPage';
import RegistroPage from './pages/Registro/RegistroPage';
import CarritoPage from './pages/Carrito/CarritoPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import MainInventario from './pages/admin/Inventario/MainInventario';
import NuevoProducto from './pages/admin/Inventario/NuevoProducto';
import ListadoProductos from './pages/admin/Inventario/ListadoProductos';
import EditarProducto from './pages/admin/Inventario/EditarProducto';
import Usuario from './pages/admin/Usuarios/MainUsuario';
import AgregarUsuario from './pages/admin/Usuarios/AgregarUsuario';
import ListarUsuarios from './pages/admin/Usuarios/ListarUsuarios';
import CompraPage from './pages/Carrito/CompraPage';
import PagoCorrectoPage from './pages/Carrito/PagoCorrectoPage';
import PagoErrorPage from './pages/Carrito/PagoErrorPage';
import EditarUsuario from './pages/admin/Usuarios/EditarUsuario';
import MainBoleta from './pages/admin/Boleta/MainBoleta';
import MostrarBoletas from './pages/admin/Boleta/MostrarBoletas';
import CategoriasPage from './pages/Categorias/CategoriasPage';
import HistorialCompra from './pages/admin/Usuarios/HistorialCompra';
import ProductoReporte from './pages/admin/Inventario/ProductoReporte';
import ProductosCriticos from './pages/admin/Inventario/ProductosCriticos';
import Reporte from './pages/admin/Reporte/Reporte';
import Perfil from './pages/admin/Perfil/Perfil';

// NUEVOS IMPORTS DE AUTENTICACIÓN Y CATEGORÍAS
import ProtectedRoute from './components/auth/ProtectedRoute';
import MainCategorias from './pages/admin/Categoria/MainCategoria';
import ListarCategorias from './pages/admin/Categoria/ListarCategorias';
import NuevaCategoria from './pages/admin/Categoria/NuevaCategoria';

// CSS
import './App.css';

function App() {
  return (
    <>
    
    <Routes>
      {/* --- RUTAS PÚBLICAS (TODAS TUS RUTAS ORIGINALES) --- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/categoria" element={<CategoriasPage />} />
      <Route path="/productos/:title" element={<DetallesProdPage />} />
      <Route path="/nosotros" element={<NostrosPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/blog1" element={<Blog1Page />} />
      <Route path="/blogs/blog2" element={<Blog2Page />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/carrito" element={<CarritoPage />} />
      <Route path="/compra" element={<CompraPage />} />
      <Route path="/pago-correcto" element={<PagoCorrectoPage />} />
      <Route path="/pago-error" element={<PagoErrorPage />} />

      {/* --- RUTAS DE ADMIN PROTEGIDAS --- */}
      <Route element={<ProtectedRoute />}>
        <Route path="/Admin" element={<AdminHomePage />} />
        
        {/* ADMIN INVENTARIO ROUTES */}
        <Route path="/Admin/Inventario" element={<MainInventario />} />
        <Route path="/Admin/Inventario/NuevoProducto" element={<NuevoProducto />} />
        <Route path="/Admin/Inventario/ListadoProductos" element={<ListadoProductos />} />
        <Route path="/Admin/Inventario/EditarProducto/:id" element={<EditarProducto />} />
        <Route path="/Admin/Inventario/ProductoReporte" element={<ProductoReporte />} />
        <Route path="/Admin/Inventario/ProductosCriticos" element={<ProductosCriticos />} />
        
        {/* ADMIN USUARIOS ROUTES */}
        <Route path="/Admin/Usuarios" element={<Usuario />} />
        <Route path="/Admin/Usuarios/AgregarUsuario" element={<AgregarUsuario />} />
        <Route path="/Admin/Usuarios/ListarUsuarios" element={<ListarUsuarios />} />
        <Route path="/Admin/Usuarios/EditarUsuario/:id" element={<EditarUsuario />} />
        <Route path="/Admin/Usuarios/HistorialCompra/:id" element={<HistorialCompra />} />
        
        {/* ADMIN BOLETA ROUTES */}
        <Route path="/Admin/Boleta" element={<MainBoleta />} />
        <Route path="/Admin/Boleta/MostrarBoletas" element={<MostrarBoletas />} />
        
        {/* ADMIN CATEGORIAS ROUTES */}
        <Route path="/Admin/Categorias" element={<MainCategorias />} />
        <Route path="/Admin/Categorias/ListarCategorias" element={<ListarCategorias />} />
        <Route path="/Admin/Categorias/NuevaCategoria" element={<NuevaCategoria />} />

        {/* ADMIN REPORTE ROUTE */}
        <Route path="/Admin/Reporte" element={<Reporte />} />
        
        {/* ADMIN PERFIL ROUTE */}
        <Route path="/Admin/Perfil" element={<Perfil />} />
      </Route>
    </Routes>

    <div>
      Learn React
    </div>
    </>
  );
}

export default App;