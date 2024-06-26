import React from 'react';
import './Card.css';

const Card = ({ title, description, image, type, onClick }) => {

  return (
    <div className="card" onClick={() => onClick(type)}>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
