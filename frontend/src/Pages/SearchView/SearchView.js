import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import './SearchView.css';

const SearchView = () => {
  const jugadores = [
    { 
      title: "Carlos Bacca", 
      description: "Descripción de Carlos Bacca", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084552/qc5puy11krxwqe7opplt.png" 
    },
    { 
      title: "Carlos Valderrama", 
      description: "Descripción de Carlos Valderrama", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084618/a5o3i3wabhgeqaxzgdy4.png" 
    },
    { 
      title: "Cristiano Ronaldo", 
      description: "Descripción de Cristiano Ronaldo", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084644/dbez908gk88cwsmdenbi.png" 
    },
    { 
      title: "Isaac", 
      description: "Descripción de Isaac", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084670/uwfci8mwmwxubxwngisl.png" 
    },
    { 
      title: "Luis Diaz", 
      description: "Descripción de Luis Diaz", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084704/louq023a7rkhg5c3trpq.png" 
    },
    { 
      title: "Majo", 
      description: "Descripción de Majo", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084735/todmknjba9epcrtj3ajw.png" 
    },
    { 
      title: "Teofilo Gutierrez", 
      description: "Descripción de Teofilo Gutierrez", 
      image: "https://res.cloudinary.com/dmmnud7ix/image/upload/v1717084763/cujmmjvfjbnkg3bu2hqv.png" 
    }
    // Añade más jugadores aquí
  ];

  const torneos = [
    { title: "Torneo 1", description: "Descripción del torneo 1" },
    { title: "Torneo 2", description: "Descripción del torneo 2" },
    // Añade más torneos aquí
  ];

  const equipos = [
    { title: "Equipo 1", description: "Descripción del equipo 1" },
    { title: "Equipo 2", description: "Descripción del equipo 2" },
    // Añade más equipos aquí
  ];

  const canchas = [
    { title: "Cancha 1", description: "Descripción de la cancha 1" },
    { title: "Cancha 2", description: "Descripción de la cancha 2" },
    // Añade más canchas aquí
  ];

  return (
    <div className="search-sections">
        <span>
          <h1>Jugadores</h1>
          <Carousel>
            {jugadores.map((jugador, index) => (
              <Card key={index} title={jugador.title} description={jugador.description} image={jugador.image} />
            ))}
          </Carousel>
        </span>
      <div>
        <h1>Torneos</h1>
        <Carousel>
          {torneos.map((torneo, index) => (
            <Card key={index} title={torneo.title} description={torneo.description} />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Equipos</h1>
        <Carousel>
          {equipos.map((equipo, index) => (
            <Card key={index} title={equipo.title} description={equipo.description} />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Canchas</h1>
        <Carousel>
          {canchas.map((cancha, index) => (
            <Card key={index} title={cancha.title} description={cancha.description} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SearchView;
