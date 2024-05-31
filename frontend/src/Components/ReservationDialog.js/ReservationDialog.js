import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ReservationDialog.css";

const ReservationDialog = ({ isOpen, onRequestClose, idCancha, precioCancha }) => {
  const [cantidadHoras, setCantidadHoras] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(precioCancha);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Actualiza el precio total cuando cambia la cantidad de horas o el precio por hora
    const calcularPrecioTotal = () => {
      const total = precioCancha * cantidadHoras;
      setPrecioTotal(total);
    };
    calcularPrecioTotal();
  }, [cantidadHoras, precioCancha]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reserva realizada");
    const formData = new FormData(event.target);
    const reservaData = {};
    formData.forEach((value, key) => {
      reservaData[key] = value;
    });
    console.log("Datos de reserva:", reservaData);
    // Aquí puedes enviar la reserva al backend
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Reserva la Cancha</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={idCancha} name="id_cancha" />
        <label>
          Fecha:
          <input type="date" name="fecha" required />
        </label>
        <label>
          Hora:
          <input type="time" name="hora" required />
        </label>
        <label>
          Cantidad de Horas:
          <input
            type="number"
            name="cantidad_horas"
            min="1"
            value={cantidadHoras}
            onChange={(e) => setCantidadHoras(e.target.value)}
            required
          />
        </label>
        {/* Agrega el campo para id_persona desde localStorage */}
        <input
          type="hidden"
          value={currentUser.idUser}
          name="id_persona"
        /> 
        <label>
          Precio Total:
          <input type="text" value={precioTotal} readOnly />
        </label>
        <button type="submit">Reservar</button>
      </form>
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default ReservationDialog;
