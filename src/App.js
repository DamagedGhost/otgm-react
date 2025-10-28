import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos/:title" element={<DetallesProdPage />} />
        <Route path="/nosotros" element={<NostrosPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/blog1" element={<Blog1Page />} />
        <Route path="/blogs/blog2" element={<Blog2Page />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/AdminHomePage" element={<AdminHomePage />} />
        <Route path="/AdminInventario" element={<MainInventario />} />
        <Route path="/AdminInventario/NuevoProducto" element={<NuevoProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
