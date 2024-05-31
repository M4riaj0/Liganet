import React, { useState, useEffect } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import './SearchView.css';

const SearchView = ({ jugadores, torneos, equipos, canchas }) => {
  return (
    <div className="search-sections">
      <span>
        <h1>Jugadores</h1>
        <Carousel>
          {jugadores.map((jugador, index) => (
            <Card key={index} title={jugador.nombreCompleto} description={jugador.posicionPrincipal} image={jugador.fotoUrl} />
          ))}
        </Carousel>
      </span>
      <div>
        <h1>Torneos</h1>
        <Carousel>
          {torneos.map((torneo, index) => (
            <Card key={index} title={ torneo.nombreTorneo } description={torneo.descripcion} image={ torneo.fotoUrl }/>
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Equipos</h1>
        <Carousel>
          {equipos.map((equipo, index) => (
            <Card key={index} title={ equipo.nombreEquipo } description={equipo.descripcion} image={ equipo.fotoUrl } />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Canchas</h1>
        <Carousel>
          {canchas.map((cancha, index) => (
            <Card key={index} title={cancha.nombre} image={ cancha.fotoUrl  }/>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SearchView;
