import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import SearchView from '../SearchView/SearchView';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Card from '../../Components/Card/Card';
import './Reserve.css';

const ReserveView = () => {
    const [view, setView] = useState('Reserve'); // 'home' or 'search'

  const handleSearchClick = () => {
    setView('search');
  };

  const handleHomeClick = () => {
    setView('Reserve');
  };

  const handleResetFilters = () => {
    console.log('Filtros restablecidos');
    // Aquí puedes agregar la lógica para restablecer los filtros
  };

    return (
        <div className="reserve-container">
      <NavBar onSearchClick={handleSearchClick} />
      <div className="main-content">
        <SideBar onHomeClick={handleHomeClick} />
        {view === 'Reserve' ? (

            //TODO LO DE LA RESERVAAAAAAA
            <div className="content">
                <div className="reservations">
                    <h3> Mis Reservas </h3>
                </div>
                <div className="available-courts">
                    <Card title="Cancha1" description="Descripcion de la cancha" />
                </div>
            </div>
            // FINAL DE LA RESERVAAAAAAAAAAAAA

          ) : (
            <div className="content">
              <FilterBar onReset={handleResetFilters} />
              <SearchView />
            </div>
          )}
      </div>
    </div>
  );
};

export default ReserveView;
