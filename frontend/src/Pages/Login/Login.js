import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import './Login.css';
import login from '../../Services/auth';
import LogoImage from '../../Images/LiganetCanchas.jpeg';
import InputBox from '../../Components/InputBox/InputBox';


const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Datos de inicio de sesión:', formData);
      await login(formData.username, formData.password);
      handleLogin();
      setLoggedIn(true);
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

  return (
    <div className="login">
      <div className="left-section">
        <img src={LogoImage} alt="Login Image" className="logo-image" />
      </div>
      
      <div className="right-section">
        <h2>LIGANET</h2>
        <form onSubmit={handleSubmit} className='Formulario'>

          <div className="input-field">
            <InputBox name='username'
              value={formData.username}
              onChange={handleChange} />
              
            <InputBox name='password'
              type='password'
              value={formData.password}
              onChange={handleChange} />
          </div>
        
         <button type="submit" className='button'>Login</button>
          <Link to='/SignUp'>
            <button className='button'>Sign Up</button>
          </Link>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
