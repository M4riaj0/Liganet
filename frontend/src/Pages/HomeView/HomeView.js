import React from 'react';
import Card from '../../Components/Card/Card';
import './HomeView.css';

const HomeView = ({ jugadores, torneos }) => {
  return (
    <div className="home-sections">
      <h1>Mejores Jugadores del Mes</h1>
      <div className="section">
        <div className="cards-container">
          {/* Mostrar solo los primeros 5 jugadores */}
          {jugadores.slice(0, 4).map((jugador, index) => (
            <Card key={index} title={jugador.nombreCompleto} description={jugador.posicionPrincipal} image={jugador.fotoUrl} />
          ))}
        </div>
      </div>
      <h1>Torneos</h1>
      <div className="section">
        <div className="cards-container">
          {/* Mostrar solo los primeros 5 torneos */}
          {torneos.slice(0, 5).map((torneo, index) => (
              <Card key={index} title={torneo.nombreTorneo} description={torneo.descripcion} image={torneo.fotoUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
