// src/components/Navbar/NavbarLoggedOut.js
import React from 'react';
import { Link } from 'react-router-dom';


const NavbarLoggedOut = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/planes">Planes y Precios</Link></li>
        <li><Link to="/caracteristicas">Características</Link></li>
        <li><Link to="/testimonios">Testimonios</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link className="btn btn-register" to="/register">Regístrate</Link>
        <Link className="btn btn-login" to="/login">Iniciar Sesión</Link>
      </div>
    </nav>
  );
};

export default NavbarLoggedOut;
