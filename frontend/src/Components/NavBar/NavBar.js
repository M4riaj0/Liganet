import React from 'react';
import './NavBar.css';
import { FaSearch, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import { IoMdExit } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = ({ onSearchClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    console.log('Sesión cerrada');
    navigate ('/Login');
  };
  
  const handleSearchFocus = () => {
    onSearchClick();
  };

  return (
    <div className="navbar-container">
      <div className="app-name">
        <Link to ="/Home">
          <h2>LIGANET</h2>
        </Link>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="Buscar..." onFocus={handleSearchFocus} />
        <button className="search-button">
          <IoSend />
        </button>
      </div>
      <div className='right-icons'>
        <img className="profile-image" src="https://cdn.pixabay.com/photo/2021/05/10/14/15/corset-6243486_1280.jpg" alt="Perfil" />
        <IoMdExit className="exit-icon" onClick={handleLogout}/>
      </div>
    </div>
  );
};

export default Navbar;
