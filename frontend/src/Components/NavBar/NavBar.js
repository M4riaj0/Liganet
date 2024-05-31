import React, { useState } from 'react';
import './NavBar.css';
import { FaSearch } from 'react-icons/fa';
import { IoMdExit } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onSearchClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    console.log('Sesión cerrada');
    navigate('/Login');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Búsqueda:', searchQuery);
    onSearchClick(searchQuery);
  };

  return (
    <div className="navbar-container">
      <div className="app-name">
        <Link to="/Home">
          <h2>LIGANET</h2>
        </Link>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          className="search-input" 
          placeholder="Buscar..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button className="search-button" onClick={handleSearchSubmit}>
          <IoSend />
        </button>
      </div>
      <div className='right-icons'>
        <img className="profile-image" src="https://res.cloudinary.com/dmmnud7ix/image/upload/v1717051319/inyfu0ynjvbao60ktlfb.jpg" alt="Perfil" />
        <IoMdExit className="exit-icon" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default Navbar;
