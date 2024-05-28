import React from 'react';
import './NavBar.css';
import {FaSearch} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="app-name">
        <b>LIGANET</b>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="Buscar..." />
      </div>
      <img className="profile-image" src="https://cdn.pixabay.com/photo/2021/05/10/14/15/corset-6243486_1280.jpg" alt="Perfil" />
    </div>
  );
};

export default Navbar;
