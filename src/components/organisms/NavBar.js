import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">On The Go Music</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav me-auto">
        <li><Link className="nav-link active" to="/">Inicio</Link></li>
        <li><Link className="nav-link" to="/productos">Productos</Link></li>
        <li><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
        <li><Link className="nav-link" to="/blogs">Blogs</Link></li>
        <li><Link className="nav-link" to="/contacto">Contacto</Link></li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li><Link className="nav-link" to="/carrito"><i className="bi bi-cart"></i> Carrito (0)</Link></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;