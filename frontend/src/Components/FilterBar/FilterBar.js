import React, { useState } from 'react';
import './FilterBar.css';
import { GrPowerReset } from 'react-icons/gr';

const FilterBar = ({ onReset, onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilter(filter); // Enviar la opción de filtro seleccionada al Home
  };

  return (
    <div className="filter-bar">
      <button onClick={() => handleFilterChange('jugadores')}>Jugadores</button>
      <button onClick={() => handleFilterChange('torneos')}>Torneos</button>
      <button onClick={() => handleFilterChange('equipos')}>Equipos</button>
      <button onClick={() => handleFilterChange('canchas')}>Canchas</button>
      <button className="chip-reset" onClick={onReset}>
        <GrPowerReset />
      </button>
    </div>
  );
};

export default FilterBar;
