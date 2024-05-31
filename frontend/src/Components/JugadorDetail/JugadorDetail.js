import React from 'react';
import './JugadorDetail.css';

const JugadorDetail = ({ jugador }) => {
  return (
    <div className="jugador-detail-container">
      <div className="jugador-detail-image-container">
        <img src={jugador.fotoUrl} alt={jugador.nombreCompleto} className="jugador-detail-image" />
      </div>
      <div className="jugador-detail-info">
        <h2>{jugador.nombreCompleto}</h2>
        <p><strong>Género:</strong> {jugador.genero}</p>
        <p><strong>Nacionalidad:</strong> {jugador.nacionalidad}</p>
        <p><strong>Altura:</strong> {jugador.altura} m</p>
        <p><strong>Años de Experiencia:</strong> {jugador.añosExperiencia}</p>
        <p><strong>Nivel de Competencia:</strong> {jugador.nivelCompetencia}</p>
        <p><strong>Número de Equipación:</strong> {jugador.numeroEquipacion}</p>
        <p><strong>Perfil Dominante:</strong> {jugador.perfilDominante}</p>
        <p><strong>Peso:</strong> {jugador.peso} kg</p>
        <p><strong>Pierna Dominante:</strong> {jugador.piernaDominante}</p>
        <p><strong>Posición Principal:</strong> {jugador.posicionPrincipal}</p>
        <p><strong>Posición Secundaria:</strong> {jugador.posicionSecundaria}</p>
      </div>
    </div>
  );
};

export default JugadorDetail;
