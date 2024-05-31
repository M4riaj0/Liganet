import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import './Login.css';
import login from '../../Services/auth';
import InputBox from '../../Components/InputBox/InputBox';
import {FaUser, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ usuario: '', contraseña: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Datos de inicio de sesión:', formData);
      await login(formData.usuario, formData.contraseña);
      handleLogin();
      setLoggedIn(true);
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    console.log('Cambiando:', event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (loggedIn) {
    return <Navigate to='/Home' />;
  }

  const handleUpload = (url) => {
    setUploadedUrl(url);
    console.log('Uploaded file URL:', url);
  };

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
              type='password'
              placeholder='Contraseña'
              value={formData.contraseña}
              onChange={handleChange}
              
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