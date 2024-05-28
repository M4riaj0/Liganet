import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
