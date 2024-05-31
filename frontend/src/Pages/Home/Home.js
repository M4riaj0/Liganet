import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import HomeView from '../HomeView/HomeView';
import SearchView from '../SearchView/SearchView';
import FilterBar from '../../Components/FilterBar/FilterBar';
import { fetchJugadores, fetchTorneos, fetchEquipos, fetchCanchas } from '../../Services/search';
import './Home.css';

const Home = () => {
  const [view, setView] = useState('home'); // 'home' or 'search'
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [jugadores, setJugadores] = useState([]);
  const [torneos, setTorneos] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [canchas, setCanchas] = useState([]);

  const handleSearchClick = (query) => {
    console.log('Búsqueda en Home:', query);
    setSearchQuery(query);
    setView('search');
  };

  const handleHomeClick = () => {
    setView('home');
  };

  const handleResetFilters = () => {
    console.log('Filtros restablecidos');
    setFilter('');
    fetchAllData();
  };

  const handleFilterClick = (filter) => {
    setFilter(filter);
    fetchFilteredData(filter, searchQuery);
  };

  const fetchAllData = async () => {
    const [jugadoresData, torneosData, equiposData, canchasData] = await Promise.all([
      fetchJugadores(),
      fetchTorneos(),
      fetchEquipos(),
      fetchCanchas()
    ]);
    setJugadores(jugadoresData);
    setTorneos(torneosData);
    setEquipos(equiposData);
    setCanchas(canchasData);
  };

  const fetchFilteredData = async (filter, query) => {
    if (filter === 'jugadores') {
      setJugadores(await fetchJugadores(query));
      setTorneos([]);
      setEquipos([]);
      setCanchas([]);
    } else if (filter === 'torneos') {
      setJugadores([]);
      setTorneos(await fetchTorneos(query));
      setEquipos([]);
      setCanchas([]);
    } else if (filter === 'equipos') {
      setJugadores([]);
      setTorneos([]);
      setEquipos(await fetchEquipos(query));
      setCanchas([]);
    } else if (filter === 'canchas') {
      setJugadores([]);
      setTorneos([]);
      setEquipos([]);
      setCanchas(await fetchCanchas(query));
    }
  };

  useEffect(() => {
    if (view === 'search') {
      fetchFilteredData(filter, searchQuery);
    }
  }, [view, searchQuery, filter]);

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
            <FilterBar onReset={handleResetFilters} onFilter={handleFilterClick} />
            <SearchView 
              jugadores={jugadores} 
              torneos={torneos} 
              equipos={equipos} 
              canchas={canchas} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
