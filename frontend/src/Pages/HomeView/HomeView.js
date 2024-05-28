import React from 'react';
import Card from '../../Components/Card/Card';
import './HomeView.css';

const HomeView = () => {
  return (
    <div className="home-sections">
      <h1>Mejores Jugadores del Mes</h1>
      <div className="section">
        <div className="cards-container">
          <Card title="Jugador 1" description="Descripción del jugador 1" />
          <Card title="Jugador 2" description="Descripción del jugador 2" />
        </div>
      </div>
      <h1>Torneos</h1>
      <div className="section">
        <div className="cards-container">
          <Card title="Torneo 1" description="Descripción del torneo 1" />
          <Card title="Torneo 2" description="Descripción del torneo 2" />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
