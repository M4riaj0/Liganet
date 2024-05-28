import React from 'react';
import './SideBar.css';

const Sidebar = ({ onHomeClick }) => {
  return (
    <div className="sidebar-container">
      <div className="menu-item" onClick={onHomeClick}>Inicio</div>
      <div className="menu-item">Opción 1</div>
      <div className="menu-item">Opción 2</div>
      <div className="menu-item">Opción 3</div>
    </div>
  );
};

export default Sidebar;
