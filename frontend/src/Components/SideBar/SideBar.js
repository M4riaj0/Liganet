import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './SideBar.css';

const Sidebar = ({ onHomeClick }) => {
  const navigate = useNavigate(); // Usa useNavigate

  const handleReserveClick = () => {
    navigate('/Reserve'); // Navega a /Reserve
  };

  return (
    <div className="sidebar-container">
      <div className="menu-item" onClick={onHomeClick} >Inicio</div>
      <div className="menu-item">Perfil</div>
      <div className="menu-item">Equipo</div>
      <div className="menu-item" onClick={handleReserveClick}>Reservas</div> {/* Usa handleReserveClick */}
      <div className="menu-item">Torneos</div>
    </div>
  );
};

export default Sidebar;