import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import './Login.css';
import login from '../../Services/auth';
import InputBox from '../../Components/InputBox/InputBox';
import {FaUser, FaLock} from 'react-icons/fa';


const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(formData.username, formData.password);
      handleLogin();
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (loggedIn) {
    return <Navigate to='/Home' />;
  }

  return (
    <div className="login">
      
      <div className="login-left-section">
      </div>
      
      <div className="login-right-section">
        <div className='login-ContentForm'>  
          <h2>LIGANET</h2>
          <form onSubmit={handleSubmit} className='Formulario'>
            <InputBox
              name='Usuario'
              type='text'
              placeholder='Usuario'
              value={formData.usuario}
              onChange={handleChange}
              icon={<FaUser/>}
            />
            <InputBox
              name='Contraseña'
              type='contraseño'
              placeholder='Contraseña'
              value={formData.contraseña}
              onChange={handleChange}
              icon={<FaLock/>}
            />
            <button type="submit" className='button'>Ingresar</button>
          </form>
          <Link to='/SignUp' className='link'>Crear una cuenta</Link>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
