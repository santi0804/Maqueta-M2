// src/componentes/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/login">
          <button className="button-header1">Login</button>
        </Link>
        <Link to="/registrar">
          <button className="button-header2">Registrar</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
