import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import HomeView from '../HomeView/HomeView';
import SearchView from '../SearchView/SearchView';
import FilterBar from '../../Components/FilterBar/FilterBar';
import './Home.css';

const Home = () => {
  const [view, setView] = useState('home'); // 'home' or 'search'

  const handleSearchClick = () => {
    setView('search');
  };

  const handleHomeClick = () => {
    setView('home');
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
          {view === 'home' ? (
            <div className="content">
            <HomeView />
          </div>
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

export default Home;
