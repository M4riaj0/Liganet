import React, { useState } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import DetailDialog from '../../Components/DetailDialog/DetailDialog';
import './SearchView.css';

const SearchView = ({ jugadores, torneos, equipos, canchas }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [detailType, setDetailType] = useState('');

  const handleCardClick = (type, data) => {
    setDetailType(type);
    setSelectedDetail(data);
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
    setSelectedDetail(null);
    setDetailType('');
  };

  return (
    <div className="search-sections">
      <span>
        <h1>Jugadores</h1>
        <Carousel>
          {jugadores.map((jugador, index) => (
            <Card
              key={index}
              title={jugador.nombreCompleto}
              description={jugador.posicionPrincipal}
              image={jugador.fotoUrl}
              type="jugador"
              onClick={() => handleCardClick('jugador', jugador)}
            />
          ))}
        </Carousel>
      </span>
      <div>
        <h1>Torneos</h1>
        <Carousel>
          {torneos.map((torneo, index) => (
            <Card
              key={index}
              title={torneo.nombreTorneo}
              description={torneo.descripcion}
              image={torneo.fotoUrl}
              type="torneo"
              onClick={() => handleCardClick('torneo', torneo)}
            />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Equipos</h1>
        <Carousel>
          {equipos.map((equipo, index) => (
            <Card
              key={index}
              title={equipo.nombreEquipo}
              description={equipo.descripcion}
              image={equipo.fotoUrl}
              type="equipo"
              onClick={() => handleCardClick('equipo', equipo)}
            />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Canchas</h1>
        <Carousel>
          {canchas.map((cancha, index) => (
            <Card
              key={index}
              title={cancha.nombre}
              image={cancha.fotoUrl}
              type="cancha"
              onClick={() => handleCardClick('cancha', cancha)}
            />
          ))}
        </Carousel>
      </div>
      <DetailDialog
        open={dialogIsOpen}
        onClose={closeDialog}
        type={detailType}
        data={selectedDetail}
      />
    </div>
  );
};

export default SearchView;
