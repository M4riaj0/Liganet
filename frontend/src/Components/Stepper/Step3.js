import React from 'react';

const Step3 = ({ formData, handleChange, handleBack, handleSubmit }) => {
  
  return (
    <div>
      <h2>Perfil</h2>
      <form>
      <label>
        Ejemplo1:
          <input
             type='text'
             name='Ejemplo4'
             value={formData.Ejemplo4}
             onChange={handleChange}
          />
        </label>
        <div className='ButtonContainer'>
          <button type='button' onClick={handleBack}>Atrás</button>
          <button type='button' onClick={handleSubmit}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Step3;