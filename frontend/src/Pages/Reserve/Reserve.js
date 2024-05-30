import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import SearchView from '../SearchView/SearchView';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Card from '../../Components/Card/Card';
import ReserveCard from '../../Components/ReserveCard/ReserveCard';
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
      <div className="home-container">
      <NavBar onSearchClick={handleSearchClick} />
      <div className="main-content">
        <SideBar onHomeClick={handleHomeClick} />
        {view === 'Reserve' ? (

            //TODO LO DE LA RESERVAAAAAAA
          <div className="ReserveContent">
            <div className="Reservations">
              <h3 className='TitleReservations'> Mis Reservas </h3>
              <ReserveCard id_reserva="1" fecha="2021-10-10" hora="10:00" cantidad_horas="2" precio_total="100" id_cancha="1" />
              <ReserveCard id_reserva="2" fecha="2021-10-10" hora="10:00" cantidad_horas="2" precio_total="100" id_cancha="1" />
              <ReserveCard id_reserva="3" fecha="2021-10-10" hora="10:00" cantidad_horas="2" precio_total="100" id_cancha="1" />
              
            </div>
            <div className="available-courts">
                <Card title="Cancha1" description="Descripcion" />
                <Card title="Cancha2" description="Descripcion" />
                <Card title="Cancha3" description="Descripcion" />
                <Card title="Cancha4" description="Descripcion" />
                <Card title="Cancha5" description="Descripcion" />
                <Card title="Cancha6" description="Descripcion" />
                <Card title="Cancha7" description="Descripcion" />
                <Card title="Cancha8" description="Descripcion" />
                <Card title="Cancha9" description="Descripcion" />
                <Card title="Cancha10" description="Descripcion" />
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
