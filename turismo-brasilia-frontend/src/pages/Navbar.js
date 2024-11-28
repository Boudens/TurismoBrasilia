// src/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    onLogout(null); // Passa null para atualizar o estado do usuário
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/home">Turismo Brasília</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/attractions">Atrações</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li className="navbar-user">
            {user ? <span>Bem-vindo, {user}</span> : <Link to="/login">Login</Link>}
            {user && <button className="logout-button" onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
