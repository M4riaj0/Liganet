import React from 'react';
import './TorneoDetail.css';

const TorneoDetail = ({ torneo }) => {
  return (
    <div className="torneo-detail-container">
      <div className="torneo-detail-image-container">
        <img src={torneo.fotoUrl} alt={torneo.nombreTorneo} className="torneo-detail-image" />
      </div>
      <div className="torneo-detail-info">
        <h2>{torneo.nombreTorneo}</h2>
        <textarea readOnly value={torneo.descripcion} className="torneo-description"></textarea>
        <p><strong>Fecha de Inicio:</strong> {torneo.fechaInicio}</p>
        <p><strong>Horario:</strong> {torneo.horario}</p>
        <p><strong>Precio de Inscripción:</strong> {torneo.precioInscripcion}</p>
        <p><strong>Precio de Premiación:</strong> {torneo.precioPremiacion}</p>
        <p><strong>Categoría:</strong> {torneo.categoria}</p>
        <p><strong>Formato:</strong> {torneo.formato}</p>
        <p>
          <strong>Reglamento:</strong> 
          <a href={torneo.reglamento} target="_blank" rel="noopener noreferrer" className="torneo-reglamento-link">
            Ver Reglamento
          </a>
        </p>
      </div>
    </div>
  );
};

export default TorneoDetail;
