import React from 'react';
import './ReserveCard.css';

const ReserveCard = ({ id_reserva, fecha, hora, cantidad_horas, precio_total, id_cancha}) => {
    return (
        <div className="ReserveCard">
        <div className="ReserveCard-content">
            <h3>ID:     {id_reserva}</h3>
            <p>Fecha:   {fecha}</p>
            <p>Hora:    {hora}</p>
            <p>Tiempo:  {cantidad_horas} horas</p>
            <p>Valor:   ${precio_total}</p>
            <p>ID cancha:   {id_cancha}</p>
        </div>
        </div>
    );
};

export default ReserveCard;

