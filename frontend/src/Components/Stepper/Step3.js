import React from 'react';

const Step3 = ({ formData, handleChange, handleBack, handleSubmit }) => {
  
  return (
    <div>
      <h2>Perfil</h2>
      <form>
        <div className='VariosCampos'>
          <label>
            Nombre de usuario:
            <input
              type='text'
              name='nombre_usuario'
              value={formData.nombre_usuario}
              onChange={handleChange}
            />
          </label>
          <label>
            Correo:
            <input
              type='email'
              name='correo'
              value={formData.correo}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='VariosCampos'>
          <label>
            Contraseña:
            <input
              type='password'
              name='contraseña'
              value={formData.contraseña}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirmar contraseña:
            <input
              type='password'
              name='confirmar_contraseña'
              value={formData.confirmar_contraseña}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='ButtonContainer'>
          <button type='button' onClick={handleBack}>Atrás</button>
          <button type='button' onClick={handleSubmit}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Step3;