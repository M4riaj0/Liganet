import React from 'react';
import './FilterBar.css';
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({ onReset }) => {
  return (
    <div className="filter-bar">
      <button className="chip-reset" onClick={onReset}>
        <GrPowerReset />
      </button>
      <button className="chip">Jugadores</button>
      <button className="chip">Torneos</button>
      <button className="chip">Equipos</button>
      <button className="chip">Canchas</button>
    </div>
  );
};

export default FilterBar;
