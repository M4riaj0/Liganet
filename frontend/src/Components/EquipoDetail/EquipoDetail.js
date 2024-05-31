import React from 'react';
import './EquipoDetail.css';

const EquipoDetail = ({ equipo }) => {
  return (
    <div className="equipo-detail-container">
      <div className="equipo-detail-image-container">
        <img src={equipo.fotoUrl} alt={equipo.nombreEquipo} className="equipo-detail-image" />
        <div className="equipo-detail-name">{equipo.nombreEquipo}</div>
      </div>
      <div className="equipo-detail-info">
        <p><strong>Descripción:</strong> {equipo.descripcion}</p>
        <p><strong>Ciudad:</strong> {equipo.ciudad}</p>
        <p><strong>Cantidad de Miembros:</strong> {equipo.cantidadMiembros}</p>
        {/* Mostrar más detalles si es necesario */}
      </div>
    </div>
  );
};

export default EquipoDetail;
