import React from 'react';
import './CanchaDetail.css';

const CanchaDetail = ({ cancha }) => {
  return (
    <div className="cancha-detail-container">
      <div className="cancha-detail-image-container">
        <img src={cancha.fotoUrl} alt={cancha.nombre} className="cancha-detail-image" />
        <div className="cancha-detail-name">{cancha.nombre}</div>
      </div>
      <div className="cancha-detail-info">
        <p><strong>Precio por Hora:</strong> {cancha.precioHora}</p>
        <p><strong>Cantidad de Jugadores:</strong> {cancha.cantidadJugadores}</p>
        <p><strong>Habilitada:</strong> {cancha.habilitada ? "Sí" : "No"}</p>
        {/* Mostrar más detalles si es necesario */}
      </div>
    </div>
  );
};

export default CanchaDetail;
