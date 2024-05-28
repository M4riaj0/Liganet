import React from 'react';
import './NavBar.css';
import { FaSearch, FaPaperPlane, FaArrowRight } from 'react-icons/fa';
import { IoSend } from "react-icons/io5";

const Navbar = ({ onSearchClick }) => {
  const handleSearchFocus = () => {
    onSearchClick();
  };

  return (
    <div className="navbar-container">
      <div className="app-name">
        <h2>LIGANET</h2>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="Buscar..." onFocus={handleSearchFocus} />
        <button className="search-button">
          <IoSend />
        </button>
      </div>
      <img className="profile-image" src="https://cdn.pixabay.com/photo/2021/05/10/14/15/corset-6243486_1280.jpg" alt="Perfil" />
    </div>
  );
};

export default Navbar;
