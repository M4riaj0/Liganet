import React from 'react';
import InputBox from '../../Components/InputBox/InputBox';

const Step3 = ({ onChange, data }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2>Perfil</h2>
      <InputBox name='Ejemplo' type='Ejemplo' placeholder='Ejemplo' />
    </div>
  );
};

export default Step3;