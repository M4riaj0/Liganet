import React, { useState } from 'react';
import Card from '../../Components/Card/Card';
import DetailDialog from '../../Components/DetailDialog';
import './HomeView.css';

const HomeView = ({ jugadores, torneos }) => {
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
    <div className="home-sections">
      <h1>Mejores Jugadores del Mes</h1>
      <div className="section">
        <div className="cards-container">
          {jugadores.slice(0, 4).map((jugador, index) => (
            <Card
              key={index}
              title={jugador.nombreCompleto}
              description={jugador.posicionPrincipal}
              image={jugador.fotoUrl}
              type="jugador"
              onClick={() => handleCardClick('jugador', jugador)}
            />
          ))}
        </div>
      </div>
      <h1>Torneos</h1>
      <div className="section">
        <div className="cards-container">
          {torneos.slice(0, 4).map((torneo, index) => (
            <Card
              key={index}
              title={torneo.nombreTorneo}
              description={torneo.descripcion}
              image={torneo.fotoUrl}
              type="torneo"
              onClick={() => handleCardClick('torneo', torneo)}
            />
          ))}
        </div>
      </div>
      <DetailDialog open={dialogIsOpen} onClose={closeDialog} type={detailType} data={selectedDetail} />
    </div>
  );
};

export default HomeView;
