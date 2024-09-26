// src/components/Navbar/NavbarLoggedIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';

const NavbarLoggedIn = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState ('');

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/facturas">Facturas</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/puntos">Puntos</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link className="btn btn-logout" to="/logout">Cerrar Sesión</Link>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
